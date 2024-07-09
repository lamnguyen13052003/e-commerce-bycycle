import {ProductType} from "../../types/product.type";
import {ReviewProductType} from "../../types/reviewProduct.type";
import DisplayUserReview from "../product-detail/DisplayUserReview";
import {ObjectId} from "mongodb";
import {Stack} from "@mui/material";

export default function (props: {reviews: ReviewProductType[], userId: ObjectId}){
    return (
        <Stack direction={'row'}  flexWrap={"wrap"}>
            {props.reviews.map((review: ReviewProductType, index: number) => {
                  return  <DisplayUserReview key={index} review={review} userId={props.userId}/>

            })}
        </Stack>
    )
}
