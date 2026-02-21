"use client";

import { useState } from "react";
import { X, ArrowRight, Check, Loader2 } from "lucide-react";

/*
 * Uses Web3Forms (https://web3forms.com) — free, no backend needed.
 * 1. Go to web3forms.com → enter mv@xploro.io → get access key via email
 * 2. Replace the placeholder below with your real key
 */
const WEB3FORMS_KEY = "8eaaacde-540d-4737-a57d-09371b600f6d";

interface DemoModalProps {
  open: boolean;
  onClose: () => void;
}

export function DemoModal({ open, onClose }: DemoModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    locations: "",
    message: "",
  });

  if (!open) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Demo Request — ${form.company} (${form.name})`,
          from_name: "Xploro Website",
          name: form.name,
          email: form.email,
          company: form.company,
          phone: form.phone || "—",
          locations: form.locations || "—",
          message: form.message || "—",
        }),
      });

      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleClose = () => {
    setSubmitted(false);
    setError("");
    setForm({ name: "", email: "", company: "", phone: "", locations: "", message: "" });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={handleClose} />

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden animate-scale-in">
        {/* Close */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-zinc-100 hover:bg-zinc-200 transition-colors"
        >
          <X className="w-4 h-4 text-zinc-500" />
        </button>

        {submitted ? (
          /* ── Success State ── */
          <div className="px-8 py-16 text-center">
            <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-emerald-50 flex items-center justify-center">
              <Check className="w-7 h-7 text-emerald-500" />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 mb-2">We&apos;ll be in touch!</h3>
            <p className="text-sm text-zinc-500 mb-8 max-w-xs mx-auto">
              Your demo request has been sent. Our team will reach out within 24 hours.
            </p>
            <button
              onClick={handleClose}
              className="text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          /* ── Form ── */
          <>
            <div className="px-5 sm:px-8 pt-6 sm:pt-8 pb-4">
              <h3 className="text-xl font-bold text-zinc-900 mb-1">Request a Demo</h3>
              <p className="text-sm text-zinc-500">
                See how Xploro transforms your customer experience. We&apos;ll set up a personalized walkthrough.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="px-5 sm:px-8 pb-8 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-zinc-700 mb-1.5">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full px-3.5 py-2.5 text-sm border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-400 transition-all placeholder:text-zinc-300"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-zinc-700 mb-1.5">Work Email *</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="john@company.com"
                    className="w-full px-3.5 py-2.5 text-sm border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-400 transition-all placeholder:text-zinc-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-zinc-700 mb-1.5">Company *</label>
                  <input
                    type="text"
                    required
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    placeholder="Acme Inc."
                    className="w-full px-3.5 py-2.5 text-sm border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-400 transition-all placeholder:text-zinc-300"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-zinc-700 mb-1.5">Phone</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+91 9999999999"
                    className="w-full px-3.5 py-2.5 text-sm border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-400 transition-all placeholder:text-zinc-300"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-700 mb-1.5">Number of Locations</label>
                <input
                  type="text"
                  value={form.locations}
                  onChange={(e) => setForm({ ...form, locations: e.target.value })}
                  placeholder="e.g. 50, 200, 800+"
                  className="w-full px-3.5 py-2.5 text-sm border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-400 transition-all placeholder:text-zinc-300"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-700 mb-1.5">Anything specific you&apos;d like to see?</label>
                <textarea
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="e.g. Voice analytics for call center, Google review management..."
                  className="w-full px-3.5 py-2.5 text-sm border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-400 transition-all resize-none placeholder:text-zinc-300"
                />
              </div>

              {error && (
                <p className="text-xs text-red-500 text-center">{error}</p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-brand-500 to-brand-700 text-white font-semibold py-3 rounded-xl hover:shadow-lg hover:shadow-brand-500/20 transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-70 disabled:pointer-events-none"
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Request Demo
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <p className="text-[10px] text-zinc-400 text-center">
                30-minute setup &bull; No credit card &bull; Free pilot
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
