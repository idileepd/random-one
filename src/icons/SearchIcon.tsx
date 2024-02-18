export const SearchIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="20"
    viewBox="0 0 20 20"
    width="20"
    {...props}
  >
    <g
      fill="none"
      stroke={props.color}
      strokeWidth={props.strokeWidth ?? "1.1"}
    >
      <circle cx="9" cy="9" r="7" />
      <path d="m14 14 4 4z" />
    </g>
  </svg>
);
