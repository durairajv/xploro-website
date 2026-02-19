"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

/* ─── Channel Data ─── */

const channels = [
  { name: "Google Reviews", color: "#FBBC04", highlight: false },
  { name: "Instagram", color: "#E1306C", highlight: false },
  { name: "Facebook", color: "#1877F2", highlight: false },
  { name: "Call Center", color: "#8B5CF6", highlight: true },
  { name: "In-Store Voice", color: "#06B6D4", highlight: true },
  { name: "Email", color: "#EA4335", highlight: false },
  { name: "WhatsApp", color: "#25D366", highlight: false },
  { name: "LinkedIn", color: "#0A66C2", highlight: false },
  { name: "Twitter / X", color: "#1DA1F2", highlight: false },
];

const outputs = [
  { name: "Insights Dashboard", desc: "Real-time analytics & trends", color: "#8B5CF6" },
  { name: "Auto-Response Agent", desc: "AI replies in your brand voice", color: "#E84C8A" },
  { name: "Smart Ticketing", desc: "Route, escalate & track SLAs", color: "#10B981" },
  { name: "Human Review", desc: "Approve AI drafts (HITL)", color: "#06B6D4" },
  { name: "Marketing Agent", desc: "Campaign recommendations", color: "#F59E0B" },
  { name: "Lead & Sales Agent", desc: "Lead scoring & forwarding", color: "#3B82F6" },
];

/* ─── SVG Channel Icon Paths ─── */

function ChannelIcon({ channel, cx, cy, r }: { channel: string; cx: number; cy: number; r: number }) {
  const s = r * 0.55; // icon scale
  switch (channel) {
    case "Google Reviews":
      // Star shape
      return (
        <polygon
          points={`${cx},${cy - s} ${cx + s * 0.22},${cy - s * 0.3} ${cx + s * 0.95},${cy - s * 0.3} ${cx + s * 0.36},${cy + s * 0.12} ${cx + s * 0.59},${cy + s * 0.81} ${cx},${cy + s * 0.38} ${cx - s * 0.59},${cy + s * 0.81} ${cx - s * 0.36},${cy + s * 0.12} ${cx - s * 0.95},${cy - s * 0.3} ${cx - s * 0.22},${cy - s * 0.3}`}
          fill="white"
        />
      );
    case "Instagram":
      // Rounded square with circle
      return (
        <g>
          <rect x={cx - s} y={cy - s} width={s * 2} height={s * 2} rx={s * 0.4} fill="none" stroke="white" strokeWidth="1.3" />
          <circle cx={cx} cy={cy} r={s * 0.45} fill="none" stroke="white" strokeWidth="1.2" />
          <circle cx={cx + s * 0.55} cy={cy - s * 0.55} r={s * 0.12} fill="white" />
        </g>
      );
    case "Facebook":
      // f letter
      return (
        <text x={cx} y={cy + s * 0.4} textAnchor="middle" fill="white" fontSize={s * 2} fontWeight="700" fontFamily="Georgia, serif">
          f
        </text>
      );
    case "Call Center":
      // Phone icon
      return (
        <g transform={`translate(${cx},${cy})`}>
          <path d={`M${-s * 0.7} ${-s * 0.3} C${-s * 0.7} ${-s * 0.7} ${-s * 0.3} ${-s * 0.9} ${-s * 0.1} ${-s * 0.5} L${s * 0.1} ${-s * 0.3} L${-s * 0.15} ${s * 0.1} L${-s * 0.3} ${s * 0.3} C${-s * 0.1} ${s * 0.7} ${s * 0.3} ${s * 0.9} ${s * 0.7} ${s * 0.3} L${s * 0.5} ${s * 0.1} L${s * 0.3} ${-s * 0.1}`}
            fill="none" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      );
    case "In-Store Voice":
      // Microphone
      return (
        <g>
          <rect x={cx - s * 0.3} y={cy - s * 0.7} width={s * 0.6} height={s * 1} rx={s * 0.3} fill="none" stroke="white" strokeWidth="1.2" />
          <path d={`M${cx - s * 0.55} ${cy + s * 0.05} Q${cx - s * 0.55} ${cy + s * 0.7} ${cx} ${cy + s * 0.7} Q${cx + s * 0.55} ${cy + s * 0.7} ${cx + s * 0.55} ${cy + s * 0.05}`}
            fill="none" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
          <line x1={cx} y1={cy + s * 0.7} x2={cx} y2={cy + s * 0.95} stroke="white" strokeWidth="1.2" strokeLinecap="round" />
        </g>
      );
    case "Email":
      // Envelope
      return (
        <g>
          <rect x={cx - s * 0.8} y={cy - s * 0.5} width={s * 1.6} height={s * 1} rx={s * 0.12} fill="none" stroke="white" strokeWidth="1.2" />
          <path d={`M${cx - s * 0.8} ${cy - s * 0.5} L${cx} ${cy + s * 0.1} L${cx + s * 0.8} ${cy - s * 0.5}`}
            fill="none" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      );
    case "WhatsApp":
      // Chat bubble with phone
      return (
        <g>
          <circle cx={cx} cy={cy - s * 0.05} r={s * 0.8} fill="none" stroke="white" strokeWidth="1.2" />
          <path d={`M${cx - s * 0.3} ${cy + s * 0.7} L${cx - s * 0.65} ${cy + s * 0.95} L${cx - s * 0.1} ${cy + s * 0.7}`}
            fill="white" stroke="white" strokeWidth="0.5" />
        </g>
      );
    case "LinkedIn":
      // in letters
      return (
        <text x={cx} y={cy + s * 0.35} textAnchor="middle" fill="white" fontSize={s * 1.4} fontWeight="700" fontFamily="Georgia, serif" letterSpacing="-0.5">
          in
        </text>
      );
    case "Twitter / X":
      // X shape
      return (
        <g>
          <line x1={cx - s * 0.5} y1={cy - s * 0.5} x2={cx + s * 0.5} y2={cy + s * 0.5} stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          <line x1={cx + s * 0.5} y1={cy - s * 0.5} x2={cx - s * 0.5} y2={cy + s * 0.5} stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        </g>
      );
    default:
      return null;
  }
}

