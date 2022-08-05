import { Container } from "@mui/material";
import content, { Offers } from "data";
import { filter } from "lodash";
import { GetStaticPathsResult, GetStaticPropsContext } from 'next';
import { HeaderComponent } from "src/components/pages/domy";


type PageParams = {
    type: string
}


const { offers } = content;

const Typy = (
    { data }: any) => {
    return (
        <Container><HeaderComponent data={data} /></Container>
    )
}

export default Typy


export function getStaticProps(context: GetStaticPropsContext<PageParams>) {
    // const res = await fetch('https://.../posts')

    // const content = filter(offers, { type: router.query.typ })
    // const params = offers.map((_) => _.title)
    // console.log(params)

    const data: Offers[] = filter(offers, { type: context.params.type })

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