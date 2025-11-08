import { RefObject, useEffect, useMemo, useState } from "react"

const useReachedBottom = (ref: RefObject<HTMLElement | null>) => {
    const [isIntersecting, setIntersecting] = useState<boolean>(false)

    const observer = useMemo(() => {
        if(typeof window === "undefined") return;
            
        return new IntersectionObserver(
            ([entry]) => setIntersecting(entry.isIntersecting)
        )
    }, [ref])

    useEffect(() => {
        observer?.observe(ref.current!)
        return () => observer?.disconnect()
    }, [])

    return isIntersecting
}

export default useReachedBottom;