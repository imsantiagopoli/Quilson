import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';

export function AIGeneratedImage({ 
  prompt, 
  aspectRatio = "16:9", 
  className = "",
  alt = ""
}: { 
  prompt: string, 
  aspectRatio?: "1:1" | "3:4" | "4:3" | "9:16" | "16:9", 
  className?: string,
  alt?: string
}) {
  const [imgSrc, setImgSrc] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    async function fetchImage() {
      try {
        // Simple hash for cache key to avoid huge strings
        const cacheKey = `ai-img-${btoa(prompt).slice(0, 20)}-${aspectRatio}`;
        const cached = localStorage.getItem(cacheKey);
        if (cached) {
          if (isMounted) {
            setImgSrc(cached);
            setLoading(false);
          }
          return;
        }

        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
          console.error("GEMINI_API_KEY is missing");
          if (isMounted) setLoading(false);
          return;
        }

        const ai = new GoogleGenAI({ apiKey });
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash-image',
          contents: {
            parts: [{ text: prompt }]
          },
          config: {
            // @ts-ignore
            imageConfig: {
              aspectRatio: aspectRatio,
            }
          }
        });

        let base64Data = null;
        const parts = response.candidates?.[0]?.content?.parts || [];
        for (const part of parts) {
          if (part.inlineData) {
            base64Data = part.inlineData.data;
            break;
          }
        }

        if (base64Data && isMounted) {
          const dataUrl = `data:image/jpeg;base64,${base64Data}`;
          try {
            localStorage.setItem(cacheKey, dataUrl);
          } catch (e) {
            // Ignore quota exceeded
          }
          setImgSrc(dataUrl);
        }
      } catch (error) {
        console.error("Failed to generate image:", error);
      } finally {
        if (isMounted) setLoading(false);
      }
    }
    fetchImage();
    return () => { isMounted = false; };
  }, [prompt, aspectRatio]);

  if (loading) {
    return <div className={`bg-slate-100 animate-pulse ${className}`} />;
  }

  if (!imgSrc) {
    return <div className={`bg-slate-100 flex items-center justify-center text-slate-400 text-sm ${className}`}>Image failed to load</div>;
  }

  return <img src={imgSrc} alt={alt || prompt} className={`object-cover ${className}`} />;
}
