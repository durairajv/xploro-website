export const channels = [
  { name: "Google Reviews", icon: "star", color: "#FBBC04", category: "Reviews" },
  { name: "Instagram", icon: "instagram", color: "#E1306C", category: "Social" },
  { name: "Facebook", icon: "facebook", color: "#1877F2", category: "Social" },
  { name: "Twitter / X", icon: "twitter", color: "#1DA1F2", category: "Social" },
  { name: "LinkedIn", icon: "linkedin", color: "#0A66C2", category: "Social" },
  { name: "Gmail", icon: "mail", color: "#EA4335", category: "Email" },
  { name: "Outlook", icon: "mail", color: "#0078D4", category: "Email" },
  { name: "Zoho", icon: "briefcase", color: "#D4382C", category: "CRM" },
  { name: "WhatsApp", icon: "message-circle", color: "#25D366", category: "Messaging" },
  { name: "Play Store", icon: "smartphone", color: "#34A853", category: "Reviews" },
  { name: "App Store", icon: "smartphone", color: "#0D96F6", category: "Reviews" },
  { name: "YouTube", icon: "youtube", color: "#FF0000", category: "Social" },
  { name: "TripAdvisor", icon: "map-pin", color: "#00AF87", category: "Reviews" },
  { name: "Zomato", icon: "utensils", color: "#E23744", category: "Reviews" },
] as const;

export const products = [
  {
    name: "Review Management",
    description: "Aggregate and respond to reviews from Google, Play Store, App Store, TripAdvisor, and Zomato from one unified dashboard.",
    icon: "star",
    highlight: "Respond 10x faster",
  },
  {
    name: "Social Engagement",
    description: "Monitor and reply to comments, DMs, and mentions across Instagram, Facebook, Twitter, LinkedIn, and YouTube.",
    icon: "message-square",
    highlight: "Never miss a mention",
  },
  {
    name: "Email Command Center",
    description: "Unified inbox for Gmail, Outlook, and Zoho with smart routing, AI drafts, templates, and team collaboration.",
    icon: "mail",
    highlight: "Zero inbox chaos",
  },
  {
    name: "Ticketing System",
    description: "Auto-create tickets from any channel. Intelligent routing, SLA tracking, parent-child threading, and escalation workflows.",
    icon: "ticket",
    highlight: "Auto-route & resolve",
  },
  {
    name: "NPS & Surveys",
    description: "Launch Net Promoter Score surveys via QR, email, or embedded forms. Track promoters, passives, and detractors over time.",
    icon: "bar-chart-3",
    highlight: "Measure loyalty",
  },
  {
    name: "Sentiment & Intent Analysis",
    description: "AI-powered sentiment classification, intent detection, theme extraction, and keyword analysis across every channel.",
    icon: "brain",
    highlight: "Understand emotions",
  },
  {
    name: "Voice Analytics",
    description: "Analyze call center recordings and in-store conversations. AI quality scoring, coaching recommendations, and compliance checking.",
    icon: "mic",
    highlight: "Every call scored",
  },
  {
    name: "AI Agents",
    description: "Autonomous agents that handle routine queries, draft personalized responses, triage tickets, and learn from your team.",
    icon: "bot",
    highlight: "60% auto-resolved",
  },
  {
    name: "Actionable Insights",
    description: "Cross-channel analytics, brand health scores, competitor intelligence, revenue impact analysis, and weekly AI digests.",
    icon: "line-chart",
    highlight: "Data-driven decisions",
  },
  {
    name: "Digital Wall",
    description: "Curate and display your best reviews and social proof on beautiful, embeddable widgets for websites and in-store displays.",
    icon: "layout-grid",
    highlight: "Social proof at scale",
  },
] as const;

export const stats = [
  { value: "500+", label: "Brands Trust Xploro", suffix: "" },
  { value: "14", label: "Channels Integrated", suffix: "+" },
  { value: "50M", label: "Interactions Processed", suffix: "+" },
  { value: "99.9", label: "Uptime SLA", suffix: "%" },
  { value: "60", label: "Queries Auto-Resolved", suffix: "%" },
  { value: "94", label: "Faster Response Time", suffix: "%" },
] as const;

