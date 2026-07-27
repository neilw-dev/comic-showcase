"use client"

import { useEffect, useState } from "react";
import Button from "./Button";

export default function AddToCartButton() {

    const [added, setAdded] = useState(false);

    useEffect(() => {
        if (!added) return;

        const timer = setTimeout(() => {
            setAdded(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, [added])

    function handleClick() {
        setAdded(true);
    }

    return (
        <Button onClick={handleClick}>
            {added ? "✓ Added!" : "Buy Now"}
        </Button>
    )
}