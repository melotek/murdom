import React, { forwardRef, Ref } from 'react'
import Link, { LinkProps } from 'next/link'
import { Button, ButtonProps, useTheme } from '@mui/material'

type LinkRef = HTMLButtonElement
type NextLinkProps = Omit<ButtonProps, 'href'> &
  Pick<LinkProps, 'href' | 'as' | 'prefetch' | 'locale'>

const LinkButtonContained = ({ href, as, prefetch, locale, ...props }: LinkProps, ref: Ref<LinkRef>) => {
    return (
  <Link href={href} as={as} prefetch={prefetch} locale={locale} passHref>
    <Button variant="contained" size='large'  ref={ref} {...props} />
  </Link>
)}

export default forwardRef<LinkRef, NextLinkProps>(LinkButtonContained)