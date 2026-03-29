/**
 * @license
 * Copyright 2026 Google LLC
 * Copyright 2026 ax3cubed (Modifications)
 * SPDX-License-Identifier: Apache-2.0
 *
 * Modifications: see repository CHANGELOG.md.
 */

import { AuthAvatar } from "@/auth/AuthAvatar";
import { useAuthContext } from "@/auth/AuthProvider";
import { Logo } from "@/components/Logo";
import { usePrefsContext } from "@/util/PrefsProvider";
import cn from "classnames";
import {
  Card,
  Heading,
  HeadingProps,
  Text,
  TextProps,
} from "@radix-ui/themes";
import { useMemo, useState } from "react";
import { Loading } from "../components/Loading";
import { InitialPrefsScreen } from "./InitialPrefsScreen";
import { LandingPage } from "@/landing/LandingPage";
import { LoginScreen } from "./LoginScreen";
import styles from "./Onboarding.module.scss";
import { areRequiredPrefsSet } from "./RequiredPrefs";
import { areTermsAccepted, TermsScreen } from "./TermsScreen";
import { GodRays, MeshGradient } from "@paper-design/shaders-react";

type AuthStep = "landing" | "signin";

export function OnboardGate({ children }: React.PropsWithChildren) {
  const { user, authLoaded } = useAuthContext();
  const { prefs } = usePrefsContext();
  const [continueKey, setContinueKey] = useState(0);
  const [authStep, setAuthStep] = useState<AuthStep>("landing");
  const termsAccepted = useMemo(() => areTermsAccepted(prefs), [continueKey]);
  // only check on first mount to avoid kicking users out if they delete prefs
  const initialConfigDone = useMemo(
    () => areRequiredPrefsSet(prefs),
    [continueKey],
  );

  if (!authLoaded) return <Loading />;

  if (!user) {
    if (authStep === "landing") {
      return <LandingPage onGetStarted={() => setAuthStep("signin")} />;
    }
    return <LoginScreen onBack={() => setAuthStep("landing")} />;
  }

  if (!termsAccepted) return <TermsScreen onContinue={() => setContinueKey((k) => k + 1)} />;
  if (!initialConfigDone)
    return (
      <InitialPrefsScreen onContinue={() => setContinueKey((k) => k + 1)} />
    );

  // fully onboarded
  return <>{children}</>;
}

type OnboardingVariant = "default" | "stormflow";

function OnboardingContainer({
  children,
  variant = "default",
}: React.PropsWithChildren<{ variant?: OnboardingVariant }>) {
  const { user } = useAuthContext();
  const isStormflow = variant === "stormflow";
  return (
    <>
      {user && <AuthAvatar className={styles.avatar} />}
      <div className={styles.container}>
        <MeshGradient
          className={styles.backdrop}
          colors={
            isStormflow
              ? ["#fffbf7", "#fff0e6", "#ffd8c4", "#ffc9ae"]
              : ["#2E2259", "#341947", "#2B2137"]
          }
          distortion={isStormflow ? 0.32 : 0.4}
          speed={isStormflow ? 0.55 : 1}
          grainMixer={isStormflow ? 0.35 : 1}
        />
        <GodRays
          className={styles.godrays}
          colors={
            isStormflow
              ? ["#ffb48c66", "#ffd4c44d", "#ffffff33"]
              : ["#2E2259", "#341947", "#2B2137"]
          }
          colorBloom={isStormflow ? "#ffb48c55" : "#2B2137"}
          colorBack="#00000000"
          speed={isStormflow ? 1.1 : 2}
          offsetX={0}
          offsetY={0}
        />
        <Card
          size="4"
          className={cn(styles.card, isStormflow && styles.cardStormflow)}
        >
          {children}
        </Card>
      </div>
    </>
  );
}

export const Onboarding = {
  Container: (props: React.PropsWithChildren<{ variant?: OnboardingVariant }>) => (
    <OnboardingContainer {...props} />
  ),
  Logo: () => <Logo className={styles.logo} size={24} />,
  Image: ({ children }: React.PropsWithChildren) => (
    <div className={styles.image}>{children}</div>
  ),
  Title: ({ children, ...props }: React.PropsWithChildren<HeadingProps>) => (
    <Heading size="4" weight="medium" mb="2" {...props}>
      {children}
    </Heading>
  ),
  Description: ({ children, ...props }: React.PropsWithChildren<TextProps>) => (
    <Text
      style={{ maxWidth: 300, textWrap: "balance" }}
      as="p"
      color="gray"
      size="2"
      mb="5"
      {...props}
    >
      {children}
    </Text>
  ),
};
