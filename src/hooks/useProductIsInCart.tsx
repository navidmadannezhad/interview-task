import { useEffect, useState } from "react";
import { useCart } from "@/src/services/store";
import { CartItem, Product } from "@/src/models";

const useProductIsInCart = (product: Product): boolean => {
    const cartItems = useCart(state => state.cartItems);
    const [productIsInCart, setProductIsInCart] = useState<boolean>(false);

    useEffect(() => {
        const isInCart = !!cartItems.find((item: CartItem) => item.product.id === product.id);
        setProductIsInCart(isInCart);
    }, [cartItems])

    return productIsInCart;
}

export default useProductIsInCart;