import { Box, Icon, Theme, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import SvgBathroom from 'src/UI/Bathroom'
import SvgBedroom from "src/UI/Bedroom"
import SvgGarage from 'src/UI/Garage'
import SvgHouseDraw from 'src/UI/HouseDraw'
type Props = {
    offers: {
        meters: number,
        livingmeters: number,
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
            <Typography sx={{ letterSpacing: 2, lineHeigh: "2.31em !important", fontSize: "1em" }} variant="subtitle2" color={theme.palette.text.primary} mr={1} gutterBottom>
                {title}
            </Typography>
            <Typography variant="subtitle2" sx={{ lineHeigh: "2.31em !important", fontSize: "1em" }} fontWeight={500} color={theme.palette.text.primary} gutterBottom>
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
    livingmeters,
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
        <Box sx={{ backgroundColor: theme.palette.background.default }} mb={4}>
            <RowComponent
                // icon={<SvgHouseDraw/>} 
                theme={theme} title="Powieżchnia użytkowa:" value={livingmeters} measureSign={<>
                    m<sup style={{
                        lineHeight: 0,
                        verticalAlign: "super"
                    }}>2</sup> .
                </>} />
            <RowComponent theme={theme} title="Powieżchnia mieszkalna:" value={livingmeters} measureSign={<>
                m<sup style={{
                    lineHeight: 0,
                    verticalAlign: "super"
                }}>2</sup> .
            </>} />

            {/* <RowComponent theme={theme} title="Ogrzewanie:" value={heat} /> */}
            {/* <RowComponent theme={theme} icon={<SvgBedroom/>} title="Pokoje:" value={rooms} />
            <RowComponent theme={theme} icon={<SvgBathroom/>}  title="Łazienki:" value={washroom} />
            <RowComponent theme={theme}  icon={<SvgGarage/>} title="Miejsca postojowe w garażu:" value={washroom} /> */}
        </Box>
    )
}

export default SlideContentComponent