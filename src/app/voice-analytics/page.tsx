"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  Phone,
  Mic,
  BarChart3,
  Shield,
  Brain,
  TrendingUp,
  Users,
  MessageSquare,
  Check,
  HeadphonesIcon,
  Activity,
  Award,
  Store,
} from "lucide-react";
import { LogoWhite } from "@/components/logo";
import { DemoModal } from "@/components/demo-modal";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animated-section";

/* ─── Data ─── */

const callCenterFeatures = [
  { icon: Brain, title: "AI Quality Scoring", desc: "Every call scored on empathy, accuracy, resolution, and compliance — automatically." },
  { icon: Activity, title: "Emotion Detection", desc: "Real-time emotion analysis detects frustration, satisfaction, and escalation signals." },
  { icon: Shield, title: "Compliance Checking", desc: "Flags regulatory violations, unauthorized promises, and PII exposure in real-time." },
  { icon: MessageSquare, title: "Coaching Insights", desc: "AI-generated coaching cards: 'Instead of X, try Y' — specific, actionable, per agent." },
];

const instoreFeatures = [
  { icon: Users, title: "Customer-Staff Insights", desc: "Understand what customers ask, complain about, and love about your products — from real conversations." },
  { icon: TrendingUp, title: "Product Feedback", desc: "AI extracts product mentions, feature requests, and competitor comparisons from conversations." },
  { icon: Award, title: "Service Quality", desc: "Score staff interactions on product knowledge, upselling, and customer handling." },
  { icon: BarChart3, title: "Store-Level Analytics", desc: "Compare service quality across locations. Identify top performers and training gaps." },
];

const metrics = [
  { value: "100%", label: "Calls Analyzed", desc: "vs. typical 2-5% manual sampling" },
  { value: "27%", label: "CSAT Increase", desc: "within the first month" },
  { value: "40%", label: "Quality Improvement", desc: "through targeted AI coaching" },
  { value: "90%", label: "Faster QA", desc: "automated scoring vs. manual" },
];

/* ─── Flowing Waveform ─── */

function FlowingWaveform({ color = "#8B5CF6", height = 72, barCount = 40 }: { color?: string; height?: number; barCount?: number }) {
  const amplitudes = Array.from({ length: barCount }, (_, i) => {
    const x = i / barCount;
    return 0.15 + 0.85 * Math.abs(
      Math.sin(x * Math.PI * 3.5) * Math.cos(x * Math.PI * 1.7 + 0.5)
    );
  });

  const renderBars = () =>
    amplitudes.map((amp, i) => (
      <div
        key={i}
        className="flex-1 rounded-full min-w-[3px]"
        style={{
          height: `${amp * 100}%`,
          backgroundColor: color,
          opacity: 0.35 + amp * 0.55,
        }}
      />
    ));

  return (
    <div className="overflow-hidden rounded-xl" style={{ height }}>
      <div className="flex h-full items-center animate-flow-wave" style={{ width: "200%" }}>
        <div className="flex items-center gap-[2px] h-full w-1/2 px-1">
          {renderBars()}
        </div>
        <div className="flex items-center gap-[2px] h-full w-1/2 px-1">
          {renderBars()}
        </div>
      </div>
    </div>
  );
}

/* ─── Call Center Visual Card ─── */

