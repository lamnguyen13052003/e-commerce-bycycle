import {CheckoutType} from "../types/checkout.type";

export enum PayStatusEnum {
    SUCCESS,
    FAILED
}

export type PayStatusState = {
    status?: PayStatusEnum
    infoPay?: CheckoutType
}