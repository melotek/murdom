import { Box, Container, Divider, Paper, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useState } from 'react'
import Image from "next/image"
import ButtonContained from '@buttons/ButtonContained'

type Props = {}

const CallUsComponent = (props: Props) => {
  const matches = useMediaQuery('(min-width:600px)')

  //  const [offsetTop, printOffsetTop] = useState<any>([]);

  //  const image  = useRef<HTMLParagraphElement | null>(null)




  const theme = useTheme()
  return (
    <Container>
      <Box my={8} >
        <Paper elevation={0}>
          <Image layout='responsive' width={170} height={170}
            src="/women.jpg" />
          <Box py={4} mx={2}>
            <Box mb={4}>


              <Typography color={theme.palette.text.secondary} sx={{ textTransform: "uppercase" }} fontWeight={500} fontFamily="Cormorant" variant="h5" component="h2" mb={4}>
                Nasze domy i mieszkania kupiło dotychczas, dziesiątki zadowolonych właścicieli.
              </Typography>
              <Typography component="em" pb={2} color={theme.palette.success.main}>
                <span>

                  "Dziękujemy, że zainwestowali Państwo w leśne osiedle Rąbień AB."
                </span>
                <span style={{ color: theme.palette.text.secondary, textTransform: "uppercase" }}>
                  - Murdom
                </span>
              </Typography>

            </Box>
            <ButtonContained
              href="/o-nas"
              children="O nas"
              fullWidth

            />
          </Box>





        </Paper>
      </Box>
      <Divider sx={{ marginBottom: .5 }} />
    </Container>
  )
}

export default CallUsComponent