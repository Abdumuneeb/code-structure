import { Typography } from "@mui/material";
import React from "react";

interface PageParams {
    id?: string,
    category?: string
}
interface PageProps {
    params: PageParams
}

const Page: React.FC<PageProps> = ({params}) =>{
    return(
        <>
        <Typography variant="h6">
            {params?.category}
        </Typography>
        </>
    )
    
}
export default Page;