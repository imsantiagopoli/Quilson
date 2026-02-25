import React from "react";
import { motion } from "motion/react";
import { AIGeneratedImage } from "./components/AIGeneratedImage";
import { TestimonialsSection } from "./components/Testimonials";
import { AnimatedNumber } from "./components/AnimatedNumber";

const FadeIn = ({ children, delay = 0, className = "", ...props }: React.HTMLAttributes<HTMLDivElement> & { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

const Card = ({ children, className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`p-12 rounded-[2.5rem] border border-slate-200 shadow-xl shadow-slate-200/40 bg-white ${className}`} {...props}>
    {children}
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100">
        <div className="container mx-auto px-6 h-24 flex items-center justify-between">
          <span className="font-bold text-3xl tracking-tighter">Quilson.</span>
          <div className="hidden md:flex items-center gap-10 text-sm font-bold tracking-wide text-slate-500 uppercase">
            <a href="#how-it-works" className="hover:text-slate-900 transition-colors">How it Works</a>
            <a href="#benefits" className="hover:text-slate-900 transition-colors">Benefits</a>
            <a href="#pricing" className="hover:text-slate-900 transition-colors">Pricing</a>
          </div>
          <button className="bg-slate-900 text-white px-8 py-4 rounded-full text-sm font-bold tracking-wide uppercase hover:bg-slate-800 transition-colors">
            Start Collecting
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-48 pb-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <FadeIn className="max-w-5xl">
            <div className="inline-block mb-8 px-5 py-2 rounded-full border border-slate-200 bg-slate-50 text-sm font-bold tracking-widest uppercase text-slate-500">
              <AnimatedNumber value={97} suffix="%" /> Contact Rate • <AnimatedNumber prefix="$" value={0} /> Commission • 24/7 Operations
            </div>
            <h1 className="text-6xl md:text-[7rem] font-bold tracking-tighter leading-[0.95] text-slate-900 mb-10">
              Your invoices don't collect themselves.<br />
              <span className="text-slate-400">Now they do.</span>
            </h1>
            <p className="text-xl md:text-3xl text-slate-500 leading-relaxed max-w-3xl mb-12 font-medium tracking-tight">
              An AI-native collection agency that makes real phone calls, negotiates payments, handles objections, and pursues broken promises — 24/7, at a fraction of the cost of human teams.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <button className="w-full sm:w-auto bg-slate-900 text-white px-12 py-6 rounded-full text-lg font-bold tracking-wide hover:bg-slate-800 transition-colors">
                Start Collecting
              </button>
              <button className="w-full sm:w-auto bg-white text-slate-900 border border-slate-200 px-12 py-6 rounded-full text-lg font-bold tracking-wide hover:bg-slate-50 transition-colors">
                See How It Works
              </button>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2} className="mt-24">
            <AIGeneratedImage 
              prompt="Minimalist abstract 3D render of a sleek silver sphere rolling on a smooth white surface, representing cashflow and momentum, studio lighting, highly detailed, 8k, white background, premium corporate aesthetic"
              aspectRatio="16:9"
              className="w-full h-[400px] md:h-[600px] rounded-[3rem] shadow-2xl shadow-slate-200/50"
            />
          </FadeIn>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-24 px-6 border-y border-slate-100 bg-slate-50/50">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { value: 47, prefix: "$", suffix: "M+", label: "Collected in overdue invoices" },
              { value: 12400, suffix: "+", label: "Calls made per month" },
              { value: 3.2, decimals: 1, suffix: "x", label: "Faster than human agents" },
              { value: 89, suffix: "%", label: "Recovery rate on 60+ day invoices" }
            ].map((stat, i) => (
              <FadeIn key={i} delay={i * 0.1} className="flex flex-col">
                <div className="text-5xl md:text-7xl font-bold tracking-tighter text-slate-900 mb-4">
                  <AnimatedNumber value={stat.value} prefix={stat.prefix} suffix={stat.suffix} decimals={stat.decimals} />
                </div>
                <div className="text-lg text-slate-500 font-medium tracking-tight leading-snug max-w-[200px]">{stat.label}</div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-40 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-20">
            <div className="lg:col-span-5 lg:sticky lg:top-40 h-fit">
              <FadeIn>
                <div className="text-sm font-bold tracking-widest uppercase text-slate-400 mb-6">Process</div>
                <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-8 leading-[1.1]">What happens when an invoice goes unpaid</h2>
                <p className="text-2xl text-slate-500 leading-relaxed tracking-tight">
                  The moment a payment is overdue, Quilson activates. No human intervention. No delays. No mercy on delinquent accounts.
                </p>
              </FadeIn>
            </div>
            <div className="lg:col-span-7 flex flex-col gap-8">
              {[
                { num: "01", title: "Invoice overdue detected", desc: "Your accounting system flags an unpaid invoice. Our platform picks it up instantly — synced in real time with your books." },
                { num: "02", title: "AI initiates contact", desc: "Within minutes, not days, the AI agent makes a real phone call to the debtor. Natural voice. Professional tone. Legally compliant." },
                { num: "03", title: "Negotiation & objection handling", desc: "The agent handles excuses, disputes, and stalling. It negotiates payment plans, partial settlements, or full payment — following your rules." },
                { num: "04", title: "Broken promises pursued", desc: "Said they'd pay Friday? The AI follows up Friday. And Saturday. And Monday. No promise goes unchecked, no commitment forgotten." },
                { num: "05", title: "Escalation when needed", desc: "When the AI exhausts its playbook, it escalates to legal or your team — with a full transcript, timeline, and recommended next action." }
              ].map((step, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <Card className="flex flex-col md:flex-row gap-8 md:items-start">
                    <div className="text-6xl font-bold tracking-tighter text-slate-200 leading-none">{step.num}</div>
                    <div>
                      <h3 className="text-2xl font-bold tracking-tight mb-4">{step.title}</h3>
                      <p className="text-lg text-slate-500 leading-relaxed">{step.desc}</p>
                    </div>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-40 px-6 bg-slate-50 rounded-[3rem] mx-4 my-10">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <FadeIn>
              <AIGeneratedImage 
                prompt="Abstract 3D composition of transparent glass blocks stacking perfectly, representing predictable cashflow and stability, soft studio lighting, white background, minimalist, premium"
                aspectRatio="4:3"
                className="w-full h-[600px] rounded-[3rem] shadow-xl shadow-slate-200/50"
              />
            </FadeIn>
            <div className="flex flex-col gap-12">
              <FadeIn>
                <div className="text-sm font-bold tracking-widest uppercase text-slate-400 mb-6">Benefits</div>
                <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-8 leading-[1.1]">The real benefit: predictable cashflow</h2>
                <p className="text-2xl text-slate-500 leading-relaxed tracking-tight mb-12">
                  Overdue invoices aren't just an accounting problem — they're a cashflow problem. Every day a payment sits unpaid is a day you can't invest, hire, or grow. Quilson turns receivables into cash, systematically.
                </p>
                <Card className="bg-white border-slate-200">
                  <div className="font-bold text-2xl tracking-tight mb-2">Average customer sees <AnimatedNumber prefix="$" value={127} suffix="K" /></div>
                  <div className="text-lg text-slate-500">in accelerated collections within the first 90 days.</div>
                </Card>
              </FadeIn>
              
              <div className="grid sm:grid-cols-2 gap-8">
                <FadeIn delay={0.1}>
                  <div className="text-5xl font-bold tracking-tighter text-slate-900 mb-4"><AnimatedNumber value={47} suffix="%" /></div>
                  <h3 className="text-xl font-bold tracking-tight mb-2">Reduction in DSO</h3>
                  <p className="text-slate-500">Days Sales Outstanding drops dramatically when every overdue invoice gets immediate, persistent follow-up.</p>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <div className="text-5xl font-bold tracking-tighter text-slate-900 mb-4"><AnimatedNumber value={3.2} decimals={1} suffix="x" /></div>
                  <h3 className="text-xl font-bold tracking-tight mb-2">Faster collections</h3>
                  <p className="text-slate-500">AI agents contact debtors within minutes, not days. Speed compounds into cash.</p>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <div className="text-5xl font-bold tracking-tighter text-slate-900 mb-4"><AnimatedNumber prefix="$" value={0} /></div>
                  <h3 className="text-xl font-bold tracking-tight mb-2">Commission fees</h3>
                  <p className="text-slate-500">Traditional agencies take 25-50% of what they collect. You keep everything.</p>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rules / Configuration */}
      <section className="py-40 px-6">
        <div className="container mx-auto max-w-7xl">
          <FadeIn className="text-center max-w-4xl mx-auto mb-24">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[1.1]">You set the rules.<br/><span className="text-slate-400">The AI enforces them.</span></h2>
            <p className="text-2xl text-slate-500 leading-relaxed tracking-tight">
              Define your collection strategy once. Payment thresholds, escalation triggers, tone of voice, settlement limits — everything is configurable. The AI follows your playbook with zero deviation.
            </p>
          </FadeIn>

          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 flex flex-col gap-12">
              <FadeIn delay={0.1}>
                <h3 className="text-2xl font-bold tracking-tight mb-4">Full compliance</h3>
                <p className="text-lg text-slate-500 leading-relaxed">Every call follows FDCPA, TCPA, and state-level regulations. No risk of violations.</p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <h3 className="text-2xl font-bold tracking-tight mb-4">Granular control</h3>
                <p className="text-lg text-slate-500 leading-relaxed">Set rules per client, per invoice amount, per aging bucket. Total flexibility.</p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <h3 className="text-2xl font-bold tracking-tight mb-4">Adaptive execution</h3>
                <p className="text-lg text-slate-500 leading-relaxed">The AI adjusts tactics in real time based on debtor responses while staying within your boundaries.</p>
              </FadeIn>
            </div>

            <div className="lg:col-span-7">
              <FadeIn delay={0.4}>
                <Card className="bg-slate-50 border-slate-200 !p-12">
                  <div className="flex items-center justify-between mb-10 pb-8 border-b border-slate-200">
                    <div className="font-bold text-2xl tracking-tight">Collection Rules</div>
                    <div className="flex items-center gap-3 text-sm font-bold tracking-wide uppercase text-slate-900 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm">
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-900"></span> Active
                    </div>
                  </div>
                  <div className="space-y-8">
                    {[
                      { label: "First contact", value: "Same day" },
                      { label: "Follow-up cadence", value: "Every 48 hours" },
                      { label: "Max settlement discount", value: "15%" },
                      { label: "Escalate after", value: "5 failed attempts" },
                      { label: "Tone", value: "Firm but professional" }
                    ].map((rule, i) => (
                      <div key={i} className="flex items-center justify-between text-lg">
                        <div className="text-slate-500 font-medium">{rule.label}</div>
                        <div className="font-bold tracking-tight">{rule.value}</div>
                      </div>
                    ))}
                  </div>
                </Card>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Auto Mode */}
      <section className="py-40 px-6 bg-slate-900 text-white rounded-[3rem] mx-4 my-10">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
            <FadeIn>
              <div className="text-sm font-bold tracking-widest uppercase text-slate-500 mb-6">Auto Mode</div>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[1.1]">AI that learns from every interaction</h2>
              <p className="text-2xl text-slate-400 leading-relaxed tracking-tight">
                Our AI analyzes customer behavior patterns and optimizes collection strategies automatically. The more it works, the smarter it gets.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <AIGeneratedImage 
                prompt="Abstract 3D visualization of a neural network or data nodes connecting, dark background, sleek, premium, high-tech, glowing subtle white lights"
                aspectRatio="16:9"
                className="w-full h-[400px] rounded-[3rem] shadow-2xl shadow-black/50"
              />
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { num: "01", title: "Behavioral Analysis", desc: "Tracks payment patterns, response times, and communication preferences for each customer." },
              { num: "02", title: "Adaptive Strategies", desc: "Automatically adjusts tone, timing, and channel based on what works for each debtor profile." },
              { num: "03", title: "Continuous Improvement", desc: "Success patterns are learned and applied across your entire portfolio in real-time." }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="p-12 rounded-[2.5rem] border border-slate-800 bg-slate-800/30 h-full">
                  <div className="text-5xl font-bold tracking-tighter text-slate-700 mb-8">{item.num}</div>
                  <h3 className="text-2xl font-bold tracking-tight mb-4">{item.title}</h3>
                  <p className="text-lg text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4} className="flex justify-center">
            <div className="inline-flex items-center px-8 py-4 rounded-full border border-slate-700 bg-slate-800/50 text-lg font-medium tracking-tight">
              Recovery rates improve <span className="mx-2 text-emerald-400 font-bold"><AnimatedNumber value={23} suffix="%" /></span> on average within 90 days
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-40 px-6">
        <div className="container mx-auto max-w-7xl text-center">
          <FadeIn className="max-w-4xl mx-auto mb-24">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[1.1]">Lives inside your accounting stack</h2>
            <p className="text-2xl text-slate-500 leading-relaxed tracking-tight">
              Native integration with your existing tools. No new software to learn. Automatic sync that reads invoices, writes payments, and keeps everything in perfect harmony with zero manual effort.
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 text-left">
            {[
              { name: "QuickBooks", desc: "Real-time sync of invoices, payments, and credit notes" },
              { name: "Xero", desc: "Automatic payment matching and invoice status updates" },
              { name: "Zoho Books", desc: "Two-way sync of contacts, invoices, and payment records" },
              { name: "FreshBooks", desc: "Seamless invoice tracking and payment reconciliation" },
              { name: "NetSuite", desc: "Enterprise-grade sync for AR, payments, and journal entries" },
              { name: "Sage", desc: "Native ledger integration with automated write-backs" }
            ].map((integration, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <Card className="h-full">
                  <div className="font-bold text-2xl tracking-tight mb-4">{integration.name}</div>
                  <div className="text-slate-500 leading-relaxed text-lg">{integration.desc}</div>
                </Card>
              </FadeIn>
            ))}
          </div>
          
          <FadeIn delay={0.6}>
            <div className="inline-flex items-center text-slate-400 font-bold tracking-widest uppercase text-sm">
              Reads invoices. Writes payments. Zero configuration.
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-40 px-6 bg-slate-50">
        <div className="container mx-auto max-w-7xl">
          <FadeIn className="text-center max-w-4xl mx-auto mb-24">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[1.1]">The economics are not close</h2>
            <p className="text-2xl text-slate-500 leading-relaxed tracking-tight">
              Traditional agencies take 25-50% of what they collect. Internal teams cost $4,000+ per rep, per month. Quilson delivers better results at a flat fee with zero commission.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="overflow-x-auto pb-8">
              <table className="w-full text-left border-collapse min-w-[900px]">
                <thead>
                  <tr>
                    <th className="p-8 border-b border-slate-200 text-slate-400 font-bold tracking-widest uppercase text-sm w-1/4">Feature</th>
                    <th className="p-8 border-b border-slate-200 font-bold text-2xl w-1/4 text-slate-400">Traditional Agency</th>
                    <th className="p-8 border-b border-slate-200 font-bold text-2xl w-1/4 text-slate-400">Internal AR Team</th>
                    <th className="p-8 border-b-2 border-slate-900 font-bold text-3xl text-slate-900 w-1/4 bg-white rounded-t-[2rem]">Quilson</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {[
                    { feature: "Cost", agency: "25-50% commission", team: "$4,000+/mo per rep", ai: "Flat monthly fee" },
                    { feature: "Availability", agency: "Business hours", team: "Business hours", ai: "24/7/365" },
                    { feature: "First contact speed", agency: "Days to weeks", team: "1-3 days", ai: "Minutes" },
                    { feature: "Follow-up consistency", agency: "Unreliable", team: "Human-dependent", ai: "Automated, relentless" },
                    { feature: "Scalability", agency: "Add more reps", team: "Hire more people", ai: "Infinite" },
                    { feature: "Compliance", agency: "Variable", team: "Training required", ai: "Built-in, always current" },
                    { feature: "Reporting", agency: "Monthly reports", team: "Manual tracking", ai: "Real-time dashboard" }
                  ].map((row, i) => (
                    <tr key={i} className="transition-colors">
                      <td className="p-8 text-slate-500 font-medium text-lg">{row.feature}</td>
                      <td className="p-8 text-slate-700 text-lg">{row.agency}</td>
                      <td className="p-8 text-slate-700 text-lg">{row.team}</td>
                      <td className="p-8 font-bold text-slate-900 bg-white text-lg">{row.ai}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-40 px-6">
        <div className="container mx-auto max-w-7xl">
          <FadeIn className="text-center max-w-4xl mx-auto mb-24">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[1.1]">Simple, transparent pricing</h2>
            <p className="text-2xl text-slate-500 leading-relaxed tracking-tight">
              No commissions. No hidden fees. Just results.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Basic", customers: "Up to 50 customers", price: "$499", features: ["Unlimited AI calls", "Email follow-ups", "Basic integrations", "Standard compliance"], cta: "Get Started" },
              { name: "Growth", customers: "Up to 150 customers", price: "$999", features: ["Everything in Basic", "Priority calling", "Advanced integrations", "Custom scripts"], cta: "Get Started" },
              { name: "Scale", customers: "Up to 500 customers", price: "$2,500", features: ["Everything in Growth", "Multi-entity support", "API access", "Dedicated support"], cta: "Get Started", popular: true },
              { name: "Enterprise", customers: "Up to 2,000 customers", price: "$5,000", features: ["Everything in Scale", "Custom workflows", "SLA guarantee", "Dedicated account manager"], cta: "Contact Sales" }
            ].map((plan, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <Card className={`flex flex-col h-full relative ${plan.popular ? 'border-slate-900 shadow-2xl shadow-slate-900/10 scale-105 z-10' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs font-bold px-4 py-1.5 rounded-full tracking-widest uppercase">
                      Popular
                    </div>
                  )}
                  <div className="mb-10">
                    <h3 className="text-2xl font-bold tracking-tight mb-2">{plan.name}</h3>
                    <div className="text-slate-500 font-medium mb-8">{plan.customers}</div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-bold tracking-tighter">{plan.price}</span>
                      <span className="text-slate-500 font-medium">/mo</span>
                    </div>
                  </div>
                  <div className="space-y-5 mb-12 flex-1">
                    {plan.features.map((feature, j) => (
                      <div key={j} className="flex items-start gap-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-900 mt-2.5 shrink-0" />
                        <span className="text-slate-600 text-lg leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <button className={`w-full py-4 rounded-full text-lg font-bold tracking-wide transition-colors ${plan.popular ? 'bg-slate-900 text-white hover:bg-slate-800' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'}`}>
                    {plan.cta}
                  </button>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* CTA */}
      <section className="py-40 px-6 bg-slate-900 text-white text-center rounded-[3rem] mx-4 my-10">
        <div className="container mx-auto max-w-5xl">
          <FadeIn>
            <h2 className="text-6xl md:text-[6rem] font-bold tracking-tighter mb-10 leading-[0.95]">
              Stop chasing payments.<br />
              <span className="text-slate-500">Start collecting them.</span>
            </h2>
            <p className="text-2xl text-slate-400 leading-relaxed mb-16 max-w-3xl mx-auto tracking-tight">
              Every day you wait is revenue you lose. Deploy your AI collection agency today.
            </p>
            <div className="flex flex-col items-center gap-6">
              <button className="bg-white text-slate-900 px-12 py-6 rounded-full text-xl font-bold tracking-wide hover:bg-slate-100 transition-colors">
                Get Started
              </button>
              <p className="text-slate-500 font-medium tracking-wide">No credit card required. Live in under 24 hours.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-100 text-center text-slate-400 font-medium tracking-wide">
        <div className="container mx-auto">
          &copy; {new Date().getFullYear()} Quilson. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
