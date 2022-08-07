import React from 'react';
import FooterComponent from './footer/FooterComponent';

type Props = {
	children: React.ReactNode

}

const Layout = ({ children }: Props) => {
	return (
		<>

			{children}
			<FooterComponent />
		</>
	)
}

export default Layout