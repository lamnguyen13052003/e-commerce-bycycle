import React from 'react';
import Product from "../components/product";

function Home() {
    return (
        <>
            <div>Trang chủ</div>
            {/*test thoi*/}
        <Product isSale={true} discount={3} image={{}} name={'Xe Đạp Đua Twitter Smile – Khung Nhôm | Tay Đề Lắc | Retrospec | hahahahahahaha'} price={3000000} discountPrice={2500000}/>
        </>
    );
}

export default Home;