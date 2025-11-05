"use client";

import { ComponentProps, FC, useState } from "react";
import Image from "next/image";

type ImageProps = ComponentProps<typeof Image>;
interface ImageWrapperProps extends ImageProps{};

const IMAGE_PLACEHOLDER_SOURCE: string = "/images/thumbnail.png";

const ImageWrapper: FC<ImageWrapperProps> = (props) => {
    const [source, setSource] = useState<ImageProps["src"]>(props.src);

    return(
        <Image
            onError={() => setSource(IMAGE_PLACEHOLDER_SOURCE)}
            width={100}
            height={100}

            { ...props }

            src={source}
        />
    )
}

export default ImageWrapper;