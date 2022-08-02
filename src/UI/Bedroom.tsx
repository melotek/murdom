import { useTheme } from "@mui/material";
import * as React from "react";

function SvgBedroom(props: React.SVGProps<SVGSVGElement>) {
  const theme= useTheme()
  return (
    <svg viewBox="0 0 100 79" fill="none" {...props}>
      <path
        d="M14.708 56h70.765a4 4 0 013.87 2.986l1.047 4C91.055 65.521 89.142 68 86.52 68H13.21c-2.791 0-4.724-2.788-3.745-5.402l1.497-4A4 4 0 0114.708 56z"
        stroke={theme.palette.primary.main}
        strokeWidth={2}
      />
      <mask id="bedroom_svg__a" fill="#fff">
        <rect x={3} y={67} width={94} height={8} rx={1} />
      </mask>
      <rect
        x={3}
        y={67}
        width={94}
        height={8}
        rx={1}
        stroke={theme.palette.primary.main}
        strokeWidth={5}
        mask="url(#bedroom_svg__a)"
      />
      <path
        d="M89 58.5V44a7 7 0 00-7-7H18a7 7 0 00-7 7v14.5M7 76h5v2H7zM87 76h5v2h-5z"
        stroke={theme.palette.primary.main}
        strokeWidth={2}
      />
      <path
        stroke={theme.palette.primary.main}
        strokeWidth={2}
        d="M88 76h5v2h-5zM20.5 49h23a2.5 2.5 0 010 5h-23a2.5 2.5 0 010-5zm37 0h23a2.5 2.5 0 010 5h-23a2.5 2.5 0 010-5z"
      />
      <rect
        x={26}
        y={4}
        width={49}
        height={22}
        rx={1}
        stroke={theme.palette.primary.main}
        strokeWidth={2}
      />
      <rect
        x={23}
        y={1}
        width={55}
        height={28}
        rx={3}
        stroke={theme.palette.primary.main}
        strokeWidth={2}
      />
      <path
        d="M43.5 11c0 1.47-.977 2.5-2 2.5-1.023 0-2-1.03-2-2.5s.977-2.5 2-2.5c1.023 0 2 1.03 2 2.5z"
        stroke={theme.palette.primary.main}
      />
      <path
        d="M32 23c6.4-7.175 13.333-3.787 16-1.196m-3-3.587c11.2-9.089 20.667-1.395 24 3.587"
        stroke={theme.palette.primary.main}
        strokeWidth={2}
        strokeLinecap="round"
      />
      <circle cx={5} cy={30} r={4} stroke={theme.palette.primary.main} strokeWidth={2} />
      <circle cx={95} cy={30} r={4} stroke={theme.palette.primary.main} strokeWidth={2} />
      <path
        d="M5 34.5V38M95 34.5V38"
        stroke={theme.palette.primary.main}
        strokeWidth={2}
        strokeLinecap="round"
      />
    </svg>
  );
}

export default SvgBedroom;