/* ─── Output Icon Paths ─── */

function OutputIcon({ index, cx, cy, r }: { index: number; cx: number; cy: number; r: number }) {
  const s = r * 0.55;
  switch (index) {
    case 0: // Insights — bar chart
      return (
        <g>
          <rect x={cx - s * 0.7} y={cy - s * 0.1} width={s * 0.35} height={s * 0.7} rx="1" fill="white" />
          <rect x={cx - s * 0.18} y={cy - s * 0.6} width={s * 0.35} height={s * 1.2} rx="1" fill="white" />
          <rect x={cx + s * 0.35} y={cy - s * 0.35} width={s * 0.35} height={s * 0.95} rx="1" fill="white" />
        </g>
      );
    case 1: // Auto-Response — lightning
      return (
        <g>
          <path d={`M${cx} ${cy - s * 0.8} L${cx - s * 0.4} ${cy + s * 0.05} L${cx + s * 0.1} ${cy + s * 0.05} L${cx} ${cy + s * 0.8} L${cx + s * 0.4} ${cy - s * 0.05} L${cx - s * 0.1} ${cy - s * 0.05} Z`}
            fill="white" />
        </g>
      );
    case 2: // Smart Ticketing — ticket
      return (
        <g>
          <rect x={cx - s * 0.7} y={cy - s * 0.5} width={s * 1.4} height={s * 1} rx={s * 0.12} fill="none" stroke="white" strokeWidth="1.2" />
          <line x1={cx - s * 0.25} y1={cy - s * 0.5} x2={cx - s * 0.25} y2={cy + s * 0.5} stroke="white" strokeWidth="1" strokeDasharray="2 2" />
          <circle cx={cx + s * 0.25} cy={cy - s * 0.1} r={s * 0.15} fill="white" />
          <line x1={cx + s * 0.05} y1={cy + s * 0.2} x2={cx + s * 0.5} y2={cy + s * 0.2} stroke="white" strokeWidth="1" strokeLinecap="round" />
        </g>
      );
    case 3: // Human Review — person check
      return (
        <g>
          <circle cx={cx - s * 0.15} cy={cy - s * 0.4} r={s * 0.35} fill="none" stroke="white" strokeWidth="1.2" />
          <path d={`M${cx - s * 0.8} ${cy + s * 0.7} Q${cx - s * 0.15} ${cy + s * 0.1} ${cx + s * 0.5} ${cy + s * 0.7}`}
            fill="none" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
          <path d={`M${cx + s * 0.3} ${cy + s * 0.1} L${cx + s * 0.55} ${cy + s * 0.35} L${cx + s * 0.85} ${cy - s * 0.15}`}
            fill="none" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      );
    case 4: // Marketing — megaphone
      return (
        <g transform={`translate(${cx},${cy})`}>
          <path d={`M${-s * 0.7} ${-s * 0.15} L${-s * 0.3} ${-s * 0.15} L${s * 0.6} ${-s * 0.6} L${s * 0.6} ${s * 0.6} L${-s * 0.3} ${s * 0.15} L${-s * 0.7} ${s * 0.15} Z`}
            fill="none" stroke="white" strokeWidth="1.2" strokeLinejoin="round" />
        </g>
      );
    case 5: // Lead & Sales — target
      return (
        <g>
          <circle cx={cx} cy={cy} r={s * 0.8} fill="none" stroke="white" strokeWidth="1.1" />
          <circle cx={cx} cy={cy} r={s * 0.45} fill="none" stroke="white" strokeWidth="1.1" />
          <circle cx={cx} cy={cy} r={s * 0.15} fill="white" />
        </g>
      );
    default:
      return null;
  }
}

