/**
 * @license
 * Copyright 2026 Google LLC
 * Copyright 2026 ax3cubed (Modifications)
 * SPDX-License-Identifier: Apache-2.0
 *
 * Modifications: see repository CHANGELOG.md.
 */

import { useAuthContext } from "@/auth/AuthProvider";
import { Logo } from "@/components/Logo";
import { ArrowLeftIcon, ArrowRightIcon, ImageIcon, MicIcon, SparklesIcon, UsersIcon, ZapIcon } from "lucide-react";
import { GodRays, MeshGradient } from "@paper-design/shaders-react";
import loginStyles from "./LoginScreen.module.scss";

interface LoginScreenProps {
  onBack?: () => void;
}

const FEATURE_PILLS = [
  { icon: <SparklesIcon size={12} />, label: "AI-powered canvas" },
  { icon: <UsersIcon size={12} />, label: "Real-time collab" },
  { icon: <ZapIcon size={12} />, label: "Instant prototypes" },
  { icon: <ImageIcon size={12} />, label: "Concept sketching" },
  { icon: <MicIcon size={12} />, label: "Voice collaboration" },
];

export function LoginScreen({ onBack }: LoginScreenProps) {
  const { signIn } = useAuthContext();

  return (
    <div className={loginStyles.page}>
      {/* Left branding panel */}
      <div className={loginStyles.leftPanel}>
        <MeshGradient
          className={loginStyles.leftBg}
          colors={["#fffbf7", "#fff0e6", "#ffd8c4", "#ffc9ae"]}
          distortion={0.32}
          speed={0.55}
          grainMixer={0.35}
        />
        <GodRays
          className={loginStyles.leftRays}
          colors={["#ffb48c66", "#ffd4c44d", "#ffffff33"]}
          colorBloom="#ffb48c55"
          colorBack="#00000000"
          speed={1.1}
          offsetX={0}
          offsetY={0}
        />

        {/* Content over gradient */}
        <div className={loginStyles.leftContent}>
          <div className={loginStyles.leftBrand}>
            <Logo size={36} alt="Stormflow" />
            <span className={loginStyles.leftBrandName}>Stormflow</span>
          </div>

          <div className={loginStyles.leftHero}>
            <h2 className={loginStyles.leftHeadline}>
              Your ideas,<br />
              <span className={loginStyles.leftAccent}>amplified by AI</span>
            </h2>
            <p className={loginStyles.leftSubtitle}>
              An infinite canvas where product teams brainstorm, sketch concepts,
              and prototype—together, in real time.
            </p>
          </div>

          <div className={loginStyles.featurePills}>
            {FEATURE_PILLS.map((f) => (
              <div key={f.label} className={loginStyles.featurePill}>
                {f.icon}
                <span>{f.label}</span>
              </div>
            ))}
          </div>

          <p className={loginStyles.leftFooterNote}>
            Powered by Gemini AI &middot; Built on Google Labs ProductCanvas
          </p>
        </div>
      </div>

      {/* Right auth panel */}
      <div className={loginStyles.rightPanel}>
        {onBack && (
          <button className={loginStyles.backButton} onClick={onBack}>
            <ArrowLeftIcon size={14} />
            Back to home
          </button>
        )}

        <div className={loginStyles.authCard}>
          <Logo size={36} className={loginStyles.authLogo} alt="Stormflow" />

          <h1 className={loginStyles.authTitle}>Welcome back</h1>
          <p className={loginStyles.authSubtitle}>
            Sign in to access your Stormflow canvas
          </p>

          <button
            className={loginStyles.googleButton}
            onClick={() => signIn()}
          >
            <GoogleIcon />
            <span>Continue with Google</span>
            <ArrowRightIcon size={15} className={loginStyles.googleArrow} />
          </button>

          <p className={loginStyles.legalNote}>
            By continuing, you agree to our{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </a>
            . Your canvas data is stored securely via Firebase.
          </p>
        </div>
      </div>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg
      className={loginStyles.googleIcon}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"
        fill="#4285F4"
      />
      <path
        d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z"
        fill="#34A853"
      />
      <path
        d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"
        fill="#FBBC05"
      />
      <path
        d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"
        fill="#EA4335"
      />
    </svg>
  );
}
