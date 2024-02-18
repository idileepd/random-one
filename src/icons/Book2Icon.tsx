import React from "react";

const Book2Icon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    stroke-width="1.1"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      d="M4 19V5C4 3.89543 4.89543 3 6 3H19.4C19.7314 3 20 3.26863 20 3.6V16.7143"
      stroke="currentColor"
      stroke-linecap="round"
    />
    <path d="M6 17L20 17" stroke="currentColor" stroke-linecap="round" />
    <path d="M6 21L20 21" stroke="currentColor" stroke-linecap="round" />
    <path
      d="M6 21C4.89543 21 4 20.1046 4 19C4 17.8954 4.89543 17 6 17"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path d="M9 7L15 7" stroke="currentColor" stroke-linecap="round" />
  </svg>
);

export default Book2Icon;