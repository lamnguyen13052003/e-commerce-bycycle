import {connection} from "../database.connect";
import {PayRequest} from "../requests/pay.request";
import {payProducts} from "./product.service";
import {payFailed} from "../errors/error.enum";
import {ObjectId} from "mongodb";

export default class BillService {
    private collection = 'bills';
    private billRepository = connection.collection<PayRequest>(this.collection);

    static newInstance() {
        return new BillService();
    }

    public async saveBill(payRequest: PayRequest) {
        payRequest.infoPay._id = ObjectId.createFromHexString(payRequest.infoPay._id.toString())

        if (!payProducts(payRequest.products)) throw payFailed;

        return await this.billRepository.insertOne({
            products: payRequest.products,
            infoPay: payRequest.infoPay
        }).then(() => {
            return true;
        }).catch(() => {
            throw payFailed;
        });
    }
}


