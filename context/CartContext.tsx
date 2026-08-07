"use client";

import { createContext, useState } from "react";
import type { Comic }  from "@/lib/types";

type CartContextType = {
    cart: Comic[];
    addToCart: (comic: Comic) => void;
};

const CartContext = createContext<CartContextType | null>(null);

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