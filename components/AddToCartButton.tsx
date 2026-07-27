"use client"

import { useState } from "react";
import Button from "./Button";

export default function AddToCartButton() {

    const [added, setAdded] = useState(false);

    function handleClick() {
        setAdded(true);
    }

    return (
        <Button onClick={handleClick}>
            {added ? "✓ Added!" : "Buy Now"}
        </Button>
    )
}