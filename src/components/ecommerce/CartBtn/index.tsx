"use client";

import { FC } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import styles from "./main.module.css";

interface CartBtnProps{};

const CartBtn: FC<CartBtnProps> = (props) => {
    return(
        <MdOutlineShoppingCart
            size={32}
        />
    )
}

export default CartBtn;