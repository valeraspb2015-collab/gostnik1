import { useId } from "react";

interface GostnikLogoProps {
  size?: number;
  className?: string;
}

export function GostnikLogo({ size = 36, className }: GostnikLogoProps) {
  const id = useId().replace(/:/g, "");
  const gradId = `gg-${id}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      aria-label="ГОСТЬНИК"
    >
      <defs>
        <linearGradient id={gradId} x1="2" y1="2" x2="38" y2="38" gradientUnits="userSpaceOnUse">
          <stop stopColor="hsl(42, 72%, 60%)" />
          <stop offset="1" stopColor="hsl(34, 68%, 44%)" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="40" height="40" rx="10" fill={`url(#${gradId})`} />

      <rect x="9" y="9" width="21" height="5" rx="2" fill="white" />

      <rect x="9" y="9" width="5" height="23" rx="2" fill="white" />

      <path
        d="M14 14 Q17 14 17 18"
        stroke="white"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
    </svg>
  );
}

export { GostnikLogo as AdneraLogo };
