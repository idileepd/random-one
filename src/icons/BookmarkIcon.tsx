import React from "react";

export const BookmarkIcon: React.FC<React.SVGProps<SVGSVGElement>> = (
  props
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="i-bookmark"
    viewBox="0 0 32 32"
    width="32"
    height="32"
    fill="none"
    stroke="currentcolor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    {...props}
  >
    <path d="M6 2 L26 2 26 30 16 20 6 30 Z" />
  </svg>
);
