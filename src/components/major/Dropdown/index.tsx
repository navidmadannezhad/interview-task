"use client";

import { FC, ReactNode, useState } from "react";
import styles from "./main.module.css";

interface DropdownProps{
    children: ReactNode;
    content: ReactNode;
};

const Dropdown: FC<DropdownProps> = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
    const [collapsedState, setCollapsedState] = useState<boolean>(true)

    const handleOpenDropdown = () => {
        setCollapsedState(false);
        setTimeout(() => {
            setDropdownOpen(true);
        }, 150)
    };

    const handleCloseDropdown = () => {
        setDropdownOpen(false);
        setTimeout(() => {
            setCollapsedState(true);
        }, 150)
    };

    return(
        <div
            className={styles.dropdownWrapper}
            onMouseEnter={handleOpenDropdown}
            onMouseLeave={handleCloseDropdown}
        >
            <div
                className={styles.dropdownBtnHander}
            >
                {props.children}
            </div>
            <div
                className={`
                    ${styles.dropdownContentWrapper}
                    ${dropdownOpen ? styles.dropdownOpen : ""}
                `}

                data-collapsed={collapsedState}
            >
                {props.content}
            </div>
        </div>
    )
}

export default Dropdown;