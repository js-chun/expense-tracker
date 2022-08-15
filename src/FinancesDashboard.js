import React from "react"
import Paper from "@mui/material/Paper"
import Stack from "@mui/material/Stack"
import Divider from "@mui/material/Divider"
import Box from "@mui/material/Box"
import { styled } from "@mui/material/styles"

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: "center",
	color: theme.palette.text.secondary,
}))

export default function FinancesDashboard() {
	return (
		<Box>
			<h2>August 2022</h2>
			<Stack
				direction="row"
				justifyContent="center"
				divider={<Divider orientation="vertical" flexItem />}
				spacing={2}>
				<Item>Income</Item>
				<Item>Expense</Item>
				<Item>Total</Item>
			</Stack>
		</Box>
	)
}
