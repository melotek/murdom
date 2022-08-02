import React, { forwardRef, Ref } from 'react'
import Link, { LinkProps } from 'next/link'
import { Button, ButtonProps, useTheme } from '@mui/material'

type LinkRef = HTMLButtonElement
type NextLinkProps = Omit<ButtonProps, 'href'> &
  Pick<LinkProps, 'href' | 'as' | 'prefetch' | 'locale'> & { children: string }

const LinkButtonContained = ({ href, as, prefetch, locale, children, ...props }: NextLinkProps, ref: Ref<LinkRef>) => {
  return (
    <Link href={href} as={as} prefetch={prefetch} locale={locale} passHref>
      <Button variant="contained" size='large' ref={ref} {...props} sx={{ letterSpacing: 2.3 }} >
        {children}

      </Button>
    </Link>
  )
}

export default forwardRef<LinkRef, NextLinkProps>(LinkButtonContained)