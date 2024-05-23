import React from 'react';
import Product from "../components/product";

function Home() {
    return (
        <>
            <div>Trang chủ</div>
        <Product isSale={true} discount={3} image={{}} name={'null'} price={3} discountPrice={3}/>
        </>
    );
}

export default Home;