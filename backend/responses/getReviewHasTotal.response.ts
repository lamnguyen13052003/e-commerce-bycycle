import {ReviewProductResponse} from "./reviewProduct.response";

export type GetReviewHasTotalResponse = {
    total: number;
    reviews: ReviewProductResponse[];
}
