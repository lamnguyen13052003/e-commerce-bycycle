export default interface AddReviewRequest {
    productId: string,
    name: string,
    email: string,
    rating: number,
    comment: string,
    date: Date
}