/* SVG coordinates for channel cards (left side) — spread across 700px height */
const channelPositions = [
  { x: 10, y: 10 },
  { x: 10, y: 85 },
  { x: 10, y: 160 },
  { x: 10, y: 235 },
  { x: 10, y: 310 },
  { x: 10, y: 385 },
  { x: 10, y: 460 },
  { x: 10, y: 535 },
  { x: 10, y: 610 },
];

/* Hub center */
const hubX = 560;
const hubY = 350;

/* SVG coordinates for output cards (right side) — 6 cards spread across 700px */
const outputPositions = [
  { x: 940, y: 40 },
  { x: 940, y: 146 },
  { x: 940, y: 252 },
  { x: 940, y: 358 },
  { x: 940, y: 464 },
  { x: 940, y: 570 },
];

/* Bezier paths: channel right-edge -> hub left-edge */
function getInputPath(idx: number): string {
  const cp = channelPositions[idx];
  const startX = 195;
  const startY = cp.y + 25;
  const endX = hubX - 66;
  const endY = hubY;

  const curves = [
    `M ${startX} ${startY} C ${startX + 100} ${startY - 15}, ${endX - 120} ${endY - 40}, ${endX} ${endY}`,
    `M ${startX} ${startY} C ${startX + 80} ${startY - 8}, ${endX - 100} ${endY - 25}, ${endX} ${endY}`,
    `M ${startX} ${startY} C ${startX + 120} ${startY}, ${endX - 80} ${endY - 10}, ${endX} ${endY}`,
    `M ${startX} ${startY} C ${startX + 140} ${startY + 10}, ${endX - 60} ${endY + 5}, ${endX} ${endY}`,
    `M ${startX} ${startY} C ${startX + 130} ${startY - 5}, ${endX - 70} ${endY + 10}, ${endX} ${endY}`,
    `M ${startX} ${startY} C ${startX + 100} ${startY + 8}, ${endX - 100} ${endY + 15}, ${endX} ${endY}`,
    `M ${startX} ${startY} C ${startX + 90} ${startY + 12}, ${endX - 110} ${endY + 30}, ${endX} ${endY}`,
    `M ${startX} ${startY} C ${startX + 110} ${startY + 15}, ${endX - 90} ${endY + 40}, ${endX} ${endY}`,
    `M ${startX} ${startY} C ${startX + 80} ${startY + 20}, ${endX - 120} ${endY + 50}, ${endX} ${endY}`,
  ];
  return curves[idx];
}

/* Bezier paths: hub right-edge -> output left-edge */
function getOutputPath(idx: number): string {
  const op = outputPositions[idx];
  const startX = hubX + 66;
  const startY = hubY;
  const endX = op.x;
  const endY = op.y + 25;

  const curves = [
    `M ${startX} ${startY} C ${startX + 80} ${startY - 35}, ${endX - 120} ${endY + 25}, ${endX} ${endY}`,
    `M ${startX} ${startY} C ${startX + 100} ${startY - 20}, ${endX - 100} ${endY + 15}, ${endX} ${endY}`,
    `M ${startX} ${startY} C ${startX + 110} ${startY - 8}, ${endX - 90} ${endY + 5}, ${endX} ${endY}`,
    `M ${startX} ${startY} C ${startX + 120} ${startY + 5}, ${endX - 80} ${endY - 5}, ${endX} ${endY}`,
    `M ${startX} ${startY} C ${startX + 100} ${startY + 18}, ${endX - 100} ${endY - 12}, ${endX} ${endY}`,
    `M ${startX} ${startY} C ${startX + 80} ${startY + 35}, ${endX - 120} ${endY - 25}, ${endX} ${endY}`,
  ];
  return curves[idx];
}

