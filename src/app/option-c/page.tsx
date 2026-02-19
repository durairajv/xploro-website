"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Star, MessageSquare, Mail, Ticket, BarChart3, Brain, Bot, LayoutGrid,
  ArrowRight, Instagram, Facebook, Linkedin, MessageCircle, Smartphone,
  Youtube, MapPin, Utensils, Briefcase, Twitter, Mic, LineChart, Check,
} from "lucide-react";
import { products } from "@/lib/data";
import { Logo } from "@/components/logo";
import { AnimatedSection, StaggerContainer, StaggerItem, ScaleOnHover } from "@/components/animated-section";
import { SentimentMockup, VoiceAnalyticsMockup } from "@/components/dashboard-mockup";
import ChannelPicker from "./channel-picker";

const channelCards = [
  { name: "Google Reviews", icon: <Star className="w-6 h-6" />, color: "bg-yellow-50 text-yellow-600 border-yellow-200", tag: "Reviews" },
  { name: "Instagram", icon: <Instagram className="w-6 h-6" />, color: "bg-pink-50 text-pink-600 border-pink-200", tag: "Social" },
  { name: "Facebook", icon: <Facebook className="w-6 h-6" />, color: "bg-blue-50 text-blue-600 border-blue-200", tag: "Social" },
  { name: "Twitter / X", icon: <Twitter className="w-6 h-6" />, color: "bg-sky-50 text-sky-600 border-sky-200", tag: "Social" },
  { name: "LinkedIn", icon: <Linkedin className="w-6 h-6" />, color: "bg-blue-50 text-blue-700 border-blue-200", tag: "Social" },
  { name: "Gmail", icon: <Mail className="w-6 h-6" />, color: "bg-red-50 text-red-500 border-red-200", tag: "Email" },
  { name: "Outlook", icon: <Mail className="w-6 h-6" />, color: "bg-cyan-50 text-cyan-600 border-cyan-200", tag: "Email" },
  { name: "WhatsApp", icon: <MessageCircle className="w-6 h-6" />, color: "bg-green-50 text-green-600 border-green-200", tag: "Messaging" },
  { name: "Zoho", icon: <Briefcase className="w-6 h-6" />, color: "bg-orange-50 text-orange-600 border-orange-200", tag: "CRM" },
  { name: "Play Store", icon: <Smartphone className="w-6 h-6" />, color: "bg-emerald-50 text-emerald-600 border-emerald-200", tag: "Reviews" },
  { name: "App Store", icon: <Smartphone className="w-6 h-6" />, color: "bg-gray-50 text-gray-600 border-gray-200", tag: "Reviews" },
  { name: "YouTube", icon: <Youtube className="w-6 h-6" />, color: "bg-red-50 text-red-600 border-red-200", tag: "Social" },
  { name: "TripAdvisor", icon: <MapPin className="w-6 h-6" />, color: "bg-lime-50 text-lime-700 border-lime-200", tag: "Reviews" },
  { name: "Zomato", icon: <Utensils className="w-6 h-6" />, color: "bg-rose-50 text-rose-600 border-rose-200", tag: "Reviews" },
];

const productIconMap: Record<string, React.ReactNode> = {
  star: <Star className="w-6 h-6" />,
  "message-square": <MessageSquare className="w-6 h-6" />,
  mail: <Mail className="w-6 h-6" />,
  ticket: <Ticket className="w-6 h-6" />,
  "bar-chart-3": <BarChart3 className="w-6 h-6" />,
  brain: <Brain className="w-6 h-6" />,
  bot: <Bot className="w-6 h-6" />,
  "layout-grid": <LayoutGrid className="w-6 h-6" />,
  mic: <Mic className="w-6 h-6" />,
  "line-chart": <LineChart className="w-6 h-6" />,
};

const bundles = [
  {
    name: "Review Starter",
    description: "Google + Play Store + App Store + TripAdvisor + Zomato",
    price: "$29/mo",
    channels: 5,
    color: "from-brand-400 to-brand-600",
  },
  {
    name: "Social Suite",
    description: "Instagram + Facebook + Twitter + LinkedIn + YouTube + WhatsApp",
    price: "$59/mo",
    channels: 6,
    color: "from-brand-500 to-brand-700",
  },
  {
    name: "Full Stack CX",
    description: "All 14 channels + AI Agents + Voice Analytics + Insights",
    price: "$99/mo",
    channels: 14,
    color: "from-brand-600 to-brand-800",
    popular: true,
  },
];

