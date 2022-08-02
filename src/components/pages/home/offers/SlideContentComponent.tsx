import { Box, Icon, Theme, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import SvgBathroom from 'src/UI/Bathroom'
import SvgBedroom from "src/UI/Bedroom"
import SvgGarage from 'src/UI/Garage'
import SvgHouseDraw from 'src/UI/HouseDraw'
type Props = {
    offers: {
        meters: number,
        usemeters: number,
        groundmeters: number,
        floors: number,
        undergraund: string,
        heat: string,
        garage: string,
        carplaces: number,
        attic: string,
        washroom: number,
        rooms: number
    }

}
type RowProps = {
    title: string,
    value: number | string,
    measureSign?: any,
    icon?: any,
    matches?: boolean,
    theme?: Theme

}

const RowComponent = ({ title, value, measureSign, icon, matches = false, theme }:
    RowProps) => {
    // const theme = useTheme()
    // const matches = useMediaQuery(theme.breakpoints.up("md"))
        

    return (

        <Box display="flex" >
           <Icon sx={{width: "2em", height: "auto", marginRight: 2}}  >
            {icon}
            </Icon>
        


             <Typography sx={{letterSpacing: 2, lineHeigh: "2.31em !important", fontSize: "1.125em"}} variant="subtitle2" color={theme.palette.text.secondary} mr={1} gutterBottom>
                {title}
            </Typography>


         

            <Typography variant="subtitle2" sx={{ lineHeigh: "2.31em !important", fontSize: "1.2em"}} fontWeight={600} color={theme.palette.text.secondary} gutterBottom>
                <>
                    {value}
                </>
                <> </>
                <>
                    {measureSign}
                </>

            </Typography>
        </Box>

    )
}

const SlideContentComponent = ({ offers: {
    meters,
    usemeters,
    groundmeters,
    floors,
    undergraund,
    heat,
    garage,
    carplaces,
    attic,
    washroom,
    rooms } }: Props) => {
        
        const theme = useTheme()
        const matches = useMediaQuery(theme.breakpoints.up("md"))


    return (
        <Box sx={{ backgroundColor: theme.palette.background.default }}>
            <RowComponent 
            // icon={<SvgHouseDraw/>} 
            theme={theme} title="Powieżchnia użytkowa:" value={usemeters} measureSign={<>
                m<sup style={{
                    lineHeight: 0,
                    verticalAlign: "super"
                }}>2</sup>
            </>} />
     {matches &&    <RowComponent theme={theme} title="Powieżchnia działki:" value={usemeters} measureSign={<>
                arów
            </>} />
     }    
     
         
            <RowComponent theme={theme} title="Ogrzewanie:" value={heat} />
            {/* <RowComponent theme={theme} icon={<SvgBedroom/>} title="Pokoje:" value={rooms} />
            <RowComponent theme={theme} icon={<SvgBathroom/>}  title="Łazienki:" value={washroom} />
            <RowComponent theme={theme}  icon={<SvgGarage/>} title="Miejsca postojowe w garażu:" value={washroom} /> */}
        </Box>
    )
}

export default SlideContentComponent