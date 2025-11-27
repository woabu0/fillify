const Logo = ({ className, ...props }: React.ComponentProps<"svg">) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 115 115"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path d="M4.5 0H117L100.5 29H20L16 37.5L0 9L4.5 0Z" fill="white" />
    <path d="M29.5 43H94L77.5 70.84H45.5L21 113.5L5 86L29.5 43Z" fill="white" />
  </svg>
);

export { Logo };
