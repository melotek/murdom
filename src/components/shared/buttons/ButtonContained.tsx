import { Button, ButtonProps, useTheme } from '@mui/material'
import Link, { LinkProps } from 'next/link'
import { forwardRef, Ref } from 'react'

type LinkRef = HTMLButtonElement
type NextLinkProps = Omit<ButtonProps, 'href'> &
  Pick<LinkProps, 'href' | 'as' | 'prefetch' | 'locale'> & {
    children: string
    sx: any
  }

const LinkButtonContained = (
  { href, as, prefetch, locale, children, sx }: NextLinkProps,
  ref: Ref<LinkRef>
) => {
  const theme = useTheme()
  return (
    <Link href={href} as={as} prefetch={prefetch} locale={locale} passHref>
      <Button
        disableElevation
        disableFocusRipple
        variant="contained"
        size="large"
        ref={ref}
        sx={{
          letterSpacing: 2.3,
          position: 'relative',
          borderRadius: 0,
          '&:after': {
            content: '""',

            position: 'absolute',
            width: '16px',
            height: '16px',
            borderTop: `solid 2px ${theme.palette.background.paper}`,
            borderRight: `solid 2px ${theme.palette.background.paper}`,
            top: 5,
            right: 5,
            zIndex: '3',
          },
          '&:before': {
            content: '""',
            position: 'absolute',
            width: '16px',
            height: '16px',
            borderBottom: `solid 2px ${theme.palette.background.paper}`,
            borderLeft: `solid 2px ${theme.palette.background.paper}`,
            bottom: 5,
            left: 5,
            zIndex: '3',
          },
          ...sx,
        }}
      >
        {children}
      </Button>
    </Link>
  )
}

export default forwardRef<LinkRef, NextLinkProps>(LinkButtonContained)
