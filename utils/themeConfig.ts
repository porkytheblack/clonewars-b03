import {extendTheme, Theme, type ThemeConfig} from "@chakra-ui/react"
import {createBreakpoints, mode} from "@chakra-ui/theme-tools"

const breakpoints = createBreakpoints({
	sm: "320px",
	md: "768px",
	lg: "960px",
	xl: "1200px",
	'2xl': "1536px"
})

export const theme = extendTheme({
	initialColorMode: "dark",
	useSystemColorMode: false,
	colors: {
		transparent: "transparent",
		black: "#000",
		white: "#f4f4f4",
		blue: "#0a84ff"
	},
	breakpoints,
	fonts: {
		heading: `"BasierCircleBold", sans-serif`,
		body: `"BasierCircleRegular", sans-serif`
	},
	styles: {
		global: (props: any)=>({
			body: {
				bg: mode("black", "black")(props),
				overflowX: "hidden",
				overflowY: "scroll",
				
			}
		})
	}
})




