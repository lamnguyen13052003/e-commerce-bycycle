import {Link} from "react-router-dom";
import {Box} from "@mui/material";
import {Image} from "react-bootstrap";
import React from "react";

export interface CategoryItemProps {
    title: string,
    url: string,
    to: string
}

function CategoryItem(props: CategoryItemProps) {
    return (
        <Link to={props.to} className={'text-decoration-none'}>
            <Box width={"150px"} height={"150px"} className={'p-2 pt-3 rounded-4'} style={{
                background: "#3daff1",
            }}>
                <Image src={props.url} className={'w-100'}/>
                <p className={'fw-bold text-white text-center mt-2'}>{props.title}</p>
            </Box>
        </Link>
    );
}

export default CategoryItem;