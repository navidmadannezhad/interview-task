"use client";

import { FC, ReactNode } from "react";
import styles from "./main.module.css";
import { MdInbox } from "react-icons/md";

interface EmptyWrapperProps{
    items: unknown[];
    children: ReactNode;
};

const EmptyWrapper: FC<EmptyWrapperProps> = (props) => {
    const noItems = props.items.length === 0;

    return(
        <>
            {noItems ? (
                <div
                    className={styles.emptyWrapper}
                >
                    <MdInbox
                        size={48}
                        color="var(--secondary-ultraLight)"
                    />
                    <p>
                        نتیجه ای یافت نشد!
                    </p>
                </div>
            ) : props.children}
        </>
    )
}

export default EmptyWrapper;