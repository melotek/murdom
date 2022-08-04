import { Box, Typography, useTheme } from "@mui/material";
import { Offers } from "data";
import Image from "next/image";
import { useRouter } from "next/router";
type Props = {
    data: Offers[]

}

const HeaderComponent = ({ data }: Props) => {
    const theme = useTheme();
    const router = useRouter();

    const content = data[0]


    return (
        <>


            <Box pt={8} pb={5}>
                <Typography variant="h4" component="h1" letterSpacing={3} fontWeight={600} textAlign="center">
                    <span style={{ fontFamily: "Cormorant" }}>
                        Rąbień Ab &#8211;

                    </span>
                    <span
                        style={{ fontFamily: "Cormorant", textTransform: "uppercase", color: theme.palette.primary.main, marginRight: "5px" }}

                    >
                        {content.title}
                    </span>
                    <span style={{ fontFamily: "Cormorant" }}>
                        metrów
                    </span>
                </Typography>

            </Box>
            <Box>
                <Typography variant="body1" fontWeight={500} component="h2" textAlign="center" >
                    Dom wolnostojący
                </Typography>
                <Box display="flex" justifyContent="space-evenly" my={3}>

                    <Box display="flex" >
                        <Typography variant="body1" component="h3">działka</Typography>
                        <span style={{ marginLeft: 15, marginRight: 15 }}>

                            &#8209;
                        </span>
                        <Typography variant="body1" component="h3">{content.groundmeters} arów</Typography>
                    </Box>
                    <span style={{ marginLeft: 15, marginRight: 15 }}>

                        &#8209;
                    </span>

                    {content.garage &&
                        <Box display="flex">
                            <Typography variant="body1" component="h3">garaż</Typography>
                            <span style={{ marginLeft: 15, marginRight: 15 }}>

                                &#8209;
                            </span>
                            <Typography variant="body1" component="h3">{content.carplacesDescription}</Typography>
                        </Box>
                    }
                </Box>

                <Image layout="responsive" height={150} width={200} src={content.image} />
            </Box>

        </>
    )
}

export default HeaderComponent