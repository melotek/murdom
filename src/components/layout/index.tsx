import React from 'react';
import FooterComponent from './footer/FooterComponent';
import { NavBarComponent } from './navbar';

type Props = {
	children: React.ReactNode

}

const Layout = ({ children }: Props) => {
	return (
		<>
			<NavBarComponent />
			{children}
			<FooterComponent />
		</>
	)
}

export default Layout