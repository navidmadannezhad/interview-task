"use client";

import { CART_ITEM_LIFE } from "@/src/configs/major";
import { useCart } from "@/src/services/store";
import { getTimeStampFromISOTime } from "@/src/utils/commonUtils";
import { FC, ReactNode, useEffect } from "react";
import { Toaster } from "react-hot-toast";

interface ProvidersProps{
    children: ReactNode;
};

const Providers: FC<ProvidersProps> = (props) => {
    const removeFromCart = useCart(state => state.removeFromCart);
    const cartItems = useCart(state => state.cartItems);

    useEffect(() => {
        for(const item of cartItems){
            const now = Date.now();
            if(now - getTimeStampFromISOTime(item.created_at) > CART_ITEM_LIFE) removeFromCart(item.product);
        }
    }, [cartItems])

    return(
        <>
            <Toaster />
            {props.children}
        </>
    )
}

export default Providers;