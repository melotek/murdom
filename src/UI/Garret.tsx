import * as React from "react";
import { useTheme } from "@mui/material";

function SvgGarret(props: React.SVGProps<SVGSVGElement>) {
  const theme= useTheme()
  return (
    <svg viewBox="0 0 111 84" fill="none" {...props}>
      <path
        d="M27.002 4l78.5 78M35 4l69.002 67.5M76 8v36M54 8v14M1.5 18c.8-.4 26.667-.167 39.5 0M1.5 11.5h33m-33-6V48m0 6.5v27"
        stroke={theme.palette.primary.main}
        strokeWidth={2}
        strokeLinecap="round"
      />
      <path
        d="M65 2h14.555l.369 5H50.076l.37-5H65z"
        stroke={theme.palette.primary.main}
        strokeWidth={2}
      />
      <circle cx={25.5} cy={37.5} r={9.5} stroke={theme.palette.primary.main} strokeWidth={2} />
      <circle cx={25.5} cy={37.5} r={14.5} stroke={theme.palette.primary.main} strokeWidth={2} />
      <rect
        x={53}
        y={71}
        width={14}
        height={12}
        rx={1}
        stroke={theme.palette.primary.main}
        strokeWidth={2}
      />
      <rect
        x={73}
        y={71}
        width={16}
        height={12}
        rx={1}
        stroke={theme.palette.primary.main}
        strokeWidth={2}
      />
      <rect
        x={61}
        y={59}
        width={14}
        height={12}
        rx={1}
        stroke={theme.palette.primary.main}
        strokeWidth={2}
      />
      <path stroke={theme.palette.primary.main} strokeWidth={2} d="M60 64h15" />
      <path
        d="M85 80v2M57 73v2M57 72v2"
        stroke={theme.palette.primary.main}
        strokeWidth={2}
        strokeLinecap="round"
      />
      <path stroke={theme.palette.primary.main} d="M15 37.5h21M25.5 48V27" />
      <path
        d="M42.001 73H1.5v-5.51l.668-.007c1.057-.009 2.57-.018 4.397-.022 3.652-.008 8.55.008 13.541.101 4.994.094 10.066.265 14.069.568 2.003.151 3.719.334 5.014.552.65.11 1.172.224 1.564.342.195.058.344.113.454.162.108.049.15.08.153.082 0 0 0 0 0 0 .657.548.956 1.06 1.085 1.485.13.43.11.845.013 1.23A3.476 3.476 0 0142 73zm-.243.33s0 0 0 0h0z"
        stroke={theme.palette.primary.main}
        strokeWidth={2}
      />
      <path
        d="M42 73v9.5"
        stroke={theme.palette.primary.main}
        strokeWidth={2}
        strokeLinecap="round"
      />
      <path
        d="M12.797 67.675a25.102 25.102 0 01-3.35-.413c-1.04-.203-2.144-.498-3.138-.923-.997-.427-1.851-.972-2.425-1.66-.678-.81-1.212-2.106-1.58-3.25a21.55 21.55 0 01-.352-1.215c.477.13 1.137.302 1.915.485 1.624.382 3.774.811 5.86.994 1.698.149 2.49 1.58 2.843 3.24.172.81.223 1.616.23 2.225.003.196 0 .371-.003.517zM65 16.5h10M70 26.5h5M55 11.5h6M70.5 17v3"
        stroke={theme.palette.primary.main}
      />
    </svg>
  );
}

export default SvgGarret;
