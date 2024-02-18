import React from "react";

export const HomeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    stroke-linejoin="round"
    stroke-width=".9"
    {...props}
    fill={props.color}
  >
    <path d="m20 10.7359622v7.7640378c0 1.3807119-1.1192881 2.5-2.5 2.5h-3c-.2761424 0-.5-.2238576-.5-.5v-6c0-.2761424-.2238576-.5-.5-.5h-3c-.2761424 0-.5.2238576-.5.5v6c0 .2761424-.22385763.5-.5.5h-3c-1.38071187 0-2.5-1.1192881-2.5-2.5v-7.7640378l-.18214637.1500029c-.21316265.1755457-.52827304.1450512-.70381875-.0681115-.17554571-.2131626-.14505115-.528273.06811149-.7038187l8.50000003-7.00000002c.1846279-.15204651.4510793-.15204651.6357072 0l8.5 7.00000002c.2131627.1755457.2436572.4906561.0681115.7038187-.1755457.2131627-.4906561.2436572-.7038187.0681115zm-.9933004-.81801207-7.0066996-5.7702232-7.0066996 5.7702232c.00440713.02669598.0066996.05410521.0066996.08204987v8.5c0 .8284271.67157288 1.5 1.5 1.5h2.5v-5.5c0-.8284271.67157288-1.5 1.5-1.5h3c.8284271 0 1.5.6715729 1.5 1.5v5.5h2.5c.8284271 0 1.5-.6715729 1.5-1.5v-8.5c0-.02794466.0022925-.05535389.0066996-.08204987z" />
  </svg>
);
