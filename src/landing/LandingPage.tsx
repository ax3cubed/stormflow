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
  GitForkIcon,
  ImageIcon,
  MicIcon,
  PlayIcon,
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
      <PoweredByStrip />
      <FeaturesSection />
      <HowItWorksSection />
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
        <Logo size={26} alt="Stormflow" />
        <span className={styles.navName}>Stormflow</span>
      </div>

      <div className={styles.navPill}>
        <a className={styles.navItem} href="#features">Features</a>
        <a className={styles.navItem} href="#how-it-works">How it works</a>
        <a className={styles.navItem} href="#collab">Collaborate</a>
        <a className={styles.navItem} href="#ai">AI</a>
      </div>

      <button className={styles.navCta} onClick={onGetStarted}>
        <span>Sign in</span>
        <ArrowRightIcon size={13} />
      </button>
    </nav>
  );
}

/* ─── Hero ────────────────────────────────────────────────────── */

function HeroSection({ onGetStarted }: { onGetStarted: () => void }) {
  return (
    <section className={styles.hero}>
      {/* Atmospheric sage green glow */}
      <div className={styles.heroAtmo} aria-hidden />
      <div className={styles.heroAtmoSecondary} aria-hidden />

      {/* SVG network lines */}
      <svg
        className={styles.heroLines}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden
      >
        <line x1="13" y1="25" x2="42" y2="47" />
        <line x1="87" y1="22" x2="58" y2="46" />
        <line x1="10" y1="66" x2="38" y2="54" />
        <line x1="90" y1="63" x2="62" y2="53" />
        <line x1="13" y1="25" x2="87" y2="22" />
        <line x1="10" y1="66" x2="90" y2="63" />
      </svg>

      {/* Floating canvas nodes */}
      <FloatingNode
        className={styles.nodeUL}
        icon="◆"
        type="Persona"
        value="The Solo Founder"
        delay={0}
      />
      <FloatingNode
        className={styles.nodeUR}
        icon="◆"
        type="User Goal"
        value="Ship in 30 days"
        delay={-2.8}
      />
      <FloatingNode
        className={styles.nodeML}
        icon="◆"
        type="AI Sketch"
        value="Concept ready"
        delay={-1.4}
        accent
      />
      <FloatingNode
        className={styles.nodeMR}
        icon="◆"
        type="Prototype"
        value="Live · running"
        delay={-3.8}
        accent
      />

      {/* Center content */}
      <div className={styles.heroCenter}>
        <div className={styles.heroBadge}>
          <span className={styles.heroBadgeDot} />
          <span>AI-powered · Real-time · Open source</span>
        </div>

        <h1 className={styles.heroH1}>
          Your team&rsquo;s AI canvas<br />
          for building{" "}
          <span className={styles.heroH1Dim}>products</span>
        </h1>

        <p className={styles.heroSub}>
          Stormflow is an infinite collaborative canvas with Gemini AI.
          Build personas, generate concept sketches, and ship live
          prototypes—all in real time with your team.
        </p>

        <div className={styles.heroCtas}>
          <button className={styles.btnDark} onClick={onGetStarted}>
            Start brainstorming
            <ArrowRightIcon size={14} />
          </button>
          <a className={styles.btnOutline} href="#features">
            Explore features
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className={styles.scrollHint} aria-hidden>
        <span className={styles.scrollIndex}>01/04</span>
        <span className={styles.scrollDot} />
        <span>Scroll down</span>
      </div>
    </section>
  );
}

interface FloatingNodeProps {
  className: string;
  icon: string;
  type: string;
  value: string;
  delay: number;
  accent?: boolean;
}

