import React from "react";

export function Logout() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
    >
      <g fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M2 16c0-2.828 0-4.243.879-5.121C3.757 10 5.172 10 8 10h8c2.828 0 4.243 0 5.121.879C22 11.757 22 13.172 22 16s0 4.243-.879 5.121C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16Z"></path>
        <circle cx={12} cy={12} r={10}></circle>
        <path strokeLinecap="round" d="M6 10V8a6 6 0 1 1 12 0v2"></path>
      </g>
    </svg>
  );
}

export function Left() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
    >
      <g fill="none" stroke="currentColor" strokeWidth={1.5}>
        <circle cx={12} cy={12} r={10}></circle>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m13.5 9l-3 3l3 3"
        ></path>
      </g>
    </svg>
  );
}

export function Hamburger() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M20 7H4m16 5H4m16 5H4"
      ></path>
    </svg>
  );
}

export function Bell() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
    >
      <g fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M18.75 9.71v-.705C18.75 5.136 15.726 2 12 2S5.25 5.136 5.25 9.005v.705a4.4 4.4 0 0 1-.692 2.375L3.45 13.81c-1.011 1.575-.239 3.716 1.52 4.214a25.8 25.8 0 0 0 14.06 0c1.759-.498 2.531-2.639 1.52-4.213l-1.108-1.725a4.4 4.4 0 0 1-.693-2.375Z"></path>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10 9h4l-4 4h4"
        ></path>
        <path
          strokeLinecap="round"
          d="M7.5 19c.655 1.748 2.422 3 4.5 3s3.845-1.252 4.5-3"
        ></path>
      </g>
    </svg>
  );
}