export default function OptionCHome() {
  return (
    <div className="min-h-screen bg-white text-text-primary">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-brand-100/50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Logo href="/option-c" />
          <div className="hidden md:flex items-center gap-8 text-sm text-text-secondary">
            <Link href="#channels" className="hover:text-brand-600 transition">Channels</Link>
            <Link href="#modules" className="hover:text-brand-600 transition">Modules</Link>
            <Link href="#ai-power" className="hover:text-brand-600 transition">AI & Voice</Link>
            <Link href="/clients" className="hover:text-brand-600 transition">Clients</Link>
            <Link href="/option-c/pricing" className="hover:text-brand-600 transition">Pricing</Link>
          </div>
          <div className="flex items-center gap-3">
            <Link href="#" className="text-sm text-text-secondary hover:text-text-primary transition hidden sm:block">Sign in</Link>
            <Link href="#" className="text-sm bg-brand-500 hover:bg-brand-600 text-white px-5 py-2.5 rounded-full transition font-medium shadow-lg shadow-brand-500/25">
              Choose Your Channels
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-28 pb-16 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-b from-brand-100/30 via-brand-50/10 to-transparent rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute inset-0 dot-pattern opacity-20" />

        <div className="max-w-5xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 text-sm text-brand-600 bg-brand-50 rounded-full px-4 py-2 mb-6 border border-brand-200 font-medium"
          >
            14+ channels, one platform, pay for what you need
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold leading-tight mb-6"
          >
            Build your perfect
            <br />
            <span className="gradient-text-vibrant">CX stack</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-text-secondary max-w-2xl mx-auto mb-10"
          >
            Pick the channels your customers use. Add AI intelligence, voice analytics, and NPS.
            Only pay for what you need.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link href="#channels" className="bg-brand-500 hover:bg-brand-600 text-white px-8 py-3.5 rounded-full text-sm font-medium transition flex items-center gap-2 shadow-lg shadow-brand-500/25">
              Choose Your Channels <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="#modules" className="border border-brand-200 hover:border-brand-300 bg-white text-text-primary px-8 py-3.5 rounded-full text-sm font-medium transition hover:bg-brand-50">
              See All Modules
            </Link>
          </motion.div>

          {/* Interactive Channel Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <ChannelPicker channels={channelCards} />
          </motion.div>
        </div>
      </section>

      {/* Channel Grid */}
      <section id="channels" className="py-20 px-6 bg-surface-alt">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Every channel, <span className="gradient-text">one dashboard</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Connect the platforms your customers already use. Each channel card shows what you get.
            </p>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3" staggerDelay={0.04}>
            {channelCards.map((ch) => (
              <StaggerItem key={ch.name}>
                <ScaleOnHover scale={1.06}>
                  <div className={`rounded-xl border p-4 text-center cursor-pointer ${ch.color}`}>
                    <div className="flex justify-center mb-2">{ch.icon}</div>
                    <div className="text-xs font-semibold">{ch.name}</div>
                    <div className="text-[10px] mt-1 opacity-60">{ch.tag}</div>
                  </div>
                </ScaleOnHover>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Module Cards */}
      <section id="modules" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Powerful modules, <span className="gradient-text">mix & match</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Each module adds superpowers to your CX stack. Combine them for maximum impact.
            </p>
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-5 gap-4" staggerDelay={0.05}>
            {products.map((product) => (
              <StaggerItem key={product.name}>
                <ScaleOnHover>
                  <div className="rounded-2xl border-2 border-brand-100 p-6 hover:border-brand-300 hover:shadow-xl transition-all duration-300 h-full bg-white group">
                    <div className="w-11 h-11 rounded-xl bg-brand-50 flex items-center justify-center text-brand-500 mb-4 group-hover:bg-brand-100 transition">
                      {productIconMap[product.icon]}
                    </div>
                    <h3 className="font-bold text-sm mb-2">{product.name}</h3>
                    <p className="text-xs text-text-secondary leading-relaxed mb-3">{product.description}</p>
                    <span className="text-[10px] font-bold text-brand-600 bg-brand-50 px-2 py-0.5 rounded-full">{product.highlight}</span>
                  </div>
                </ScaleOnHover>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* AI & Voice Analytics */}
      <section id="ai-power" className="py-20 px-6 bg-surface-alt">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI-Powered <span className="gradient-text">Intelligence</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Sentiment analysis, intent detection, voice analytics, and AI agents — all built in.
            </p>
          </AnimatedSection>
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <SentimentMockup />
            <VoiceAnalyticsMockup />
          </div>
          <StaggerContainer className="grid md:grid-cols-4 gap-4" staggerDelay={0.08}>
            {[
              { label: "Sentiment Analysis", desc: "Positive, negative, neutral across all channels", icon: <Brain className="w-5 h-5" /> },
              { label: "Voice Analytics", desc: "Call scoring, transcription, coaching", icon: <Mic className="w-5 h-5" /> },
              { label: "AI Auto-Response", desc: "GPT-4o powered, brand-voice matched", icon: <Bot className="w-5 h-5" /> },
              { label: "Actionable Insights", desc: "Weekly digest, competitor intel, trends", icon: <LineChart className="w-5 h-5" /> },
            ].map((item) => (
              <StaggerItem key={item.label}>
                <div className="bg-white rounded-xl p-4 border border-brand-100 text-center hover:shadow-lg transition">
                  <div className="w-10 h-10 rounded-lg bg-brand-50 text-brand-500 flex items-center justify-center mx-auto mb-3">
                    {item.icon}
                  </div>
                  <div className="font-semibold text-sm mb-1">{item.label}</div>
                  <div className="text-xs text-text-muted">{item.desc}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Bundle Packages */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pre-built <span className="gradient-text">bundles</span></h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              Don&apos;t want to build from scratch? Pick a ready-made bundle and go.
            </p>
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.1}>
            {bundles.map((bundle) => (
              <StaggerItem key={bundle.name}>
                <ScaleOnHover>
                  <div className={`rounded-2xl overflow-hidden bg-white border border-brand-100 hover:shadow-xl transition-all ${
                    bundle.popular ? "ring-2 ring-brand-400" : ""
                  }`}>
                    <div className={`h-2 bg-gradient-to-r ${bundle.color}`} />
                    <div className="p-6">
                      {bundle.popular && (
                        <span className="text-xs font-bold text-brand-600 bg-brand-50 px-2 py-0.5 rounded-full border border-brand-200">
                          Most Popular
                        </span>
                      )}
                      <h3 className="text-xl font-bold mt-2 mb-1">{bundle.name}</h3>
                      <p className="text-sm text-text-secondary mb-4">{bundle.description}</p>
                      <div className="flex items-baseline gap-1 mb-2">
                        <span className="text-3xl font-bold">{bundle.price}</span>
                      </div>
                      <div className="text-xs text-text-muted mb-6">{bundle.channels} channels included</div>
                      <Link href="#" className={`block text-center py-2.5 rounded-full text-sm font-semibold transition ${
                        bundle.popular
                          ? "bg-brand-500 hover:bg-brand-600 text-white shadow-lg shadow-brand-500/25"
                          : "border border-brand-200 hover:border-brand-300 hover:bg-brand-50 text-text-primary"
                      }`}>
                        Get Started
                      </Link>
                    </div>
                  </div>
                </ScaleOnHover>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700" />
        <div className="absolute inset-0 dot-pattern opacity-10" />

        <AnimatedSection className="max-w-4xl mx-auto text-center relative">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Ready to build your stack?
          </h2>
          <p className="text-brand-100 mb-10 max-w-xl mx-auto text-lg">
            Start with the channels you need. Add more anytime. Only pay for what you use.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/option-c/pricing" className="bg-white text-brand-600 px-8 py-3.5 rounded-full text-sm font-semibold transition flex items-center gap-2 hover:bg-brand-50 shadow-xl">
              Build Your Plan <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="#" className="text-white/80 hover:text-white text-sm transition">
              Or talk to sales &rarr;
            </Link>
          </div>
        </AnimatedSection>
      </section>

      {/* Footer */}
      <footer className="border-t border-brand-100 py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-text-muted">&copy; {new Date().getFullYear()} Xploro. All rights reserved.</div>
          <div className="flex gap-6 text-sm text-text-muted">
            <Link href="#" className="hover:text-brand-600 transition">Privacy</Link>
            <Link href="#" className="hover:text-brand-600 transition">Terms</Link>
            <Link href="#" className="hover:text-brand-600 transition">Contact</Link>
          </div>
          <Link href="/" className="text-xs text-text-muted hover:text-brand-600 transition">&larr; Back to options</Link>
        </div>
      </footer>
    </div>
  );
}
