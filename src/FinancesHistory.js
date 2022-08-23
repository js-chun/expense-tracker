import React, { useState, useContext } from "react"
import FinancesTransaction from "./FinancesTransaction"
import Divider from "@mui/material/Divider"
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import Pagination from "@mui/material/Pagination"
import { TransactionsContext } from "./contexts/TransactionsContext"

export default function FinancesHistory(props) {
	const { viewTransactions } = useContext(TransactionsContext)
	const [pageNum, setPageNum] = useState(1)
	const pages = Math.ceil(viewTransactions.length / 10)
	const handlePageChange = (evt, page) => {
		setPageNum(page)
	}
	return (
		<Box>
			<h1>History</h1>
			<Box
				my={2}
				sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
				<Pagination count={pages} shape="rounded" onChange={handlePageChange} />
			</Box>
			<Divider></Divider>
			<Stack spacing={2}>
				{viewTransactions
					.slice((pageNum - 1) * 10, (pageNum - 1) * 10 + 10)
					.map((transaction) => (
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
