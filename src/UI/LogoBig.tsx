import { useTheme } from '@mui/material'
import React from 'react'

type Props = {}
const LogoBig = (props: Props) => {

	const theme = useTheme()
	return (
		<svg
		style={{
			// zIndex: 4000,
			// position: 'absolute',
			// top: 114,
			// transition:
			// 	!imageinView &&
			// 	theme.transitions.create(['height'], {
			// 		duration: theme.transitions.duration.standard,
			// 		easing: theme.transitions.easing.easeInOut,
			// 	}),
		}}
		preserveAspectRatio="none"
		// width={svgWidth}
		// height={svgHeight - 114}
		viewBox="0 0 804 847"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M55.7079 267.794L54 266.082V268.5V846H1V114.388L352.298 460.213L353 460.904L353.702 460.212L397.345 417.212L397.352 417.206L397.359 417.199L802.5 2.45477V93.5897L750.499 146.298L434.788 466.298L436.212 467.702L750.21 149.437V791.5H668.5V372.5V370.359L666.858 371.733L602.358 425.733L602 426.033V426.5V791.5H513.5V615V614.575L513.195 614.281L354.195 460.781L352.805 462.219L511.5 615.425V792.5V793.5H512.5H603H604V792.5V426.967L666.5 374.641V792.5V793.5H667.5H751.21H752.21V792.5V147.41L802.5 96.4374V846H446.5V644.5V644.059L446.174 643.761L361.174 566.261L359.5 564.735V567V846H137V485.633L206.5 543.469V792.5V793.5H207.5H292.5H293.5V792.5V506.5V506.086L293.208 505.794L55.7079 267.794ZM56 846V270.918L291.5 506.914V791.5H208.5V543V542.531L208.14 542.231L136.64 482.731L135 481.367V483.5V846H56ZM444.5 644.942V846H361.5V569.265L444.5 644.942Z"
			fill={theme.palette.primary.main}
			stroke="black"
			strokeWidth="12px"
			strokeOpacity={0}
			// opacity={imageinView ? 0.3 : 1}
			opacity={0.7}
		/>
	</svg>
	)
}

export default LogoBig