export const pricingTiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Get started with core features",
    features: [
      "1 business location",
      "Google Reviews integration",
      "Basic dashboard & analytics",
      "Email support",
      "100 interactions/month",
    ],
    cta: "Start Free",
    highlighted: false,
  },
  {
    name: "Starter",
    price: "$29",
    period: "/month",
    description: "For small businesses getting organized",
    features: [
      "Up to 3 locations",
      "5 channel integrations",
      "Ticketing system",
      "NPS surveys",
      "Basic sentiment analysis",
      "1,000 interactions/month",
      "Email + chat support",
    ],
    cta: "Start Free Trial",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$99",
    period: "/month",
    description: "For growing teams that need AI automation",
    features: [
      "Up to 10 locations",
      "All 14 channel integrations",
      "AI-powered auto-responses",
      "Advanced sentiment & intent analysis",
      "Voice analytics (100 calls/mo)",
      "10,000 interactions/month",
      "Priority support",
      "Custom workflows",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Business",
    price: "$299",
    period: "/month",
    description: "For multi-location enterprises",
    features: [
      "Unlimited locations",
      "All channels + AI Agents",
      "Unlimited voice analytics",
      "Cross-channel insights & reports",
      "White-label options",
      "API access",
      "Unlimited interactions",
      "Dedicated account manager",
    ],
    cta: "Start Free Trial",
    highlighted: false,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For organizations with complex needs",
    features: [
      "Everything in Business",
      "On-premise deployment option",
      "Custom AI model training",
      "SSO & advanced security",
      "Dedicated infrastructure",
      "24/7 phone support",
      "Custom SLA",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
] as const;

export const testimonials = [
  {
    quote: "Xploro unified our customer engagement across 8 channels. Response time dropped from 4 hours to 15 minutes.",
    author: "Priya Sharma",
    role: "Head of CX, RetailChain India",
    avatar: "PS",
    metric: "94% faster responses",
  },
  {
    quote: "The AI agents handle 60% of our routine queries automatically. Our team now focuses on what truly matters.",
    author: "Rajesh Kumar",
    role: "Operations Director, FoodTech Co",
    avatar: "RK",
    metric: "60% auto-resolved",
  },
  {
    quote: "Voice analytics transformed our call center. Every call is scored, every agent gets AI coaching. Quality went up 40%.",
    author: "Ananya Patel",
    role: "VP Customer Success, HospitalityGroup",
    avatar: "AP",
    metric: "40% quality improvement",
  },
  {
    quote: "We went from scattered spreadsheets to a single source of truth for all customer feedback across 200+ stores.",
    author: "Vikram Singh",
    role: "CTO, JewelleryBrand",
    avatar: "VS",
    metric: "200+ locations unified",
  },
] as const;

export const industries = [
  { name: "Retail & Fashion", description: "Multi-location retailers unify reviews, social, and in-store feedback at scale." },
  { name: "Hospitality", description: "Hotels and restaurants manage guest reviews, TripAdvisor, and social engagement." },
  { name: "Food & Beverage", description: "QSR and restaurant chains track Zomato, Google, and social feedback." },
  { name: "Healthcare", description: "Hospitals monitor patient feedback with compliant, AI-powered responses." },
  { name: "Banking & Finance", description: "Financial institutions track sentiment across digital channels." },
  { name: "Education", description: "EdTech and universities manage student feedback and reviews." },
  { name: "Automotive", description: "Dealerships and service centers manage Google reviews and customer calls." },
  { name: "E-Commerce", description: "D2C brands automate social engagement and track app store reviews." },
] as const;

export const clients = [
  {
    name: "Arise Health",
    logo: "https://cdn.prod.website-files.com/686d086599ee65617e088c6d/68721008dd17df7b00d1518b_20230908170508%20(1).svg",
    industry: "Healthcare",
  },
  {
    name: "The Souled Store",
    logo: "https://cdn.prod.website-files.com/686d086599ee65617e088c6d/686e9dddab4e39e4a14de55e_the-souled-store.webp",
    industry: "Retail & Fashion",
  },
  {
    name: "Prince",
    logo: "https://cdn.prod.website-files.com/686d086599ee65617e088c6d/686ea4293cbacdffaf651ea9_prince-logo.png",
    industry: "Retail",
  },
  {
    name: "Zeon Charging Network",
    logo: "https://cdn.prod.website-files.com/686d086599ee65617e088c6d/686e83d30831d25e9bee0316_evpedia-icon-0015.svg",
    industry: "EV & Energy",
  },
  {
    name: "Client 5",
    logo: "https://cdn.prod.website-files.com/686d086599ee65617e088c6d/686ed24357226841ee477868_Untitled%20design%20(3).png",
    industry: "Enterprise",
  },
  {
    name: "Client 6",
    logo: "https://cdn.prod.website-files.com/686d086599ee65617e088c6d/6872116ed5a705d6ac87c483_e505448e-6c5d-4066-b802-40011bdee06b.png",
    industry: "Technology",
  },
  {
    name: "Client 7",
    logo: "https://cdn.prod.website-files.com/686d086599ee65617e088c6d/686ed2484daa8c7210a8aac5_Untitled%20design%20(2).png",
    industry: "Hospitality",
  },
  {
    name: "Client 8",
    logo: "https://cdn.prod.website-files.com/686d086599ee65617e088c6d/686ed24b16fc1601b28b3b77_Untitled%20design%20(1).png",
    industry: "Food & Beverage",
  },
  {
    name: "Client 9",
    logo: "https://cdn.prod.website-files.com/686d086599ee65617e088c6d/686ea2a686042de084948ad0_Xploro_pitch_website.pptx%20(10).png",
    industry: "Services",
  },
] as const;

export const clientTestimonials = [
  {
    quote: "Managing 400+ EV locations required streamlining Google Business Profiles at scale; Xploro enabled quick onboarding, data maintenance, and AI-powered review responses.",
    author: "Madhan",
    role: "Digital Manager",
    company: "Zeon Charging Network",
    metric: "400+ locations managed",
    avatar: "M",
  },
  {
    quote: "NPS tracking provides consolidated customer sentiment visibility across departments like courier performance and delivery timelines, improving efficiency by 25%.",
    author: "Jaynam Mehta",
    role: "Product Manager",
    company: "The Souled Store",
    metric: "25% efficiency improvement",
    avatar: "JM",
  },
  {
    quote: "AI-powered call monitoring increased CSAT scores 27% within month one by analyzing agent performance and identifying improvement areas.",
    author: "Sufiyan Khan",
    role: "CX Head",
    company: "Enterprise Client",
    metric: "27% CSAT increase in month 1",
    avatar: "SK",
  },
  {
    quote: "Response times improved 90% and satisfaction increased 75%; the platform translates concepts into actionable AI solutions aligned with client expectations.",
    author: "Jayavel",
    role: "IT Support & Design",
    company: "Prince",
    metric: "90% faster responses",
    avatar: "J",
  },
] as const;

export const comparisonFeatures = [
  {
    category: "Channels",
    features: [
      { name: "Google Reviews", tiers: [true, true, true, true, true] },
      { name: "Instagram (comments + DMs)", tiers: [false, true, true, true, true] },
      { name: "Facebook (posts + Messenger)", tiers: [false, true, true, true, true] },
      { name: "Twitter / X", tiers: [false, false, true, true, true] },
      { name: "LinkedIn", tiers: [false, false, true, true, true] },
      { name: "Email (Gmail + Outlook + Zoho)", tiers: [false, true, true, true, true] },
      { name: "WhatsApp", tiers: [false, false, true, true, true] },
      { name: "Play Store / App Store", tiers: [false, false, true, true, true] },
      { name: "YouTube", tiers: [false, false, true, true, true] },
      { name: "TripAdvisor / Zomato", tiers: [false, false, true, true, true] },
    ],
  },
  {
    category: "AI & Analytics",
    features: [
      { name: "Basic Sentiment Analysis", tiers: [true, true, true, true, true] },
      { name: "Advanced Sentiment + Intent", tiers: [false, false, true, true, true] },
      { name: "AI Auto-Responses", tiers: [false, false, true, true, true] },
      { name: "AI Agents (Autonomous)", tiers: [false, false, false, true, true] },
      { name: "Voice Analytics", tiers: [false, false, true, true, true] },
      { name: "Cross-Channel Insights", tiers: [false, false, true, true, true] },
      { name: "Competitor Intelligence", tiers: [false, false, false, true, true] },
      { name: "Weekly AI Digest", tiers: [false, false, true, true, true] },
    ],
  },
  {
    category: "Features",
    features: [
      { name: "Unified Dashboard", tiers: [true, true, true, true, true] },
      { name: "Ticketing System", tiers: [false, true, true, true, true] },
      { name: "NPS Surveys", tiers: [false, true, true, true, true] },
      { name: "Digital Wall", tiers: [false, true, true, true, true] },
      { name: "Custom Workflows", tiers: [false, false, true, true, true] },
      { name: "White-Label Branding", tiers: [false, false, false, true, true] },
      { name: "API Access", tiers: [false, false, false, true, true] },
    ],
  },
  {
    category: "Support & Security",
    features: [
      { name: "Email Support", tiers: [true, true, true, true, true] },
      { name: "Chat Support", tiers: [false, true, true, true, true] },
      { name: "Priority Support", tiers: [false, false, true, true, true] },
      { name: "Dedicated Account Manager", tiers: [false, false, false, true, true] },
      { name: "SSO / SAML", tiers: [false, false, false, false, true] },
      { name: "Custom SLA", tiers: [false, false, false, false, true] },
    ],
  },
] as const;
