import * as React from "react";

export const WaterSign = ({
  height = "54px",
  width = "52px",
  // color = "black",
  ...props
}: React.SVGProps<SVGSVGElement>) => (
<svg width="52" height="54" viewBox="0 0 52 54" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 7.29735L32.2234 39.2669V50.4052H38.4191V26.7984L42.004 23.2415V50.4052H48.0353V8.46146L27.283 29.0116L24.8309 26.5788L51.6207 0L51.6692 53.8693L28.6385 54V41.3093L22.9021 35.6182L22.8537 54H9.80817L9.81703 30.6988L13.4019 34.2553V50.4052H19.2688V32.0135L3.58497 16.453V53.9999H0V7.29735Z" fill="black" fill-opacity="0.1"/>
</svg>

);