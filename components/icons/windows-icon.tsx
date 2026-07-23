import * as React from "react";

type WindowsIconProps = React.SVGProps<SVGSVGElement>;

const WindowsIcon = (props: WindowsIconProps) => (
  <svg viewBox="0 0 128 128" {...props}>
    <path
      fill="currentColor"
      d="M67.328 67.331h60.669V128H67.328zm-67.325 0h60.669V128H.003zM67.328 0h60.669v60.669H67.328zM.003 0h60.669v60.669H.003z"
    />
  </svg>
);

export default WindowsIcon;
