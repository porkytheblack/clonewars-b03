import { useMediaQuery } from "@chakra-ui/react"


export const get_screen_size = (): {isBase: boolean, isSmall: boolean, isMedium: boolean, isLarge: boolean, isXl: boolean, is2Xl: boolean} => {

    const [isBase, isSmall, isMedium, isLarge, isXl, is2Xl] = useMediaQuery([
        "(max-width: 319px)",
        "(max-width: 411px)",
        "(max-width: 719px)",
        "(max-width: 1024px)",
        "(max-width: 1200px)",
        "(max-width: 1536px)"
    ])

    return {
        isBase,
        isSmall,
        isMedium,
        isLarge,
        isXl,
        is2Xl
    }


}