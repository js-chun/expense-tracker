import React from "react"
import FinancesTransaction from "./FinancesTransaction"
import Divider from "@mui/material/Divider"
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"

export default function FinancesHistory(props) {
	const { transactions, deleteTransaction, updateTransaction } = props
	return (
		<Box>
			<h1>History</h1>
			<Divider></Divider>
			<Stack spacing={2}>
				{transactions.map((transaction) => (
					<FinancesTransaction
						key={transaction.id}
						transaction={transaction}
						deleteTransaction={deleteTransaction}
						updateTransaction={updateTransaction}
					/>
				))}
			</Stack>
		</Box>
	)
}
