/**
 * @license
 * Copyright 2026 ax3cubed (Modifications)
 * SPDX-License-Identifier: Apache-2.0
 *
 * Modifications: see repository CHANGELOG.md.
 */

import { Logo } from "@/components/Logo";
import {
  ArrowRightIcon,
  BookOpenIcon,
  BrainIcon,
  ImageIcon,
  MicIcon,
  PlayIcon,
  SparklesIcon,
  UsersIcon,
  ZapIcon,
} from "lucide-react";
import styles from "./LandingPage.module.scss";

interface LandingPageProps {
  onGetStarted: () => void;
}

export function LandingPage({ onGetStarted }: LandingPageProps) {
  return (
    <div className={styles.page}>
      <Nav onGetStarted={onGetStarted} />
      <HeroSection onGetStarted={onGetStarted} />
      <FeaturesSection />
      <HowItWorksSection />
      <CollabSection />
      <AISection />
      <CTASection onGetStarted={onGetStarted} />
      <Footer />
    </div>
  );
}

/* ─── Nav ─────────────────────────────────────────────────────── */

function Nav({ onGetStarted }: { onGetStarted: () => void }) {
  return (
    <nav className={styles.nav}>
      <div className={styles.navBrand}>
        <Logo size={28} alt="Stormflow" />
        <span className={styles.navLogo}>Stormflow</span>
      </div>
      <button className={styles.navCta} onClick={onGetStarted}>
        Sign in
        <ArrowRightIcon size={14} />
      </button>
    </nav>
  );
}

/* ─── Hero ────────────────────────────────────────────────────── */

function HeroSection({ onGetStarted }: { onGetStarted: () => void }) {
  return (
    <section className={styles.hero}>
      <div className={styles.heroGlow} aria-hidden />
      <div className={styles.heroGlowSecondary} aria-hidden />
      <div className={styles.heroContent}>
        <div className={styles.heroBadge}>
          <SparklesIcon size={12} />
          <span>Powered by Gemini AI &middot; Built for teams</span>
        </div>
        <h1 className={styles.heroHeadline}>
          Your team&rsquo;s AI canvas<br />
          for building{" "}
          <span className={styles.heroGradient}>products</span>
        </h1>
        <p className={styles.heroSubtitle}>
          Stormflow is an infinite collaborative canvas with AI assistance.
          Build personas, generate concept sketches, and ship live prototypes—
          all in one place, in real time.
        </p>
        <div className={styles.heroCtas}>
          <button className={styles.ctaPrimary} onClick={onGetStarted}>
            Start brainstorming
            <ArrowRightIcon size={16} />
          </button>
          <a className={styles.ctaSecondary} href="#how-it-works">
            How it works
          </a>
        </div>
      </div>
      <div className={styles.heroVisual} aria-hidden>
        <CanvasMockup />
      </div>
    </section>
  );
}

/* ─── Canvas Mockup ───────────────────────────────────────────── */