/* ─── Main Component ─── */

export function PlatformFlow({ compact = false }: { compact?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  /* ── The core SVG flow visualization ── */
  const flowSvg = (
    <div className="relative w-full h-full">
      <svg
        viewBox="0 0 1200 700"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
        style={{ overflow: "visible" }}
      >
        <defs>
          <filter id="card-shadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#000" floodOpacity="0.08" />
          </filter>
          <linearGradient id="hub-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E84C8A" />
            <stop offset="100%" stopColor="#90184E" />
          </linearGradient>
        </defs>

        {/* ── Input Paths (channel -> hub) ── */}
        {channels.map((ch, i) => {
          const strokeW = ch.highlight ? "1.5" : "0.8";
          const strokeColor = ch.highlight ? ch.color : "#A1A1AA";
          return (
            <g key={`input-${i}`}>
              <path
                d={getInputPath(i)}
                className="flow-path"
                stroke={strokeColor}
                strokeWidth={strokeW}
                opacity={ch.highlight ? 0.5 : 0.35}
              />
              {[0, 1, 2].map((j) => (
                <circle key={j} r={ch.highlight ? "3.5" : "2.5"} fill={ch.color} opacity="0">
                  <animateMotion
                    dur={ch.highlight ? "3s" : "3.5s"}
                    repeatCount="indefinite"
                    begin={`${j * 1.2}s`}
                    path={getInputPath(i)}
                  />
                  <animate
                    attributeName="opacity"
                    values="0;0.85;0.85;0"
                    keyTimes="0;0.08;0.92;1"
                    dur={ch.highlight ? "3s" : "3.5s"}
                    repeatCount="indefinite"
                    begin={`${j * 1.2}s`}
                  />
                </circle>
              ))}
              {ch.highlight && (
                <circle r="5" fill={ch.color} opacity="0">
                  <animateMotion dur="3s" repeatCount="indefinite" begin="0.6s" path={getInputPath(i)} />
                  <animate attributeName="opacity" values="0;0.15;0.15;0" keyTimes="0;0.08;0.92;1" dur="3s" repeatCount="indefinite" begin="0.6s" />
                </circle>
              )}
            </g>
          );
        })}

        {/* ── Output Paths (hub -> outputs) ── */}
        {outputs.map((out, i) => (
          <g key={`output-${i}`}>
            <path
              d={getOutputPath(i)}
              className="flow-path"
              stroke="#A1A1AA"
              strokeWidth="0.8"
              opacity="0.35"
            />
            {[0, 1, 2].map((j) => (
              <circle key={j} r="2.5" fill={out.color} opacity="0">
                <animateMotion
                  dur="3.5s"
                  repeatCount="indefinite"
                  begin={`${0.5 + j * 1.2}s`}
                  path={getOutputPath(i)}
                />
                <animate
                  attributeName="opacity"
                  values="0;0.85;0.85;0"
                  keyTimes="0;0.08;0.92;1"
                  dur="3.5s"
                  repeatCount="indefinite"
                  begin={`${0.5 + j * 1.2}s`}
                />
              </circle>
            ))}
          </g>
        ))}

        {/* ── Channel Cards (left) ── */}
        {channels.map((ch, i) => {
          const pos = channelPositions[i];
          const iconCx = pos.x + 26;
          const iconCy = pos.y + 25;
          return (
            <g key={`card-${ch.name}`} filter="url(#card-shadow)">
              <rect
                x={pos.x}
                y={pos.y}
                width="185"
                height="50"
                rx="12"
                fill="white"
                stroke={ch.highlight ? ch.color : "#52525B"}
                strokeWidth={ch.highlight ? "1.5" : "0.6"}
              />
              <circle cx={iconCx} cy={iconCy} r="15" fill={ch.color} />
              <ChannelIcon channel={ch.name} cx={iconCx} cy={iconCy} r={15} />
              <text
                x={pos.x + 50}
                y={pos.y + (ch.highlight ? 22 : 30)}
                fill="#18181B"
                fontSize="13.5"
                fontWeight="600"
                fontFamily="Inter, system-ui, sans-serif"
              >
                {ch.name}
              </text>
              {ch.highlight && (
                <>
                  <text
                    x={pos.x + 50}
                    y={pos.y + 40}
                    fill={ch.color}
                    fontSize="9.5"
                    fontWeight="700"
                    fontFamily="Inter, system-ui, sans-serif"
                    letterSpacing="0.5"
                  >
                    VOICE AI
                  </text>
                  {[0, 1, 2, 3, 4].map((b) => (
                    <rect
                      key={b}
                      x={pos.x + 145 + b * 6}
                      y={pos.y + 16 + (b % 2 === 0 ? 6 : 2)}
                      width="3"
                      height={b % 2 === 0 ? 10 : 18}
                      rx="1.5"
                      fill={ch.color}
                      opacity="0.5"
                    >
                      <animate
                        attributeName="height"
                        values={`${b % 2 === 0 ? 10 : 18};${b % 2 === 0 ? 18 : 10};${b % 2 === 0 ? 10 : 18}`}
                        dur="1.2s"
                        begin={`${b * 0.15}s`}
                        repeatCount="indefinite"
                      />
                    </rect>
                  ))}
                </>
              )}
            </g>
          );
        })}

        {/* "+5 more" indicator */}
        <text
          x="102"
          y="678"
          textAnchor="middle"
          fill="#A1A1AA"
          fontSize="11.5"
          fontFamily="Inter, system-ui, sans-serif"
        >
          + Play Store, App Store, YouTube, Zomato, TripAdvisor
        </text>

        {/* ── Central Hub ── */}
        <g>
          <rect
            x={hubX - 76}
            y={hubY - 62}
            width="152"
            height="124"
            rx="24"
            fill="none"
            stroke="#E84C8A"
            strokeWidth="1"
            opacity="0.15"
          >
            <animate attributeName="opacity" values="0.08;0.2;0.08" dur="3s" repeatCount="indefinite" />
          </rect>
          <rect
            x={hubX - 65}
            y={hubY - 50}
            width="130"
            height="100"
            rx="20"
            fill="white"
            stroke="#E84C8A"
            strokeWidth="2"
            filter="url(#card-shadow)"
          />
          <rect
            x={hubX - 52}
            y={hubY - 38}
            width="104"
            height="48"
            rx="12"
            fill="url(#hub-gradient)"
          />
          <image
            href="/logo-white.png"
            x={hubX - 40}
            y={hubY - 32}
            width="80"
            height="40"
            preserveAspectRatio="xMidYMid meet"
          />
          <text
            x={hubX}
            y={hubY + 32}
            textAnchor="middle"
            fill="#E84C8A"
            fontSize="10"
            fontWeight="600"
            fontFamily="Inter, system-ui, sans-serif"
            letterSpacing="0.8"
          >
            CX INTELLIGENCE
          </text>
        </g>

        {/* ── Output Cards (right) ── */}
        {outputs.map((out, i) => {
          const pos = outputPositions[i];
          const iconCx = pos.x + 26;
          const iconCy = pos.y + 25;
          return (
            <g key={`out-${i}`} filter="url(#card-shadow)">
              <rect
                x={pos.x}
                y={pos.y}
                width="230"
                height="50"
                rx="12"
                fill="white"
                stroke="#52525B"
                strokeWidth="0.6"
              />
              <circle cx={iconCx} cy={iconCy} r="15" fill={out.color} />
              <OutputIcon index={i} cx={iconCx} cy={iconCy} r={15} />
              <text
                x={pos.x + 50}
                y={pos.y + 21}
                fill="#18181B"
                fontSize="13"
                fontWeight="600"
                fontFamily="Inter, system-ui, sans-serif"
              >
                {out.name}
              </text>
              <text
                x={pos.x + 50}
                y={pos.y + 38}
                fill="#71717A"
                fontSize="10.5"
                fontFamily="Inter, system-ui, sans-serif"
              >
                {out.desc}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );

  /* ── Compact mode: natural aspect ratio, no wrapper/header/labels ── */
  if (compact) {
    return (
      <div ref={ref} className="hidden lg:block w-full" style={{ aspectRatio: "1200 / 700" }}>
        {flowSvg}
      </div>
    );
  }

  return (
    <section ref={ref} className="py-24 md:py-32 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-brand-500 text-sm font-semibold tracking-wider uppercase mb-3">
            How It Works
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text-primary mb-5">
            Every signal flows through{" "}
            <span className="gradient-text">one platform</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Customer signals from 14+ channels — including call recordings and
            in-store conversations — converge into Xploro, where AI transforms
            them into insights, responses, and revenue.
          </p>
        </motion.div>

        {/* ─── Desktop SVG Flow (lg+) ─── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden lg:block"
        >
          {flowSvg}

          {/* Flow labels below */}
          <div className="grid grid-cols-3 gap-8 mt-12 max-w-3xl mx-auto text-center">
            <div>
              <p className="text-base md:text-lg text-text-secondary uppercase tracking-[0.15em] font-bold">Ingest</p>
              <p className="text-xs text-text-muted mt-1.5">14+ channels in real-time</p>
            </div>
            <div>
              <p className="text-base md:text-lg text-brand-500 uppercase tracking-[0.15em] font-bold">Understand</p>
              <p className="text-xs text-text-muted mt-1.5">AI-powered intelligence</p>
            </div>
            <div>
              <p className="text-base md:text-lg text-text-secondary uppercase tracking-[0.15em] font-bold">Act</p>
              <p className="text-xs text-text-muted mt-1.5">Autonomous + human-guided</p>
            </div>
          </div>
        </motion.div>

        {/* ─── Mobile Flow (< lg) ─── */}
        <div className="lg:hidden">
          <div className="space-y-4">
            {/* Channels */}
            <div className="grid grid-cols-2 gap-2">
              {channels.map((ch, i) => (
                <motion.div
                  key={ch.name}
                  initial={{ opacity: 0, y: 12 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  className={`flex items-center gap-2.5 rounded-xl px-3 py-2.5 border ${
                    ch.highlight
                      ? "bg-white border-brand-200 shadow-sm"
                      : "bg-white border-zinc-300"
                  }`}
                >
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: ch.color }}
                  >
                    <svg width="14" height="14" viewBox="0 0 26 26">
                      <ChannelIcon channel={ch.name} cx={13} cy={13} r={10} />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs text-text-primary font-medium">{ch.name}</span>
                    {ch.highlight && (
                      <span className="ml-1 text-[9px] font-bold tracking-wider" style={{ color: ch.color }}>
                        VOICE AI
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="text-center text-[10px] text-text-muted">+ 5 more channels</p>

            {/* Arrow */}
            <div className="flex justify-center py-2">
              <div className="w-px h-12 bg-gradient-to-b from-zinc-300 to-brand-300 relative">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-brand-500 rounded-full" />
              </div>
            </div>

            {/* Hub */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white border-2 border-brand-500/20 rounded-2xl p-5 text-center shadow-md shadow-brand-500/5"
            >
              <div className="w-14 h-8 mx-auto mb-2 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center overflow-hidden px-2 py-1">
                <Image src="/logo-white.png" alt="Xploro" width={48} height={24} className="w-auto h-full object-contain" />
              </div>
              <h3 className="text-base font-bold text-text-primary">Xploro CX Intelligence</h3>
              <p className="text-xs text-text-muted mt-0.5">Ingest &bull; Understand &bull; Act</p>
            </motion.div>

            {/* Arrow */}
            <div className="flex justify-center py-2">
              <div className="w-px h-12 bg-gradient-to-b from-brand-300 to-zinc-300 relative">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-brand-500 rounded-full" />
              </div>
            </div>

            {/* Outputs */}
            <div className="space-y-2">
              {outputs.map((out, i) => (
                <motion.div
                  key={out.name}
                  initial={{ opacity: 0, y: 12 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.5 + i * 0.06 }}
                  className="flex items-center gap-3 bg-white border border-zinc-300 rounded-xl px-4 py-3"
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: out.color }}
                  >
                    <svg width="16" height="16" viewBox="0 0 26 26">
                      <OutputIcon index={i} cx={13} cy={13} r={10} />
                    </svg>
                  </div>
                  <div>
                    <span className="text-sm text-text-primary font-medium">{out.name}</span>
                    <span className="text-xs text-text-muted ml-2">{out.desc}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
