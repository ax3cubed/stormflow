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
import { Button, Link, Text } from "@radix-ui/themes";
import { ArrowRightIcon } from "lucide-react";
import cn from "classnames";
import { Onboarding } from "./Onboarding";
import loginStyles from "./LoginScreen.module.scss";

export function LoginScreen() {
  const { signIn } = useAuthContext();
  return (
    <Onboarding.Container variant="stormflow">
      <div className={loginStyles.stage}>
        <span className={loginStyles.flowRing} aria-hidden />
        <span
          className={cn(loginStyles.flowRing, loginStyles.flowRingOuter)}
          aria-hidden
        />
        <Logo className={loginStyles.heroLogo} size={80} alt="" />
        <Onboarding.Title className={loginStyles.title}>Stormflow</Onboarding.Title>
        <Text as="p" size="2" className={loginStyles.copy}>
          A collaborative brainstorming canvas for Accelory.net. Based on the Google Labs{" "}
          <Link
            target="_blank"
            href="https://labs.google/code/experiments/product-canvas"
          >
            Product Canvas
          </Link>{" "}
          experiment.
        </Text>
        <Button className={loginStyles.signIn} size="3" onClick={() => signIn()}>
          Sign in with Google
          <ArrowRightIcon size={16} />
        </Button>
      </div>
    </Onboarding.Container>
  );
}
