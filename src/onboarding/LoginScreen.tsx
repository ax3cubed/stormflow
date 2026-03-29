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
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import s from "./LoginScreen.module.scss";

interface LoginScreenProps {
  onBack?: () => void;
}

export function LoginScreen({ onBack }: LoginScreenProps) {
  const { signIn } = useAuthContext();

  return (
    <div className={s.page}>
      {/* Atmospheric glow — same green as landing page */}
      <div className={s.atmo} aria-hidden />
      <div className={s.atmoSecondary} aria-hidden />

      {/* Back button */}
      {onBack && (
        <button className={s.back} onClick={onBack}>
          <ArrowLeftIcon size={14} />
          Back
        </button>
      )}

      {/* Centered glassmorphism card */}
      <div className={s.card}>
        <Logo size={38} alt="Stormflow" className={s.logo} />

        <h1 className={s.title}>Welcome back</h1>
        <p className={s.subtitle}>
          Sign in to open your Stormflow canvas
        </p>

        <button className={s.googleBtn} onClick={() => signIn()}>
          <GoogleIcon />
          <span>Continue with Google</span>
          <ArrowRightIcon size={14} className={s.googleArrow} />
        </button>

        <div className={s.divider}>
          <span className={s.dividerLine} />
          <span className={s.dividerText}>What you get</span>
          <span className={s.dividerLine} />
        </div>

        <ul className={s.features}>
          <li><span className={s.dot} />Infinite collaborative canvas</li>
          <li><span className={s.dot} />AI-generated concept sketches</li>
          <li><span className={s.dot} />Live prototype generation</li>
          <li><span className={s.dot} />Real-time multiplayer</li>
        </ul>

        <p className={s.legal}>
          By continuing you agree to our{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>
          . Canvas data is stored securely via Firebase.
        </p>
      </div>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={s.googleIcon}
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
