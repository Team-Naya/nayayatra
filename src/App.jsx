import React, { useState, useEffect } from 'react'
import { Play, Pause } from 'lucide-react'

const HERO_TABS = [
  {
    id: 'platform',
    tabLabel: 'NAYA.COM.NP',
    workspaceTitle: 'naya.com.np: Limitless Self-Expression & Publishing',
    chipLabel: 'Web Platform · Live',
    emblemText: 'ने',
    metric: 'naya.com.np',
    metricSub:
      'Create an authentic online space, publish with multi-format tools, or team up with collaborators to curate dynamic Collections.',
    primaryAction: 'Launch naya.com.np ↗',
    primaryHref: 'https://naya.com.np/',
    secondaryAction: 'Explore Ecosystem ↓',
    secondaryHref: '#ecosystem',
    feed: [
      {
        label: 'Collaborative Collections power paper.naya.com.np & impacters.wodes.org.np',
        right: 'Collections',
      },
      {
        label: 'Multi-format publishing studio for creators, communities & businesses',
        right: 'Creator Spaces',
      },
    ],
  },
  {
    id: 'shabdakosh',
    tabLabel: 'SHABDAKOSH',
    workspaceTitle: 'प्रज्ञा नेपाली बृहत् शब्दकोश: Official Nepal Academy Dictionary',
    chipLabel: 'Google Play · 100,000+ Downloads',
    emblemText: 'प्र',
    metric: '128,000+ Words',
    metricSub:
      'Built by Naya Yatra in technical partnership with the Nepal Academy (नेपाल प्रज्ञा प्रतिष्ठान). Runs 100% offline with zero ads or trackers.',
    primaryAction: 'View on Google Play ↗',
    primaryHref:
      'https://play.google.com/store/apps/details?id=np.com.naya.sabdakosh&hl=en',
    secondaryAction: 'Try Live Lookup ↓',
    secondaryHref: '#engineering',
    feed: [
      {
        label: '1st Edition Pragya Nepali Brihat Shabdakosh (upgraded from 60,000+ words)',
        right: '100% Offline',
      },
      {
        label: 'Book-inspired typography with built-in missing-word feedback to Nepal Academy',
        right: 'Zero Trackers',
      },
    ],
  },
  {
    id: 'editorial',
    tabLabel: 'PAPER & MYNA AI',
    workspaceTitle: 'Naya Paper & Myna AI: Writing & Conversational Fluency',
    chipLabel: 'Web Editor & iOS App Store (5.0 ★)',
    emblemText: 'अ',
    metric: 'Language & AI Tools',
    metricSub:
      'Shabdakosh-backed Nepali spell checking and Preeti-to-Unicode conversion on the web, paired with BYOK conversational language AI on iPhone.',
    primaryAction: 'Open Naya Paper ↗',
    primaryHref: 'https://paper.naya.com.np',
    secondaryAction: 'Inspect Tools ↓',
    secondaryHref: '#engineering',
    feed: [
      {
        label: 'Naya Paper: Distraction-free Nepali spell checker & Preeti-to-Unicode converter',
        right: 'paper.naya.com.np',
      },
      {
        label: 'Myna AI (iOS): Real-life speaking scenarios using your own OpenAI or Gemini key',
        right: '0 Data Collected',
      },
    ],
  },
  {
    id: 'impacters',
    tabLabel: 'HARDWARE & R&D',
    workspaceTitle: 'Hardware, IoT Telemetry & Field R&D',
    chipLabel: 'Embedded Systems · Edge AI · Robotics',
    emblemText: 'R&D',
    metric: 'Edge AI & Hardware',
    metricSub:
      'We engineer custom embedded hardware, fleet telemetry, and stealth robotics, alongside public agritech R&D with Impacters (WODES).',
    primaryAction: 'View Field Programs ↓',
    primaryHref: '#impacters',
    secondaryAction: 'Commission R&D ↓',
    secondaryHref: '#contact',
    feed: [
      {
        label: 'Project Biruwa: 3D-printed vertical aeroponics & Himalayan plant conservation',
        right: '95% Less Water',
      },
      {
        label: 'Project Saathi & Sandbox: Solar offline edge-ML farm device & STEM research grants',
        right: 'Open R&D',
      },
    ],
  },
]

const SHOWCASE_CARDS = [
  {
    id: 'web',
    artClass: 'pool-card__art--1',
    kicker: '01 · WEB PLATFORM',
    title: 'naya.com.np',
    meta: 'Spaces & Collections',
    badge: 'Web Ecosystem',
    summary:
      'The platform for limitless self-expression. Create an authentic online space, publish with powerful tools, or team up to curate dynamic Collections.',
    ctaLabel: 'Visit naya.com.np ↗',
    ctaHref: 'https://naya.com.np/',
  },
  {
    id: 'dict',
    artClass: 'pool-card__art--3',
    kicker: '02 · NEPAL ACADEMY',
    title: 'Pragya Shabdakosh',
    meta: '128,000+ Offline Words',
    badge: '100K+ Installs',
    summary:
      'The official mobile dictionary of the Nepal Academy (नेपाल प्रज्ञा प्रतिष्ठान), built by Naya Yatra with 128,000+ offline entries, zero ads, and zero trackers.',
    ctaLabel: 'Google Play Store ↗',
    ctaHref:
      'https://play.google.com/store/apps/details?id=np.com.naya.sabdakosh&hl=en',
  },
  {
    id: 'paper',
    artClass: 'pool-card__art--4',
    kicker: '03 · WRITING SUITE',
    title: 'Naya Paper',
    meta: 'Spell Check & Unicode',
    badge: 'paper.naya.com.np',
    summary:
      'A distraction-free writing experience for Nepali writers featuring a Brihat Shabdakosh-backed spell checker and deterministic Preeti to Unicode converter.',
    ctaLabel: 'Launch Naya Paper ↗',
    ctaHref: 'https://paper.naya.com.np',
  },
  {
    id: 'app',
    artClass: 'pool-card__art--2',
    kicker: '04 · ANDROID SUITE',
    title: 'The Naya App',
    meta: '4 Modular Applets',
    badge: 'Google Play',
    summary:
      'An elegant suite of productivity applets: community Conversation threads, folder-organized offline Notes, AI-clustered News, and a Magic Color document Scanner.',
    ctaLabel: 'View on Google Play ↗',
    ctaHref:
      'https://play.google.com/store/apps/details?id=np.com.naya.app&hl=en',
  },
  {
    id: 'myna',
    artClass: 'pool-card__art--5',
    kicker: '05 · LANGUAGE AI',
    title: 'Myna AI',
    meta: 'Real-Life Speaking Roleplay',
    badge: 'iOS · 5.0 ★',
    summary:
      'Conversational AI language trainer for iPhone. Practice real-world speaking scenarios with vocabulary tracking using your own OpenAI or Gemini keys and zero data collection.',
    ctaLabel: 'View on App Store ↗',
    ctaHref: 'https://apps.apple.com/de/app/myna-ai/id6480445806?l=en-GB',
  },
  {
    id: 'civic',
    artClass: 'pool-card__art--2',
    kicker: '06 · CIVIC R&D PARTNER',
    title: 'Project Biruwa & Saathi',
    meta: 'With Impacters (WODES)',
    badge: 'Civic Tech',
    summary:
      'In technical collaboration with Impacters (a WODES initiative), Naya Yatra co-engineers 3D-printed vertical aeroponics (Project Biruwa), solar offline farm AI (Project Saathi), and supports Sandbox STEM grants.',
    ctaLabel: 'Explore Impacters ↗',
    ctaHref: 'https://impacters.wodes.org.np',
  },
]

