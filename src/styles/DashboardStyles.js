import Paper from "@mui/material/Paper"
import { styled } from "@mui/material/styles"

export const Item = styled(Paper)(({ theme, stripecolor }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	padding: theme.spacing(1),
	position: "relative",
	textAlign: "center",
	color: theme.palette.text.secondary,
	width: "300px",
	height: "100px",
	overflow: "hidden",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	["&::before"]: {
		content: '""',
		position: "absolute",
		width: "30px",
		height: "100%",
		left: "0",
		top: "-50%",
		backgroundColor: stripecolor,
		transform: "rotate(45deg)",
	},
}))
