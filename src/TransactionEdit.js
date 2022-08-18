import React, { useContext, useState } from "react"
import TextField from "@mui/material/TextField"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Unstable_Grid2"
import IconButton from "@mui/material/IconButton"
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle"
import SaveIcon from "@mui/icons-material/Save"
import CancelIcon from "@mui/icons-material/Cancel"

import { Item } from "./styles/TransactionItemStyles"
import { DispatchContext } from "./contexts/TransactionsContext"

export default function TransactionEdit(props) {
	const dispatch = useContext(DispatchContext)
	const { transaction, handleEditOff } = props
	const [typeInput, setTypeInput] = useState(transaction.type)
	const [descInput, setDescInput] = useState(transaction.desc)
	const [amountInput, setAmountInput] = useState(transaction.amount)
	const backgroundColor = typeInput === "expenses" ? "#ef476f" : "#06d6a0"

	const handleSubmit = () => {
		if (
			typeInput !== transaction.type ||
			+amountInput !== +transaction.amount ||
			descInput !== transaction.desc
		) {
			dispatch({
				type: "UPD",
				id: transaction.id,
				transaction: {
					type: typeInput,
					desc: descInput,
					amount: amountInput,
				},
			})
		} else {
			console.log("is same")
		}
		handleEditOff()
	}

	const handleTypeChange = () => {
		if (typeInput === "expenses") setTypeInput("income")
		else setTypeInput("expenses")
	}

	const handleDescChange = (evt) => {
		setDescInput(evt.target.value)
	}

	const handleAmountChange = (evt) => {
		if (
			/^\d*((\.)\d{0,2})?$/.test(evt.target.value) ||
			evt.target.value === ""
		) {
			setAmountInput(evt.target.value)
		}
	}

	const handleCancel = () => {
		handleEditOff()
	}

	return (
		<form onSubmit={handleSubmit}>
			<Grid container p={0} spacing={0} sx={{ width: "100%" }}>
				<Grid xs={1}>
					<Box
						sx={{
							height: "100%",
							width: "30px",
							backgroundColor: { backgroundColor },
						}}>
						<IconButton size="small" onClick={handleTypeChange}>
							<ChangeCircleIcon />
						</IconButton>
					</Box>
				</Grid>
				<Grid xs={7}>
					<TextField
						size="small"
						variant="standard"
						value={descInput}
						onChange={handleDescChange}
						sx={{ width: "100%" }}></TextField>
				</Grid>
				<Grid xs={2}>
					<Item sx={{ justifyContent: "space-between" }}>
						${" "}
						<TextField
							size="small"
							variant="standard"
							value={amountInput}
							onChange={handleAmountChange}
							InputProps={{
								sx: { "& input": { textAlign: "end" } },
							}}></TextField>
					</Item>
				</Grid>
				<Grid xs={2}>
					<Item sx={{ justifyContent: "end" }}>
						<IconButton size="small" type="submit">
							<SaveIcon />
						</IconButton>
						<IconButton size="small" onClick={handleCancel}>
							<CancelIcon />
						</IconButton>
					</Item>
				</Grid>
			</Grid>
		</form>
	)
}
