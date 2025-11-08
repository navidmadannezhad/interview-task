"use client";

import { FC, HTMLProps, ReactNode, useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import styles from "./main.module.css";

interface DrawerProps extends Omit<HTMLProps<HTMLDivElement>, 'content'>{
    children: ReactNode;
    content: ReactNode;
};

const Drawer: FC<DrawerProps> = ({ children, content, className, ...rest }) => {
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
            className={`
                ${className}
                ${styles.drawerWrapper}
            `}
            
            { ...rest }
        >
            <div
                className={styles.drawerBtnHander}
                onClick={handleOpenDrawer}
            >
                {children}
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
                    size={32}
                />
                {content}
            </div>
        </div>
    )
}

export default Drawer;