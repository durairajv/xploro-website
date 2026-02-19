"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Logo } from "@/components/logo";
import { AnimatedSection } from "@/components/animated-section";
import PricingCalculator from "./calculator";

export default function OptionCPricing() {
  return (
    <div className="min-h-screen bg-white text-text-primary">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-brand-100/50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Logo href="/option-c" />
          <div className="hidden md:flex items-center gap-8 text-sm text-text-secondary">
            <Link href="/option-c#channels" className="hover:text-brand-600 transition">Channels</Link>
            <Link href="/option-c#modules" className="hover:text-brand-600 transition">Modules</Link>
            <Link href="/clients" className="hover:text-brand-600 transition">Clients</Link>
            <Link href="/option-c/pricing" className="text-brand-600 font-medium">Pricing</Link>
          </div>
          <Link href="#" className="text-sm bg-brand-500 hover:bg-brand-600 text-white px-5 py-2.5 rounded-full transition font-medium shadow-lg shadow-brand-500/25">
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-8 px-6 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="max-w-4xl mx-auto text-center relative">
          <Link href="/option-c" className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-brand-600 transition mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Build your plan,{" "}
            <span className="gradient-text">your way</span>
          </h1>
          <p className="text-lg text-text-secondary max-w-xl mx-auto">
            Select the channels and modules you need. See your price update instantly.
          </p>
        </div>
      </section>

      {/* Interactive Calculator */}
      <section className="py-12 px-6">
        <PricingCalculator />
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-surface-alt">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection className="text-center mb-8">
            <h2 className="text-2xl font-bold">Common <span className="gradient-text">questions</span></h2>
          </AnimatedSection>
          <div className="space-y-3">
            {[
              { q: "Can I change my plan later?", a: "Yes! Add or remove channels and modules anytime. Your bill adjusts automatically at the next billing cycle." },
              { q: "Is there a free trial?", a: "Every plan includes a 14-day free trial. No credit card required to start." },
              { q: "What if I need all channels?", a: "Our Full Stack bundle gives you all 14 channels at a significant discount vs. buying individually." },
              { q: "Do you offer annual billing?", a: "Yes — save 20% with annual billing on any plan. Contact sales for enterprise agreements." },
              { q: "Is Voice Analytics included?", a: "Voice Analytics is available as a module add-on starting at $25/mo, or included in Growth plans and above." },
            ].map((faq) => (
              <AnimatedSection key={faq.q}>
                <div className="bg-white rounded-xl p-6 border border-brand-100 hover:border-brand-200 transition">
                  <h3 className="font-semibold mb-2">{faq.q}</h3>
                  <p className="text-sm text-text-secondary">{faq.a}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
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
