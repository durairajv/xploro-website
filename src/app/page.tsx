"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  MessageSquare,
  Brain,
  HeadphonesIcon,
  Network,
  Shield,
  Zap,
  TrendingUp,
  Users,
  Award,
  BarChart3,
  Bot,
  ChevronRight,
  Check,
  Star,
  Quote,
  Mic,
  Phone,
  Ticket,
  LayoutGrid,
  Store,
  MapPin,
  ScanSearch,
  Menu,
  X,
} from "lucide-react";
import { LogoWhite } from "@/components/logo";
import { Counter } from "@/components/counter";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/animated-section";
import { PlatformFlow } from "@/components/platform-flow";
import { DemoModal } from "@/components/demo-modal";
import { clients, clientTestimonials, industries } from "@/lib/data";

/* ─── Static Data ─── */

const heroStats = [
  { value: "14", suffix: "+", label: "Channels" },
  { value: "80", suffix: "M+", label: "Signals Processed" },
  { value: "25", suffix: "+", label: "Brands Trust Us" },
  { value: "40", suffix: "%", label: "CSAT Improvement" },
];

const valueMetrics = [
  {
    icon: Bot,
    value: "60%",
    label: "Auto-Respond to Queries",
    description:
      "AI agents handle routine customer queries autonomously — your team focuses on what matters.",
    color: "#E84C8A",
  },
  {
    icon: Zap,
    value: "94%",
    label: "Faster Response Times",
    description:
      "From days to minutes. Every channel gets instant, contextual responses.",
    color: "#8B5CF6",
  },
  {
    icon: Award,
    value: "40%",
    label: "CSAT Improvement",
    description:
      "Consistent, empathetic responses across every touchpoint lift satisfaction.",
    color: "#10B981",
  },
  {
    icon: TrendingUp,
    value: "20%",
    label: "NPS Score Increase",
    description:
      "Proactive issue detection turns detractors into promoters.",
    color: "#3B82F6",
  },
  {
    icon: Star,
    value: "3x",
    label: "More Leads Captured",
    description:
      "AI detects purchase intent in DMs, comments, and reviews — routes to sales instantly.",
    color: "#F59E0B",
  },
  {
    icon: Users,
    value: "100%",
    label: "Brand Consistency",
    description:
      "Every response — across every channel, every location — speaks in your brand voice.",
    color: "#EC4899",
  },
];

const agents = [
  {
    name: "Response Genie",
    tagline: "Every response — on-brand, contextual, instant.",
    description:
      "Auto-responds to reviews, social comments, DMs, and emails across all channels. Learns your brand voice. Escalates intelligently.",
    icon: MessageSquare,
    color: "#E84C8A",
    badge: "Most Popular",
  },
  {
    name: "Cortex",
    tagline: "The brain behind your customer intelligence.",
    description:
      "Real-time sentiment analysis, theme extraction, anomaly detection, and intelligent routing. Ask your brand anything with conversational analytics.",
    icon: Brain,
    color: "#8B5CF6",
    badge: null,
  },
  {
    name: "Resolve",
    tagline: "Every support agent's smartest teammate.",
    description:
      "Copilot for your support team. Surfaces customer history, suggests resolutions, tracks SLAs, and coaches new agents in real-time.",
    icon: HeadphonesIcon,
    color: "#10B981",
    badge: null,
  },
  {
    name: "Nexus",
    tagline: "Cross-channel intelligence, one connected view.",
    description:
      "Correlates signals across every channel to build unified customer health scores. Predicts churn and recommends proactive retention actions.",
    icon: Network,
    color: "#3B82F6",
    badge: null,
  },
  {
    name: "Shield",
    tagline: "100% coverage. Zero blind spots.",
    description:
      "Audits every agent interaction for accuracy, empathy, brand voice, and compliance. Turns QA from spot-checks into continuous coaching.",
    icon: Shield,
    color: "#F59E0B",
    badge: null,
  },
  {
    name: "Sentinel",
    tagline: "40% noise. Zero distractions.",
    description:
      "Automatically identifies and filters spam, fake reviews, bot messages, and irrelevant noise across all channels. Your team only sees what matters — saving hours daily.",
    icon: ScanSearch,
    color: "#EF4444",
    badge: "40% Savings",
  },
];

