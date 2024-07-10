import {ReviewProductType} from "./reviewProduct.type";
import AddReviewRequest from "../requests/addReview.request";

export interface ReviewProductHasTotal {
    reviews: AddReviewRequest[];
    total: number;
}
