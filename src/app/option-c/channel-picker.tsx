"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Channel {
  name: string;
  icon: React.ReactNode;
  color: string;
  tag: string;
}

export default function ChannelPicker({ channels }: { channels: Channel[] }) {
  const [selected, setSelected] = useState<Set<string>>(new Set(["Google Reviews", "Instagram", "Facebook"]));

  const toggle = (name: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <p className="text-sm text-text-muted mb-4 font-medium">
        Click channels to build your stack (<span className="text-brand-600 font-bold">{selected.size}</span> selected)
      </p>
      <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 gap-2">
        {channels.map((ch) => {
          const isSelected = selected.has(ch.name);
          return (
            <motion.button
              key={ch.name}
              onClick={() => toggle(ch.name)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`rounded-xl border-2 p-3 text-center transition-all duration-200 cursor-pointer ${
                isSelected
                  ? `${ch.color} shadow-md border-current`
                  : "bg-white border-brand-100 text-text-muted hover:border-brand-200"
              }`}
            >
              <div className="flex justify-center mb-1">{ch.icon}</div>
              <div className="text-[10px] font-semibold leading-tight">{ch.name}</div>
            </motion.button>
          );
        })}
      </div>
      <AnimatePresence>
        {selected.size > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="mt-6 inline-flex items-center gap-2 bg-brand-50 text-brand-600 rounded-full px-5 py-2.5 text-sm font-semibold border border-brand-200 shadow-sm"
          >
            Your stack: {selected.size} channels &mdash; Starting at ${selected.size <= 3 ? "29" : selected.size <= 7 ? "59" : "99"}/mo
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
