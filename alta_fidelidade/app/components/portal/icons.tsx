/** Small inline SVG icons used across the portal. Inherit `currentColor`. */
import type { SVGProps } from "react";

export function SearchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2}
      strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <circle cx={11} cy={11} r={7} />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

export function UserIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-5 0-9 2.7-9 6v2h18v-2c0-3.3-4-6-9-6Z" />
    </svg>
  );
}

/** Accessibility / Libras (sign language) mark from the prototype header. */
export function LibrasIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M10 2.5a1 1 0 0 1 1 1V11h1V2.8a1 1 0 1 1 2 0V11h1V4.5a1 1 0 1 1 2 0v8.2l1.2-1.6a1 1 0 0 1 1.6 1.2l-2.5 3.5A6 6 0 0 1 13 21h-1.6a6 6 0 0 1-5.2-3l-2-3.4a1 1 0 0 1 1.7-1l1.1 1.7V5a1 1 0 0 1 2 0v6h1V3.5a1 1 0 0 1 1-1Z" />
    </svg>
  );
}

export function ChevronLeft(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4}
      strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

export function ChevronRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4}
      strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

export function CheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}
      strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function AlertTriangle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 2.6c.7 0 1.4.4 1.8 1.1l8.4 14.6a2 2 0 0 1-1.8 3H3.6a2 2 0 0 1-1.8-3L10.2 3.7A2 2 0 0 1 12 2.6Z" />
      <path d="M12 8.5v5" stroke="#fff" strokeWidth={2} strokeLinecap="round" />
      <circle cx={12} cy={17} r={1.3} fill="#fff" />
    </svg>
  );
}

/** Stylized Receita Federal "arrows" mark used next to the CAC logo. */
export function ReceitaMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M3 8.5 11 4v3.2l-8 4.5V8.5Z" opacity={0.95} />
      <path d="M21 15.5 13 20v-3.2l8-4.5v3.2Z" />
      <path d="M3 14.5 11 19v-3.2l-8-4.5v3.2Z" opacity={0.6} />
    </svg>
  );
}
