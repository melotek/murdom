import { Box, Divider, Typography, useTheme } from "@mui/material";
import content, { Offers } from "data";
import { GetStaticPropsContext } from "next";
import Image from 'next/image';
import Link from "next/link";

type Props = {
    offers: Offers[]
}


const { offers } = content;


const Oferta = ({ offers }: Props) => {
    const theme = useTheme()
    return (
        <>
            <Box pt={8} pb={5}>
                <Box>
                    <Typography variant="h3" component="h1" letterSpacing={3} fontWeight={500} textAlign="center">
                        <span style={{ fontFamily: "Cormorant", marginRight: "10px" }}>
                            Nasze
                        </span>
                        <span
                            style={{ fontFamily: "Cormorant", color: theme.palette.primary.main, marginRight: "5px" }}
                        >
                            ogłoszenia
                        </span>

                    </Typography>
                </Box>
                <Box>
                    <Typography variant="h5" component="em" letterSpacing={2} fontWeight={500} my={4} lineHeight={1.5} textAlign="center" sx={{ display: "flex", flexDirection: "column" }}>
                        <span
                            style={{ color: theme.palette.primary.main }}
                        >
                            Chciałbyś
                        </span>
                        <span style={{ color: theme.palette.primary.contrastText }}>
                            zainwestować i kupić ?
                        </span>

                    </Typography>
                </Box>
                <Box sx={{ background: theme.palette.common.blue }}>


                    {
                        (offers as Offers[]).map((_) =>
                            <Link href={`/domy/${_.type}`}>
                                <a style={{ textDecoration: "none" }}>


                                    <Box color={theme.palette.text.secondary} pt={6} px={2} key={_.image}>
                                        <Image src={_.image} width={250} height={200} layout="responsive" />
                                        <Box display="flex" my={1} sx={{ textTransform: "uppercase", alignItems: "center" }}>
                                            <Typography variant="body2" component="h3" alignItems="end">działka</Typography>
                                            <span style={{ marginLeft: 5, marginRight: 5 }}>
                                                &#8209;
                                            </span>
                                            <Typography variant="body2" component="h3">{_.groundmeters} arów</Typography>

                                            <span style={{ marginLeft: 5, marginRight: 5 }}>
                                                &#8209;
                                            </span>
                                            <Typography variant="body2" component="h3">{_.title} m2</Typography>
                                        </Box>
                                        <Box sx={{ alignItems: "center" }}>
                                            <Typography mt={4} fontWeight={400} mb={2} color={theme.palette.primary.main} variant="h6" component="h2">
                                                Rąbień Ab
                                                <span style={{ marginLeft: 5, marginRight: 5 }}>
                                                    &#8209;
                                                </span>
                                                <span style={{ textTransform: "uppercase" }}>
                                                    {_.kind}
                                                </span>
                                            </Typography>
                                            <Typography variant="body1" color={theme.palette.text.secondary}
                                                pb={4}
                                            >
                                                {_.description}
                                            </Typography>
                                            <Divider sx={{ marginBottom: .5, backgroundColor: theme.palette.primary.main }} />
                                        </Box>

                                    </Box>
                                </a>
                            </Link>
                        )
                    }




                    <Box pt={6} pb={2}>


                    </Box>


                </Box>


            </Box>


        </>
    )
}

export default Oferta


export function getStaticProps(context: GetStaticPropsContext) {
    // const res = await fetch('https://.../posts')

    // const content = filter(offers, { type: router.query.typ })
    // const params = offers.map((_) => _.title)
    // console.log(params)



    return {
        props: {
            offers
        },
    }
}
// export const getStaticPaths = async (): Promise<
//     GetStaticPathsResult<any>
// > => {
//     // const params = offers.map((offer => pick(offer, ['type'])))




//     return {
//         paths: [{ params: { type: "260 metrow kadratowych" } }, { params: { type: "240 metrow kadratowych" } }, { params: { type: "220 metrow kadratowych" } }, { params: { type: "200 metrow kadratowych" } }],
//         fallback: false,
//     }
// }