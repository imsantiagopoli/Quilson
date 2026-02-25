import React from "react";
import { motion } from "motion/react";
import { 
  ArrowRight, 
  CheckCircle2, 
  PhoneCall, 
  ShieldCheck, 
  Zap, 
  BarChart3, 
  Settings, 
  RefreshCcw, 
  DollarSign, 
  Clock, 
  Users, 
  Check,
  BrainCircuit,
  LineChart,
  Database,
  Building2,
  Briefcase
} from "lucide-react";

const Card = ({ children, className = "", ...props }: React.HTMLAttributes<HTMLDivElement> & { children: React.ReactNode, className?: string }) => (
  <div className={`p-10 rounded-3xl border border-slate-200 shadow-lg shadow-slate-200/50 bg-white ${className}`} {...props}>
    {children}
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight">collectAI</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#how-it-works" className="hover:text-slate-900 transition-colors">How it Works</a>
            <a href="#benefits" className="hover:text-slate-900 transition-colors">Benefits</a>
            <a href="#pricing" className="hover:text-slate-900 transition-colors">Pricing</a>
          </div>
          <div className="flex items-center gap-4">
            <button className="hidden md:block text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              Sign In
            </button>
            <button className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors">
              Start Collecting
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-slate-50 rounded-full blur-3xl -z-10 opacity-50" />
        <div className="container mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white shadow-sm mb-8">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
              <span className="text-sm font-medium tracking-tight">97% Contact Rate • $0 Commission • 24/7 Operations</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] mb-8">
              Your invoices don't collect themselves.<br />
              <span className="text-slate-400">Now they do.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10">
              An AI-native collection agency that makes real phone calls, negotiates payments, handles objections, and pursues broken promises — 24/7, at a fraction of the cost of human teams.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto bg-slate-900 text-white px-8 py-4 rounded-full text-base font-medium hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
                Start Collecting <ArrowRight className="w-4 h-4" />
              </button>
              <button className="w-full sm:w-auto bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full text-base font-medium hover:bg-slate-50 transition-colors">
                See How It Works
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-10 border-y border-slate-100 bg-slate-50/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-200/50 text-center">
            {[
              { value: "$47M+", label: "Collected in overdue invoices" },
              { value: "12,400+", label: "Calls made per month" },
              { value: "3.2x", label: "Faster than human agents" },
              { value: "89%", label: "Recovery rate on 60+ day invoices" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center justify-center px-4">
                <div className="text-3xl md:text-4xl font-bold tracking-tighter mb-2">{stat.value}</div>
                <div className="text-sm text-slate-500 font-medium tracking-tight leading-tight max-w-[150px]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-3xl mb-20">
            <div className="border border-slate-200 py-1 px-4 rounded-lg inline-block text-sm font-medium mb-6">Process</div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">What happens when an invoice goes unpaid</h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              The moment a payment is overdue, our AI collection agent activates. No human intervention. No delays. No mercy on delinquent accounts.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { num: "01", title: "Invoice overdue detected", desc: "Your accounting system flags an unpaid invoice. Our platform picks it up instantly — synced in real time with your books." },
              { num: "02", title: "AI initiates contact", desc: "Within minutes, not days, the AI agent makes a real phone call to the debtor. Natural voice. Professional tone. Legally compliant." },
              { num: "03", title: "Negotiation & objection handling", desc: "The agent handles excuses, disputes, and stalling. It negotiates payment plans, partial settlements, or full payment — following your rules." },
              { num: "04", title: "Broken promises pursued", desc: "Said they'd pay Friday? The AI follows up Friday. And Saturday. And Monday. No promise goes unchecked, no commitment forgotten." },
              { num: "05", title: "Escalation when needed", desc: "When the AI exhausts its playbook, it escalates to legal or your team — with a full transcript, timeline, and recommended next action." }
            ].map((step, i) => (
              <Card key={i} className={i === 0 || i === 1 ? "md:col-span-1" : i === 2 ? "md:col-span-1" : i === 3 ? "md:col-span-2" : "md:col-span-1"}>
                <div className="text-5xl font-bold tracking-tighter text-slate-200 mb-6">{step.num}</div>
                <h3 className="text-xl font-bold tracking-tight mb-3">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-32 px-6 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="border border-slate-200 py-1 px-4 rounded-lg inline-block text-sm font-medium mb-6 bg-white">Benefits</div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">The real benefit: predictable cashflow</h2>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                Overdue invoices aren't just an accounting problem — they're a cashflow problem. Every day a payment sits unpaid is a day you can't invest, hire, or grow. collectAI turns receivables into cash, systematically.
              </p>
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                    <DollarSign className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <div className="font-bold text-lg tracking-tight mb-1">Average customer sees $127K</div>
                    <div className="text-slate-600">in accelerated collections within the first 90 days.</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-6">
              <Card>
                <div className="flex items-start gap-6">
                  <div className="text-4xl font-bold tracking-tighter text-slate-900 w-24">47%</div>
                  <div>
                    <h3 className="text-lg font-bold tracking-tight mb-2">Reduction in DSO</h3>
                    <p className="text-slate-600">Days Sales Outstanding drops dramatically when every overdue invoice gets immediate, persistent follow-up.</p>
                  </div>
                </div>
              </Card>
              <Card>
                <div className="flex items-start gap-6">
                  <div className="text-4xl font-bold tracking-tighter text-slate-900 w-24">3.2x</div>
                  <div>
                    <h3 className="text-lg font-bold tracking-tight mb-2">Faster collections</h3>
                    <p className="text-slate-600">AI agents contact debtors within minutes, not days. Speed compounds into cash.</p>
                  </div>
                </div>
              </Card>
              <Card>
                <div className="flex items-start gap-6">
                  <div className="text-4xl font-bold tracking-tighter text-slate-900 w-24">$0</div>
                  <div>
                    <h3 className="text-lg font-bold tracking-tight mb-2">Commission fees</h3>
                    <p className="text-slate-600">Traditional agencies take 25-50% of what they collect. You keep everything.</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Rules / Configuration */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">You set the rules. The AI enforces them.</h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Define your collection strategy once. Payment thresholds, escalation triggers, tone of voice, settlement limits — everything is configurable. The AI follows your playbook with zero deviation.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 flex flex-col gap-8">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <ShieldCheck className="w-6 h-6 text-slate-900" />
                  <h3 className="text-xl font-bold tracking-tight">Full compliance</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">Every call follows FDCPA, TCPA, and state-level regulations. No risk of violations.</p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Settings className="w-6 h-6 text-slate-900" />
                  <h3 className="text-xl font-bold tracking-tight">Granular control</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">Set rules per client, per invoice amount, per aging bucket. Total flexibility.</p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <RefreshCcw className="w-6 h-6 text-slate-900" />
                  <h3 className="text-xl font-bold tracking-tight">Adaptive execution</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">The AI adjusts tactics in real time based on debtor responses while staying within your boundaries.</p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <Card className="bg-slate-50 border-slate-200">
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-200">
                  <div className="font-bold text-lg tracking-tight">Collection Rules</div>
                  <div className="flex items-center gap-2 text-sm font-medium text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Active
                  </div>
                </div>
                <div className="space-y-6">
                  {[
                    { label: "First contact", value: "Same day" },
                    { label: "Follow-up cadence", value: "Every 48 hours" },
                    { label: "Max settlement discount", value: "15%" },
                    { label: "Escalate after", value: "5 failed attempts" },
                    { label: "Tone", value: "Firm but professional" }
                  ].map((rule, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="text-slate-500 font-medium">{rule.label}</div>
                      <div className="font-bold tracking-tight">{rule.value}</div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Auto Mode */}
      <section className="py-32 px-6 bg-slate-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-3xl mb-20">
            <div className="border border-slate-700 py-1 px-4 rounded-lg inline-block text-sm font-medium mb-6 text-slate-300">Auto Mode</div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">AI that learns from every interaction</h2>
            <p className="text-xl text-slate-400 leading-relaxed">
              Our AI analyzes customer behavior patterns and optimizes collection strategies automatically. The more it works, the smarter it gets.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="p-10 rounded-3xl border border-slate-800 bg-slate-800/50">
              <div className="text-4xl font-bold tracking-tighter text-slate-700 mb-6">01</div>
              <h3 className="text-xl font-bold tracking-tight mb-3">Behavioral Analysis</h3>
              <p className="text-slate-400 leading-relaxed">Tracks payment patterns, response times, and communication preferences for each customer.</p>
            </div>
            <div className="p-10 rounded-3xl border border-slate-800 bg-slate-800/50">
              <div className="text-4xl font-bold tracking-tighter text-slate-700 mb-6">02</div>
              <h3 className="text-xl font-bold tracking-tight mb-3">Adaptive Strategies</h3>
              <p className="text-slate-400 leading-relaxed">Automatically adjusts tone, timing, and channel based on what works for each debtor profile.</p>
            </div>
            <div className="p-10 rounded-3xl border border-slate-800 bg-slate-800/50">
              <div className="text-4xl font-bold tracking-tighter text-slate-700 mb-6">03</div>
              <h3 className="text-xl font-bold tracking-tight mb-3">Continuous Improvement</h3>
              <p className="text-slate-400 leading-relaxed">Success patterns are learned and applied across your entire portfolio in real-time.</p>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-slate-700 bg-slate-800/50">
              <LineChart className="w-5 h-5 text-emerald-400" />
              <span className="font-medium tracking-tight">Recovery rates improve 23% on average within 90 days</span>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">Lives inside your accounting stack</h2>
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-16">
            Native integration with your existing tools. No new software to learn. Automatic sync that reads invoices, writes payments, and keeps everything in perfect harmony with zero manual effort.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 text-left">
            {[
              { name: "QuickBooks", desc: "Real-time sync of invoices, payments, and credit notes" },
              { name: "Xero", desc: "Automatic payment matching and invoice status updates" },
              { name: "Zoho Books", desc: "Two-way sync of contacts, invoices, and payment records" },
              { name: "FreshBooks", desc: "Seamless invoice tracking and payment reconciliation" },
              { name: "NetSuite", desc: "Enterprise-grade sync for AR, payments, and journal entries" },
              { name: "Sage", desc: "Native ledger integration with automated write-backs" }
            ].map((integration, i) => (
              <Card key={i} className="flex flex-col gap-4">
                <div className="font-bold text-xl tracking-tight">{integration.name}</div>
                <div className="text-slate-600 leading-relaxed text-sm">{integration.desc}</div>
              </Card>
            ))}
          </div>
          
          <div className="inline-flex items-center gap-2 text-slate-500 font-medium">
            <Database className="w-5 h-5" /> Reads invoices. Writes payments. Zero configuration.
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-32 px-6 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">The economics are not close</h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Traditional agencies take 25-50% of what they collect. Internal teams cost $4,000+ per rep, per month. collectAI delivers better results at a flat fee with zero commission.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr>
                  <th className="p-6 border-b border-slate-200 text-slate-500 font-medium w-1/4">Feature</th>
                  <th className="p-6 border-b border-slate-200 font-bold text-lg w-1/4">Traditional Agency</th>
                  <th className="p-6 border-b border-slate-200 font-bold text-lg w-1/4">Internal AR Team</th>
                  <th className="p-6 border-b-2 border-slate-900 font-bold text-xl text-slate-900 w-1/4 bg-white rounded-t-2xl">collectAI</th>
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
                  <tr key={i} className="hover:bg-slate-100/50 transition-colors">
                    <td className="p-6 text-slate-500 font-medium">{row.feature}</td>
                    <td className="p-6 text-slate-700">{row.agency}</td>
                    <td className="p-6 text-slate-700">{row.team}</td>
                    <td className="p-6 font-bold text-slate-900 bg-white">{row.ai}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">Simple, transparent pricing</h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              No commissions. No hidden fees. Just results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Basic", customers: "Up to 50 customers", price: "$499", features: ["Unlimited AI calls", "Email follow-ups", "Basic integrations", "Standard compliance"], cta: "Get Started" },
              { name: "Growth", customers: "Up to 150 customers", price: "$999", features: ["Everything in Basic", "Priority calling", "Advanced integrations", "Custom scripts"], cta: "Get Started" },
              { name: "Scale", customers: "Up to 500 customers", price: "$2,500", features: ["Everything in Growth", "Multi-entity support", "API access", "Dedicated support"], cta: "Get Started", popular: true },
              { name: "Enterprise", customers: "Up to 2,000 customers", price: "$5,000", features: ["Everything in Scale", "Custom workflows", "SLA guarantee", "Dedicated account manager"], cta: "Contact Sales" }
            ].map((plan, i) => (
              <Card key={i} className={`flex flex-col relative ${plan.popular ? 'border-slate-900 shadow-xl shadow-slate-900/10' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs font-bold px-3 py-1 rounded-full tracking-wide uppercase">
                    Popular
                  </div>
                )}
                <div className="mb-8">
                  <h3 className="text-xl font-bold tracking-tight mb-2">{plan.name}</h3>
                  <div className="text-sm text-slate-500 font-medium mb-6">{plan.customers}</div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold tracking-tighter">{plan.price}</span>
                    <span className="text-slate-500 font-medium">/mo</span>
                  </div>
                </div>
                <div className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feature, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-slate-900 shrink-0" />
                      <span className="text-slate-600 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <button className={`w-full py-3 rounded-full text-sm font-bold transition-colors ${plan.popular ? 'bg-slate-900 text-white hover:bg-slate-800' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'}`}>
                  {plan.cta}
                </button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6 bg-white relative overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col items-center justify-center max-w-[540px] mx-auto mb-16">
            <div className="flex justify-center">
              <div className="border border-slate-200 py-1 px-4 rounded-lg text-sm font-medium mb-6">Testimonials</div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-center">
              What our users say
            </h2>
            <p className="text-center mt-5 text-xl text-slate-600 leading-relaxed">
              See what our customers have to say about us.
            </p>
          </div>

          <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
            {[
              [
                { text: "This AI agent revolutionized our operations, streamlining collections and cashflow. The platform keeps us productive, even remotely.", name: "Briana Patton", role: "Operations Manager" },
                { text: "Implementing collectAI was smooth and quick. The customizable, user-friendly interface made team training effortless.", name: "Bilal Ahmed", role: "Finance Director" },
                { text: "The support team is exceptional, guiding us through setup and providing ongoing assistance, ensuring our satisfaction.", name: "Saman Malik", role: "AR Lead" }
              ],
              [
                { text: "collectAI's seamless integration enhanced our business operations and efficiency. Highly recommend for its intuitive interface.", name: "Omar Raza", role: "CEO" },
                { text: "Its robust features and quick support have transformed our workflow, making us significantly more efficient.", name: "Zainab Hussain", role: "Project Manager" },
                { text: "The smooth implementation exceeded expectations. It streamlined processes, improving overall business performance.", name: "Aliza Khan", role: "Business Analyst" }
              ],
              [
                { text: "Our business functions improved with a user-friendly design and positive customer feedback.", name: "Farhan Siddiqui", role: "Marketing Director" },
                { text: "They delivered a solution that exceeded expectations, understanding our needs and enhancing our operations.", name: "Sana Sheikh", role: "Sales Manager" },
                { text: "Using collectAI, our cashflow and conversions significantly improved, boosting business performance.", name: "Hassan Ali", role: "E-commerce Manager" }
              ]
            ].map((column, colIndex) => (
              <div key={colIndex} className={`flex flex-col gap-6 pb-6 ${colIndex === 1 ? 'hidden md:flex' : colIndex === 2 ? 'hidden lg:flex' : 'flex'}`}>
                <motion.div
                  animate={{ translateY: "-50%" }}
                  transition={{ duration: 15 + colIndex * 2, repeat: Infinity, ease: "linear", repeatType: "loop" }}
                  className="flex flex-col gap-6"
                >
                  {[...Array(2)].map((_, i) => (
                    <React.Fragment key={i}>
                      {column.map((testimonial, j) => (
                        <div key={j} className="p-10 rounded-3xl border border-slate-200 shadow-lg shadow-slate-200/50 max-w-xs w-full bg-white">
                          <div className="text-slate-700 leading-relaxed">{testimonial.text}</div>
                          <div className="flex items-center gap-3 mt-6">
                            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold">
                              {testimonial.name.charAt(0)}
                            </div>
                            <div className="flex flex-col">
                              <div className="font-bold tracking-tight leading-5">{testimonial.name}</div>
                              <div className="leading-5 text-slate-500 font-medium tracking-tight text-sm mt-0.5">{testimonial.role}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </React.Fragment>
                  ))}
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 bg-slate-900 text-white text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[1.1]">
            Stop chasing payments.<br />
            <span className="text-slate-400">Start collecting them.</span>
          </h2>
          <p className="text-xl text-slate-400 leading-relaxed mb-10 max-w-2xl mx-auto">
            Every day you wait is revenue you lose. Deploy your AI collection agency today.
          </p>
          <div className="flex flex-col items-center gap-4">
            <button className="bg-white text-slate-900 px-10 py-5 rounded-full text-lg font-bold hover:bg-slate-100 transition-colors">
              Get Started
            </button>
            <p className="text-sm text-slate-500 font-medium">No credit card required. Live in under 24 hours.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-slate-100 text-center text-slate-500 text-sm font-medium">
        <div className="container mx-auto">
          &copy; {new Date().getFullYear()} collectAI. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
