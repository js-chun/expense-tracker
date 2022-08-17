import { styled } from "@mui/material/styles"

export const Item = styled("div")(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	display: "flex",
	justifyContent: "start",
	alignItems: "center",
	color: theme.palette.text.secondary,
	height: "100%",
}))
