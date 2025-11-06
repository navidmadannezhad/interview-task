import { FC, ReactNode } from "react";
import styles from "./main.module.css";

interface SectionWrapperProps{
    children: ReactNode;
};

const SectionWrapper: FC<SectionWrapperProps> = (props) => {
    return(
        <main
            className={styles.sectionWrapper}
        >
            {props.children}
        </main>
    )
}

export default SectionWrapper;