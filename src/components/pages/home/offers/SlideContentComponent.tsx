import {
  Box,
  Grid,
  GridProps,
  Icon,
  styled,
  Theme,
  Typography,
  TypographyProps,
  useTheme,
} from '@mui/material'
type Props = {
  offers: {
    meters: number
    livingmeters: number
    groundmeters: number
    floors: number
    undergraund: string
    heat: string
    garage: string
    carplaces: number
    attic: string
    washroom: number
    rooms: number
  }
}
type RowProps = {
  title: string
  value: number | string
  measureSign?: any
  icon?: any
  matches?: boolean
  theme?: Theme
}

const CustomRowCell = styled(
  (
    props: {
      icon: any
      index: any
			fontColor:any
      rooms?: any
      bathrooms?: any
      carplaces?: any
      active?: any
    } & GridProps &
      TypographyProps
  ) => {
    const {
      icon,
      active,
      rooms,
      bathrooms,
      fontColor,
      carplaces,
      index,
      ...other
    } = props


		const theme = useTheme()


    return (
      <Grid item xs={4} display="flex" justifyContent={'center'} sx={{transition: "all .2s ease-in" }}>
        <Icon
          sx={{
            width: '3em',
            height: '3em',
            // padding: 0.5,
            lineHeight: '1em',
            alignSelf: 'center',
          }}
        >
          {icon}
        </Icon>
        <Typography
          fontFamily="Cormorant"
          variant="h4"
          alignSelf="center"
          component="h4"
					color={fontColor}
          sx={{ fontStyle: 'italic', transition: "all .2s ease-in"  }}
          mx={2}
        >
          &#10006;
        </Typography>
        <Typography
          fontFamily="Montserrat"
          variant="h3"
          component="h4"
          alignSelf="center"
					color={fontColor} 
          sx={{ fontStyle: 'italic', transition: "all .2s ease-in"  }}
        >
          {rooms || bathrooms || carplaces}
        </Typography>
      </Grid>
    )
  }
)(({ active, theme }) => ({
  transition: 'all .2s ease-in',
}))

export const RowIconsComponent = ({
  SvgBedroom,
  SvgBathroom,
  SvgGarage,
  active,
  index,
	fontColor,
  _,
}: any) => {

  return (
    <>
      <CustomRowCell
        active={active}
        fontColor={fontColor}
        index={index}
        icon={SvgBedroom}
        rooms={_.rooms}
      ></CustomRowCell>
      <CustomRowCell
        active={active}
        fontColor={fontColor}
        index={index}
        icon={SvgBathroom}
        bathrooms={_.bathrooms}
      ></CustomRowCell>
      <CustomRowCell
        active={active}
				fontColor={fontColor}
        index={index}
        icon={SvgGarage}
        carplaces={_.carplaces}
      ></CustomRowCell>
    </>
  )
}

const RowComponent = ({
  title,
  value,
  measureSign,
  icon,
  matches = false,
  theme,
}: RowProps) => {
  // const theme = useTheme()
  // const matches = useMediaQuery(theme.breakpoints.up("md"))

  return (
    <Box display="flex">
      <Typography
        sx={{
          letterSpacing: 2,
          lineHeigh: '2.31em !important',
          fontSize: '1em',
        }}
        variant="subtitle2"
        color={theme.palette.text.primary}
        mr={1}
        gutterBottom
      >
        {title}
      </Typography>
      <Typography
        variant="subtitle2"
        sx={{ lineHeigh: '2.31em !important', fontSize: '1em' }}
        fontWeight={500}
        color={theme.palette.text.primary}
        gutterBottom
      >
        <>{value}</>
        <> </>
        <>{measureSign}</>
      </Typography>
    </Box>
  )
}

const SlideContentComponent = ({
  offers: {
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
    rooms,
  },
}: Props) => {
  const theme = useTheme()

  return (
    <Box sx={{ backgroundColor: theme.palette.background.default }} mb={4}>
      <RowComponent
        // icon={<SvgHouseDraw/>}
        theme={theme}
        title="Powieżchnia użytkowa:"
        value={livingmeters}
        measureSign={
          <>
            m
            <sup
              style={{
                lineHeight: 0,
                verticalAlign: 'super',
              }}
            >
              2
            </sup>{' '}
            .
          </>
        }
      />
      <RowComponent
        theme={theme}
        title="Powieżchnia mieszkalna:"
        value={livingmeters}
        measureSign={
          <>
            m
            <sup
              style={{
                lineHeight: 0,
                verticalAlign: 'super',
              }}
            >
              2
            </sup>{' '}
            .
          </>
        }
      />

      {/* <RowComponent theme={theme} title="Ogrzewanie:" value={heat} /> */}
      {/* <RowComponent theme={theme} icon={<SvgBedroom/>} title="Pokoje:" value={rooms} />
            <RowComponent theme={theme} icon={<SvgBathroom/>}  title="Łazienki:" value={washroom} />
            <RowComponent theme={theme}  icon={<SvgGarage/>} title="Miejsca postojowe w garażu:" value={washroom} /> */}
    </Box>
  )
}

export default SlideContentComponent
