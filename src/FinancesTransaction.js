import React, { useState, useContext } from "react"
import { DispatchContext } from "./contexts/TransactionsContext"
import TransactionEdit from "./TransactionEdit"
import Paper from "@mui/material/Paper"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Unstable_Grid2"
import IconButton from "@mui/material/IconButton"
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"
import Tooltip from "@mui/material/Tooltip"
import Chip from "@mui/material/Chip"
import { Item } from "./styles/TransactionItemStyles"

export default function FinancesTransaction(props) {
	const dispatch = useContext(DispatchContext)
	const { transaction } = props
	const [edit, setEdit] = useState(false)
	const backgroundColor =
		transaction.type === "expenses" ? "#ef476f" : "#06d6a0"

	const handleDelete = () => {
		dispatch({ type: "DEL", id: transaction.id })
	}

	const handleEditOn = () => {
		setEdit(true)
	}

	const handleEditOff = () => {
		setEdit(false)
	}

	return (
		<Paper elevation={1}>
			{edit ? (
				<TransactionEdit
					transaction={transaction}
					handleEditOff={handleEditOff}
					categories={props.categories}
				/>
			) : (
				<Tooltip title={transaction.date} placement="left">
					<Box sx={{ display: "flex" }}>
						<Grid container p={0} spacing={0} sx={{ width: "80%" }}>
							<Grid xs={1}>
								<Box
									sx={{
										height: "100%",
										width: "30px",
										backgroundColor: { backgroundColor },
									}}></Box>
							</Grid>
							<Grid xs={7}>
								<Item>
									{transaction.desc.length <= 35
										? transaction.desc
										: `${transaction.desc.substr(0, 25)}...`}
								</Item>
							</Grid>
							<Grid xs={2}>
								<Item sx={{ justifyContent: "space-between" }}>
									$<Item>{(+transaction.amount).toFixed(2)}</Item>
								</Item>
							</Grid>
							<Grid xs={2}>
								<Item sx={{ justifyContent: "end" }}>
									<IconButton size="small" onClick={handleEditOn}>
										<EditIcon />
									</IconButton>
									<IconButton size="small" onClick={handleDelete}>
										<DeleteIcon />
									</IconButton>
								</Item>
							</Grid>
						</Grid>
						<Chip
							label={transaction.category}
							sx={{ width: "20%", backgroundColor: { backgroundColor } }}
						/>
					</Box>
				</Tooltip>
			)}
		</Paper>
	)
}
