type BrandMarkProps = {
  className?: string;
};

export function BrandMark({ className }: BrandMarkProps) {
  const petals = [0, 45, 90, 135, 180, 225, 270, 315];

  return (
    <svg
      viewBox="0 0 80 64"
      className={className ? `brand-mark ${className}` : 'brand-mark'}
      aria-hidden="true"
      focusable="false"
      fill="none"
    >
      <defs>
        <clipPath id="brand-mark-petals">
          <path
            d="M0 0h80v64H0zM40 32m-5.4 0a5.4 5.4 0 1 0 10.8 0a5.4 5.4 0 1 0-10.8 0"
            clipRule="evenodd"
          />
        </clipPath>
      </defs>
      <path
        d="M12 21.5 3.5 32l8.5 10.5"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M68 21.5 76.5 32l-8.5 10.5"
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
            cx="40"
            cy="21"
            rx="4.5"
            ry="8.4"
            transform={`rotate(${deg} 40 32)`}
          />
        ))}
      </g>
      <circle
        cx="40"
        cy="32"
        r="5.4"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}
