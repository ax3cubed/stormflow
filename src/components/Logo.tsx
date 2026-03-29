/**
 * @license
 * Copyright 2026 Google LLC
 * Copyright 2026 ax3cubed (Modifications)
 * SPDX-License-Identifier: Apache-2.0
 *
 * Modifications: see repository CHANGELOG.md.
 */

import { SVGAttributes } from "react";

export function Logo({
  size,
  ...props
}: SVGAttributes<SVGSVGElement> & {
  size?: number;
}) {
  return (
    <svg
      {...props}
      width={size || 64}
      height={size || 64}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" rx="6" fill="url(#paint0_linear_475_210)" />
      <path
        d="M7.7 5H7.3C7.13431 5 7 5.13431 7 5.3V5.7C7 5.86569 7.13431 6 7.3 6H7.7C7.86569 6 8 5.86569 8 5.7V5.3C8 5.13431 7.86569 5 7.7 5Z"
        fill="black"
        fillOpacity="0.8"
      />
  
      <defs>
        <linearGradient
          id="paint0_linear_475_210"
          x1="22.5"
          y1="2"
          x2="1.5"
          y2="22"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFB871" />
          <stop offset="0.5" stopColor="#F597E6" />
          <stop offset="1" stopColor="#7C64F3" />
        </linearGradient>
      </defs>
    </svg>
  );
}
