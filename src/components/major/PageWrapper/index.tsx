import { FC, ReactNode } from "react";
import styles from "./main.module.css";

interface PageWrapperProps{
    children: ReactNode;
};

const PageWrapper: FC<PageWrapperProps> = (props) => {
    return(
        <main
            className={styles.pageWrapper}
        >
            {props.children}
        </main>
    )
}

export default PageWrapper;