function CanvasMockup() {
  return (
    <div className={styles.canvasOuter}>
      <div className={styles.canvasGrid} />
      <div className={styles.canvasNodes}>
        {/* Root node */}
        <div className={`${styles.node} ${styles.nodeRoot}`}>
          <div className={styles.nodeRootPrompt}>What are we building?</div>
          <div className={styles.nodeRootAnswer}>
            A subscription platform for indie makers
          </div>
        </div>

        {/* Persona */}
        <div className={`${styles.node} ${styles.nodeEntity} ${styles.nodeFloat1}`}>
          <div className={styles.nodeEntityType}>
            <UsersIcon size={11} />
            <span>Persona</span>
          </div>
          <div className={styles.nodeEntityName}>The Solo Founder</div>
          <div className={styles.nodeEntityDesc}>
            Needs simple tooling, fast iterations
          </div>
        </div>

        {/* Goal */}
        <div className={`${styles.node} ${styles.nodeEntity} ${styles.nodeFloat2}`}>
          <div className={styles.nodeEntityType}>
            <ZapIcon size={11} />
            <span>User Goal</span>
          </div>
          <div className={styles.nodeEntityName}>Launch MVP fast</div>
          <div className={styles.nodeEntityDesc}>
            Ship a working product in 30 days
          </div>
        </div>

        {/* Tech stack */}
        <div className={`${styles.node} ${styles.nodeEntity} ${styles.nodeFloat3}`}>
          <div className={styles.nodeEntityType}>
            <BrainIcon size={11} />
            <span>Tech Stack</span>
          </div>
          <div className={styles.nodeEntityName}>React + Firebase</div>
          <div className={styles.nodeEntityDesc}>
            Serverless, real-time, scalable
          </div>
        </div>

        {/* AI Sketch */}
        <div className={`${styles.node} ${styles.nodeSketch} ${styles.nodeFloat4}`}>
          <div className={styles.nodeSketchLabel}>
            <ImageIcon size={11} />
            <span>AI Sketch</span>
          </div>
          <div className={styles.nodeSketchImage}>
            <div className={styles.sketchGradient} />
            <div className={styles.sketchLines} />
          </div>
        </div>

        {/* Mini App */}
        <div className={`${styles.node} ${styles.nodeMiniApp} ${styles.nodeFloat5}`}>
          <div className={styles.nodeMiniAppHeader}>
            <PlayIcon size={10} />
            <span>Prototype ready</span>
            <div className={styles.nodeMiniAppDot} />
          </div>
          <div className={styles.nodeMiniAppPreview}>
            <div className={styles.codeBar} style={{ width: "70%" }} />
            <div className={styles.codeBar} style={{ width: "50%" }} />
            <div className={styles.codeBar} style={{ width: "85%" }} />
            <div className={styles.codeBar} style={{ width: "40%" }} />
          </div>
        </div>
      </div>

      {/* Presence avatars */}
      <div className={styles.canvasPresence}>
        <div className={`${styles.presenceAvatar} ${styles.avatarA}`}>J</div>
        <div className={`${styles.presenceAvatar} ${styles.avatarB}`}>M</div>
        <div className={`${styles.presenceAvatar} ${styles.avatarC}`}>S</div>
        <span className={styles.presenceLabel}>3 collaborating</span>
      </div>
    </div>
  );
}

/* ─── Features ────────────────────────────────────────────────── */

const FEATURES = [
  {
    icon: <BrainIcon size={20} />,
    title: "Infinite Canvas",
    desc: "An unlimited space to think. Arrange ideas spatially with zero constraints.",
    accent: "#ffb48c",
  },
  {
    icon: <UsersIcon size={20} />,
    title: "Real-time Collab",
    desc: "See your team's cursors live. Every change syncs instantly across all devices.",
    accent: "#84c5ff",
  },
  {
    icon: <ImageIcon size={20} />,
    title: "AI Concept Sketches",
    desc: "Describe a UI and Gemini generates a concept sketch in seconds.",
    accent: "#c084fc",
  },
  {
    icon: <ZapIcon size={20} />,
    title: "Instant Prototypes",
    desc: "Gemini writes and runs interactive mini-apps directly on your canvas.",
    accent: "#f97316",
  },
  {
    icon: <MicIcon size={20} />,
    title: "Voice Collaboration",
    desc: "Brainstorm with your team using live voice powered by Gemini Live API.",
    accent: "#34d399",
  },
  {
    icon: <BookOpenIcon size={20} />,
    title: "Project Wiki",
    desc: "A built-in rich-text editor to document decisions, notes, and research.",
    accent: "#fb7185",
  },
];

