import React, { useContext } from "react"
import FinancesTransaction from "./FinancesTransaction"
import Divider from "@mui/material/Divider"
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import { TransactionsContext } from "./contexts/TransactionsContext"

export default function FinancesHistory(props) {
	const transactions = useContext(TransactionsContext)
	return (
		<Box>
			<h1>History</h1>
			<Divider></Divider>
			<Stack spacing={2}>
				{transactions.map((transaction) => (
					<FinancesTransaction
						key={transaction.id}
						transaction={transaction}
						categories={props.categories}
					/>
				))}
			</Stack>
		</Box>
	)
}