const platformCapabilities = [
  {
    icon: Mic,
    name: "Voice Analytics",
    description:
      "Analyze call center recordings and in-store conversations with AI. Quality scoring, emotion detection, compliance checking, and coaching insights.",
    badge: "USP",
    link: "/voice-analytics",
    color: "#8B5CF6",
  },
  {
    icon: Ticket,
    name: "Smart Ticketing",
    description:
      "Built-in ticketing with intelligent routing, SLA tracking, parent-child threading, and escalation workflows. Or integrate with your existing system.",
    badge: null,
    link: null,
    color: "#10B981",
  },
  {
    icon: LayoutGrid,
    name: "14+ Channel Integration",
    description:
      "Google, Instagram, Facebook, WhatsApp, Email, LinkedIn, X, App Store, Play Store, YouTube, TripAdvisor, Zomato, and more — all in one inbox.",
    badge: null,
    link: null,
    color: "#3B82F6",
  },
  {
    icon: BarChart3,
    name: "NPS & Surveys",
    description:
      "Launch Net Promoter Score surveys via QR, email, or embedded forms. Track promoters, passives, and detractors across locations over time.",
    badge: null,
    link: null,
    color: "#F59E0B",
  },
  {
    icon: Bot,
    name: "AI Agent Suite",
    description:
      "Autonomous AI agents that respond, analyze, resolve, correlate, and audit — running your CX operations 24/7 in your brand voice.",
    badge: "NEW",
    link: "#agents",
    color: "#E84C8A",
  },
];

/* ─── Page Component ─── */

