import React from 'react';
import ProductList from "../components/product";
import CartItem from "../components/cart";

function Home() {
    return (
        <>
            <div>Trang chủ</div>
            <ProductList/>
            <CartItem id={1} title={"Xe Đạp Trẻ Em 12 Inch GH Bike [GIÁ RẺ] - Xanh lá"} price={890000} qty={1} />
        </>
    );
}

export default Home;