"use client"

import { useEffect, useState } from "react";

const useMediaQuery = (mediaQueryString: string): boolean => {
    const [matches, setMatches] = useState<boolean>(false);

    useEffect(() => {
        if(typeof window !== "undefined"){
            const checkPageWidth = () => {
                setMatches(
                    window.matchMedia(mediaQueryString).matches
                )
            }

            window.addEventListener("resize", checkPageWidth)

            return () => {
                window.removeEventListener("resize", checkPageWidth)
            }
        }
    }, [])

    return matches;
}

export default useMediaQuery;