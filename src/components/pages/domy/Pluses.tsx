import {
  Box,
  Container,
  Grid,
  GridProps,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import React from 'react'
import SvgBasement from 'src/UI/Basement'
import SvgBathroom from 'src/UI/Bathroom'
import SvgBedroom from 'src/UI/Bedroom'
import SvgGarret from 'src/UI/Garret'

type Props = {
  data: any
}

type PlusWithIconType = {
  title: string
  icon: any
  data: number | boolean
  xs: number
}

interface GridPropsContainer extends GridProps {
  children: any
  theme?: any
}

const PlusCell = styled((props: GridPropsContainer) => {
  const { children, theme, ...other } = props
  return (
    <Grid item container xs={3} {...other}>
      <Grid item xs={12}>
        <Typography variant="body1">{children}</Typography>
      </Grid>
    </Grid>
  )
})(({ theme }) => ({}))

const PlusWithIcon = ({ title, icon, data, xs }: PlusWithIconType) => {
  const theme = useTheme()
  const match = useMediaQuery(theme.breakpoints.up('md'))
  function printData(data: PlusWithIconType['data']): number | string {
    if (typeof data === 'boolean') {
      if (data === true) {
        return 'tak'
      } else {
        return 'nie'
      }
    }
    return data
  }

  return (
    <Grid item container xs={xs}>
      <Grid item xs={12} pr={match ? 10 : 6}>
        {icon}
      </Grid>
      <Grid item xs={12} my={1}>
        {title}
      </Grid>

      <Grid item xs={12}>
        {printData(data)}
      </Grid>
    </Grid>
  )
}

const PlusesComponent = ({ data }: Props) => {
  const theme = useTheme()
  const content = data[0]
  const match = useMediaQuery(theme.breakpoints.up('md'))

  const { advantages } = content

  return (
    <Container>
			<Box py={2}>

			
      <Box my={4}>
        <Typography variant="h4" textAlign="center">
          <span style={{ color: theme.palette.common.blue }}>Za</span>
          <span style={{ color: theme.palette.primary.main }}>lety</span>
        </Typography>
      </Box>
      <Grid
        container
        sx={{ maxWidth: match ? '600px !important' : '300px !important' }}
        spacing={4}
        xs={12}
      >
        <PlusWithIcon
          title="Liczba pokoi"
          icon={<SvgBedroom color={theme.palette.primary.main} />}
          xs={match ? 3 : 6}
          data={content.rooms}
        />
        <PlusWithIcon
          title="Liczba łazienek"
          icon={<SvgBathroom color={theme.palette.primary.main} />}
          xs={match ? 3 : 6}
          data={content.bathrooms}
        />
        <PlusWithIcon
          title="Poddasze"
          icon={<SvgGarret color={theme.palette.primary.main} />}
          xs={match ? 3 : 6}
          data={content.attic}
        />
        <PlusWithIcon
          title="Podpiwniczenie"
          icon={<SvgBasement color={theme.palette.primary.main} />}
          xs={match ? 3 : 6}
          data={content.underground}
        />
      </Grid>
			</Box>
			<Box py={2}>
      <Box my={4}>
        <Typography variant="h4" textAlign="center">
          <span style={{ color: theme.palette.primary.main }}>Charaker</span>
          <span style={{ color: theme.palette.common.blue }}>ystyka</span>
        </Typography>
      </Box>
      <Grid container xs={12}>
        <Grid container item xs={12} my={2}>
          <Grid item xs={3}>
            <Typography variant="h6" color={theme.palette.primary.main}>
              Metraż:
            </Typography>
          </Grid>
          <PlusCell
            children={`Powiażchnia działki ${content.groundmeters} ar`}
          ></PlusCell>
          <PlusCell
            children={`Powiażchnia użytkowa ${content.meters} m2`}
          ></PlusCell>
          <PlusCell
            children={`Powiażchnia mieszkalna ${content.livingmeters} m2`}
          ></PlusCell>
        </Grid>
        <Grid container item xs={12} my={2}>
          <Grid item xs={3}>
            <Typography variant="h6" color={theme.palette.primary.main}>
              Udogodnienia:
            </Typography>
          </Grid>
          {advantages &&
            advantages.map((_: any, index: any) => (
              <Grid key={index} item xs={9 / advantages.length}>
                <Typography variant="body1">{_}</Typography>
              </Grid>
            ))}
        </Grid>
        <Grid container item xs={12} my={2}>
          <Grid item xs={3}>
            <Typography variant="h6" color={theme.palette.primary.main}>
              Infrastruktura:
            </Typography>
          </Grid>
          <PlusCell
            children={`Przedszkole ${content.kindergarten.distance}`}
          ></PlusCell>
          <PlusCell
            children={`Szkoła podstawowa ${content.school.distance}`}
          ></PlusCell>
          <PlusCell
            children={`Szpital ${content.hospital.distance}`}
          ></PlusCell>
        </Grid>
      </Grid>
			</Box>
    </Container>
  )
}

export default PlusesComponent
