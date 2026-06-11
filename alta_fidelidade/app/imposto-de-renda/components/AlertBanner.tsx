import type { ReactNode } from "react";
import { AlertTriangle, CheckIcon, InfoIcon } from "../../components/portal/icons";

type Tone = "warning" | "success" | "info";

const TONES: Record<Tone, { wrap: string; icon: string; Icon: typeof AlertTriangle }> = {
  warning: {
    wrap: "border-warning/40 bg-warning-soft text-amber-900",
    icon: "text-warning",
    Icon: AlertTriangle,
  },
  success: {
    wrap: "border-success/30 bg-success-soft text-emerald-900",
    icon: "text-success",
    Icon: CheckIcon,
  },
  info: {
    wrap: "border-brand/20 bg-brand-soft text-brand-darker",
    icon: "text-brand",
    Icon: InfoIcon,
  },
};

/**
 * Inline notice banner. Reproduces the prototype's "× Você possui pendências!"
 * alert and the post-submit confirmations, using the Protótipo 5 palette.
 */
export function AlertBanner({
  tone = "warning",
  title,
  children,
}: {
  tone?: Tone;
  title: string;
  children?: ReactNode;
}) {
  const { wrap, icon, Icon } = TONES[tone];
  return (
    <div role="status" className={`flex items-start gap-3 rounded-xl border px-4 py-3 ${wrap}`}>
      <Icon className={`mt-0.5 h-5 w-5 shrink-0 ${icon}`} />
      <div className="text-sm">
        <p className="font-semibold">{title}</p>
        {children && <div className="mt-0.5 leading-relaxed opacity-90">{children}</div>}
      </div>
    </div>
  );
}
