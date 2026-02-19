"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowLeft, ArrowRight, Quote, Star, MapPin,
  TrendingUp, Users, Zap, Shield, BarChart3,
} from "lucide-react";
import { Logo } from "@/components/logo";
import { AnimatedSection, StaggerContainer, StaggerItem, ScaleOnHover } from "@/components/animated-section";
import { Counter } from "@/components/counter";
import { clients, clientTestimonials } from "@/lib/data";

const impactStats = [
  { value: "500+", label: "Brands Trust Xploro", icon: <Users className="w-5 h-5" /> },
  { value: "400+", label: "Locations Managed", icon: <MapPin className="w-5 h-5" /> },
  { value: "50M+", label: "Interactions Processed", icon: <Zap className="w-5 h-5" /> },
  { value: "94%", label: "Faster Response Times", icon: <TrendingUp className="w-5 h-5" /> },
];

const caseStudies = [
  {
    company: "Zeon Charging Network",
    industry: "EV & Energy",
    challenge: "Managing Google Business Profiles and reviews across 400+ EV charging locations with a lean team.",
    solution: "Xploro unified all 400+ locations into a single dashboard with AI-powered review responses and automated profile maintenance.",
    results: [
      { metric: "400+", label: "Locations unified" },
      { metric: "10x", label: "Faster response time" },
      { metric: "4.8\u2605", label: "Average rating maintained" },
    ],
    quote: "Xploro enabled quick onboarding, data maintenance, and AI-powered review responses at scale.",
    author: "Madhan",
    role: "Digital Manager",
  },
  {
    company: "The Souled Store",
    industry: "Retail & Fashion",
    challenge: "Tracking customer sentiment across departments — from courier performance to delivery timelines — with no unified view.",
    solution: "Xploro\u2019s NPS tracking and sentiment analysis provided consolidated visibility across all customer touchpoints.",
    results: [
      { metric: "25%", label: "Efficiency improvement" },
      { metric: "360\u00b0", label: "Sentiment visibility" },
      { metric: "Real-time", label: "Department insights" },
    ],
    quote: "NPS tracking provides consolidated customer sentiment visibility, improving efficiency by 25%.",
    author: "Jaynam Mehta",
    role: "Product Manager",
  },
  {
    company: "Enterprise Client",
    industry: "Services",
    challenge: "No visibility into call center quality — agents were unmonitored, CSAT scores stagnant, and coaching was inconsistent.",
    solution: "Xploro\u2019s Voice Analytics scored every call with AI, identified improvement areas, and delivered automated coaching recommendations.",
    results: [
      { metric: "27%", label: "CSAT increase" },
      { metric: "Month 1", label: "Results timeline" },
      { metric: "100%", label: "Calls analyzed" },
    ],
    quote: "AI-powered call monitoring increased CSAT scores 27% within month one.",
    author: "Sufiyan Khan",
    role: "CX Head",
  },
];

