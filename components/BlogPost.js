import Link from "next/link";
import {HeadPost} from './HeadPost'
import {Breadcrumbs, Typography} from "@material-ui/core";

export default function BlogPost({ children, meta}) {
    return (
        <>
            <Breadcrumbs aria-label="breadcrumb">
                <Link color="textPrimary" href="/">
                    Home
                </Link>
                <Typography color="textPrimary">Breadcrumb</Typography>
            </Breadcrumbs>

            <HeadPost meta={meta} isBlogPost/>
            <article>
                <Typography>
                    {children}
                </Typography>
            </article>
        </>
    )
}