function CallCenterScene({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full overflow-hidden ${className}`} style={{ aspectRatio: "22 / 15" }}>
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-800" />
      <div className="absolute inset-0 grid-pattern-dark opacity-20" />

      {/* Concentric pulse rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-32 h-32 rounded-full border border-white/[0.12] absolute animate-ping" style={{ animationDuration: "4s" }} />
        <div className="w-48 h-48 rounded-full border border-white/[0.06] absolute" />
        <div className="w-64 h-64 rounded-full border border-white/[0.03] absolute" />
      </div>

      {/* Central content */}
      <div className="relative h-full flex flex-col items-center justify-center px-4">
        {/* Icon card */}
        <div className="w-[72px] h-[72px] rounded-2xl bg-white/[0.12] backdrop-blur-sm flex items-center justify-center border border-white/20 shadow-lg shadow-black/10 mb-3">
          <HeadphonesIcon className="w-9 h-9 text-white" strokeWidth={1.5} />
        </div>

        {/* REC indicator */}
        <div className="flex items-center gap-2 mb-3">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-400" />
          </span>
          <span className="text-white/70 text-[10px] font-semibold tracking-[0.2em] uppercase">Call Recording</span>
        </div>

        {/* Animated wave bars */}
        <div className="flex items-end justify-center gap-[3px] h-7">
          {[0.35, 0.65, 1, 0.5, 0.85, 0.4, 0.75, 0.3, 0.6, 0.95, 0.45, 0.8, 0.35, 0.7, 1].map((h, i) => (
            <div
              key={i}
              className="w-[3px] rounded-full bg-white/50 wave-bar"
              style={{ height: `${h * 100}%`, animationDelay: `${i * 0.08}s` }}
            />
          ))}
        </div>
      </div>

      {/* Floating score badge — top right */}
      <div className="absolute top-3 right-3 bg-white/[0.12] backdrop-blur-sm rounded-xl px-3 py-2 border border-white/15">
        <p className="text-[8px] text-white/50 font-medium uppercase tracking-wider">Quality</p>
        <p className="text-lg font-extrabold text-white leading-tight">92%</p>
      </div>

      {/* Floating sentiment badge — bottom left */}
      <div className="absolute bottom-3 left-3 bg-white/[0.12] backdrop-blur-sm rounded-lg px-2.5 py-1.5 border border-white/15 flex items-center gap-1.5">
        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
        <span className="text-[9px] text-white/70 font-medium">Positive</span>
      </div>

      {/* Floating compliance badge — bottom right */}
      <div className="absolute bottom-3 right-3 bg-white/[0.12] backdrop-blur-sm rounded-lg px-2.5 py-1.5 border border-white/15 flex items-center gap-1.5">
        <Check className="w-3 h-3 text-emerald-400" />
        <span className="text-[9px] text-white/70 font-medium">Compliant</span>
      </div>
    </div>
  );
}

/* ─── Store Visual Card ─── */

function StoreScene({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full overflow-hidden ${className}`} style={{ aspectRatio: "22 / 15" }}>
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500 via-cyan-600 to-teal-800" />
      <div className="absolute inset-0 grid-pattern-dark opacity-20" />

      {/* Concentric pulse rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-32 h-32 rounded-full border border-white/[0.12] absolute animate-ping" style={{ animationDuration: "5s" }} />
        <div className="w-48 h-48 rounded-full border border-white/[0.06] absolute" />
        <div className="w-64 h-64 rounded-full border border-white/[0.03] absolute" />
      </div>

      {/* Central content */}
      <div className="relative h-full flex flex-col items-center justify-center px-4">
        {/* Icon card */}
        <div className="w-[72px] h-[72px] rounded-2xl bg-white/[0.12] backdrop-blur-sm flex items-center justify-center border border-white/20 shadow-lg shadow-black/10 mb-3">
          <Store className="w-9 h-9 text-white" strokeWidth={1.5} />
        </div>

        {/* Ambient indicator */}
        <div className="flex items-center gap-2 mb-3">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <span className="text-white/70 text-[10px] font-semibold tracking-[0.2em] uppercase">Ambient Capture</span>
        </div>

        {/* Animated wave bars */}
        <div className="flex items-end justify-center gap-[3px] h-7">
          {[0.3, 0.55, 0.85, 0.45, 0.75, 0.35, 0.65, 0.25, 0.5, 0.8, 0.4, 0.7, 0.3, 0.6, 0.9].map((h, i) => (
            <div
              key={i}
              className="w-[3px] rounded-full bg-white/50 wave-bar"
              style={{ height: `${h * 100}%`, animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>
      </div>

      {/* Floating conversations badge — top right */}
      <div className="absolute top-3 right-3 bg-white/[0.12] backdrop-blur-sm rounded-xl px-3 py-2 border border-white/15">
        <p className="text-[8px] text-white/50 font-medium uppercase tracking-wider">Today</p>
        <p className="text-lg font-extrabold text-white leading-tight">247</p>
        <p className="text-[8px] text-white/40">conversations</p>
      </div>

      {/* Floating product mentions badge — bottom left */}
      <div className="absolute bottom-3 left-3 bg-white/[0.12] backdrop-blur-sm rounded-lg px-2.5 py-1.5 border border-white/15 flex items-center gap-1.5">
        <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
        <span className="text-[9px] text-white/70 font-medium">12 Mentions</span>
      </div>

      {/* Floating service quality badge — bottom right */}
      <div className="absolute bottom-3 right-3 bg-white/[0.12] backdrop-blur-sm rounded-lg px-2.5 py-1.5 border border-white/15 flex items-center gap-1.5">
        <TrendingUp className="w-3 h-3 text-emerald-400" />
        <span className="text-[9px] text-white/70 font-medium">+18% Quality</span>
      </div>
    </div>
  );
}

/* ─── Flow Diagram with Illustration + Xploro container (AI + Dashboards) ─── */

function FlowDiagramV2({
  illustration,
  sourceLabel,
  sourceColor,
  outputs,
}: {
  illustration: React.ReactNode;
  sourceLabel: string;
  sourceColor: string;
  outputs: { label: string; screenshot: string }[];
}) {
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row items-stretch gap-4 md:gap-6">
        {/* Illustration as source */}
        <div className="w-full md:w-72 shrink-0 self-center rounded-2xl overflow-hidden border border-border-default shadow-sm">
          {illustration}
          <div className="bg-white px-4 py-2 text-center border-t border-border-light">
            <p className="text-xs font-semibold text-text-primary">{sourceLabel}</p>
          </div>
        </div>

        {/* Arrow */}
        <div className="hidden md:flex items-center shrink-0">
          <svg width="44" height="2" viewBox="0 0 44 2"><line x1="0" y1="1" x2="36" y2="1" stroke="#D4D4D8" strokeWidth="2" /><polygon points="36,0 44,1 36,2" fill="#D4D4D8" /></svg>
        </div>
        <div className="md:hidden flex justify-center">
          <svg width="2" height="28" viewBox="0 0 2 28"><line x1="1" y1="0" x2="1" y2="22" stroke="#D4D4D8" strokeWidth="2" /><polygon points="0,22 1,28 2,22" fill="#D4D4D8" /></svg>
        </div>

        {/* Xploro Platform Container — wraps AI processing + dashboard outputs */}
        <div className="flex-1 border-2 border-brand-200 rounded-2xl overflow-hidden bg-gradient-to-br from-white via-white to-brand-50/30 shadow-sm">
          {/* Xploro header bar */}
          <div className="flex items-center gap-3 px-5 py-3 border-b border-brand-100 bg-brand-50/30">
            <div
              className="h-7 shrink-0"
              style={{
                aspectRatio: "2 / 1",
                backgroundColor: "#E84C8A",
                WebkitMaskImage: "url(/logo-white.png)",
                WebkitMaskSize: "contain",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskPosition: "left center",
                maskImage: "url(/logo-white.png)",
                maskSize: "contain",
                maskRepeat: "no-repeat",
                maskPosition: "left center",
              }}
            />
            <p className="text-[9px] text-brand-500 font-semibold tracking-wider uppercase">CX Intelligence Platform</p>
          </div>

          {/* AI Processing section */}
          <div className="px-5 pt-4 pb-2">
            <div className="bg-white border border-border-default rounded-xl px-4 py-3 shadow-sm">
              <FlowingWaveform color={sourceColor} barCount={32} height={36} />
              <p className="text-[10px] text-text-muted text-center mt-1.5 font-medium">AI Processing — Transcription, Sentiment, Quality Scoring</p>
            </div>
          </div>

          {/* Connecting arrow */}
          <div className="flex justify-center py-1">
            <svg width="2" height="20" viewBox="0 0 2 20">
              <line x1="1" y1="0" x2="1" y2="14" stroke="#D4D4D8" strokeWidth="1.5" />
              <polygon points="0,14 1,20 2,14" fill="#D4D4D8" />
            </svg>
          </div>

          {/* Output cards with screenshots — inside Xploro */}
          <div className="px-5 pb-5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {outputs.map((out) => (
                <div key={out.label} className="bg-white border border-border-default rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:border-brand-200 transition-all duration-300">
                  <div className="relative h-32 bg-surface">
                    <Image
                      src={out.screenshot}
                      alt={out.label}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="px-3 py-2">
                    <p className="text-xs font-semibold text-text-primary">{out.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Page ─── */

export default function VoiceAnalyticsPage() {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-text-primary">
      <DemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-brand-600 via-brand-500 to-brand-700 shadow-lg shadow-brand-500/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <LogoWhite />
          <div className="hidden md:flex items-center gap-8">
            <Link href="/#platform" className="text-sm text-white/80 hover:text-white transition-colors">Platform</Link>
            <span className="text-sm font-semibold text-white">Voice Analytics</span>
            <Link href="/#agents" className="text-sm text-white/80 hover:text-white transition-colors">AI Agents</Link>
            <Link href="/#customers" className="text-sm text-white/80 hover:text-white transition-colors">Customers</Link>
          </div>
          <button
            onClick={() => setDemoOpen(true)}
            className="text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 bg-white text-brand-700 hover:shadow-lg hover:shadow-white/20"
          >
            Request Demo
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-44 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 right-1/4 w-[500px] h-[500px] bg-brand-50/40 rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-4">
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text-secondary transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Platform
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="inline-block mb-8">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-purple-600 bg-purple-50 border border-purple-200 rounded-full px-5 py-2">
              <Mic className="w-3.5 h-3.5" />
              Voice AI
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[0.95] mb-6"
          >
            Transform every
            <br />
            <span className="gradient-text">conversation</span> into intelligence
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10"
          >
            Call center recordings and in-store conversations — analyzed by AI for
            quality, emotion, compliance, and actionable insights.
          </motion.p>

          {/* Animated flowing waveform */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.35 }}
            className="max-w-xl mx-auto bg-white border border-border-default rounded-2xl p-8 shadow-lg shadow-brand-50"
          >
            <FlowingWaveform color="#8B5CF6" barCount={48} height={80} />
            <p className="text-xs text-text-muted mt-4">AI analyzing voice signals in real-time</p>
          </motion.div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-12 border-y border-border-light bg-surface">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((m) => (
            <div key={m.label} className="text-center">
              <p className="text-3xl font-extrabold gradient-text-vibrant">{m.value}</p>
              <p className="text-sm font-semibold text-text-primary">{m.label}</p>
              <p className="text-xs text-text-muted mt-0.5">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call Center Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.15em] uppercase text-purple-500 bg-purple-50 rounded-full px-4 py-1.5 mb-4">
              <Phone className="w-3.5 h-3.5" /> Use Case 1
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Call Center Intelligence
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              Every call recorded, transcribed, and analyzed. AI scores quality,
              detects emotion, flags compliance issues, and generates coaching insights.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15} className="mb-16">
            <FlowDiagramV2
              illustration={<CallCenterScene />}
              sourceLabel="Call Center Recording"
              sourceColor="#8B5CF6"
              outputs={[
                { label: "Quality Dashboard", screenshot: "/screenshots/dashboard.png" },
                { label: "Coaching Reports", screenshot: "/screenshots/coaching.png" },
                { label: "Sentiment Analysis", screenshot: "/screenshots/sentiment.png" },
              ]}
            />
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {callCenterFeatures.map((f) => {
              const Icon = f.icon;
              return (
                <StaggerItem key={f.title}>
                  <div className="h-full bg-white border border-border-default rounded-2xl p-6 hover:border-purple-200 hover:shadow-md transition-all duration-300">
                    <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-purple-500" />
                    </div>
                    <h3 className="text-sm font-bold text-text-primary mb-2">{f.title}</h3>
                    <p className="text-xs text-text-secondary leading-relaxed">{f.desc}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* In-Store Section */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.15em] uppercase text-cyan-600 bg-cyan-50 rounded-full px-4 py-1.5 mb-4">
              <Mic className="w-3.5 h-3.5" /> Use Case 2
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              In-Store Conversation Intelligence
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              Capture customer-staff conversations at the point of sale. AI extracts
              product feedback, service quality, and upselling opportunities.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15} className="mb-16">
            <FlowDiagramV2
              illustration={<StoreScene />}
              sourceLabel="In-Store Recording"
              sourceColor="#06B6D4"
              outputs={[
                { label: "Feedback Reports", screenshot: "/screenshots/sentiment.png" },
                { label: "Performance Insights", screenshot: "/screenshots/performance.png" },
                { label: "Staff Scorecards", screenshot: "/screenshots/dashboard.png" },
              ]}
            />
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {instoreFeatures.map((f) => {
              const Icon = f.icon;
              return (
                <StaggerItem key={f.title}>
                  <div className="h-full bg-white border border-border-default rounded-2xl p-6 hover:border-cyan-200 hover:shadow-md transition-all duration-300">
                    <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-cyan-500" />
                    </div>
                    <h3 className="text-sm font-bold text-text-primary mb-2">{f.title}</h3>
                    <p className="text-xs text-text-secondary leading-relaxed">{f.desc}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="relative py-24 bg-gradient-to-br from-brand-600 via-brand-700 to-brand-900 overflow-hidden">
        <div className="absolute inset-0 grid-pattern-dark opacity-40" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 tracking-tight">
            Ready to hear what your customers are really saying?
          </h2>
          <p className="text-brand-200/80 mb-8 max-w-lg mx-auto">
            See Voice Analytics in action with a live demo using your own call recordings.
          </p>
          <button
            onClick={() => setDemoOpen(true)}
            className="group inline-flex items-center gap-2 bg-white text-brand-700 font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5"
          >
            Request a Voice Analytics Demo
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <div className="flex items-center justify-center gap-3 text-sm text-brand-200/60 mt-5">
            <Check className="w-3.5 h-3.5" /> Works with any telephony system
            <span>&bull;</span>
            <Check className="w-3.5 h-3.5" /> Multi-language support
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <Image src="/logo-white.png" alt="Xploro.io" width={140} height={70} className="h-9 w-auto opacity-90" />
          <p className="text-xs text-zinc-600">&copy; {new Date().getFullYear()} Xploro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
