import FooterComponent from "@footer/FooterComponent";
import { Box, Container, Divider, Grid } from "@mui/material";
import NavBarComponent from "@navbar/NavBarComponent";
import content, { Offers } from "data";
import { filter } from "lodash";
import { GetStaticPathsResult, GetStaticPropsContext } from 'next';
import { HeaderComponent } from "src/components/pages/domy";
import PlusesComponent from "src/components/pages/domy/Pluses";
import LogoBig from "src/UI/LogoBig";


type PageParams = {
    type: string
}


const { offers } = content;

const Typy = (
    { data }: any) => {
    return (
			<>
      <NavBarComponent/>
<>

					<HeaderComponent data={data} />
	
					<Container>

						
			
										
										
<Divider/>

					</Container>
<PlusesComponent data={data} />

</>
				
     
			</>
    )
}

export default Typy


export function getStaticProps(context: GetStaticPropsContext<PageParams>) {
    // const res = await fetch('https://.../posts')

    // const content = filter(offers, { type: router.query.typ })
    // const params = offers.map((_) => _.title)
    // console.log(params)
// const place = "hospital"
    const data: Offers[] = filter(offers, { type: context.params.type })
		// const apiKey= "AIzaSyCaEeXGW5Wq3YZkHCQdgKVIDczyeSAnCYs"

		// const {coords} = data[0]

		// const  url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${coords.lat},${coords.long}&type=${place}&radius=500&key=AIzaSyCaEeXGW5Wq3YZkHCQdgKVIDczyeSAnCYs`


		// const getPlaces = async (url) => {
		// 		const places = await fetch()
		// }




    return {
        props: {
            data
        },
    }
}
export const getStaticPaths = async (): Promise<
    GetStaticPathsResult<any>
> => {
    // const params = offers.map((offer => pick(offer, ['type'])))




    return {
        paths: [{ params: { type: "260 metrow kadratowych" } }, { params: { type: "240 metrow kadratowych" } }, { params: { type: "220 metrow kadratowych" } }, { params: { type: "200 metrow kadratowych" } }],
        fallback: false,
    }
}




