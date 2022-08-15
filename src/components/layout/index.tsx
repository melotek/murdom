import React from 'react';
import FooterComponent from './footer/FooterComponent';

type Props = {
	children: React.ReactNode

}

const Layout = ({ children }: Props) => {
	return (
		<>

			{children}
			<footer>

			<FooterComponent />
			</footer>
		</>
	)
}

export default Layout