function CardMiniScene({ id }) {
  if (id === 'web') {
    return (
      <div className="mini-scene" aria-hidden="true">
        <div className="mini-hub-row">
          <span>@creator · Authentic Space</span>
          <span className="micro-caps" style={{ color: 'var(--color-lime)' }}>
            PUBLISHED
          </span>
        </div>
        <div className="mini-hub-row">
          <span>Curated Collection · 18 Posts</span>
          <span className="micro-caps">TEAM UP</span>
        </div>
      </div>
    )
  }
  if (id === 'app') {
    return (
      <div className="mini-scene" aria-hidden="true">
        <div className="mini-applet-grid">
          <div className="mini-applet-icon">
            <span className="micro-caps" style={{ color: 'var(--color-muted)' }}>01</span>
            <span>Chat</span>
          </div>
          <div className="mini-applet-icon">
            <span className="micro-caps" style={{ color: 'var(--color-muted)' }}>02</span>
            <span>Notes</span>
          </div>
          <div className="mini-applet-icon">
            <span className="micro-caps" style={{ color: 'var(--color-muted)' }}>03</span>
            <span>News</span>
          </div>
          <div className="mini-applet-icon">
            <span className="micro-caps" style={{ color: 'var(--color-muted)' }}>04</span>
            <span>Scan</span>
          </div>
        </div>
      </div>
    )
  }
  if (id === 'dict') {
    return (
      <div className="mini-scene" aria-hidden="true">
        <div className="mini-lex-box">
          <div className="mini-lex-box__top">
            <span style={{ fontSize: 'var(--text-xs)', fontWeight: 600 }}>
              प्रज्ञा [ना.] (सं.)
            </span>
            <span className="mini-lex-pill">१,२८,०००+ शब्द</span>
          </div>
          <span style={{ fontSize: 'var(--text-xs)', opacity: 0.9 }}>
            तीक्ष्ण बुद्धि; विवेक; समझदारी
          </span>
        </div>
      </div>
    )
  }
  if (id === 'paper') {
    return (
      <div className="mini-scene" aria-hidden="true">
        <div className="mini-paper-sheet">
          <span className="micro-caps" style={{ color: 'var(--color-muted)' }}>
            gofof qf → UNICODE
          </span>
          <div className="mini-paper-line">
            <span>नयाँ यात्रा प्रा. लि.</span>
            <span className="mini-paper-check">SPELL ✓</span>
          </div>
        </div>
      </div>
    )
  }
  if (id === 'myna') {
    return (
      <div className="mini-scene" aria-hidden="true">
        <div className="mini-ai-wave">
          <div>
            <span className="micro-caps" style={{ display: 'block', color: 'var(--color-lime)' }}>
              OPENAI &amp; GEMINI BYOK
            </span>
            <span style={{ fontSize: 'var(--text-xs)' }}>Scenario: Business Meeting</span>
          </div>
          <div className="mini-ai-bars">
            <span className="mini-ai-bar" />
            <span className="mini-ai-bar" />
            <span className="mini-ai-bar" />
            <span className="mini-ai-bar" />
            <span className="mini-ai-bar" />
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="mini-scene" aria-hidden="true">
      <div className="mini-lex-box">
        <div className="mini-lex-box__top">
          <span className="micro-caps">PROJECT BIRUWA</span>
          <span className="mini-lex-pill">−95% WATER USE</span>
        </div>
        <span style={{ fontSize: 'var(--text-xs)', opacity: 0.9 }}>
          3D-Printed Vertical Aeroponics &amp; IoT
        </span>
      </div>
    </div>
  )
}

const ENGINEERING_DECK = [
  {
    id: 'shabdakosh',
    num: '01',
    title: 'Pragya Nepali Brihat Shabdakosh',
    badge: '100K+ DOWNLOADS',
    desc: 'Created by the Nepal Academy (नेपाल प्रज्ञा प्रतिष्ठान) with the technical support of Naya Yatra Pvt. Ltd. Digitizes 128,000+ authoritative words from the 1st Edition into a book-like, 100% offline mobile reference with zero ads or trackers.',
    partnerLabel: 'OFFICIAL NEPAL ACADEMY DICTIONARY',
    specs: ['128,000+ Words (1st Ed.)', '100% Offline', 'Missing-Word Feedback'],
    linkLabel: 'Open on Google Play ↗',
    linkHref:
      'https://play.google.com/store/apps/details?id=np.com.naya.sabdakosh&hl=en',
    samples: [
      {
        pill: 'प्रज्ञा',
        headword: 'प्रज्ञा [ना.] (सं.) · prajñā',
        sub: 'प्रज्ञा नेपाली बृहत् शब्दकोश · प्रथम संस्करण',
        body: '१. तीक्ष्ण बुद्धि; विवेक; समझदारी। २. विशेष ज्ञान वा प्रतिभा; सिर्जनात्मक चेतना।',
      },
      {
        pill: 'यात्रा',
        headword: 'यात्रा [ना.] (सं.) · yātrā',
        sub: 'प्रज्ञा नेपाली बृहत् शब्दकोश · प्रथम संस्करण',
        body: '१. एक ठाउँबाट अर्को ठाउँमा जाने काम; सफर; भ्रमण। २. कुनै उद्देश्यले गरिने प्रस्थान वा अभियान।',
      },
      {
        pill: 'अन्वेषण',
        headword: 'अन्वेषण [ना.] (सं.) · anveṣaṇa',
        sub: 'प्रज्ञा नेपाली बृहत् शब्दकोश · प्रथम संस्करण',
        body: '१. कुनै तथ्य वा सत्य पत्ता लगाउन गरिने वैज्ञानिक खोज; अनुसन्धान; शोधखोज।',
      },
    ],
  },
  {
    id: 'paper',
    num: '02',
    title: 'Naya Paper',
    badge: 'PAPER.NAYA.COM.NP',
    desc: 'A distraction-free editorial workspace engineered for Nepali writers. It combines a minimalist interface with a Nepali Brihat Shabdakosh-powered spell checker and a deterministic Preeti-to-Unicode converter.',
    partnerLabel: 'SHABDAKOSH-BACKED NEPALI WRITING SUITE',
    specs: ['Brihat Shabdakosh Spell Check', 'Preeti → Unicode Engine', 'Minimalist Editor'],
    linkLabel: 'Launch paper.naya.com.np ↗',
    linkHref: 'https://paper.naya.com.np',
    samples: [
      {
        pill: 'Preeti → Unicode',
        fromLabel: 'LEGACY PREETI FONT INPUT',
        fromText: 'gofof qf k|f= ln= , sf7df8f}+',
        toLabel: 'CANONICAL NEPALI UNICODE',
        toText: 'नयाँ यात्रा प्रा. लि., काठमाडौँ',
      },
      {
        pill: 'Shabdakosh Spell Check',
        fromLabel: 'DRAFT MANUSCRIPT INPUT',
        fromText: 'प्रज्ञा नेपाली वृहत शब्दकोशमा आधारित',
        toLabel: 'SHABDAKOSH-VERIFIED ORTHOGRAPHY',
        toText: 'प्रज्ञा नेपाली बृहत् शब्दकोशमा आधारित ✓',
      },
    ],
  },
  {
    id: 'myna',
    num: '03',
    title: 'Myna AI',
    badge: 'iOS · 5.0 ★ · BYOK',
    desc: 'An AI-powered language learning platform for iPhone that builds real-world speaking confidence through interactive life scenarios, vocabulary progress tracking, and a subscription-free Bring-Your-Own-Key (OpenAI / Gemini) architecture.',
    partnerLabel: 'CONVERSATIONAL LANGUAGE FLUENCY ENGINE',
    specs: ['OpenAI & Gemini BYOK', 'Zero Data Collected', 'Vocabulary Tracking'],
    linkLabel: 'View on Apple App Store ↗',
    linkHref: 'https://apps.apple.com/de/app/myna-ai/id6480445806?l=en-GB',
    samples: [
      {
        pill: 'Daily Café & Dining',
        headword: 'Scenario 01: Ordering Food & Natural Small Talk',
        sub: 'Interactive Conversational Practice · Safe Mistake-Free Feedback',
        body: 'Practice ordering meals, asking about ingredients, and handling spontaneous follow-up questions to build natural speaking rhythm and situational confidence.',
      },
      {
        pill: 'Transit & Directions',
        headword: 'Scenario 02: Navigating Public Transportation',
        sub: 'Situational Vocabulary & Cultural Fluency',
        body: 'Simulate buying tickets, asking locals for platform transfers, and navigating unfamiliar cities while tracking new vocabulary milestones automatically.',
      },
      {
        pill: 'Business Meetings',
        headword: 'Scenario 03: Professional Introductions & Discussions',
        sub: 'Powered Directly by Your Own OpenAI or Gemini API Key',
        body: 'Rehearse workplace discussions, project updates, and professional small talk without monthly subscription lock-in or third-party data collection.',
      },
    ],
  },
  {
    id: 'nayaapp',
    num: '04',
    title: 'The Naya App',
    badge: '4 NATIVE APPLETS',
    desc: 'A unified mobile ecosystem housing four clean, ad-free productivity applets: community Conversation threads, offline folder-organized Notes, AI-clustered News, and a lightweight Document Scanner with Magic Color.',
    partnerLabel: 'UNIFIED PRODUCTIVITY & AI NEWS SUITE',
    specs: ['Encrypted in Transit', 'Zero Ad Bloat', 'Android Suite'],
    linkLabel: 'View on Google Play ↗',
    linkHref:
      'https://play.google.com/store/apps/details?id=np.com.naya.app&hl=en',
    samples: [
      {
        pill: '01 Conversation',
        headword: 'Conversation Applet: Community & Business Threads',
        sub: 'Connected directly to the naya.com.np ecosystem',
        body: 'Start clean text conversation threads with creators, collaborators, and businesses across the naya.com.np network in a distraction-free messaging view.',
      },
      {
        pill: '02 Offline Notes',
        headword: 'Notes Applet: Folder-Organized Offline Writing',
        sub: 'Local-first persistence for quick thoughts and drafts',
        body: 'Jot down ideas and organize manuscripts into structured folders completely offline in a crisp, distraction-free writing environment.',
      },
      {
        pill: '03 AI News',
        headword: 'News Applet: AI Clustering, Ranking & Categorization',
        sub: 'Evolved from the Naya News application',
        body: 'Applies machine-learning models to automatically cluster related stories, rank breaking coverage, and categorize articles across topics.',
      },
      {
        pill: '04 Scanner',
        headword: 'Scanner Applet: Lightweight Capture with Magic Color',
        sub: 'Fast document extraction without ads or bloat',
        body: 'Captures physical documents, receipts, and notes through a streamlined camera pipeline with Magic Color enhancement for crisp legibility.',
      },
    ],
  },
]

const CIVIC_ORBIT_NODES = [
  {
    id: 'saathi',
    badge: '01',
    title: 'Project Saathi',
    sub: 'Solar Sensor + Offline Edge ML & P2P Mesh',
    spokeX: 115,
    spokeY: 85,
    pipeline: ['Solar Field Sensor', 'Offline Edge ML Screen', 'P2P Farmer Mesh'],
    hudDesc:
      'Nepal’s first internet-free agricultural AI system: a solar-powered field sensor unit syncs over proximity with a portable edge-ML screen and shares encrypted data via peer-to-peer mesh.',
    linkLabel: 'Read Saathi Study ↗',
    href: 'https://impacters.wodes.org.np/post/p1656784584potr8',
  },
  {
    id: 'biruwa',
    badge: '02',
    title: 'Project Biruwa',
    sub: '−95% Water · 3D-Printed Vertical Aeroponics',
    spokeX: 385,
    spokeY: 95,
    pipeline: ['3D-Printed Nozzles', 'Root Mist Chamber', 'IoT + AI Conservation'],
    hudDesc:
      'Low-pressure vertical aeroponics built by WODES and Naya Yatra. It cuts water usage by up to 95%, reclaims urban space for displaced women farmers, and conserves endemic Himalayan plants.',
    linkLabel: 'Read Biruwa Report ↗',
    href: 'https://wodes.org.np/post/p1771516471yiocf',
  },
  {
    id: 'sandbox',
    badge: '03',
    title: 'Sandbox Grants',
    sub: '6 to 8 Mo. STEM R&D Grants · 100% Creator IP',
    spokeX: 115,
    spokeY: 245,
    pipeline: ['Student R&D Teams', 'Hardware & Cloud Lab', '100% Creator IP'],
    hudDesc:
      'Six-to-eight-month STEM research grants for final-year undergraduate (B.Sc./B.E.) and graduate (M.Sc./M.E.) teams in Nepal, providing funding, hardware, mentorship, and full creator IP ownership.',
    linkLabel: 'View Grant Program ↗',
    href: 'https://impacters.wodes.org.np/post/p1657043789nib5k',
  },
  {
    id: 'impacters',
    badge: '04',
    title: 'Impacters (WODES)',
    sub: 'Partner STEM Movement & Innovation Lab',
    spokeX: 385,
    spokeY: 255,
    pipeline: ['Safe Learning Space', 'Personal Growth', 'Scientific Innovation'],
    hudDesc:
      'An independent STEM movement by the Women Development Society (WODES) that Naya Yatra collaborates with as a technical partner to empower young scientists and female tech leaders in Nepal.',
    linkLabel: 'Visit impacters.wodes.org.np ↗',
    href: 'https://impacters.wodes.org.np',
  },
]

const FAQ_ITEMS = [
  {
    q: 'What does Naya Yatra Private Limited build?',
    a: 'Headquartered in Kathmandu, Naya Yatra Private Limited is a full-spectrum software, AI, and hardware engineering company. We partner with enterprises, institutions, and government bodies to build custom web and mobile platforms, applied AI, IoT and fleet telemetry, and stealth-mode robotics. Alongside client work, we develop our own public platforms including naya.com.np, the official Pragya Nepali Brihat Shabdakosh app (100K+ downloads), Naya Paper, The Naya App, and Myna AI.',
  },
  {
    q: 'Can we commission Naya Yatra for custom software, AI, or hardware engineering?',
    a: 'Yes. While this website highlights our public platforms and open R&D, a core part of our work is engineering bespoke software systems, machine-learning pipelines, embedded IoT/telemetry hardware, and robotics for private clients, institutions, and public-sector initiatives. Every system is architected from the ground up around your operational requirements.',
  },
  {
    q: 'How does the technical partnership with the Nepal Academy work?',
    a: 'In formal technical collaboration with the Nepal Academy (नेपाल प्रज्ञा प्रतिष्ठान), Naya Yatra engineered the official mobile application for the 1st Edition of the Pragya Nepali Brihat Shabdakosh. The app brings 128,000+ authoritative Nepali headwords to over 100,000 users completely offline, with zero advertisements, zero trackers, and a built-in feedback form to report missing words.',
  },
  {
    q: 'How do Project Biruwa, Project Saathi, and Sandbox showcase your hardware & R&D capabilities?',
    a: 'Developed in collaboration with Impacters (an initiative of the Women Development Society, WODES), these public-interest projects demonstrate our embedded hardware and edge-AI engineering in the field. Project Biruwa combines 3D-printed mist nozzles, IoT sensors, and AI disease detection in vertical aeroponics stacks that cut water use by up to 95%. Project Saathi pairs a solar-powered field sensor unit with a portable offline edge-ML screen and encrypted peer-to-peer mesh networking. Through the Sandbox program, we also mentor emerging STEM researchers building hardware and software prototypes.',
  },
  {
    q: 'How can our organization collaborate with Naya Yatra?',
    a: 'Whether you are commissioning custom software, applied AI, embedded hardware, or robotics, or exploring a research partnership, reach our engineering team in Kathmandu directly via email at info@naya.com.np or connect with us on naya.com.np.',
  },
]

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  const [activeHeroTab, setActiveHeroTab] = useState(HERO_TABS[0].id)
  const [selectedCardId, setSelectedCardId] = useState(SHOWCASE_CARDS[0].id)
  const [stripPaused, setStripPaused] = useState(false)
  const [activeEngIndex, setActiveEngIndex] = useState(0)
  const [activeSampleIndex, setActiveSampleIndex] = useState(0)
  const [engPaused, setEngPaused] = useState(false)
  const [activeOrbitIndex, setActiveOrbitIndex] = useState(0)
  const [orbitPaused, setOrbitPaused] = useState(false)
  const [openFaqIndex, setOpenFaqIndex] = useState(0)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 16)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (engPaused) return undefined
    const timer = window.setInterval(() => {
      setActiveEngIndex((prev) => (prev + 1) % ENGINEERING_DECK.length)
      setActiveSampleIndex(0)
    }, 6000)
    return () => window.clearInterval(timer)
  }, [engPaused, activeEngIndex])

  useEffect(() => {
    if (orbitPaused) return undefined
    const timer = window.setInterval(() => {
      setActiveOrbitIndex((prev) => (prev + 1) % CIVIC_ORBIT_NODES.length)
    }, 4800)
    return () => window.clearInterval(timer)
  }, [orbitPaused, activeOrbitIndex])

  const currentHero =
    HERO_TABS.find((t) => t.id === activeHeroTab) || HERO_TABS[0]
  const currentSpotlightCard =
    SHOWCASE_CARDS.find((c) => c.id === selectedCardId) || SHOWCASE_CARDS[0]
  const currentEng = ENGINEERING_DECK[activeEngIndex] || ENGINEERING_DECK[0]
  const currentSample =
    currentEng.samples[activeSampleIndex] || currentEng.samples[0]
  const currentOrbit =
    CIVIC_ORBIT_NODES[activeOrbitIndex] || CIVIC_ORBIT_NODES[0]

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('info@naya.com.np')
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2400)
    } catch {
      window.location.href = 'mailto:info@naya.com.np'
    }
  }

  return (
    <div id="top" className="page-shell">
      {/* ─── 1. Top Navigation (Pool DNA) ─── */}
      <header className={`pool-nav ${scrolled ? 'is-scrolled' : ''}`} role="banner">
        <div className="pool-nav__inner">
          <a href="#top" className="brand-mark" aria-label="Naya Yatra home">
            naya.
          </a>

          <div className="pool-nav__actions">
            <nav className="pool-nav__links" aria-label="Primary navigation">
              <a href="#ecosystem" className="pool-nav__link micro-caps">
                ECOSYSTEM
              </a>
              <a href="#engineering" className="pool-nav__link micro-caps">
                ENGINEERING
              </a>
              <a href="#impacters" className="pool-nav__link micro-caps">
                HARDWARE &amp; R&amp;D
              </a>
              <a href="#faq" className="pool-nav__link micro-caps">
                FAQ
              </a>
            </nav>

            <a href="#contact" className="pill-btn">
              START A PROJECT
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* ─── 2. Hero + Lush Botanical Workbench Showcase ─── */}
        <section className="hero-block" aria-labelledby="hero-heading">
          <div className="pool-container">
            <div className="hero-intro">
              <h1 id="hero-heading" className="display-title">
                Software, intelligence, and physical machines, engineered under one roof.
              </h1>
              <p className="hero-sub">
                From high-scale web and mobile platforms to applied AI, IoT
                telemetry, and stealth robotics, Naya Yatra partners with
                enterprises, institutions, and governments to solve complex
                engineering problems.
              </p>
              <a href="#ecosystem" className="pill-btn">
                EXPLORE OUR WORK
              </a>
            </div>

            <div className="showcase-tray">
              <div className="showcase-botanical">
                {/* Sunlit Forest Canopy Video Background */}
                <video
                  className="showcase-canopy-video"
                  src={`${import.meta.env.BASE_URL}hero-canopy.mp4`}
                  poster={`${import.meta.env.BASE_URL}hero-canopy-poster.jpg`}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-hidden="true"
                />
                <div className="showcase-video-scrim" aria-hidden="true" />

                {/* 4 Interactive Pill Tabs at Top of Botanical Frame */}
                <div
                  className="showcase-tabs"
                  role="tablist"
                  aria-label="Naya Yatra ecosystem preview tabs"
                >
                  {HERO_TABS.map((tab) => {
                    const active = tab.id === currentHero.id
                    return (
                      <button
                        key={tab.id}
                        type="button"
                        role="tab"
                        aria-selected={active}
                        aria-controls={`hero-panel-${tab.id}`}
                        id={`hero-tab-${tab.id}`}
                        className={`showcase-tab micro-caps ${
                          active ? 'is-active' : ''
                        }`}
                        onClick={() => setActiveHeroTab(tab.id)}
                      >
                        {tab.tabLabel}
                      </button>
                    )
                  })}
                </div>

                {/* Elevated White App Canvas Inside */}
                <div
                  id={`hero-panel-${currentHero.id}`}
                  role="tabpanel"
                  aria-labelledby={`hero-tab-${currentHero.id}`}
                  className="app-canvas"
                >
                  <aside className="app-sidebar" aria-label="Workspace navigation">
                    <div>
                      <div className="app-sidebar__head">
                        <span className="brand-mark" style={{ fontSize: 'var(--text-base)' }}>
                          naya.
                        </span>
                        <span className="micro-caps" style={{ color: 'var(--color-muted)' }}>
                          KATHMANDU
                        </span>
                      </div>

                      <span className="app-sidebar__group-label">Core Pillars</span>
                      <div className="app-sidebar__nav">
                        {HERO_TABS.map((item) => (
                          <button
                            key={item.id}
                            type="button"
                            className={`app-sidebar__item ${
                              item.id === currentHero.id ? 'is-selected' : ''
                            }`}
                            onClick={() => setActiveHeroTab(item.id)}
                          >
                            <span>{item.tabLabel}</span>
                            {item.id === currentHero.id && (
                              <span className="app-sidebar__badge">LIVE</span>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>

                    <a
                      href="#contact"
                      className="app-stage__action-pill"
                      style={{ justifyContent: 'space-between' }}
                    >
                      <span>Commission a Project</span>
                      <span aria-hidden="true">→</span>
                    </a>
                  </aside>

                  <div className="app-stage">
                    <div className="app-stage__topbar">
                      <span className="app-stage__title">
                        {currentHero.workspaceTitle}
                      </span>
                      <span className="app-stage__chip">
                        <span>{currentHero.chipLabel}</span>
                      </span>
                    </div>

                    <div className="app-stage__center">
                      <div className="app-stage__emblem" aria-hidden="true">
                        <span
                          style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: 'var(--text-xl)',
                            fontWeight: 600,
                          }}
                        >
                          {currentHero.emblemText}
                        </span>
                      </div>
                      <div className="app-stage__metric tnum">
                        {currentHero.metric}
                      </div>
                      <p className="app-stage__caption">
                        {currentHero.metricSub}
                      </p>
                      <div className="app-stage__pills">
                        <a
                          href={currentHero.primaryHref}
                          target={
                            currentHero.primaryHref.startsWith('http')
                              ? '_blank'
                              : undefined
                          }
                          rel={
                            currentHero.primaryHref.startsWith('http')
                              ? 'noreferrer'
                              : undefined
                          }
                          className="app-stage__action-pill"
                        >
                          {currentHero.primaryAction}
                        </a>
                        <a
                          href={currentHero.secondaryHref}
                          className="app-stage__action-pill"
                        >
                          {currentHero.secondaryAction}
                        </a>
                      </div>
                    </div>

                    <div className="app-stage__feed">
                      {currentHero.feed.map((row, idx) => (
                        <div key={idx} className="app-stage__feed-item">
                          <span>{row.label}</span>
                          <span className="micro-caps" style={{ color: 'var(--color-ink)' }}>
                            {row.right}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <small className="showcase-footnote">
                *Alongside our public platforms above, Naya Yatra Private Limited (Kathmandu, Nepal) engineers bespoke enterprise software, public-sector telemetry, and stealth robotics systems.
              </small>
            </div>
          </div>
        </section>

        {/* ─── 3. Two-Column Editorial Split Row 1 ─── */}
        <section id="ecosystem" className="pool-container" aria-labelledby="ecosystem-heading">
          <div className="split-row split-row--dotted">
            <h2 id="ecosystem-heading" className="split-heading">
              One engineering partner across software, AI, and physical hardware
            </h2>
            <p className="split-body">
              Whether commissioning a custom enterprise platform, deploying
              nationwide IoT and fleet telemetry, training domain-specific AI
              models, or prototyping autonomous robotics, our team engineers
              end-to-end systems tailored to the problem.
            </p>
          </div>

          {/* ─── 4. Two-Column Editorial Split Row 2 + Animated Visual Strip ─── */}
          <div className="split-row">
            <h2 className="split-heading">Selected public platforms &amp; open R&amp;D</h2>
            <p className="split-body">
              Alongside confidential enterprise, government, and stealth-mode
              robotics engineering, we build and operate our own public software
              platforms, language tools, and civic hardware.
            </p>
          </div>
        </section>

        <section className="visual-strip-section" aria-label="Flagship platforms">
          <div className="pool-container">
            <div className="strip-controls-bar">
              <div
                className="strip-filter-pills"
                role="tablist"
                aria-label="Highlight platform card"
              >
                {SHOWCASE_CARDS.map((card) => (
                  <button
                    key={card.id}
                    type="button"
                    role="tab"
                    aria-selected={card.id === selectedCardId}
                    className={`strip-pill ${
                      card.id === selectedCardId ? 'is-active' : ''
                    }`}
                    onClick={() => setSelectedCardId(card.id)}
                  >
                    {card.title}
                  </button>
                ))}
              </div>

              <button
                type="button"
                className="icon-toggle-btn"
                aria-label={stripPaused ? 'Resume card glide' : 'Pause card glide'}
                title={stripPaused ? 'Resume card glide' : 'Pause card glide'}
                onClick={() => setStripPaused((prev) => !prev)}
              >
                {stripPaused ? <Play size={14} /> : <Pause size={14} />}
              </button>
            </div>
          </div>

          {/* Edge-to-Edge Auto-Gliding Marquee Track with Soft Edge Fade Masks */}
          <div className="visual-marquee-viewport">
            <div
              className={`visual-marquee-track ${
                stripPaused ? 'is-paused' : ''
              }`}
            >
              {[...SHOWCASE_CARDS, ...SHOWCASE_CARDS].map((card, idx) => {
                const isDuplicate = idx >= SHOWCASE_CARDS.length
                const isHighlighted = card.id === selectedCardId
                return (
                  <button
                    key={`${card.id}-${idx}`}
                    type="button"
                    tabIndex={isDuplicate ? -1 : 0}
                    aria-hidden={isDuplicate ? 'true' : undefined}
                    className={`pool-card ${
                      isHighlighted ? 'is-highlighted' : ''
                    }`}
                    onClick={() => setSelectedCardId(card.id)}
                  >
                    <div className={`pool-card__art ${card.artClass}`}>
                      <div className="pool-card__top-row">
                        <span
                          className={`pool-card__pill-tag ${
                            card.id === 'paper' ? 'pool-card__pill-tag--light' : ''
                          }`}
                        >
                          {card.kicker}
                        </span>
                        <span className="pool-card__live-dot" aria-hidden="true" />
                      </div>

                      <CardMiniScene id={card.id} />
                    </div>

                    <div className="pool-card__footer">
                      <div>
                        <span className="pool-card__title">{card.title}</span>
                        <span className="pool-card__meta">{card.meta}</span>
                      </div>
                      <span className="pool-card__badge">{card.badge}</span>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          <div className="pool-container">
            <div className="strip-spotlight-bar">
              <div className="strip-spotlight__info">
                <span className="strip-spotlight__title">
                  {currentSpotlightCard.title}:
                </span>
                <span className="strip-spotlight__desc">
                  {currentSpotlightCard.summary}
                </span>
              </div>

              <a
                href={currentSpotlightCard.ctaHref}
                target={
                  currentSpotlightCard.ctaHref.startsWith('http')
                    ? '_blank'
                    : undefined
                }
                rel={
                  currentSpotlightCard.ctaHref.startsWith('http')
                    ? 'noreferrer'
                    : undefined
                }
                className="pill-btn"
              >
                {currentSpotlightCard.ctaLabel}
              </a>
            </div>
          </div>
        </section>

        {/* ─── 5. Animated Interactive Engineering & Linguistic Showcase Deck ─── */}
        <section id="engineering" className="eng-section" aria-labelledby="engineering-heading">
          <div className="pool-container">
            <div className="split-row" style={{ paddingTop: 0 }}>
              <h2 id="engineering-heading" className="split-heading">
                Language, editorial, and AI infrastructure built to endure
              </h2>
              <p className="split-body">
                From digitizing the Nepal Academy’s 128,000+ word authoritative
                dictionary to building distraction-free Nepali writing utilities,
                modular mobile applets, and subscription-free conversational AI.
              </p>
            </div>

            <div
              className="eng-deck"
              onMouseEnter={() => setEngPaused(true)}
              onMouseLeave={() => setEngPaused(false)}
            >
              {/* Left: Auto-Cycling Interactive Selector Stack */}
              <div
                className="eng-selector-stack"
                role="tablist"
                aria-label="Nepali language and AI engineering systems"
              >
                {ENGINEERING_DECK.map((item, idx) => {
                  const isActive = idx === activeEngIndex
                  return (
                    <button
                      key={item.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-controls={`eng-panel-${item.id}`}
                      id={`eng-tab-${item.id}`}
                      className={`eng-tab-card ${isActive ? 'is-active' : ''}`}
                      onClick={() => {
                        setActiveEngIndex(idx)
                        setActiveSampleIndex(0)
                      }}
                    >
                      <div className="eng-tab-card__head">
                        <div className="eng-tab-card__title-group">
                          <span className="eng-tab-card__num">{item.num}</span>
                          <span className="eng-tab-card__title">{item.title}</span>
                        </div>
                        <span className="eng-tab-card__badge">{item.badge}</span>
                      </div>

                      <p className="eng-tab-card__body" hidden={!isActive}>
                        {item.desc}
                      </p>

                      {isActive && (
                        <div
                          className="eng-tab-card__progress-track"
                          aria-hidden="true"
                        >
                          <div
                            key={`${item.id}-${engPaused ? 'paused' : 'run'}`}
                            className={`eng-tab-card__progress-bar ${
                              engPaused ? 'is-paused' : ''
                            }`}
                          />
                        </div>
                      )}
                    </button>
                  )
                })}
              </div>

              {/* Right: Lush Botanical Stage + Animated Live Preview Card */}
              <div
                id={`eng-panel-${currentEng.id}`}
                role="tabpanel"
                aria-labelledby={`eng-tab-${currentEng.id}`}
                className="eng-stage-backdrop"
              >
                <div className="eng-stage__topbar">
                  <div className="eng-stage__status">
                    <span className="eng-stage__pulse" aria-hidden="true" />
                    <span className="micro-caps">{currentEng.partnerLabel}</span>
                  </div>

                  <button
                    type="button"
                    className="icon-toggle-btn icon-toggle-btn--dark"
                    aria-label={engPaused ? 'Resume auto-cycle' : 'Pause auto-cycle'}
                    title={engPaused ? 'Resume auto-cycle' : 'Pause auto-cycle'}
                    onClick={() => setEngPaused((p) => !p)}
                  >
                    {engPaused ? <Play size={14} /> : <Pause size={14} />}
                  </button>
                </div>

                <div
                  key={`${currentEng.id}-${activeSampleIndex}`}
                  className="eng-preview-card"
                >
                  <div className="eng-preview-card__header">
                    <div>
                      <span
                        className="micro-caps"
                        style={{ color: 'var(--color-muted)', display: 'block' }}
                      >
                        VERIFIED PRODUCTION SYSTEM · {currentEng.num}
                      </span>
                      <h3
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: 'var(--text-lg)',
                          fontWeight: 500,
                          color: 'var(--color-ink)',
                          display: 'block',
                          overflowWrap: 'anywhere',
                          margin: 0,
                        }}
                      >
                        {currentEng.title}
                      </h3>
                    </div>

                    <div
                      className="eng-sample-pills"
                      role="group"
                      aria-label="Interactive sample selector"
                    >
                      {currentEng.samples.map((s, sIdx) => (
                        <button
                          key={s.pill}
                          type="button"
                          className={`eng-sample-pill ${
                            sIdx === activeSampleIndex ? 'is-selected' : ''
                          }`}
                          onClick={() => setActiveSampleIndex(sIdx)}
                        >
                          {s.pill}
                        </button>
                      ))}
                    </div>
                  </div>

                  {currentEng.id === 'paper' ? (
                    <div className="eng-transform-grid">
                      <div className="eng-demo-box">
                        <span
                          className="micro-caps"
                          style={{ color: 'var(--color-muted)' }}
                        >
                          {currentSample.fromLabel}
                        </span>
                        <div
                          className="eng-demo-box__word"
                          style={{ fontFamily: 'var(--font-outlier)', fontSize: 'var(--text-md)' }}
                        >
                          {currentSample.fromText}
                        </div>
                      </div>

                      <div className="eng-transform-arrow" aria-hidden="true">
                        →
                      </div>

                      <div className="eng-demo-box">
                        <span
                          className="micro-caps"
                          style={{ color: 'var(--color-success)' }}
                        >
                          {currentSample.toLabel}
                        </span>
                        <div className="eng-demo-box__word">
                          {currentSample.toText}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="eng-demo-box">
                      <span
                        className="micro-caps"
                        style={{ color: 'var(--color-muted)' }}
                      >
                        {currentSample.sub}
                      </span>
                      <div className="eng-demo-box__word">
                        {currentSample.headword}
                      </div>
                      <p className="eng-demo-box__def">{currentSample.body}</p>
                    </div>
                  )}

                  <div className="eng-preview-card__footer">
                    <div className="eng-spec-chips">
                      {currentEng.specs.map((sp) => (
                        <span key={sp} className="eng-spec-chip">
                          {sp}
                        </span>
                      ))}
                    </div>

                    <a
                      href={currentEng.linkHref}
                      target="_blank"
                      rel="noreferrer"
                      className="typographic-link micro-caps"
                      style={{ color: 'var(--color-ink)', textDecoration: 'none' }}
                    >
                      {currentEng.linkLabel}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 6. Deep Forest-Pine Rounded Block ("Safety first" DNA → Hardware, Edge AI & Field Engineering) ─── */}
        <section id="impacters" className="forest-block-wrap" aria-labelledby="impacters-heading">
          <div className="pool-container">
            <div className="forest-block">
              <div className="forest-block__copy">
                <div>
                  <h2 id="impacters-heading" className="forest-block__title">
                    Hardware, edge AI, and field engineering in action
                  </h2>
                  <p className="forest-block__desc">
                    Beyond our confidential embedded systems, fleet telemetry, and
                    stealth robotics R&amp;D, we actively apply our hardware and
                    edge-AI capabilities to public-interest challenges. In technical
                    collaboration with Impacters, a STEM initiative by the Women
                    Development Society (WODES), we co-engineer solar-powered edge
                    AI, 3D-printed vertical aeroponics, and support open-IP research
                    prototypes across Nepal.
                  </p>
                </div>

                <p className="forest-block__footnote">
                  Public hardware &amp; R&amp;D case studies with Impacters (WODES),
                  including Project Biruwa (Aeroponics &amp; Endemic Plant
                  Conservation), Project Saathi (Solar + P2P Offline Farm AI), and the
                  Sandbox STEM Research Grant Program.*
                </p>
              </div>

              <div
                className="orbital-canvas"
                onMouseEnter={() => setOrbitPaused(true)}
                onMouseLeave={() => setOrbitPaused(false)}
              >
                <div className="orbital-constellation">
                  <svg
                    className="orbital-rings-svg"
                    viewBox="0 0 500 340"
                    aria-hidden="true"
                  >
                    {/* Radiating Signal Spokes from Center Hub (250, 170) to the 4 Nodes */}
                    {CIVIC_ORBIT_NODES.map((node, idx) => (
                      <line
                        key={node.id}
                        x1="250"
                        y1="170"
                        x2={node.spokeX}
                        y2={node.spokeY}
                        className={`orbital-spoke ${
                          idx === activeOrbitIndex ? 'is-active' : ''
                        }`}
                      />
                    ))}

                    {/* Concentric Dashed Rings */}
                    <ellipse
                      cx="250"
                      cy="170"
                      rx="135"
                      ry="92"
                      fill="none"
                      stroke="var(--color-forest-border)"
                      strokeDasharray="4 5"
                    />
                    <ellipse
                      cx="250"
                      cy="170"
                      rx="210"
                      ry="142"
                      fill="none"
                      stroke="var(--color-forest-border)"
                      strokeDasharray="4 5"
                    />

                    {/* Rotating Telemetry Orbit Satellites */}
                    <g className="orbital-ring-rotate">
                      <circle cx="250" cy="35" r="4" fill="var(--color-lime)" />
                      <circle
                        cx="250"
                        cy="305"
                        r="3"
                        fill="var(--color-lime)"
                        opacity="0.65"
                      />
                    </g>
                    <g className="orbital-ring-rotate--reverse">
                      <circle
                        cx="115"
                        cy="170"
                        r="3.5"
                        fill="var(--color-lime)"
                        opacity="0.8"
                      />
                      <circle
                        cx="385"
                        cy="170"
                        r="3.5"
                        fill="var(--color-lime)"
                        opacity="0.8"
                      />
                    </g>
                  </svg>

                  {/* Central Glowing Hub Node */}
                  <div className="orbital-center-hub" aria-hidden="true">
                    <span
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'var(--text-xs)',
                        fontWeight: 600,
                        letterSpacing: '-0.02em',
                        color: 'var(--color-forest-ink)',
                        lineHeight: 1,
                      }}
                    >
                      naya.
                    </span>
                  </div>

                  {/* 4 Floating Interactive Orbital Pills */}
                  <div
                    className="orbital-nodes-grid"
                    role="tablist"
                    aria-label="Civic and agricultural STEM initiatives"
                  >
                    {CIVIC_ORBIT_NODES.map((node, idx) => {
                      const isActive = idx === activeOrbitIndex
                      return (
                        <button
                          key={node.id}
                          type="button"
                          role="tab"
                          aria-selected={isActive}
                          className={`orbital-pill ${
                            isActive ? 'is-active' : ''
                          }`}
                          onClick={() => setActiveOrbitIndex(idx)}
                        >
                          <span className="orbital-pill__badge">
                            {node.badge}
                          </span>
                          <div>
                            <span className="orbital-pill__metric">
                              <span>{node.title}</span>
                            </span>
                            <span className="orbital-pill__sub">
                              {node.sub}
                            </span>
                          </div>
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Live Animated Field Architecture & Publication HUD */}
                <div key={currentOrbit.id} className="orbital-hud">
                  <div className="orbital-hud__top">
                    <div className="orbital-hud__pipeline" aria-label="System pipeline">
                      {currentOrbit.pipeline.map((step, sIdx) => (
                        <React.Fragment key={step}>
                          <span className="orbital-hud__step">{step}</span>
                          {sIdx < currentOrbit.pipeline.length - 1 && (
                            <span
                              className="orbital-hud__connector"
                              aria-hidden="true"
                            />
                          )}
                        </React.Fragment>
                      ))}
                    </div>

                    <button
                      type="button"
                      className="icon-toggle-btn icon-toggle-btn--dark"
                      aria-label={orbitPaused ? 'Resume orbit cycle' : 'Pause orbit cycle'}
                      title={orbitPaused ? 'Resume orbit cycle' : 'Pause orbit cycle'}
                      onClick={() => setOrbitPaused((p) => !p)}
                    >
                      {orbitPaused ? <Play size={14} /> : <Pause size={14} />}
                    </button>
                  </div>

                  <div className="orbital-hud__bottom">
                    <p className="orbital-hud__desc">{currentOrbit.hudDesc}</p>
                    <a
                      href={currentOrbit.href}
                      target="_blank"
                      rel="noreferrer"
                      className="orbital-hud__link"
                    >
                      <span>{currentOrbit.linkLabel}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 7. Centered Closing Statement + Pill CTA ("Bank alone, Pool together." DNA) ─── */}
        <section id="contact" className="closing-cta-section" aria-labelledby="contact-heading">
          <div className="pool-container closing-cta-inner">
            <h2 id="contact-heading" className="closing-title">
              Commercial craft,{' '}
              <br />
              civic purpose.
            </h2>
            <p className="closing-sub">
              Headquartered in Kathmandu, Nepal. Partner with us on custom software
              platforms, applied AI, embedded IoT &amp; telemetry, or hardware and
              robotics R&amp;D.
            </p>
            <div className="closing-actions">
              <a href="mailto:info@naya.com.np" className="pill-btn">
                EMAIL INFO@NAYA.COM.NP
              </a>
              <button
                type="button"
                className="pill-btn pill-btn--ghost"
                data-state={copied ? 'success' : undefined}
                onClick={handleCopyEmail}
              >
                {copied ? 'COPIED INFO@NAYA.COM.NP' : 'COPY EMAIL ADDRESS'}
              </button>
            </div>
          </div>
        </section>

        {/* ─── 8. Two-Column Accordion FAQ ("Questions about Pool, answered." DNA) ─── */}
        <section id="faq" className="faq-section" aria-labelledby="faq-heading">
          <div className="pool-container">
            <div className="faq-grid">
              <h2 id="faq-heading" className="split-heading">
                Questions about Naya Yatra, answered.
              </h2>

              <div className="faq-list">
                {FAQ_ITEMS.map((item, idx) => {
                  const isOpen = openFaqIndex === idx
                  return (
                    <div key={idx} className="faq-item">
                      <button
                        type="button"
                        className="faq-trigger"
                        aria-expanded={isOpen}
                        aria-controls={`faq-ans-${idx}`}
                        id={`faq-btn-${idx}`}
                        onClick={() =>
                          setOpenFaqIndex(isOpen ? -1 : idx)
                        }
                      >
                        <span>{item.q}</span>
                        <span className="faq-icon" aria-hidden="true">
                          {isOpen ? '−' : '+'}
                        </span>
                      </button>
                      <div
                        id={`faq-ans-${idx}`}
                        role="region"
                        aria-labelledby={`faq-btn-${idx}`}
                        className="faq-answer"
                        hidden={!isOpen}
                      >
                        <p>{item.a}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ─── 9. Deep Forest-Pine Footer + Giant Watermark ─── */}
      <footer className="pool-footer">
        <div className="pool-container">
          <div className="pool-footer__top">
            <div>
              <a href="#top" className="brand-mark brand-mark--light">
                naya.
              </a>
            </div>

            <div className="pool-footer__cols">
              <ul className="pool-footer__col" aria-label="Ecosystem links">
                <li>
                  <a
                    href="https://naya.com.np/"
                    target="_blank"
                    rel="noreferrer"
                    className="pool-footer__link"
                  >
                    NAYA.COM.NP ↗
                  </a>
                </li>
                <li>
                  <a
                    href="https://paper.naya.com.np"
                    target="_blank"
                    rel="noreferrer"
                    className="pool-footer__link"
                  >
                    NAYA PAPER ↗
                  </a>
                </li>
                <li>
                  <a
                    href="https://play.google.com/store/apps/details?id=np.com.naya.sabdakosh&hl=en"
                    target="_blank"
                    rel="noreferrer"
                    className="pool-footer__link"
                  >
                    PRAGYA SHABDAKOSH ↗
                  </a>
                </li>
                <li>
                  <a
                    href="https://play.google.com/store/apps/details?id=np.com.naya.app&hl=en"
                    target="_blank"
                    rel="noreferrer"
                    className="pool-footer__link"
                  >
                    THE NAYA APP ↗
                  </a>
                </li>
                <li>
                  <a
                    href="https://apps.apple.com/de/app/myna-ai/id6480445806?l=en-GB"
                    target="_blank"
                    rel="noreferrer"
                    className="pool-footer__link"
                  >
                    MYNA AI (iOS) ↗
                  </a>
                </li>
              </ul>

              <ul className="pool-footer__col" aria-label="Civic & Corporate links">
                <li>
                  <a
                    href="https://impacters.wodes.org.np"
                    target="_blank"
                    rel="noreferrer"
                    className="pool-footer__link"
                  >
                    IMPACTERS (WODES) ↗
                  </a>
                </li>
                <li>
                  <a
                    href="https://wodes.org.np/post/p1771516471yiocf"
                    target="_blank"
                    rel="noreferrer"
                    className="pool-footer__link"
                  >
                    PROJECT BIRUWA ↗
                  </a>
                </li>
                <li>
                  <a
                    href="https://impacters.wodes.org.np/post/p1656784584potr8"
                    target="_blank"
                    rel="noreferrer"
                    className="pool-footer__link"
                  >
                    PROJECT SAATHI ↗
                  </a>
                </li>
                <li>
                  <a
                    href="https://impacters.wodes.org.np/post/p1657043789nib5k"
                    target="_blank"
                    rel="noreferrer"
                    className="pool-footer__link"
                  >
                    SANDBOX STEM GRANTS ↗
                  </a>
                </li>
                <li>
                  <a href="mailto:info@naya.com.np" className="pool-footer__link">
                    INFO@NAYA.COM.NP
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pool-footer__legal">
            <p className="micro-caps" style={{ color: 'var(--color-forest-muted)' }}>
              ©2026 NAYA YATRA PRIVATE LIMITED · KATHMANDU METROPOLITAN CITY-15, NEPAL · INFO@NAYA.COM.NP
            </p>
            <p>
              * Naya Yatra Private Limited (नयाँ यात्रा प्रा. लि.) is a software,
              applied AI, and hardware/robotics engineering firm in Nepal, building
              bespoke enterprise and public-sector systems alongside its own public
              platforms. Pragya Nepali Brihat Shabdakosh is published in official
              technical collaboration with the Nepal Academy (नेपाल
              प्रज्ञा प्रतिष्ठान). Project Biruwa, Project Saathi, and the Sandbox
              STEM Research Grant Program are collaborative civic-tech initiatives
              with Impacters, an initiative of the Women Development Society (WODES).
            </p>
          </div>
        </div>

        <svg
          className="pool-footer__watermark"
          viewBox="0 0 1200 185"
          preserveAspectRatio="xMidYMax meet"
          aria-hidden="true"
        >
          <text x="600" y="172" textAnchor="middle">
            NayaYatra
          </text>
        </svg>
      </footer>
    </div>
  )
}
