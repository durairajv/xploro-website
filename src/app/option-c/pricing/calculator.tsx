"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star, Instagram, Facebook, Twitter, Linkedin, Mail, MessageCircle,
  Smartphone, Youtube, MapPin, Utensils, Briefcase, MessageSquare,
  Ticket, BarChart3, Brain, Bot, LayoutGrid, Check, Mic, LineChart,
} from "lucide-react";

const availableChannels = [
  { id: "google", name: "Google Reviews", price: 9, icon: <Star className="w-5 h-5" />, color: "text-yellow-500" },
  { id: "instagram", name: "Instagram", price: 12, icon: <Instagram className="w-5 h-5" />, color: "text-pink-500" },
  { id: "facebook", name: "Facebook", price: 12, icon: <Facebook className="w-5 h-5" />, color: "text-blue-600" },
  { id: "twitter", name: "Twitter / X", price: 10, icon: <Twitter className="w-5 h-5" />, color: "text-sky-500" },
  { id: "linkedin", name: "LinkedIn", price: 10, icon: <Linkedin className="w-5 h-5" />, color: "text-blue-700" },
  { id: "gmail", name: "Gmail", price: 8, icon: <Mail className="w-5 h-5" />, color: "text-red-500" },
  { id: "outlook", name: "Outlook", price: 8, icon: <Mail className="w-5 h-5" />, color: "text-cyan-600" },
  { id: "whatsapp", name: "WhatsApp", price: 12, icon: <MessageCircle className="w-5 h-5" />, color: "text-green-500" },
  { id: "zoho", name: "Zoho", price: 8, icon: <Briefcase className="w-5 h-5" />, color: "text-orange-500" },
  { id: "playstore", name: "Play Store", price: 7, icon: <Smartphone className="w-5 h-5" />, color: "text-emerald-500" },
  { id: "appstore", name: "App Store", price: 7, icon: <Smartphone className="w-5 h-5" />, color: "text-gray-600" },
  { id: "youtube", name: "YouTube", price: 10, icon: <Youtube className="w-5 h-5" />, color: "text-red-600" },
  { id: "tripadvisor", name: "TripAdvisor", price: 7, icon: <MapPin className="w-5 h-5" />, color: "text-lime-600" },
  { id: "zomato", name: "Zomato", price: 7, icon: <Utensils className="w-5 h-5" />, color: "text-rose-500" },
];

const availableModules = [
  { id: "ticketing", name: "Ticketing", price: 15, icon: <Ticket className="w-5 h-5" />, color: "text-amber-600" },
  { id: "nps", name: "NPS & Surveys", price: 12, icon: <BarChart3 className="w-5 h-5" />, color: "text-teal-600" },
  { id: "sentiment", name: "Sentiment & Intent", price: 18, icon: <Brain className="w-5 h-5" />, color: "text-brand-600" },
  { id: "voice", name: "Voice Analytics", price: 25, icon: <Mic className="w-5 h-5" />, color: "text-brand-700" },
  { id: "ai-agents", name: "AI Agents", price: 30, icon: <Bot className="w-5 h-5" />, color: "text-indigo-600" },
  { id: "insights", name: "Actionable Insights", price: 20, icon: <LineChart className="w-5 h-5" />, color: "text-blue-600" },
  { id: "digital-wall", name: "Digital Wall", price: 10, icon: <LayoutGrid className="w-5 h-5" />, color: "text-emerald-600" },
  { id: "email-command", name: "Email Command Center", price: 15, icon: <MessageSquare className="w-5 h-5" />, color: "text-red-500" },
];