function FloatingNode({
  className,
  icon,
  type,
  value,
  delay,
  accent,
}: FloatingNodeProps) {
  return (
    <div
      className={`${styles.floatingNode} ${className} ${accent ? styles.floatingNodeAccent : ""}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <span className={styles.fnIcon}>{icon}</span>
      <div>
        <div className={styles.fnType}>{type}</div>
        <div className={styles.fnValue}>{value}</div>
      </div>
    </div>
  );
}

/* ─── Powered By ──────────────────────────────────────────────── */

function PoweredByStrip() {
  const items = [
    "Gemini AI",
    "Firebase",
    "React 19",
    "WebRTC",
    "TensorFlow.js",
    "Apache-2.0",
  ];
  return (
    <div className={styles.strip}>
      <span className={styles.stripLabel}>Built with</span>
      {items.map((item) => (
        <span key={item} className={styles.stripItem}>{item}</span>
      ))}
    </div>
  );
}

/* ─── Features Bento ──────────────────────────────────────────── */

function FeaturesSection() {
  return (
    <section className={styles.features} id="features">
      <div className={styles.inner}>
        <div className={styles.sectionTag}>Features</div>
        <h2 className={styles.sectionH2}>
          Everything your product team needs
        </h2>
        <p className={styles.sectionSub}>
          From first spark to live prototype — no context switching, no extra tools.
        </p>

        <div className={styles.bento}>
          {/* Wide card: Canvas */}
          <div className={`${styles.bentoCard} ${styles.bentoWide}`}>
            <div className={styles.bentoCardContent}>
              <div className={styles.bentoIcon}><BrainIcon size={18} /></div>
              <h3 className={styles.bentoTitle}>Infinite Canvas</h3>
              <p className={styles.bentoDesc}>
                An unlimited space to arrange ideas spatially. Pan, zoom, and
                connect thoughts without boundaries.
              </p>
            </div>
            <CanvasPreview />
          </div>

          {/* Collab card */}
          <div className={`${styles.bentoCard} ${styles.bentoTall}`}>
            <div className={styles.bentoIcon}><UsersIcon size={18} /></div>
            <h3 className={styles.bentoTitle}>Real-time Collab</h3>
            <p className={styles.bentoDesc}>
              See teammates' cursors live. Every edit syncs instantly.
            </p>
            <CollabPreview />
          </div>

          {/* AI Sketch */}
          <div className={styles.bentoCard}>
            <div className={styles.bentoIcon}><ImageIcon size={18} /></div>
            <h3 className={styles.bentoTitle}>AI Concept Sketches</h3>
            <p className={styles.bentoDesc}>
              Describe a UI and Gemini generates a concept sketch in seconds.
            </p>
          </div>

          {/* Prototypes */}
          <div className={`${styles.bentoCard} ${styles.bentoWide}`}>
            <div className={styles.bentoCardContent}>
              <div className={styles.bentoIcon}><ZapIcon size={18} /></div>
              <h3 className={styles.bentoTitle}>Instant Prototypes</h3>
              <p className={styles.bentoDesc}>
                Gemini writes and runs interactive mini-apps directly on your
                canvas. From idea to demo in minutes.
              </p>
            </div>
            <PrototypePreview />
          </div>

          {/* Voice */}
          <div className={styles.bentoCard} id="collab">
            <div className={styles.bentoIcon}><MicIcon size={18} /></div>
            <h3 className={styles.bentoTitle}>Voice Collaboration</h3>
            <p className={styles.bentoDesc}>
              Brainstorm live with your team using Gemini Live API.
            </p>
            <VoicePreview />
          </div>

          {/* Wiki */}
          <div className={styles.bentoCard}>
            <div className={styles.bentoIcon}><BookOpenIcon size={18} /></div>
            <h3 className={styles.bentoTitle}>Project Wiki</h3>
            <p className={styles.bentoDesc}>
              A built-in rich-text editor to document decisions and research.
            </p>
          </div>

          {/* Share */}
          <div className={styles.bentoCard}>
            <div className={styles.bentoIcon}><GitForkIcon size={18} /></div>
            <h3 className={styles.bentoTitle}>Fork & Share</h3>
            <p className={styles.bentoDesc}>
              One-click URL sharing. Fork canvases for parallel exploration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CanvasPreview() {
  return (
    <div className={styles.canvasPreview}>
      <div className={styles.cpDotGrid} />
      <div className={`${styles.cpNode} ${styles.cpNodeRoot}`}>
        <span className={styles.cpNodeLabel}>What are we building?</span>
      </div>
      <div className={`${styles.cpNode} ${styles.cpNodeA}`}>
        <span className={styles.cpNodeType}>Persona</span>
      </div>
      <div className={`${styles.cpNode} ${styles.cpNodeB}`}>
        <span className={styles.cpNodeType}>User Goal</span>
      </div>
      <div className={`${styles.cpNode} ${styles.cpNodeC}`}>
        <span className={styles.cpNodeType}>Tech Stack</span>
      </div>
    </div>
  );
}

function CollabPreview() {
  return (
    <div className={styles.collabPreview}>
      <div className={styles.cpAvatars}>
        <span className={`${styles.cpAvatar} ${styles.cpAvatarA}`}>J</span>
        <span className={`${styles.cpAvatar} ${styles.cpAvatarB}`}>M</span>
        <span className={`${styles.cpAvatar} ${styles.cpAvatarC}`}>S</span>
      </div>
      <div className={styles.cpStatus}>
        <span className={styles.cpStatusDot} />
        <span>3 collaborating now</span>
      </div>
    </div>
  );
}

function PrototypePreview() {
  return (
    <div className={styles.protoPreview}>
      <div className={styles.ppHeader}>
        <PlayIcon size={10} />
        <span>Dashboard</span>
        <span className={styles.ppLive} />
      </div>
      <div className={styles.ppGrid}>
        <div className={styles.ppCard} />
        <div className={styles.ppCard} />
        <div className={styles.ppChart} />
      </div>
    </div>
  );
}

function VoicePreview() {
  return (
    <div className={styles.voicePreview}>
      {[3, 6, 9, 12, 8, 11, 5, 9, 6, 4, 8, 10].map((h, i) => (
        <div
          key={i}
          className={styles.voiceBar}
          style={{
            height: `${h * 3}px`,
            animationDelay: `${i * 0.08}s`,
          }}
        />
      ))}
    </div>
  );
}

/* ─── How It Works ────────────────────────────────────────────── */

function HowItWorksSection() {
  return (
    <section className={styles.howItWorks} id="how-it-works">
      <div className={styles.inner}>
        <div className={styles.sectionTag}>How it works</div>
        <h2 className={styles.sectionH2}>
          From idea to prototype, in three steps
        </h2>
        <a className={styles.howBtn} href="#features">
          <PlayIcon size={12} />
          See all features
        </a>

        <div className={styles.stepsGrid} id="ai">
          {[
            {
              n: "01",
              tag: "Root Node",
              title: "Set your vision",
              desc: "Start with a single canvas prompt. Describe what you want to build and scaffold your brainstorm instantly.",
            },
            {
              n: "02",
              tag: "Entity Nodes",
              title: "Build context",
              desc: "Add Personas, User Goals, and Tech Stack nodes. Define exactly who you're building for and why.",
            },
            {
              n: "03",
              tag: "AI Generation",
              title: "Generate & ship",
              desc: "Gemini sketches concepts, writes prototype code, and runs it live on the canvas. From idea to demo in minutes.",
            },
          ].map((s, i, arr) => (
            <div key={s.n} className={styles.step}>
              <div className={styles.stepTop}>
                <span className={styles.stepNum}>{s.n}</span>
                {i < arr.length - 1 && (
                  <div className={styles.stepLine} aria-hidden />
                )}
              </div>
              <span className={styles.stepTag}>{s.tag}</span>
              <h3 className={styles.stepTitle}>{s.title}</h3>
              <p className={styles.stepDesc}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA ─────────────────────────────────────────────────────── */

function CTASection({ onGetStarted }: { onGetStarted: () => void }) {
  return (
    <section className={styles.cta}>
      <div className={styles.ctaAtmo} aria-hidden />
      <div className={styles.inner}>
        <div className={styles.ctaInner}>
          <div className={styles.sectionTag}>Get started</div>
          <h2 className={styles.ctaH2}>
            Ready to transform how<br />
            your team ideates?
          </h2>
          <p className={styles.ctaSub}>
            Sign in with your Google account and start your first canvas in seconds.
            Free to use, no credit card required.
          </p>
          <div className={styles.ctaBtns}>
            <button className={styles.btnWhite} onClick={onGetStarted}>
              Start brainstorming free
              <ArrowRightIcon size={15} />
            </button>
          </div>
          <p className={styles.ctaMeta}>
            Apache-2.0 · Open source · Built on Google Labs ProductCanvas
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
      <div className={styles.inner}>
        <div className={styles.footerRow}>
          <div className={styles.footerBrand}>
            <Logo size={18} alt="Stormflow" />
            <span>Stormflow</span>
            <span className={styles.footerBy}>by Accelory.net</span>
          </div>
          <p className={styles.footerMeta}>
            &copy; 2026 &middot; Apache-2.0 &middot;{" "}
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
