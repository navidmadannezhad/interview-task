"use client";

import { ComponentProps, FC, useState } from "react";
import styles from "./main.module.css";
import Image from "next/image";

type ImageProps = ComponentProps<typeof Image>;
interface ImageWrapperProps extends ImageProps{};

const IMAGE_PLACEHOLDER_SOURCE: string = "/images/thumbnail.png";

const ImageWrapper: FC<ImageWrapperProps> = ({ className, ...rest }) => {
    const [source, setSource] = useState<ImageProps["src"]>(rest.src);
    const [imgLoading, setImgLoading] = useState<boolean>(true);

    return(
        <div className={`
            ${styles.imageWrapper}
            ${className}
        `}>
            <Image
                onError={() => setSource(IMAGE_PLACEHOLDER_SOURCE)}
                
                width={100}
                height={100}
                quality={100}

                { ...rest }
                style={{ 
                    width: "100%", 
                    height: "100%",
                    objectFit: "cover" 
                }}
                src={source}
                onLoadingComplete={() => setImgLoading(false)}
            />

            {imgLoading ? (
                <div className={styles.imgSkeleton} />
            ) : null}
        </div>
    )
}

export default ImageWrapper;