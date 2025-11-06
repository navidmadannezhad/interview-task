"use client";

import { FC, ReactNode, useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import styles from "./main.module.css";

interface DrawerProps{
    children: ReactNode;
    content: ReactNode;
};

const Drawer: FC<DrawerProps> = (props) => {
    const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
    const [collapsedState, setCollapsedState] = useState<boolean>(true)

    const handleOpenDrawer = () => {
        setCollapsedState(false);
        setTimeout(() => {
            setDrawerOpen(true);
        })
    };

    const handleCloseDrawer = () => {
        setDrawerOpen(false);
        setTimeout(() => {
            setCollapsedState(true);
        }, 300)
    };


    return(
        <div
            className={styles.drawerWrapper}
        >
            <div
                className={styles.drawerBtnHander}
                onClick={handleOpenDrawer}
            >
                {props.children}
            </div>
            <div
                className={`
                    ${styles.drawerContentWrapper}
                    ${drawerOpen ? styles.drawerOpen : ""}
                `}

                data-collapsed={collapsedState}
            >
                <MdClose
                    className={styles.closeIcon}
                    onClick={handleCloseDrawer}
                    size={48}
                />
                {props.content}
            </div>
        </div>
    )
}

export default Drawer;