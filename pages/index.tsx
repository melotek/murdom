import { Container, Typography } from '@mui/material'
import { NextPage } from 'next/types'
import React from 'react'
import { Row } from 'src/components/layout/row'
import { CallUsComponent } from 'src/components/pages/home/call'
import { HeaderComponent } from 'src/components/pages/home/header'
import { OfferSliderComponent } from 'src/components/pages/home/offers'
import { TestimoniesComponent } from 'src/components/pages/home/testimones'

type Props = {}

const Home: NextPage = (props: Props) => {
	return (
		<>
			<header>
				<HeaderComponent />
			</header>
			<section>
				<OfferSliderComponent />
			</section>
			<section>
				<CallUsComponent />
			</section>
			<section>
				<TestimoniesComponent />
			</section>

		</>
	)
}

export default Home