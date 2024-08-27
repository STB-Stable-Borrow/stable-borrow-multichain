import * as React from 'react';

export const CancelButton = (props) => (
  <svg
    fill="none"
    height={24}
    width={24}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      height={22.8}
      rx={3.4}
      stroke="#009FBD"
      strokeWidth={1.2}
      width={22.8}
      x={0.6}
      y={0.6}
    />
    <path
      d="M6.634 16.752a.908.908 0 0 0 1.288.004l3.78-3.78 3.763 3.779a.912.912 0 1 0 1.29-1.29l-3.778-3.764 3.78-3.78a.908.908 0 0 0-1.285-1.283l-3.77 3.771-3.787-3.772a.904.904 0 0 0-1.278 1.278l3.772 3.786-3.771 3.771a.908.908 0 0 0-.004 1.28Z"
      fill="#009FBD"
    />
  </svg>
);
