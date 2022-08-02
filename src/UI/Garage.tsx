import * as React from "react";
import { useTheme } from "@mui/material";
function SvgGarage(props: React.SVGProps<SVGSVGElement>) {
  const theme= useTheme()
  return (
    <svg viewBox="0 0 111 81" fill="none" {...props}>
      <mask id="garage_svg__a" fill="#fff">
        <rect x={8} y={7} width={97} height={74} rx={1} />
      </mask>
      <rect
        x={8}
        y={7}
        width={97}
        height={74}
        rx={1}
        stroke={theme.palette.primary.main}
        strokeWidth={4}
        mask="url(#garage_svg__a)"
      />
      <path stroke={theme.palette.primary.main} strokeWidth={2} d="M16 8h79v72H16z" />
      <rect
        x={1}
        y={1}
        width={109}
        height={7}
        rx={1}
        stroke={theme.palette.primary.main}
        strokeWidth={2}
      />
      <path stroke={theme.palette.primary.main} strokeWidth={2} d="M16 17h80" />
      <path
        stroke={theme.palette.primary.main}
        strokeWidth={3}
        strokeLinecap="round"
        d="M22.5 12.5h66"
      />
      <path stroke={theme.palette.primary.main} strokeWidth={2} d="M16 24h29v14H16zM25 23v15" />
      <path
        stroke={theme.palette.primary.main}
        d="M30.5 27v3M33.5 27v4M36.5 27v5M39.5 27v6M40.889 35c.463-1-.622-2-1.389-2s-1.852 1-1.389 2M34.426 32c.308-.5-.415-1-.926-1-.511 0-1.234.5-.926 1"
      />
      <path
        d="M72 72c-32.5 0-34 0-34-11.754C38 49.5 49.5 49.5 72 49"
        stroke={theme.palette.primary.main}
        strokeWidth={2}
      />
      <path
        d="M71.5 49c18.4 0 23.167.666 23.5 1M71.5 72c9.57 0 15.484-.282 19-.652M95 70c.45.36-.373.914-4.5 1.348M53 72v7.5m-12.5-10v10m50-8.152V79.5M94.997 36.5l-2-1c-2-1-13.386-2.558-21.997-2.5-7.832.053-18 2-18 2s-2.196.615-3 1.5c-.804.885-4.689 10-5.001 12.5-.312 2.5 9 .5 11.001.5"
        stroke={theme.palette.primary.main}
        strokeWidth={2}
      />
      <rect x={67} y={34} width={10} height={3} rx={0.5} fill={theme.palette.primary.main} />
      <path
        d="M50.401 57.988l.05.005h.05c2.045 0 3.94.927 5.336 2.203 1.432 1.308 2.164 2.81 2.164 3.797 0 .721-.045 1.006-.107 1.143v.002c-.004.016-.021.09-.34.173-.405.106-1.063.161-2.18.18-.719.012-1.576.01-2.616.006a542 542 0 00-1.816-.004c-3.676 0-5.516-.564-6.436-1.261-.825-.624-1.064-1.48-1.064-2.739 0-.97.527-1.923 1.673-2.617 1.159-.703 2.943-1.122 5.286-.888zM94.059 66.5C86.5 66.5 86 66.761 86 64s3.806-7 8.5-7"
        stroke={theme.palette.primary.main}
        strokeWidth={2}
      />
      <path
        stroke={theme.palette.primary.main}
        strokeWidth={2.5}
        strokeLinecap="round"
        d="M61.25 57.75h20.5M63.25 61.75h16.5M65.25 65.75h12.5"
      />
      <path
        d="M41 52.5c-4.657 0-8.5-1.214-8.5-4 1-3 5-4 10.5-1.5"
        stroke={theme.palette.primary.main}
        strokeWidth={2}
        strokeLinecap="round"
      />
    </svg>
  );
}

export default SvgGarage;
