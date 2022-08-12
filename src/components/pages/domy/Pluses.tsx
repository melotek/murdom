import { Box, Container, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import SvgBasement from 'src/UI/Basement'
import SvgBathroom from 'src/UI/Bathroom'
import SvgBedroom from 'src/UI/Bedroom'
import SvgGarret from 'src/UI/Garret'

type Props = {
	data: any
}


type PlusWithIconType = {
	title: string;
	icon: any;
	data: number | boolean;
	xs: number

}


const PlusWithIcon = ({title, icon, data, xs}: PlusWithIconType) => {

	const theme = useTheme()
	const match = useMediaQuery(theme.breakpoints.up('md'))
function printData (data: PlusWithIconType["data"]): number | string {

 if (typeof data === "boolean") {
	if (data === true) {
		return "tak"
	} else {
		return "nie"
	}
}
return data
}


	return (
<Grid item container xs={xs} >
<Grid item xs={12}  px={match ? 4 : 6} py={1}>
{icon}
</Grid>
<Grid item xs={12}>
{title}
</Grid>

<Grid item xs={12}>
{printData(data)}
</Grid>
</Grid>
	)
}



const PlusesComponent = ({data}: Props) => {

const theme = useTheme()
const content = data[0]
const match = useMediaQuery(theme.breakpoints.up('md'))

return (
<Container>

		<Box my={4}>
				<Typography variant="h4" textAlign="center">

						<span style={{ color: theme.palette.common.blue }}>Za</span>
						<span style={{ color: theme.palette.primary.main }}>lety</span>

				</Typography>



		</Box>	
		<Grid container sx={{margin: !match && "auto", maxWidth: match ? "500px !important" : "300px !important"}} xs={12}>

<PlusWithIcon title="Liczba pokoi" icon={<SvgBedroom color={theme.palette.primary.main}/>}  xs={match ? 3 : 6} data={content.rooms}/>
<PlusWithIcon title="Liczba łazienek" icon={<SvgBathroom color={theme.palette.primary.main} />} xs={match ? 3 : 6} data={content.bathrooms}/>
<PlusWithIcon title="Poddasze" icon={<SvgGarret color={theme.palette.primary.main}/>} xs={match ? 3 : 6} data={content.attic} />
<PlusWithIcon title="Podpiwniczenie" icon={<SvgBasement color={theme.palette.primary.main}/>} xs={match ? 3 : 6} data={content.underground} />




</Grid>

<Box my={4}>
				<Typography variant="h4" textAlign="center">

						<span style={{ color: theme.palette.primary.main }}>Charaker</span>
						<span style={{ color: theme.palette.common.blue }}>ystyka</span>

				</Typography>
				</Box>	
<Grid container xs={12}>
<Grid container item xs={12}>
<Grid item xs={3}> 
<Typography variant="h6" color={theme.palette.primary.main}>

Metraż:
</Typography>
 </Grid>
 <Grid item container xs={3}>
	<Grid item xs={12}>
	Powiażchnia działki {content.groundmeters} ar
	</Grid>

 </Grid>
 <Grid item container xs={3}>
	<Grid item xs={12}>
	Powieżchnia użytkowa {content.meters} m2
	</Grid>

 </Grid>

 <Grid item container xs={3}>
	<Grid item xs={12}>
	Powieżchnia mieszkalna {content.livingmeters} m2
	</Grid>

 </Grid>



</Grid>
</Grid>


	

</Container>
		
		)
}

export default PlusesComponent