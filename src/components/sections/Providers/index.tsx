"use client";

import { FC, ReactNode } from "react";
import { Toaster } from "react-hot-toast";

interface ProvidersProps{
    children: ReactNode;
};

const Providers: FC<ProvidersProps> = (props) => {
    return(
        <>
            <Toaster />
            {props.children}
        </>
    )
}

export default Providers;