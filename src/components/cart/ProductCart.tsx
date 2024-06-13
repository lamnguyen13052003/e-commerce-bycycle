import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useShoppingContext } from '../../context/ShoppingContext'

type ProductItem = {
    id: number
    name: string
    price: number
    thumbnail: string
}

const ProductCart = () => {

    const [products, setProducts] = useState<ProductItem[]>([])

    useEffect(() => {
        console.log("get products data from api")
        const fetchAPI = async () => {
            try {
                const res = await axios.get('http://localhost:3001/products')
                console.log("products=> ", res)
                setProducts(res.data)
            } catch (error) {
                console.log("error=> ", error)
            }
        }
        fetchAPI()
    }, [])

    return (
        <div className="row">
            <h3>Products</h3>
            {products.map(item => {
                return (
                    <div key={item.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                        <div className="card">
                            <img src={item.thumbnail} className="card-img-top" alt={item.name} />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">${item.price}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ProductCart