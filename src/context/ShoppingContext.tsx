import { ReactNode, createContext, useContext, useState } from 'react';

type ShoppingContextProviderProps = {
    children: ReactNode
}

type CartItem = {
    id: number
    name: string
    price: number
    qty: number
    thumbnail: string
}

interface ShoppingContextType {
    cartQty: number
    totalPrice: number
    cartItems: CartItem[]
    increaseQty: (id: number) => void
    decreaseQty: (id: number) => void
    removeCartItem: (id: number) => void
}

const ShoppingContext = createContext<ShoppingContextType>({} as ShoppingContextType);

export const useShoppingContext = () => {
    return useContext(ShoppingContext);
}

export const ShoppingContextProvider = ({ children }: ShoppingContextProviderProps) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const cartQty = cartItems.reduce((qty, item) => qty + item.qty, 0);
    const totalPrice = cartItems.reduce((total, item) => total + item.qty * item.price, 0);

    const increaseQty = (id: number) => {
        const currentCartItem = cartItems.find(item => item.id === id);
        if (currentCartItem) {
            const newItems = cartItems.map(item => item.id === id ? { ...item, qty: item.qty + 1 } : item);
            setCartItems(newItems);
        }
    }

    const decreaseQty = (id: number) => {
        const currentCartItem = cartItems.find(item => item.id === id);
        if (currentCartItem) {
            if (currentCartItem.qty === 1) {
                removeCartItem(id);
            } else {
                const newItems = cartItems.map(item => item.id === id ? { ...item, qty: item.qty - 1 } : item);
                setCartItems(newItems);
            }
        }
    }

    const removeCartItem = (id: number) => {
        const newItems = cartItems.filter(item => item.id !== id);
        setCartItems(newItems);
    }

    return (
        <ShoppingContext.Provider value={{ cartItems, cartQty, totalPrice, increaseQty, decreaseQty, removeCartItem }}>
            {children}
        </ShoppingContext.Provider>
    );
}

export default ShoppingContext;
