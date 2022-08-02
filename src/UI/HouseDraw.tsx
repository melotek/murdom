import * as React from "react";
import { useTheme } from "@mui/material";

function SvgHouseDraw(props: React.SVGProps<SVGSVGElement>) {
  const theme= useTheme()

  return (
    <svg viewBox="0 0 1077 725" fill="none" {...props}>
      <path
        d="M66.15 244.15h944.7v469.2H66.15V244.15z"
        stroke={theme.palette.primary.main}
        strokeWidth={0.3}
      />
      <path
        d="M576.5 530.5h371v183h-371v-183zM824.5 294.5h123v104h-123z"
        stroke={theme.palette.primary.main}
      />
      <path stroke={theme.palette.primary.main} d="M830.5 299.548h111v93.904h-111z" />
      <path
        stroke={theme.palette.primary.main}
        strokeWidth={0.5}
        d="M890.25 303.337h46.5v86.327h-46.5zM884.25 299.298h3.5v94.404h-3.5zM835.25 303.337h46.5v86.327h-46.5z"
      />
      <path stroke={theme.palette.primary.main} d="M576.5 294.5h123v104h-123z" />
      <path stroke={theme.palette.primary.main} d="M582.5 299.548h111v93.904h-111z" />
      <path
        stroke={theme.palette.primary.main}
        strokeWidth={0.5}
        d="M642.25 303.337h46.5v86.327h-46.5zM636.25 299.298h3.5v94.404h-3.5zM587.25 303.337h46.5v86.327h-46.5z"
      />
      <path stroke={theme.palette.primary.main} d="M82.007 531h169.951v103H82.007z" />
      <path stroke={theme.palette.primary.main} d="M90.279 536h153.407v93H90.279z" />
      <path
        stroke={theme.palette.primary.main}
        strokeWidth={0.5}
        d="M164.475 535.75h5.015v93.5h-5.015zM93.25 539.25h68.5v86.5h-68.5zM172.25 539.25h68.5v86.5h-68.5z"
      />
      <path stroke={theme.palette.primary.main} d="M82.5 294.5h169.951v103H82.5z" />
      <path stroke={theme.palette.primary.main} d="M90.772 299.5h153.407v93H90.772z" />
      <path
        stroke={theme.palette.primary.main}
        strokeWidth={0.5}
        d="M164.968 299.25h5.015v93.5h-5.015zM93.743 302.75h68.5v86.5h-68.5zM172.743 302.75h68.5v86.5h-68.5z"
      />
      <path
        d="M251.882 530.65h262.113l.032 45.35v137.35H251.882v-182.7z"
        stroke={theme.palette.primary.main}
        strokeWidth={0.3}
      />
      <path stroke={theme.palette.primary.main} d="M400.5 531h83v182h-83z" />
      <path stroke={theme.palette.primary.main} d="M403.5 534.017h77v175.967h-77z" />
      <path stroke={theme.palette.primary.main} d="M429.5 551.11h26v142.786h-26z" />
      <path
        stroke={theme.palette.primary.main}
        strokeWidth={0.6}
        d="M79.3 476.086h434.4V501.7H79.3z"
      />
      <path
        stroke={theme.palette.primary.main}
        strokeWidth={0.6}
        d="M79.3 476.086h434.4v11.982H79.3zM89.936 394.3H513.7v81.186H89.936z"
      />
      <path
        stroke={theme.palette.primary.main}
        strokeWidth={0.6}
        d="M232.454 394.3h138.728v81.186H232.454z"
      />
      <path
        stroke={theme.palette.primary.main}
        strokeWidth={0.6}
        d="M240.963 407.931h121.711v53.924H240.963zM383.3 408.3h121.711v53.924H383.3zM98.444 407.931h121.711v53.924H98.444z"
      />
      <path
        stroke={theme.palette.primary.main}
        strokeWidth={0.6}
        d="M374.972 394.3H513.7v81.186H374.972zM89.936 394.3h138.728v81.186H89.936z"
      />
      <path stroke={theme.palette.primary.main} d="M400.5 294.5h83v182h-83z" />
      <path
        stroke={theme.palette.primary.main}
        strokeWidth={0.6}
        d="M404.3 299.3h75.4v172.4h-75.4z"
      />
      <path
        stroke={theme.palette.primary.main}
        strokeWidth={0.3}
        d="M406.15 301.15h71.7v168.7h-71.7z"
      />
      <path
        stroke={theme.palette.primary.main}
        d="M887.261 109.332h25.23V181.5h-25.23zM884.5 104.5h30.752v4.522H884.5z"
      />
      <path
        d="M772 83.055L430 233.707M887.5 144.5l-204-107.792h-151m-37 0h-47l-436.5 197h1051L912 157.5"
        stroke={theme.palette.primary.main}
      />
      <path
        stroke={theme.palette.primary.main}
        d="M495.5 13.5h37v105h-37zM491.5 6.5h45v7h-45zM504.5.5h17v6h-17zM570.5 66.5h45v29h-45z"
      />
      <path
        stroke={theme.palette.primary.main}
        d="M573.5 69.5h39v23h-39zM65 278.807V724h-7.938V285.092L1 266.236V250h6.45v9.951L65 278.807zM1011 278.807V724h8.06V285.092l56.94-18.856V250h-6.55v9.951L1011 278.807zM1063 250H12m0-6v-10h1051v10M1.5 249.5h1074v-5H1.5zM65.5 713.5h944v11h-944z"
      />
      <path
        d="M556 724l19.5-9v9m390 0l-18.5-9v9m-463.5-9v9m-202-9v9"
        stroke={theme.palette.primary.main}
      />
    </svg>
  );
}

export default SvgHouseDraw;
