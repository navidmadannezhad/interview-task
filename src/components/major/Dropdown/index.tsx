"use client";

import { FC, HTMLProps, ReactNode, useState } from "react";
import styles from "./main.module.css";

interface DropdownProps extends Omit<HTMLProps<HTMLDivElement>, 'content'>{
    children: ReactNode;
    content: ReactNode;
};

const Dropdown: FC<DropdownProps> = ({ children, content, className, ...rest }) => {
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
            onMouseEnter={handleOpenDropdown}
            onMouseLeave={handleCloseDropdown}

            className={`
                ${className}
                ${styles.drawerWrapper}
            `}
            
            { ...rest }
        >
            <div
                className={styles.dropdownBtnHander}
            >
                {children}
            </div>
            <div
                className={`
                    ${styles.dropdownContentWrapper}
                    ${dropdownOpen ? styles.dropdownOpen : ""}
                `}

                data-collapsed={collapsedState}
            >
                {content}
            </div>
        </div>
    )
}

export default Dropdown;