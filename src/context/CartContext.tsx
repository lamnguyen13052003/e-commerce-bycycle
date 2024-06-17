import React, { createContext, useContext, useState } from 'react';
import productsData from '../components/cart/product.json';

interface Product {
    id: number;
    name: string;
    price: number;
    qty: number;
}

interface CartItem extends Product {
    qty: number;
}

interface CartContextProps {
    cartItems: CartItem[];
    addToCart: (productId: number) => void;
    removeFromCart: (productId: number) => void;
    getTotalQuantity: () => number;
}

const initialCartItems: CartItem[] = productsData.products.map(product => ({
    id: product.id,
    name: product.name,
    price: product.price,
    qty: 1
}));

const CartContext = createContext<CartContextProps>({
    cartItems: initialCartItems,
    addToCart: (productId: number) => {},
    removeFromCart: (productId: number) => {},
    getTotalQuantity: () => 0,
});

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);

    const addToCart = (productId: number) => {
        setCartItems(items =>
            items.map(item =>
                item.id === productId ? { ...item, qty: item.qty + 1 } : item
            )
        );
    };

    const removeFromCart = (productId: number) => {
        setCartItems(items =>
            items.map(item =>
                item.id === productId && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
            ).filter(item => item.qty > 0)
        );
    };

    const getTotalQuantity = () => {
        return cartItems.reduce((total, item) => total + item.qty, 0);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, getTotalQuantity }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCartContext = () => useContext(CartContext);