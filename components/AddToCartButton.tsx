"use client"

import { useEffect, useState } from "react";
import Button from "./Button";
import type { Comic } from "@/lib/types";
import { useCart } from "@/hooks/useCart";

type AddToCartButtonProps = {
    comic: Comic;
};

export default function AddToCartButton({ comic }: AddToCartButtonProps) {

    const { addToCart } = useCart();
    const [added, setAdded] = useState(false);

    useEffect(() => {
        if (!added) return;

        const timer = setTimeout(() => {
            setAdded(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, [added])

    function handleClick() {
        addToCart(comic);
        setAdded(true);
    }

    return (
        <Button onClick={handleClick}>
            {added ? "✓ Added!" : "Buy Now"}
        </Button>
    )
}