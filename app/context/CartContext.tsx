"use client";

import { createContext, useState } from "react";

type Comic = {
    id: number;
    title: string;
    price: number;
    image: string;
};

const CartContext = createContext(null);

export function CartProvider({ children }: { children: React.ReactNode }) {

    const [cart, setCart] = useState<Comic[]>([]);

    function addToCart(comic: Comic) {
        setCart((currentCart) => [...currentCart, comic]);
    }

    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContext;