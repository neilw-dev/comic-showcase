"use client"

import Button from "./Button";

export default function BuyButton() {
    function handlePurchase() {
        alert("Added to cart");
    }

    return (
        <Button onClick={handlePurchase}>
            Buy Now
        </Button>
    );
}