export default function PricingCalculator() {
  const [selectedChannels, setSelectedChannels] = useState<Set<string>>(new Set(["google", "instagram"]));
  const [selectedModules, setSelectedModules] = useState<Set<string>>(new Set(["ticketing"]));
  const [annual, setAnnual] = useState(false);

  const toggleChannel = (id: string) => {
    setSelectedChannels((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleModule = (id: string) => {
    setSelectedModules((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const channelTotal = availableChannels
    .filter((c) => selectedChannels.has(c.id))
    .reduce((sum, c) => sum + c.price, 0);

  const moduleTotal = availableModules
    .filter((m) => selectedModules.has(m.id))
    .reduce((sum, m) => sum + m.price, 0);

  const basePlatform = 9;
  const monthlyTotal = basePlatform + channelTotal + moduleTotal;
  const displayTotal = annual ? Math.round(monthlyTotal * 0.8) : monthlyTotal;

  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left: selections */}
        <div className="lg:col-span-2 space-y-8">
          {/* Channels */}
          <div>
            <h3 className="text-lg font-bold mb-4">1. Select your channels</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {availableChannels.map((ch) => {
                const isSelected = selectedChannels.has(ch.id);
                return (
                  <motion.button
                    key={ch.id}
                    onClick={() => toggleChannel(ch.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex items-center gap-2 rounded-xl border-2 p-3 text-left transition-all text-sm cursor-pointer ${
                      isSelected
                        ? "border-brand-400 bg-brand-50 shadow-sm"
                        : "border-brand-100 bg-white hover:border-brand-200"
                    }`}
                  >
                    <span className={isSelected ? ch.color : "text-text-muted"}>{ch.icon}</span>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium truncate text-xs">{ch.name}</div>
                      <div className="text-[10px] text-text-muted">${ch.price}/mo</div>
                    </div>
                    {isSelected && <Check className="w-4 h-4 text-brand-500 shrink-0" />}
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Modules */}
          <div>
            <h3 className="text-lg font-bold mb-4">2. Add modules</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {availableModules.map((mod) => {
                const isSelected = selectedModules.has(mod.id);
                return (
                  <motion.button
                    key={mod.id}
                    onClick={() => toggleModule(mod.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex items-center gap-2 rounded-xl border-2 p-3 text-left transition-all text-sm cursor-pointer ${
                      isSelected
                        ? "border-brand-400 bg-brand-50 shadow-sm"
                        : "border-brand-100 bg-white hover:border-brand-200"
                    }`}
                  >
                    <span className={isSelected ? mod.color : "text-text-muted"}>{mod.icon}</span>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium truncate text-xs">{mod.name}</div>
                      <div className="text-[10px] text-text-muted">${mod.price}/mo</div>
                    </div>
                    {isSelected && <Check className="w-4 h-4 text-brand-500 shrink-0" />}
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right: price summary */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 bg-white rounded-2xl border-2 border-brand-200 p-6 shadow-xl shadow-brand-100/30">
            <h3 className="font-bold text-lg mb-4">Your plan</h3>

            {/* Annual toggle */}
            <div className="flex items-center gap-3 mb-6 bg-brand-50 rounded-xl p-2">
              <button
                onClick={() => setAnnual(false)}
                className={`flex-1 text-xs font-semibold py-2 rounded-lg transition cursor-pointer ${
                  !annual ? "bg-white shadow text-text-primary" : "text-text-muted"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setAnnual(true)}
                className={`flex-1 text-xs font-semibold py-2 rounded-lg transition cursor-pointer ${
                  annual ? "bg-white shadow text-text-primary" : "text-text-muted"
                }`}
              >
                Annual (20% off)
              </button>
            </div>

            {/* Breakdown */}
            <div className="space-y-3 text-sm mb-6">
              <div className="flex justify-between">
                <span className="text-text-muted">Platform base</span>
                <span className="font-medium">${basePlatform}/mo</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-muted">Channels ({selectedChannels.size})</span>
                <span className="font-medium">${channelTotal}/mo</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-muted">Modules ({selectedModules.size})</span>
                <span className="font-medium">${moduleTotal}/mo</span>
              </div>
              <AnimatePresence>
                {annual && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="flex justify-between text-green-600 font-medium"
                  >
                    <span>Annual discount</span>
                    <span>-20%</span>
                  </motion.div>
                )}
              </AnimatePresence>
              <div className="border-t border-brand-100 pt-3 flex justify-between font-bold text-xl">
                <span>Total</span>
                <motion.span
                  key={displayTotal}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  ${displayTotal}<span className="text-sm font-normal text-text-muted">/mo</span>
                </motion.span>
              </div>
              {annual && (
                <div className="text-xs text-text-muted text-right">
                  Billed ${displayTotal * 12}/year
                </div>
              )}
            </div>

            {/* Selected items */}
            <div className="mb-6">
              <div className="text-xs font-bold text-text-muted mb-2 uppercase tracking-wider">Included</div>
              <div className="flex flex-wrap gap-1">
                {availableChannels
                  .filter((c) => selectedChannels.has(c.id))
                  .map((c) => (
                    <span key={c.id} className="text-[10px] bg-brand-50 text-brand-600 px-2 py-0.5 rounded-full border border-brand-200 font-medium">
                      {c.name}
                    </span>
                  ))}
                {availableModules
                  .filter((m) => selectedModules.has(m.id))
                  .map((m) => (
                    <span key={m.id} className="text-[10px] bg-brand-100 text-brand-700 px-2 py-0.5 rounded-full border border-brand-200 font-medium">
                      {m.name}
                    </span>
                  ))}
              </div>
            </div>

            <button className="w-full bg-brand-500 hover:bg-brand-600 text-white py-3 rounded-full text-sm font-semibold transition cursor-pointer shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40">
              Start 14-Day Free Trial
            </button>
            <p className="text-[10px] text-text-muted text-center mt-2">
              No credit card required
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
