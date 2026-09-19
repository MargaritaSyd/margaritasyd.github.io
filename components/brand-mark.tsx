type BrandMarkProps = {
  className?: string;
};

export function BrandMark({ className }: BrandMarkProps) {
  const petals = [0, 45, 90, 135, 180, 225, 270, 315];

  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      aria-hidden="true"
      focusable="false"
      fill="none"
    >
      <defs>
        <clipPath id="brand-mark-petals">
          <path
            d="M0 0h64v64H0zM32 32m-5.4 0a5.4 5.4 0 1 0 10.8 0a5.4 5.4 0 1 0-10.8 0"
            clipRule="evenodd"
          />
        </clipPath>
      </defs>
      <path
        d="M16.5 21.5 8.5 32l8 10.5"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M47.5 21.5 55.5 32l-8 10.5"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g
        clipPath="url(#brand-mark-petals)"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        {petals.map((deg) => (
          <ellipse
            key={deg}
            cx="32"
            cy="21"
            rx="4.5"
            ry="8.4"
            transform={`rotate(${deg} 32 32)`}
          />
        ))}
      </g>
      <circle
        cx="32"
        cy="32"
        r="5.4"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}
