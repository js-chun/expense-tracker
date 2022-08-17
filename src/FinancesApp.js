import { useState } from "react"
import FinancesForm from "./FinancesForm"
import FinancesDashboard from "./FinancesDashboard"
import FinancesHistory from "./FinancesHistory"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import Button from "@mui/material/Button"

//for now with default transactions
import { v4 as uuidv4 } from "uuid"

const defaultTransactions = [
	{
		amount: 30.0,
		desc: "Chicken",
		date: "2022-08-15",
		type: "expenses",
		id: uuidv4(),
	},
	{
		amount: 1000.32,
		desc: "Moneys",
		date: "2022-08-15",
		type: "income",
		id: uuidv4(),
	},
]

export default function FinancesApp() {
	const [open, setOpen] = useState(false)
	const [transactions, setTransactions] = useState(defaultTransactions)

	const toggleDrawer = (isOpen) => (event) => {
		if (
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return
		}
		setOpen(isOpen)
	}

	const addTransaction = (transactionData) => {
		const updatedTransactions = [...transactions]
		updatedTransactions.push(transactionData)
		setTransactions(updatedTransactions)
	}

	const deleteTransaction = (transactionId) => {
		const updatedTransactions = [...transactions].filter(
			(transaction) => transaction.id !== transactionId
		)
		setTransactions(updatedTransactions)
	}

	return (
		<Container maxWidth="sm">
			<h1>Finance Tracker</h1>
			<FinancesDashboard />
			<Button
				onClick={toggleDrawer(true)}
				variant="contained"
				sx={{ marginY: "1rem" }}>
				Add Transactions
			</Button>
			<Drawer open={open} onClose={toggleDrawer(false)}>
				<Box sx={{ width: 400 }} role="presentation">
					<FinancesForm addTransaction={addTransaction} />
				</Box>
			</Drawer>
			<FinancesHistory
				transactions={transactions}
				deleteTransaction={deleteTransaction}
			/>
		</Container>
	)
}
