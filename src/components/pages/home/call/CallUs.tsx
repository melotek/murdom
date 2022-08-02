import { Box, Container, Paper, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useState } from 'react'
import Image from "next/Image"

type Props = {}

const CallUsComponent = (props: Props) => {
const matches = useMediaQuery('(min-width:600px)')

//  const [offsetTop, printOffsetTop] = useState<any>([]);

//  const image  = useRef<HTMLParagraphElement | null>(null)
  



    const theme = useTheme()
  return (
    <Container>
        <Box my={8}>
            <Paper elevation={0}>
            <Image  layout='responsive' width={170} height={170}  
            src="/women.jpg"/>
            <Box my={4} mx={2}>
                <Typography color={theme.palette.text.secondary} sx={{textTransform: "uppercase"}}fontWeight={500}   fontFamily="Cormorant" variant="h4" component="h2" mb={4}>
             Nasze domy i mieszkania kupiło dotychczas, dziesiątki nowych właścicieli.
                </Typography>
                {
                 matches &&    <Typography > </Typography>

                }
<Typography  component="p" color={theme.palette.success.main}>Dziękujemy, że zainwestowali Państwo w leśne osiedle Rąbień AB. 
</Typography>


            </Box>


     

            </Paper>
        </Box>

    </Container>
  )
}

export default CallUsComponent