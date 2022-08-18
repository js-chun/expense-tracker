import { createTheme } from "@mui/material/styles"
import React, { createContext, useState, useMemo } from "react"

export const ColorContext = createContext()

export function ColorProvider(props) {
	const [isDarkMode, setIsDarkMode] = useState(false)

	const handleToggle = () => {
		setIsDarkMode(!isDarkMode)
	}

	const theme = useMemo(
		() =>
			createTheme({
				palette: {
					mode: isDarkMode ? "dark" : "light",
				},
			}),
		[isDarkMode]
	)

	return (
		<ColorContext.Provider value={{ isDarkMode, theme, handleToggle }}>
			{props.children}
		</ColorContext.Provider>
	)
}
