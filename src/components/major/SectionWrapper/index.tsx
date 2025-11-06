import { FC, ReactNode } from "react";
import styles from "./main.module.css";

interface SectionWrapperProps{
    children: ReactNode;
};

const SectionWrapper: FC<SectionWrapperProps> = (props) => {
    return(
        <section
            className={styles.sectionWrapper}
        >
            {props.children}
        </section>
    )
}

export default SectionWrapper;