export default function Home() {
  const [demoOpen, setDemoOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showStickyCta, setShowStickyCta] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyCta(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-text-primary">
      <DemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />

      {/* ─── Navbar ─── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-brand-600 via-brand-500 to-brand-700 shadow-lg shadow-brand-500/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <LogoWhite />
          <div className="hidden md:flex items-center gap-8">
            <a href="#platform" className="text-sm text-white/80 hover:text-white transition-colors">
              Platform
            </a>
            <Link href="/voice-analytics" className="text-sm text-white/80 hover:text-white transition-colors">
              Voice Analytics
            </Link>
            <a href="#agents" className="text-sm text-white/80 hover:text-white transition-colors">
              AI Agents
            </a>
            <a href="#customers" className="text-sm text-white/80 hover:text-white transition-colors">
              Customers
            </a>
          </div>
          <button
            onClick={() => setDemoOpen(true)}
            className="hidden md:inline-flex text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 bg-white text-brand-700 hover:shadow-lg hover:shadow-white/20"
          >
            Request Demo
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg text-white/90 hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="md:hidden overflow-hidden border-t border-white/10"
            >
              <div className="px-6 py-4 space-y-3">
                <a href="#platform" onClick={() => setMenuOpen(false)} className="block text-sm text-white/80 hover:text-white transition-colors">
                  Platform
                </a>
                <Link href="/voice-analytics" onClick={() => setMenuOpen(false)} className="block text-sm text-white/80 hover:text-white transition-colors">
                  Voice Analytics
                </Link>
                <a href="#agents" onClick={() => setMenuOpen(false)} className="block text-sm text-white/80 hover:text-white transition-colors">
                  AI Agents
                </a>
                <a href="#customers" onClick={() => setMenuOpen(false)} className="block text-sm text-white/80 hover:text-white transition-colors">
                  Customers
                </a>
                <button
                  onClick={() => { setMenuOpen(false); setDemoOpen(true); }}
                  className="w-full text-sm font-semibold px-5 py-2.5 rounded-full bg-white text-brand-700 hover:shadow-lg transition-all duration-300 mt-1"
                >
                  Request Demo
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ─── Hero Section ─── */}
      <section className="relative pt-20 pb-4 md:pt-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 right-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-brand-50/40 rounded-full blur-[80px] md:blur-[160px]" />
          <div className="absolute top-20 -left-40 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-brand-50/25 rounded-full blur-[70px] md:blur-[140px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 w-full">
          {/* ── Headline (compact) ── */}
          <div className="text-center mb-3 lg:mb-2">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-1.5"
            >
              <div className="relative inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-brand-600 bg-white border border-brand-100 rounded-full px-4 py-1.5 shadow-sm">
                <span className="w-1.5 h-1.5 bg-brand-500 rounded-full animate-pulse" />
                AI Native
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] mb-1.5"
            >
              <span className="text-text-primary">CX Intelligence </span>
              <span className="gradient-text">Platform</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm text-text-secondary md:whitespace-nowrap"
            >
              Turn every customer signal into intelligence. Turn intelligence into action.
            </motion.p>
          </div>

          {/* ── 3-tile grid — fills remaining viewport height ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            id="how-it-works"
          >
            {/* Desktop: flow animation + right column (voice + GMB) */}
            <div className="hidden lg:grid lg:grid-cols-[70%_30%] gap-3 items-start">
              {/* Tile 1: Flow animation — natural aspect ratio drives height */}
              <div className="rounded-2xl border border-zinc-100 bg-white/80 overflow-hidden">
                <PlatformFlow compact />
              </div>

              {/* Right column: Voice Intelligence (top half) + GMB Management (bottom half) */}
              <div className="flex flex-col gap-3">
                {/* Combined Voice Intelligence tile */}
                <Link href="/voice-analytics" className="group flex-1 rounded-2xl overflow-hidden border border-zinc-100 bg-white hover:shadow-md hover:border-purple-200 transition-all duration-300">
                  <div className="relative h-full flex flex-col justify-center p-5 gap-1">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-500 to-teal-500 flex items-center justify-center">
                        <Mic className="w-4 h-4 text-white" strokeWidth={2} />
                      </div>
                      <div>
                        <p className="text-text-primary font-semibold text-base leading-tight">Voice Intelligence</p>
                        <p className="text-[10px] text-text-muted">AI-Powered Speech Analytics</p>
                      </div>
                    </div>

                    {/* Call Center row */}
                    <div className="flex items-center gap-3 rounded-xl bg-purple-50/60 px-3 py-2.5">
                      <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-sm">
                        <HeadphonesIcon className="w-4 h-4 text-purple-600" strokeWidth={1.5} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 mb-0.5">
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-400" />
                          </span>
                          <span className="text-purple-400 text-[8px] font-semibold tracking-[0.15em] uppercase">Recording</span>
                        </div>
                        <p className="text-text-primary font-medium text-xs">Call Center</p>
                      </div>
                      <div className="flex items-end gap-[2px] h-3.5">
                        {[0.35, 0.65, 1, 0.5, 0.85, 0.4, 0.75, 0.3].map((h, i) => (
                          <div key={i} className="w-[1.5px] rounded-full bg-purple-300 wave-bar" style={{ height: `${h * 100}%`, animationDelay: `${i * 0.08}s` }} />
                        ))}
                      </div>
                      <p className="text-sm font-bold text-purple-600">92%</p>
                    </div>

                    {/* In-Store row */}
                    <div className="flex items-center gap-3 rounded-xl bg-teal-50/60 px-3 py-2.5">
                      <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-sm">
                        <Store className="w-4 h-4 text-teal-600" strokeWidth={1.5} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 mb-0.5">
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                          </span>
                          <span className="text-teal-400 text-[8px] font-semibold tracking-[0.15em] uppercase">Ambient</span>
                        </div>
                        <p className="text-text-primary font-medium text-xs">In-Store</p>
                      </div>
                      <div className="flex items-end gap-[2px] h-3.5">
                        {[0.3, 0.55, 0.85, 0.45, 0.75, 0.35, 0.65, 0.25].map((h, i) => (
                          <div key={i} className="w-[1.5px] rounded-full bg-teal-300 wave-bar" style={{ height: `${h * 100}%`, animationDelay: `${i * 0.1}s` }} />
                        ))}
                      </div>
                      <p className="text-sm font-bold text-teal-600">247</p>
                    </div>

                    <div className="flex items-center justify-center gap-1 mt-1 text-[10px] text-text-muted group-hover:text-brand-500 transition-colors">
                      <span>Explore Voice Analytics</span>
                      <ChevronRight className="w-3 h-3" />
                    </div>
                  </div>
                </Link>

                {/* GMB Management tile */}
                <div className="group flex-1 rounded-2xl overflow-hidden border border-zinc-100 bg-white hover:shadow-md hover:border-blue-200 transition-all duration-300">
                  <div className="relative h-full flex flex-col justify-center p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                        <MapPin className="w-4 h-4 text-white" strokeWidth={2} />
                      </div>
                      <div>
                        <p className="text-text-primary font-semibold text-base leading-tight">GMB Management</p>
                        <p className="text-[10px] text-text-muted">Google Business Profile</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2.5">
                        <div className="w-6 h-6 rounded-md bg-blue-50 flex items-center justify-center">
                          <Star className="w-3 h-3 text-blue-500" />
                        </div>
                        <span className="text-xs text-text-secondary">Review management & response</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <div className="w-6 h-6 rounded-md bg-blue-50 flex items-center justify-center">
                          <BarChart3 className="w-3 h-3 text-blue-500" />
                        </div>
                        <span className="text-xs text-text-secondary">Insights & local SEO analytics</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <div className="w-6 h-6 rounded-md bg-blue-50 flex items-center justify-center">
                          <Check className="w-3 h-3 text-blue-500" />
                        </div>
                        <span className="text-xs text-text-secondary">Location verification at scale</span>
                      </div>
                    </div>

                    <div className="mt-3 flex items-center gap-3">
                      <div className="flex -space-x-1">
                        {["#4285F4", "#EA4335", "#FBBC04"].map((c, i) => (
                          <div key={i} className="w-5 h-5 rounded-full border-2 border-white" style={{ backgroundColor: c }} />
                        ))}
                      </div>
                      <span className="text-[11px] text-text-muted font-medium">800+ locations managed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Stats at bottom of hero ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-4 pb-2 flex items-center justify-center gap-4 sm:gap-8 md:gap-14 flex-wrap"
          >
            {heroStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <Counter
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  className="[&>div:first-child]:text-xl [&>div:first-child]:md:text-2xl [&>div:first-child]:font-bold [&>div:first-child]:text-text-primary [&>div:last-child]:text-[9px] [&>div:last-child]:text-text-muted [&>div:last-child]:mt-0.5 [&>div:last-child]:font-medium"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Full Flow (mobile only — desktop sees it in the hero tile) ─── */}
      <div className="lg:hidden">
        <PlatformFlow />
      </div>

      {/* ─── Voice + GMB (mobile only — desktop sees them in hero tiles) ─── */}
      <div className="lg:hidden max-w-7xl mx-auto px-6 pb-4">
        <div className="grid grid-cols-2 gap-3">
          <Link href="/voice-analytics" className="rounded-xl overflow-hidden border border-zinc-100 bg-white hover:shadow-md hover:border-purple-200 transition-all duration-300">
            <div className="flex flex-col items-center justify-center p-4" style={{ aspectRatio: "4 / 3" }}>
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-teal-500 flex items-center justify-center mb-1.5">
                <Mic className="w-5 h-5 text-white" strokeWidth={1.5} />
              </div>
              <p className="text-text-primary font-semibold text-[11px] text-center">Voice Intelligence</p>
              <div className="flex items-end gap-[2px] h-2.5 mt-1.5">
                {[0.35, 0.65, 1, 0.5, 0.85, 0.4].map((h, i) => (
                  <div key={i} className="w-[1.5px] rounded-full bg-purple-300 wave-bar" style={{ height: `${h * 100}%`, animationDelay: `${i * 0.08}s` }} />
                ))}
              </div>
            </div>
          </Link>
          <div className="rounded-xl overflow-hidden border border-zinc-100 bg-white">
            <div className="flex flex-col items-center justify-center p-4" style={{ aspectRatio: "4 / 3" }}>
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-1.5">
                <MapPin className="w-5 h-5 text-white" strokeWidth={1.5} />
              </div>
              <p className="text-text-primary font-semibold text-[11px] text-center">GMB Management</p>
              <p className="text-[9px] text-text-muted mt-0.5">800+ locations</p>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Client Logos ─── */}
      <section className="py-6">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-[10px] text-text-muted font-medium tracking-[0.15em] uppercase mb-5">
            Trusted by innovative brands
          </p>
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-l from-white to-transparent z-10" />
            <div className="flex items-center gap-8 md:gap-16 animate-marquee">
              {[...clients, ...clients].map((client, i) => (
                <div
                  key={`${client.name}-${i}`}
                  className="flex-shrink-0 h-12 w-40 relative opacity-60 hover:opacity-100 transition-opacity duration-300"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={client.logo} alt={client.name} className="h-full w-full object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Platform Capabilities ─── */}
      <section id="platform" className="py-12 md:py-20 lg:py-28 bg-zinc-50/60">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-8 md:mb-16">
            <p className="text-brand-500 text-sm font-semibold tracking-wider uppercase mb-3">
              Built-In Power
            </p>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-5">
              Everything your CX team needs,{" "}
              <span className="gradient-text">built in</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Voice analytics, smart ticketing, 14+ channel integrations, NPS
              surveys, and AI agents — all native to the platform.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6" staggerDelay={0.1}>
            {platformCapabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <StaggerItem key={cap.name}>
                  <div className="group relative h-full bg-white border border-border-default rounded-2xl p-8 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-50 transition-all duration-300">
                    {cap.badge && (
                      <div className="absolute -top-3 right-6 bg-gradient-to-r from-brand-500 to-brand-700 text-white text-[9px] font-bold tracking-[0.15em] uppercase px-3 py-1 rounded-full">
                        {cap.badge}
                      </div>
                    )}
                    <div className="flex items-start gap-5">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                        style={{ backgroundColor: `${cap.color}08` }}
                      >
                        <Icon className="w-6 h-6" style={{ color: cap.color }} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-text-primary mb-2">{cap.name}</h3>
                        <p className="text-sm text-text-secondary leading-relaxed mb-3">{cap.description}</p>
                        {cap.link && (
                          cap.link.startsWith("#") ? (
                            <a
                              href={cap.link}
                              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors"
                            >
                              Learn more <ArrowRight className="w-3.5 h-3.5" />
                            </a>
                          ) : (
                            <Link
                              href={cap.link}
                              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors"
                            >
                              Learn more <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── AI Agents ─── */}
      <section id="agents" className="py-12 md:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-8 md:mb-16">
            <p className="text-brand-500 text-sm font-semibold tracking-wider uppercase mb-3">
              AI Agent Suite
            </p>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-5">
              Intelligence that{" "}
              <span className="gradient-text">acts.</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Purpose-built AI agents that respond, understand, assist, correlate,
              and audit — running your CX operations 24/7.
            </p>
          </AnimatedSection>

          <StaggerContainer
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
            staggerDelay={0.08}
          >
            {agents.map((agent) => {
              const Icon = agent.icon;
              return (
                <StaggerItem key={agent.name}>
                  <div className="group relative h-full bg-white border border-border-default rounded-2xl p-6 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-50 transition-all duration-300 hover:-translate-y-1 flex flex-col">
                    {agent.badge && (
                      <div className="absolute -top-2.5 right-4 bg-gradient-to-r from-brand-500 to-brand-700 text-white text-[9px] font-bold tracking-[0.12em] uppercase px-3 py-1 rounded-full">
                        {agent.badge}
                      </div>
                    )}
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                      style={{ backgroundColor: `${agent.color}08` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: agent.color }} />
                    </div>
                    <h3 className="text-base font-bold text-text-primary mb-1">
                      Xploro{" "}
                      <span style={{ color: agent.color }}>{agent.name}</span>
                    </h3>
                    <p className="text-[11px] text-text-muted italic mb-3">{agent.tagline}</p>
                    <p className="text-sm text-text-secondary leading-relaxed flex-1">
                      {agent.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── Value Metrics ─── */}
      <section id="impact" className="py-12 md:py-20 lg:py-28 bg-zinc-50/60">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-8 md:mb-16">
            <p className="text-brand-500 text-sm font-semibold tracking-wider uppercase mb-3">
              The Impact
            </p>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-5">
              Customer value you can{" "}
              <span className="gradient-text">measure</span>
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {valueMetrics.map((metric) => {
              const Icon = metric.icon;
              return (
                <StaggerItem key={metric.label}>
                  <div className="group h-full bg-white border border-border-default rounded-2xl p-7 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-50 transition-all duration-300">
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                        style={{ backgroundColor: `${metric.color}08` }}
                      >
                        <Icon className="w-5 h-5" style={{ color: metric.color }} />
                      </div>
                      <div>
                        <p className="text-3xl font-extrabold" style={{ color: metric.color }}>
                          {metric.value}
                        </p>
                        <p className="text-sm font-semibold text-text-primary">{metric.label}</p>
                      </div>
                    </div>
                    <p className="text-sm text-text-secondary leading-relaxed">{metric.description}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── Customers + Industries ─── */}
      <section id="customers" className="py-12 md:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-8 md:mb-16">
            <p className="text-brand-500 text-sm font-semibold tracking-wider uppercase mb-3">
              Customer Stories
            </p>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-5">
              Real results from{" "}
              <span className="gradient-text">real brands</span>
            </h2>
          </AnimatedSection>

          {/* Testimonials */}
          <StaggerContainer className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-8 md:mb-16" staggerDelay={0.1}>
            {clientTestimonials.map((t) => (
              <StaggerItem key={t.author}>
                <div className="h-full bg-white border border-border-default rounded-2xl p-8 hover:border-brand-100 transition-all duration-300">
                  <Quote className="w-7 h-7 text-brand-200 mb-4" />
                  <p className="text-text-secondary leading-relaxed mb-6 text-[15px]">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-brand-400 to-brand-700 flex items-center justify-center text-white text-xs font-bold">
                        {t.avatar}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-text-primary">{t.author}</p>
                        <p className="text-xs text-text-muted">{t.role}, {t.company}</p>
                      </div>
                    </div>
                    <p className="text-xs font-bold gradient-text">{t.metric}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Case Studies */}
          <AnimatedSection delay={0.2} className="mb-20">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-border-default rounded-2xl p-5 sm:p-8 hover:border-brand-100 transition-all duration-300">
                <p className="text-[10px] font-bold text-brand-500 tracking-[0.15em] uppercase mb-3">Case Study</p>
                <h3 className="text-xl font-bold mb-2">Zivame — 180 Outlets</h3>
                <p className="text-sm text-text-secondary mb-5">
                  Improved Google location verification from 50% to 90%, with 35% faster response times.
                </p>
                <div className="flex gap-4 sm:gap-8">
                  {[
                    { v: "90%", l: "Verified" },
                    { v: "35%", l: "Faster" },
                    { v: "20%", l: "CSAT ↑" },
                  ].map((s) => (
                    <div key={s.l}>
                      <p className="text-2xl font-extrabold gradient-text">{s.v}</p>
                      <p className="text-[10px] text-text-muted font-medium">{s.l}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white border border-border-default rounded-2xl p-5 sm:p-8 hover:border-brand-100 transition-all duration-300">
                <p className="text-[10px] font-bold text-brand-500 tracking-[0.15em] uppercase mb-3">Case Study</p>
                <h3 className="text-xl font-bold mb-2">Sangeetha Gadgets — 800 Outlets</h3>
                <p className="text-sm text-text-secondary mb-5">
                  Consolidated multiple tools into one unified platform with streamlined operations.
                </p>
                <div className="flex gap-4 sm:gap-8">
                  {[
                    { v: "30%", l: "Cost ↓" },
                    { v: "30%", l: "Efficiency ↑" },
                    { v: "1", l: "Platform" },
                  ].map((s) => (
                    <div key={s.l}>
                      <p className="text-2xl font-extrabold gradient-text">{s.v}</p>
                      <p className="text-[10px] text-text-muted font-medium">{s.l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Industries */}
          <AnimatedSection>
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold tracking-tight">
                Built for <span className="gradient-text">every industry</span>
              </h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {industries.map((ind) => (
                <div
                  key={ind.name}
                  className="bg-white border border-border-default rounded-xl p-5 hover:border-brand-200 hover:shadow-md transition-all duration-300 text-center"
                >
                  <p className="text-sm font-semibold text-text-primary mb-1">{ind.name}</p>
                  <p className="text-xs text-text-muted leading-relaxed">{ind.description}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section
        id="cta"
        className="relative py-12 md:py-20 lg:py-28 bg-gradient-to-br from-brand-600 via-brand-700 to-brand-900 overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 grid-pattern-dark opacity-40" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-500/15 rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 tracking-tight">
              Transform your customer experience
            </h2>
            <p className="text-brand-200/80 text-lg mb-10 max-w-xl mx-auto">
              See how Xploro can unify your customer signals, automate responses,
              and deliver insights that drive revenue.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <button
                onClick={() => setDemoOpen(true)}
                className="group bg-white text-brand-700 font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2"
              >
                Request a Demo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-3 text-sm text-brand-200/60">
              <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5" /> 30-minute setup</span>
              <span className="hidden sm:inline">&bull;</span>
              <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5" /> No credit card</span>
              <span className="hidden sm:inline">&bull;</span>
              <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5" /> Free pilot</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="bg-zinc-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6 md:gap-10 mb-12">
            <div className="md:col-span-2">
              <div className="mb-4">
                <Image src="/logo-white.png" alt="Xploro.io" width={150} height={75} className="h-10 w-auto opacity-90" />
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
                AI Native CX Intelligence Platform. Turn every customer touchpoint
                into intelligence, and intelligence into action.
              </p>
            </div>
            <div>
              <h4 className="text-xs font-semibold tracking-wider uppercase text-zinc-500 mb-4">Platform</h4>
              <ul className="space-y-2.5">
                <li><a href="#platform" className="text-sm text-zinc-400 hover:text-white transition-colors">Platform</a></li>
                <li><Link href="/voice-analytics" className="text-sm text-zinc-400 hover:text-white transition-colors">Voice Analytics</Link></li>
                <li><a href="#agents" className="text-sm text-zinc-400 hover:text-white transition-colors">AI Agents</a></li>
                <li><a href="#impact" className="text-sm text-zinc-400 hover:text-white transition-colors">Impact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold tracking-wider uppercase text-zinc-500 mb-4">Contact</h4>
              <ul className="space-y-2.5">
                <li className="text-sm text-zinc-400">mv@xploro.io</li>
                <li className="text-sm text-zinc-400">+91 9994722006</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-zinc-600">&copy; {new Date().getFullYear()} Xploro. All rights reserved.</p>
            <p className="text-xs text-zinc-700">
              Enterprise-Ready &bull; Data Encryption &bull; Role-Based Access &bull; Compliance-Ready
            </p>
          </div>
        </div>
      </footer>

      {/* ─── Sticky Mobile CTA ─── */}
      <AnimatePresence>
        {showStickyCta && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-md border-t border-zinc-200 px-4 py-3 pb-safe"
          >
            <button
              onClick={() => setDemoOpen(true)}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-brand-500 to-brand-700 text-white font-semibold py-3.5 rounded-full shadow-lg shadow-brand-500/20 active:scale-[0.98] transition-transform"
            >
              Request Demo
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
