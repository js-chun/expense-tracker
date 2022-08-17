import React from "react"
import Paper from "@mui/material/Paper"
import Stack from "@mui/material/Stack"
import Divider from "@mui/material/Divider"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { styled } from "@mui/material/styles"

const Item = styled(Paper)(({ theme, stripecolor }) => ({
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

export default function FinancesDashboard(props) {
	const { transactions } = props

	const sumIncome = transactions
		.map((transaction) =>
			transaction.type === "income" ? +transaction.amount : 0
		)
		.reduce((prevValue, currValue) => prevValue + currValue, 0)

	const sumExpenses = transactions
		.map((transaction) =>
			transaction.type === "expenses" ? +transaction.amount : 0
		)
		.reduce((prevValue, currValue) => prevValue + currValue, 0)

	const total = sumIncome - sumExpenses

	return (
		<Box>
			<h2>August 2022</h2>
			<Stack
				direction="row"
				justifyContent="center"
				divider={<Divider orientation="vertical" flexItem />}
				spacing={2}>
				<Item stripecolor="#06d6a0">
					<Typography variant="h6">Income</Typography>
					<Typography variant="h5">${sumIncome.toFixed(2)}</Typography>
				</Item>
				<Item stripecolor="#ef476f">
					<Typography variant="h6">Expenses</Typography>
					<Typography variant="h5">${sumExpenses.toFixed(2)}</Typography>
				</Item>
				<Item stripecolor="#118ab2">
					<Typography variant="h6">Total</Typography>
					<Typography variant="h5">${total.toFixed(2)}</Typography>
				</Item>
			</Stack>
		</Box>
	)
}
