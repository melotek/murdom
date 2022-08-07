import { useTheme } from '@mui/material'
import * as React from 'react'
function SvgBathroom(props: React.SVGProps<SVGSVGElement>) {
  const theme = useTheme()

  return (
    <svg viewBox="0 0 113 83" fill="none" {...props}>
      <path fill={props.color} d="M47 30h2v2h-2z" />
      <path
        d="M32.5 26l-7.086 7M23.5 35l-2 2"
        stroke={props.color}
        strokeWidth={2}
        strokeLinecap="round"
      />
      <path
        d="M95.313 73.645c-.145.13-.218.17-.225.175-.217.065-.86.16-2 .242-1.109.08-2.545.142-4.201.189-3.31.093-7.453.124-11.512.124a1064.107 1064.107 0 01-15.507-.12h-.047a28.62 28.62 0 01-2.836-1.791c-1.712-1.232-3.506-2.838-4.372-4.533-.848-1.66-1.695-4.416-2.342-6.847a98.911 98.911 0 01-.688-2.75 331.298 331.298 0 0012.845.353c8.2.063 18.412-.185 26.271-1.453 2.617-.422 4.594-1.283 6.4-2.069l.38-.165c1.91-.827 3.694-1.546 6.128-1.755 1-.085 2.32-.087 3.42-.064h.011a301.523 301.523 0 01-4.766 9.356c-1.495 2.803-3.07 5.613-4.45 7.775-.692 1.084-1.318 1.977-1.846 2.618a6.662 6.662 0 01-.663.715zm-33.244.742s0 0 0 0h0z"
        stroke={props.color}
        strokeWidth={2.5}
      />
      <path
        d="M51.51 58c-5.01 0-6.01-2-6.01-3s0-2.5 2.01-3c2.162-.538 28.49 2.352 37.5 0 9.01-2.353 15.98-4.5 16.99-5 1.01-.5 6.489-.747 8 0 1.511.747 1.511.916 1.511 2.5 0 1.5-4.001 3.5-4.001 3.5"
        stroke={props.color}
        strokeWidth={2}
      />
      <rect
        x={15}
        y={9}
        width={24}
        height={37}
        rx={2}
        stroke={props.color}
        strokeWidth={2}
      />
      <path
        stroke={props.color}
        strokeWidth={2}
        strokeLinecap="round"
        d="M32 20.414L21.414 31"
      />
      <path
        d="M49 2h62.5"
        stroke={props.color}
        strokeWidth={2.5}
        strokeLinecap="round"
      />
      <path
        d="M96 43V2M86.5 46.5L91 2M103 43V2M109 43V2"
        stroke={props.color}
        strokeWidth={2}
        strokeLinecap="round"
      />
      <path stroke={props.color} strokeWidth={2.5} d="M91 7.75h18" />
      <rect
        x={44}
        y={21}
        width={8}
        height={8}
        rx={1}
        stroke={props.color}
        strokeWidth={2}
      />
      <rect
        x={1}
        y={21}
        width={8}
        height={8}
        rx={1}
        stroke={props.color}
        strokeWidth={2}
      />
      <path fill={props.color} d="M4 30h2v2H4z" />
      <path d="M75 53V37.5" stroke={props.color} strokeWidth={2} />
      <path
        d="M75 38c0-2-1.791-3-3.5-3-1.5 0-2.5 1.5-3 4"
        stroke={props.color}
        strokeWidth={2}
        strokeLinecap="round"
      />
      <path
        d="M23.92 71h5.16l.833 10h-6.826l.833-10z"
        stroke={props.color}
        strokeWidth={2}
      />
      <path stroke={props.color} d="M70.5 48.5h1v3h-1zM78.5 48.5h1v3h-1z" />
      <path
        d="M39 57c0 7.732-5.596 14-12.5 14S14 64.732 14 57M13.735 52h25.53a1 1 0 01.99.859l.429 3a1 1 0 01-.99 1.141H13.306a1 1 0 01-.99-1.141l.429-3a1 1 0 01.99-.859zM60.19 74.221l.3.116a2 2 0 01.745 3.231l-3.077 3.297a2 2 0 01-1.462.635h-2.07a.983.983 0 01-.768-1.597l4.052-5.065a2 2 0 012.28-.617zM93.24 74.56l-.115.038c-1.443.48-1.844 2.33-.729 3.365l2.701 2.504a2 2 0 001.36.533h2.636a.744.744 0 00.546-1.249l-4.3-4.65a2 2 0 00-2.1-.54z"
        stroke={props.color}
        strokeWidth={2}
      />
    </svg>
  )
}

export default SvgBathroom