function FeaturesSection() {
  return (
    <section className={styles.features}>
      <div className={styles.sectionInner}>
        <div className={styles.sectionLabel}>Features</div>
        <h2 className={styles.sectionHeading}>
          Everything your product team needs
        </h2>
        <p className={styles.sectionSubtitle}>
          From first spark to live prototype—no context switching, no extra tools.
        </p>
        <div className={styles.featuresGrid}>
          {FEATURES.map((f) => (
            <div key={f.title} className={styles.featureCard}>
              <div
                className={styles.featureIcon}
                style={{ "--icon-color": f.accent } as React.CSSProperties}
              >
                {f.icon}
              </div>
              <h3 className={styles.featureTitle}>{f.title}</h3>
              <p className={styles.featureDesc}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── How It Works ────────────────────────────────────────────── */

const STEPS = [
  {
    num: "01",
    title: "Set your vision",
    desc: "Start with a single prompt. Describe what you want to build and let Stormflow scaffold your brainstorm.",
    tag: "Root Node",
  },
  {
    num: "02",
    title: "Build context",
    desc: "Add personas, user goals, and tech constraints as structured nodes. Define who you're building for.",
    tag: "Entity Nodes",
  },
  {
    num: "03",
    title: "Generate & ship",
    desc: "AI sketches concepts, writes prototype code, and runs it live on the canvas. From idea to demo in minutes.",
    tag: "AI Generation",
  },
];

function HowItWorksSection() {
  return (
    <section className={styles.howItWorks} id="how-it-works">
      <div className={styles.sectionInner}>
        <div className={styles.sectionLabel}>How it works</div>
        <h2 className={styles.sectionHeading}>
          From idea to prototype in three steps
        </h2>
        <div className={styles.stepsRow}>
          {STEPS.map((step, i) => (
            <div key={step.num} className={styles.step}>
              <div className={styles.stepNumRow}>
                <span className={styles.stepNum}>{step.num}</span>
                {i < STEPS.length - 1 && (
                  <div className={styles.stepConnector} aria-hidden />
                )}
              </div>
              <div className={styles.stepTag}>{step.tag}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Collab Section ──────────────────────────────────────────── */

function CollabSection() {
  return (
    <section className={styles.collab}>
      <div className={styles.sectionInner}>
        <div className={styles.collabLayout}>
          <div className={styles.collabText}>
            <div className={styles.sectionLabel}>Collaboration</div>
            <h2 className={styles.sectionHeading}>
              Never brainstorm alone again
            </h2>
            <p className={styles.collabDesc}>
              Invite teammates to your canvas with a single link. Watch their
              cursors move in real time, start a video huddle without leaving
              the app, and see every change sync instantly—no refresh required.
            </p>
            <ul className={styles.collabFeatures}>
              <li>
                <span className={styles.checkDot} />
                Live cursors with user presence
              </li>
              <li>
                <span className={styles.checkDot} />
                In-canvas video huddles
              </li>
              <li>
                <span className={styles.checkDot} />
                One-click share via URL
              </li>
              <li>
                <span className={styles.checkDot} />
                Fork canvases for parallel exploration
              </li>
            </ul>
          </div>
          <div className={styles.collabVisual}>
            <CollabMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

function CollabMockup() {
  return (
    <div className={styles.collabCard}>
      <div className={styles.collabCardHeader}>
        <span className={styles.collabCardDot} style={{ background: "#ff6b6b" }} />
        <span className={styles.collabCardDot} style={{ background: "#ffd93d" }} />
        <span className={styles.collabCardDot} style={{ background: "#6bcb77" }} />
        <span className={styles.collabCardTitle}>Team Canvas · 3 active</span>
      </div>
      <div className={styles.collabCardBody}>
        {/* Simulated cursor 1 */}
        <div className={`${styles.cursor} ${styles.cursorA}`}>
          <div className={styles.cursorArrow} />
          <span className={styles.cursorName}>Jordan</span>
        </div>
        {/* Simulated cursor 2 */}
        <div className={`${styles.cursor} ${styles.cursorB}`}>
          <div className={styles.cursorArrow} />
          <span className={styles.cursorName}>Morgan</span>
        </div>
        {/* Simulated node */}
        <div className={styles.mockNode}>
          <div className={styles.mockNodeHandle} />
          <div className={styles.mockNodeContent}>
            <div className={styles.mockLine} style={{ width: "80%" }} />
            <div className={styles.mockLine} style={{ width: "60%" }} />
          </div>
        </div>
        {/* Video avatars */}
        <div className={styles.videoHuddle}>
          <div className={`${styles.videoAvatar} ${styles.videoAvatarA}`}>J</div>
          <div className={`${styles.videoAvatar} ${styles.videoAvatarB}`}>M</div>
          <div className={`${styles.videoAvatar} ${styles.videoAvatarC}`}>S</div>
        </div>
      </div>
    </div>
  );
}

/* ─── AI Section ──────────────────────────────────────────────── */

function AISection() {
  return (
    <section className={styles.ai}>
      <div className={styles.aiGlow} aria-hidden />
      <div className={styles.sectionInner}>
        <div className={styles.aiLayout}>
          <div className={styles.aiVisual}>
            <AIMockup />
          </div>
          <div className={styles.aiText}>
            <div className={styles.sectionLabel}>AI generation</div>
            <h2 className={styles.sectionHeading}>
              Describe it.<br />
              <span className={styles.heroGradient}>Stormflow builds it.</span>
            </h2>
            <p className={styles.aiDesc}>
              Select any node and ask Gemini to generate a concept sketch,
              write prototype code, or spin up an interactive demo—directly
              on your canvas. No copy-paste, no separate tools.
            </p>
            <div className={styles.aiBadge}>
              <SparklesIcon size={14} />
              <span>Powered by Gemini 2.0</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AIMockup() {
  return (
    <div className={styles.aiCard}>
      <div className={styles.aiCardPrompt}>
        <div className={styles.aiPromptIcon}>
          <SparklesIcon size={14} />
        </div>
        <span className={styles.aiPromptText}>
          Generate a dashboard for the Solo Founder persona
        </span>
        <span className={styles.aiCursor}>|</span>
      </div>
      <div className={styles.aiCardResult}>
        <div className={styles.aiResultHeader}>
          <PlayIcon size={11} />
          <span>Prototype generated</span>
          <div className={styles.aiResultDot} />
        </div>
        <div className={styles.aiResultPreview}>
          {/* Fake mini dashboard UI */}
          <div className={styles.miniDash}>
            <div className={styles.miniDashSidebar}>
              <div className={styles.miniDashItem} />
              <div className={styles.miniDashItem} />
              <div className={styles.miniDashItem} />
            </div>
            <div className={styles.miniDashMain}>
              <div className={styles.miniDashCard} />
              <div className={styles.miniDashCard} />
              <div className={styles.miniDashChart} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── CTA Section ─────────────────────────────────────────────── */

function CTASection({ onGetStarted }: { onGetStarted: () => void }) {
  return (
    <section className={styles.cta}>
      <div className={styles.ctaGlow} aria-hidden />
      <div className={styles.sectionInner}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaHeading}>
            Ready to transform how your team ideates?
          </h2>
          <p className={styles.ctaSubtitle}>
            Sign in with your Google account and start your first canvas in seconds.
            Free to use, no credit card required.
          </p>
          <button className={styles.ctaPrimary} onClick={onGetStarted}>
            Start brainstorming free
            <ArrowRightIcon size={16} />
          </button>
          <p className={styles.ctaMeta}>
            Backed by Firebase · Apache-2.0 open source
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ──────────────────────────────────────────────────── */

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.sectionInner}>
        <div className={styles.footerInner}>
          <div className={styles.footerBrand}>
            <Logo size={20} alt="Stormflow" />
            <span>Stormflow</span>
          </div>
          <p className={styles.footerMeta}>
            &copy; 2026 Stormflow by{" "}
            <a href="https://accelory.net" target="_blank" rel="noopener noreferrer">
              Accelory.net
            </a>
            {" "}· Apache-2.0 ·{" "}
            <a
              href="https://labs.google/code/experiments/product-canvas"
              target="_blank"
              rel="noopener noreferrer"
            >
              Based on Google Labs ProductCanvas
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
