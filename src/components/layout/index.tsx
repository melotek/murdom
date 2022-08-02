import React from 'react'
import { NavBarComponent } from './navbar'
import FooterComponent from './footer/FooterComponent';

type Props = {
children: React.ReactNode

}

const Layout = ({children}: Props) => {
	return (
		<>
		<NavBarComponent/>
		{children}
		<FooterComponent/>
		</>
	)
}

export default Layout