export default function ClientsPage() {
  return (
    <div className="min-h-screen bg-white text-text-primary">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-brand-100/50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Logo href="/" />
          <div className="hidden md:flex items-center gap-8 text-sm text-text-secondary">
            <Link href="/#" className="hover:text-brand-600 transition">Home</Link>
            <Link href="/clients" className="text-brand-600 font-medium">Clients</Link>
            <Link href="/option-a/pricing" className="hover:text-brand-600 transition">Pricing</Link>
          </div>
          <Link href="#contact" className="text-sm bg-brand-500 hover:bg-brand-600 text-white px-5 py-2.5 rounded-full transition font-medium shadow-lg shadow-brand-500/25">
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-brand-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-40 w-96 h-96 bg-brand-50/50 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-brand-600 transition mb-8">
              <ArrowLeft className="w-4 h-4" /> Back to home
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 text-xs text-brand-600 border border-brand-200 bg-brand-50 rounded-full px-4 py-1.5 mb-6 font-medium"
          >
            <Shield className="w-3.5 h-3.5" />
            Trusted by 500+ brands
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Brands that chose{" "}
            <span className="gradient-text">Xploro</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto"
          >
            From fast-growing D2C brands to enterprise chains with 400+ locations,
            see how companies transform their customer experience with Xploro.
          </motion.p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-12 px-6 border-y border-brand-100 bg-brand-50/30">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {impactStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-brand-100 text-brand-600 mb-3">
                {stat.icon}
              </div>
              <Counter value={stat.value} label={stat.label} className="text-center" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Client Logo Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">
              Our <span className="gradient-text">Clients</span>
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              Industry leaders across retail, hospitality, healthcare, EV, and more trust Xploro to manage their customer experience.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-3 md:grid-cols-5 gap-4" staggerDelay={0.06}>
            {clients.map((client) => (
              <StaggerItem key={client.name}>
                <ScaleOnHover>
                  <div className="bg-white rounded-2xl border-2 border-brand-100 hover:border-brand-300 p-6 flex flex-col items-center justify-center h-36 transition-all group">
                    <div className="relative w-full h-16 flex items-center justify-center mb-3">
                      <Image
                        src={client.logo}
                        alt={client.name}
                        width={120}
                        height={60}
                        className="object-contain max-h-14 grayscale group-hover:grayscale-0 transition-all duration-300"
                        unoptimized
                      />
                    </div>
                    <span className="text-[10px] font-medium text-text-muted group-hover:text-brand-600 transition text-center leading-tight">
                      {client.name}
                    </span>
                  </div>
                </ScaleOnHover>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Marquee Logo Strip */}
      <section className="py-8 border-y border-brand-100 bg-brand-50/20 overflow-hidden">
        <div className="flex animate-marquee gap-12 items-center">
          {[...clients, ...clients].map((client, i) => (
            <div key={`${client.name}-${i}`} className="flex-shrink-0 w-32 h-12 flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity">
              <Image
                src={client.logo}
                alt={client.name}
                width={100}
                height={40}
                className="object-contain max-h-10"
                unoptimized
              />
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">
              What our clients <span className="gradient-text">say</span>
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              Real results from real teams using Xploro every day.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 gap-6" staggerDelay={0.1}>
            {clientTestimonials.map((t) => (
              <StaggerItem key={t.author}>
                <div className="bg-white rounded-2xl border-2 border-brand-100 hover:border-brand-300 p-8 transition-all h-full flex flex-col">
                  <Quote className="w-8 h-8 text-brand-200 mb-4" />
                  <p className="text-text-secondary leading-relaxed flex-1 mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center text-white text-sm font-bold">
                        {t.avatar}
                      </div>
                      <div>
                        <div className="font-semibold text-sm">{t.author}</div>
                        <div className="text-xs text-text-muted">{t.role}, {t.company}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-brand-600">{t.metric}</div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-6 bg-surface-alt">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">
              Customer <span className="gradient-text">success stories</span>
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              Deep dives into how Xploro transforms customer experience operations.
            </p>
          </AnimatedSection>

          <div className="space-y-8">
            {caseStudies.map((cs, index) => (
              <AnimatedSection key={cs.company} direction={index % 2 === 0 ? "left" : "right"}>
                <div className="bg-white rounded-2xl border-2 border-brand-100 overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                  <div className="grid md:grid-cols-5 gap-0">
                    {/* Left: gradient panel */}
                    <div className="md:col-span-2 bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 p-8 text-white flex flex-col justify-between">
                      <div>
                        <span className="text-xs font-medium bg-white/20 rounded-full px-3 py-1">{cs.industry}</span>
                        <h3 className="text-2xl font-bold mt-4 mb-2">{cs.company}</h3>
                        <p className="text-white/80 text-sm leading-relaxed">{cs.challenge}</p>
                      </div>
                      <div className="grid grid-cols-3 gap-3 mt-6">
                        {cs.results.map((r) => (
                          <div key={r.label}>
                            <div className="text-xl font-bold">{r.metric}</div>
                            <div className="text-[10px] text-white/70">{r.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right: details */}
                    <div className="md:col-span-3 p-8 flex flex-col justify-between">
                      <div>
                        <h4 className="text-xs font-bold text-brand-600 uppercase tracking-wider mb-2">Solution</h4>
                        <p className="text-text-secondary leading-relaxed mb-6">{cs.solution}</p>

                        <div className="bg-brand-50 rounded-xl p-5 border border-brand-100">
                          <Quote className="w-5 h-5 text-brand-300 mb-2" />
                          <p className="text-sm text-text-secondary italic mb-3">&ldquo;{cs.quote}&rdquo;</p>
                          <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center text-white text-[10px] font-bold">
                              {cs.author[0]}
                            </div>
                            <div>
                              <span className="text-xs font-semibold">{cs.author}</span>
                              <span className="text-xs text-text-muted"> &mdash; {cs.role}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">
              Industries we <span className="gradient-text">serve</span>
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              Purpose-built for multi-location businesses across every vertical.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4" staggerDelay={0.06}>
            {[
              { name: "Retail & Fashion", icon: <Star className="w-5 h-5" />, desc: "Multi-location retailers unify reviews, social, and in-store feedback at scale." },
              { name: "EV & Energy", icon: <Zap className="w-5 h-5" />, desc: "Charging networks manage 400+ location profiles and reviews from one dashboard." },
              { name: "Hospitality", icon: <MapPin className="w-5 h-5" />, desc: "Hotels and restaurants manage guest reviews, TripAdvisor, and social engagement." },
              { name: "Healthcare", icon: <Shield className="w-5 h-5" />, desc: "Hospitals monitor patient feedback with compliant, AI-powered responses." },
              { name: "Food & Beverage", icon: <BarChart3 className="w-5 h-5" />, desc: "QSR and restaurant chains track Zomato, Google, and social feedback." },
              { name: "Banking & Finance", icon: <TrendingUp className="w-5 h-5" />, desc: "Financial institutions track sentiment across digital channels." },
              { name: "E-Commerce", icon: <Users className="w-5 h-5" />, desc: "D2C brands automate social engagement and track app store reviews." },
              { name: "Automotive", icon: <Zap className="w-5 h-5" />, desc: "Dealerships and service centers manage Google reviews and customer calls." },
            ].map((ind) => (
              <StaggerItem key={ind.name}>
                <ScaleOnHover>
                  <div className="bg-white rounded-xl border-2 border-brand-100 hover:border-brand-300 p-6 transition-all h-full">
                    <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-3">
                      {ind.icon}
                    </div>
                    <h3 className="font-semibold text-sm mb-1">{ind.name}</h3>
                    <p className="text-xs text-text-muted leading-relaxed">{ind.desc}</p>
                  </div>
                </ScaleOnHover>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-brand-600 via-brand-700 to-brand-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-10" />
        <AnimatedSection className="max-w-3xl mx-auto text-center relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join 500+ brands transforming their CX
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            Start your 14-day free trial today. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="#" className="inline-flex items-center gap-2 bg-white text-brand-600 px-8 py-3 rounded-full text-sm font-semibold transition hover:bg-brand-50 shadow-lg">
              Start Free Trial <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="#" className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-3 rounded-full text-sm font-semibold transition hover:bg-white/10">
              Book a Demo
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
