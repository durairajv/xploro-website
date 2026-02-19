"use client";

import { motion } from "framer-motion";

export function DashboardMockup() {
  const bars = [40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88];

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotateX: 8 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="relative"
      style={{ perspective: "1200px" }}
    >
      <div className="absolute -inset-4 bg-gradient-to-r from-brand-200 via-brand-100 to-brand-200 rounded-3xl blur-2xl opacity-40 animate-pulse-glow" />
      <div className="relative rounded-2xl border border-brand-200 bg-white shadow-2xl shadow-brand-200/20 overflow-hidden">
        {/* Browser chrome */}
        <div className="bg-gradient-to-r from-brand-50 to-white border-b border-brand-100 px-4 py-3 flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-brand-300" />
            <div className="w-3 h-3 rounded-full bg-brand-200" />
            <div className="w-3 h-3 rounded-full bg-brand-100" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="bg-brand-50 text-text-muted text-xs px-4 py-1 rounded-full border border-brand-100">
              app.xploro.io/dashboard
            </div>
          </div>
        </div>

        <div className="p-6">
          {/* Stats row */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            {[
              { label: "Total Reviews", value: "12,847", change: "+23%", color: "text-green-500" },
              { label: "Response Rate", value: "94%", change: "+8%", color: "text-green-500" },
              { label: "Avg. Sentiment", value: "4.6/5", change: "+0.3", color: "text-green-500" },
              { label: "Active Tickets", value: "38", change: "-12%", color: "text-brand-500" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="bg-brand-50/50 rounded-xl p-4 border border-brand-100"
              >
                <div className="text-[10px] text-text-muted mb-1">{stat.label}</div>
                <div className="text-xl font-bold text-text-primary">{stat.value}</div>
                <div className={`text-xs ${stat.color} mt-1 font-medium`}>{stat.change}</div>
              </motion.div>
            ))}
          </div>

          {/* Chart area */}
          <div className="bg-brand-50/30 rounded-xl p-4 border border-brand-100">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold text-text-secondary">Sentiment Trend</span>
              <div className="flex gap-3">
                <span className="flex items-center gap-1 text-[10px] text-text-muted">
                  <span className="w-2 h-2 rounded-full bg-brand-500" /> Positive
                </span>
                <span className="flex items-center gap-1 text-[10px] text-text-muted">
                  <span className="w-2 h-2 rounded-full bg-brand-200" /> Neutral
                </span>
              </div>
            </div>
            <div className="flex items-end gap-1.5 h-24">
              {bars.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + i * 0.05, duration: 0.5 }}
                  className="flex-1 bg-gradient-to-t from-brand-500 to-brand-300 rounded-t-md"
                />
              ))}
            </div>
          </div>

          {/* Channel status row */}
          <div className="grid grid-cols-5 gap-2 mt-4">
            {["Google", "Instagram", "Facebook", "Email", "WhatsApp"].map((ch, i) => (
              <motion.div
                key={ch}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2 + i * 0.08 }}
                className="bg-white rounded-lg p-2 border border-brand-100 text-center"
              >
                <div className="text-[9px] text-text-muted">{ch}</div>
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 mx-auto mt-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function VoiceAnalyticsMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative"
    >
      <div className="rounded-2xl border border-brand-200 bg-white shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-brand-50 to-white border-b border-brand-100 px-4 py-2 flex items-center gap-2">
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-brand-300" />
            <div className="w-2 h-2 rounded-full bg-brand-200" />
            <div className="w-2 h-2 rounded-full bg-brand-100" />
          </div>
          <span className="text-[10px] text-text-muted">Voice Analytics</span>
        </div>
        <div className="p-5">
          {/* Call score */}
          <div className="flex items-center gap-4 mb-4">
            <div className="relative w-16 h-16">
              <svg className="w-16 h-16 -rotate-90" viewBox="0 0 64 64">
                <circle cx="32" cy="32" r="28" fill="none" stroke="#ffe0e6" strokeWidth="4" />
                <motion.circle
                  cx="32" cy="32" r="28" fill="none" stroke="#f83b67" strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray={176}
                  initial={{ strokeDashoffset: 176 }}
                  whileInView={{ strokeDashoffset: 176 * 0.31 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-sm font-bold text-brand-600">69%</div>
            </div>
            <div>
              <div className="text-sm font-semibold text-text-primary">Call Quality Score</div>
              <div className="text-xs text-text-muted">Based on 13,487 calls analyzed</div>
            </div>
          </div>

          {/* Waveform visualization */}
          <div className="flex items-center gap-0.5 h-8 mb-4">
            {Array.from({ length: 40 }).map((_, i) => {
              const h = 20 + Math.sin(i * 0.5) * 15 + Math.random() * 10;
              return (
                <motion.div
                  key={i}
                  initial={{ height: 2 }}
                  whileInView={{ height: `${h}px` }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + i * 0.02, duration: 0.3 }}
                  className="flex-1 bg-brand-300 rounded-full min-w-[2px]"
                />
              );
            })}
          </div>

          {/* Metrics grid */}
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "Avg Handle Time", value: "1m 46s" },
              { label: "CSAT Score", value: "1.79%" },
              { label: "Negative Calls", value: "7,143" },
            ].map((m) => (
              <div key={m.label} className="bg-brand-50/50 rounded-lg p-2 text-center border border-brand-100">
                <div className="text-xs font-bold text-text-primary">{m.value}</div>
                <div className="text-[9px] text-text-muted">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function SentimentMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative"
    >
      <div className="rounded-2xl border border-brand-200 bg-white shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-brand-50 to-white border-b border-brand-100 px-4 py-2 flex items-center gap-2">
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-brand-300" />
            <div className="w-2 h-2 rounded-full bg-brand-200" />
            <div className="w-2 h-2 rounded-full bg-brand-100" />
          </div>
          <span className="text-[10px] text-text-muted">Sentiment Analysis</span>
        </div>
        <div className="p-5">
          {/* Donut chart */}
          <div className="flex items-center gap-6 mb-4">
            <div className="relative w-20 h-20">
              <svg className="w-20 h-20 -rotate-90" viewBox="0 0 80 80">
                <circle cx="40" cy="40" r="32" fill="none" stroke="#ffe0e6" strokeWidth="8" />
                <motion.circle
                  cx="40" cy="40" r="32" fill="none" stroke="#10b981" strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={201}
                  initial={{ strokeDashoffset: 201 }}
                  whileInView={{ strokeDashoffset: 201 * 0.28 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.4 }}
                />
                <motion.circle
                  cx="40" cy="40" r="32" fill="none" stroke="#f83b67" strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={201}
                  strokeDashoffset={201 * 0.72}
                  initial={{ strokeDashoffset: 201 }}
                  whileInView={{ strokeDashoffset: 201 * 0.72 + 201 * 0.08 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.6 }}
                />
              </svg>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-xs text-text-secondary">Positive <span className="font-bold">72%</span></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="text-xs text-text-secondary">Neutral <span className="font-bold">20%</span></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-brand-500" />
                <span className="text-xs text-text-secondary">Negative <span className="font-bold">8%</span></span>
              </div>
            </div>
          </div>

          {/* Intent tags */}
          <div className="mb-3">
            <div className="text-xs font-semibold text-text-secondary mb-2">Detected Intents</div>
            <div className="flex flex-wrap gap-1.5">
              {["Praise", "Question", "Complaint", "Request", "Feedback"].map((tag) => (
                <span key={tag} className="text-[10px] bg-brand-50 text-brand-600 px-2 py-0.5 rounded-full border border-brand-200 font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Theme extraction */}
          <div>
            <div className="text-xs font-semibold text-text-secondary mb-2">Top Themes</div>
            <div className="space-y-1.5">
              {[
                { theme: "Customer Service", pct: 85 },
                { theme: "Product Quality", pct: 72 },
                { theme: "Wait Time", pct: 45 },
              ].map((t) => (
                <div key={t.theme} className="flex items-center gap-2">
                  <span className="text-[10px] text-text-muted w-24 truncate">{t.theme}</span>
                  <div className="flex-1 h-1.5 bg-brand-50 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${t.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      className="h-full bg-brand-400 rounded-full"
                    />
                  </div>
                  <span className="text-[10px] font-medium text-text-secondary">{t.pct}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
