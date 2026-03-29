/**
 * @license
 * Copyright 2026 Google LLC
 * Copyright 2026 ax3cubed (Modifications)
 * SPDX-License-Identifier: Apache-2.0
 *
 * Modifications: see repository CHANGELOG.md.
 */

import type { ImgHTMLAttributes } from "react";

export type LogoProps = ImgHTMLAttributes<HTMLImageElement> & {
  size?: number;
};

export function Logo({
  size = 64,
  className,
  style,
  alt = "Stormflow",
  ...rest
}: LogoProps) {
  return (
    <img
      {...rest}
      src="/stormflow-logo.png"
      alt={alt}
      width={size}
      height={size}
      className={className}
      draggable={false}
      style={{ objectFit: "contain", ...style }}
    />
  );
}
