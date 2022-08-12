import ButtonContained from '@buttons/ButtonContained'
import {
  Box,
  Container,
  Divider,
  Paper,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material'
import { AnyARecord } from 'dns'
import Image from 'next/image'
import { useRef, useState, useEffect } from 'react'

type Props = {}

const CallUsComponent = () => {
  const theme = useTheme()
  const match = useMediaQuery(theme.breakpoints.up('md'))

  const headerRef = useRef(null as null | HTMLElement)
  const buttonRef = useRef(null as null | HTMLButtonElement)

  const [headInView, setHeadInView] = useState(false)
  const [buttonInView, setButtonInView] = useState(false)






  const HeadIsInView = () => {
    if (!headerRef.current) {
      return
    } else {
      const rect = headerRef.current.getBoundingClientRect()

      return rect.top - 300 <= rect.height && rect.bottom >= 400
    }
  }
  const ButtonIsInView = () => {
    if (!buttonRef.current) {
      return
    } else {
      const rect = buttonRef.current.getBoundingClientRect()

      return rect.top - 600 <= rect.height && rect.bottom >= 200
    }
  }
  const HeaderScrollHandler = () => {
    setHeadInView(HeadIsInView())
  }
  const ButtonScrollHandler = () => {
    setButtonInView(ButtonIsInView())
  }

  useEffect(() => {
    setHeadInView(HeadIsInView())
    window.addEventListener('scroll', HeaderScrollHandler)
    return () => {
      window.removeEventListener('scroll', HeaderScrollHandler)
    }
  }, [])
  useEffect(() => {
    setButtonInView(ButtonIsInView())
    window.addEventListener('scroll', ButtonScrollHandler)
    return () => {
      window.removeEventListener('scroll', ButtonScrollHandler)
    }
  }, [])
  //  const [offsetTop, printOffsetTop] = useState<any>([]);

  //  const image  = useRef<HTMLParagraphElement | null>(null)

  return (
    <Container>
      <Box mt={8} mb={ match ? 8 : 4}>
        <Paper elevation={0}>
          <Box
            sx={{ display: 'flex', flexDirection: match ? 'row' : 'column' }}
          >
            <Box sx={{ width: '100%', height: '100%', flex: 1 }}>
              <Image
                layout="responsive"
                width={170}
                height={170}
                src="/women.jpg"
              />
            </Box>
            <Box py={4} mx={match ? 8 : 2} sx={{ flex: 1 }}>
              <Box mb={4} ref={headerRef}>
                <Typography
                  color={headInView ? theme.palette.primary.main : theme.palette.common.blue}
                  sx={{ textTransform: 'uppercase' }}
                  fontWeight={500}
                  fontFamily="Cormorant"
                  variant={match ? 'h3' : 'h5'}
                  component="h2"
                  mb={4}
                >
                  Nasze domy i mieszkania kupiło dotychczas, dziesiątki
                  zadowolonych właścicieli.
                </Typography>
                <Typography
                  component="em"
                  pb={2}
                  color={theme.palette.success.main}
                >
                  <span>
                    "Dziękujemy, że zainwestowali Państwo w leśne osiedle Rąbień
                    AB."
                  </span>
                  <span
                    style={{
                      color: theme.palette.primary.main,
                      textTransform: 'uppercase',
                    }}
                  >
                    - Murdom
                  </span>
                </Typography>
              </Box>
				

              <ButtonContained
                href="/o-nas"
								ref={buttonRef}
								// color={buttonInView ? theme.palette.primary.main : theme.palette.common.blue}
                children="O nas"
                fullWidth
                sx={{ width: '100%', backgroundColor: buttonInView ? theme.palette.primary.main : theme.palette.common.blue }}
								/>
        
								</Box>
          </Box>
        </Paper>
      </Box>
      <Divider sx={{ marginBottom: 0.5 }} />
    </Container>
  )
}

export default CallUsComponent

