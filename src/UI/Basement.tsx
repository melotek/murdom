import * as React from "react";
import { useTheme } from "@mui/material";
function SvgBasement(props: React.SVGProps<SVGSVGElement>) {
  const theme= useTheme()

  return (
    <svg viewBox="0 0 87 84" fill="none" {...props}>
      <path
        stroke={theme.palette.primary.main}
        strokeWidth={2}
        d="M1 1h33v8H1zM62 1h19v29H62zM7 56h14v12H7zM2 68h14v15H2zM16 68h14v15H16z"
      />
      <path
        stroke={theme.palette.primary.main}
        strokeWidth={2.5}
        strokeLinecap="round"
        d="M58.25 30.25v51.5M84.25 30.25v51.5"
      />
      <path
        stroke={theme.palette.primary.main}
        strokeWidth={2}
        strokeLinecap="round"
        d="M56 30h30M56 37h30M56 44h30M56 51h30M56 58h30M56 65h30M56 72h30M56 79h30"
      />
      <path
        stroke={theme.palette.primary.main}
        strokeWidth={2}
        d="M72 0v30M61 14h20M12 30v25.5M11 29h39M49 29v55M13 40.5h35.5M13 50.5h35M21 60.5h27M31 78.5h17"
      />
      <path
        stroke={theme.palette.primary.main}
        d="M41.5 55v5M29.5 35v5M29 34.5h3M32.5 34v3M32 36.5h3M35.5 36v4M44.5 0v10M25.5 38.5c0 .456-.297.944-.937 1.344-.632.395-1.537.656-2.563.656-1.026 0-1.93-.26-2.563-.656-.64-.4-.937-.888-.937-1.344 0-.456.297-.944.937-1.344.632-.395 1.537-.656 2.563-.656 1.026 0 1.93.26 2.563.656.64.4.937.888.937 1.344zM25.5 47.5h6v3h-6zM35.5 45.5h6v5h-6zM36.5 57.5h2v3h-2zM42.5 69v9.5h-5V69a2.5 2.5 0 015 0zM49.5 15c0 2.442-2.193 4.5-5 4.5s-5-2.058-5-4.5c0-2.441 2.193-4.5 5-4.5s5 2.059 5 4.5zM12.5 0v10M22.5 0v8"
      />
      <path stroke={theme.palette.primary.main} strokeWidth={1.5} d="M8.75 64.75h1.5v1.5h-1.5z" />
      <path stroke={theme.palette.primary.main} strokeWidth={2} d="M4 79h2v3H4z" />
      <path stroke={theme.palette.primary.main} d="M24.5 73.5h4v1h-4z" />
    </svg>
  );
}

export default SvgBasement;
