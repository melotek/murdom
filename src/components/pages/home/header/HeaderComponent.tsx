import { Box, Container, Typography, useTheme } from '@mui/material'
import React from 'react'
import Image from "next/Image"
import LinkButtonContained from '@buttons/ButtonContained'
type Props = {}

const HeaderComponent = (props: Props) => {
    const theme = useTheme();
    return (
        <Box  >
            <Image style={{
                // width: "100vw", height: "300px"
            }} src="/IMG-20220629-WA0007.jpg" layout="responsive"
                width={320} height={300}
                objectFit="cover" />
            <Container maxWidth="lg" sx={{ marginTop: 8, marginBottom: 8, flexDirection: "column", display: "flex" }}>
                <Typography gutterBottom component="h1" variant='body1' mb={4}>Osiedle "Zielone", Rąbień AB.</Typography>

                <Typography 
                fontFamily="Cormorant"
                color={theme.palette.primary.main} gutterBottom component="h2" variant="h4" sx={{textTransform: "uppercase"}}fontWeight={500} mb={4} lineHeight={1.4} >Wybudowane z myślą o Twojej przyszłości.</Typography>
                <Typography gutterBottom component="p" mb={4}>        Nasze nieruchomości zaprojektowaliśmy tak, aby dawały ci dużo
                    przestrzeni i komfortu życiowego. Proste bryły niwelują utratę
                    energii w zimie, a malownicza zielona okolica rekompensuję każdą chwilę zpędzoną w zgiełku miasta.</Typography>


            <LinkButtonContained disableRipple disableElevation sx={{width: 240, borderRadius: "0.1em"}} href="/domy-rabien-ab" children="Oferta"/>

            </Container>
        </Box>
    )
}

export default HeaderComponent