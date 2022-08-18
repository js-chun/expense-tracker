import React, { useContext } from "react"
import { Item } from "./styles/DashboardStyles"
import Stack from "@mui/material/Stack"
import Divider from "@mui/material/Divider"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

import { TransactionsContext } from "./contexts/TransactionsContext"

export default function FinancesDashboard() {
	const transactions = useContext(TransactionsContext)

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
					<Typography variant="h5">
						{total >= 0 ? `${total.toFixed(2)}` : `-$${(-total).toFixed(2)}`}
					</Typography>
				</Item>
			</Stack>
		</Box>
	)
}
