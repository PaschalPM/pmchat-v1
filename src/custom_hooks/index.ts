import { useLayoutEffect, useState } from "react"

type RegExpGroupType = Record<string, string>

export const useMediaQuery = (query: string) => {
    const winInnerWidth = window.innerWidth
    const pattern = /^(?<key>.+):(?<value>[0-9]+)px/
    const { key, value } = (query.match(pattern) as RegExpMatchArray).groups as RegExpGroupType
    const [mediaState, setMediaState] = useState(false)

    useLayoutEffect(() => {

        if (!isNaN(parseInt(value))) {
            if (key === "max-width")
                setMediaState(winInnerWidth <= parseInt(value) - 1)
            else if (key === "min-width")
                setMediaState(winInnerWidth >= parseInt(value))
        }
    }, [winInnerWidth, key, value])

    window.matchMedia(`(${query})`).addEventListener("change", (e: MediaQueryListEvent) => {
        if (e.matches) {
            setMediaState(true)
        } else {
            setMediaState(false)
        }
    })

    return mediaState
}
