import React, { useContext, useState } from "react"
import TextField from "@mui/material/TextField"
import Box from "@mui/material/Box"
import Chip from "@mui/material/Chip"
import Grid from "@mui/material/Unstable_Grid2"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
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
	const [catInput, setCatInput] = useState(transaction.category)
	const [anchorEl, setAnchorEl] = React.useState(null)
	const open = Boolean(anchorEl)

	const backgroundColor = typeInput === "expenses" ? "#ef476f" : "#06d6a0"

	const handleSubmit = () => {
		if (
			typeInput !== transaction.type ||
			+amountInput !== +transaction.amount ||
			descInput !== transaction.desc ||
			catInput !== transaction.category
		) {
			dispatch({
				type: "UPD",
				id: transaction.id,
				transaction: {
					type: typeInput,
					desc: descInput,
					amount: amountInput,
					category: catInput,
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
		setCatInput("Others")
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

	const handleCatOpen = (evt) => {
		setAnchorEl(evt.currentTarget)
	}
	const handleCatClose = (evt) => {
		if (evt.target.innerText) {
			setCatInput(evt.target.innerText)
		}
		setAnchorEl(null)
	}

	return (
		<form onSubmit={handleSubmit}>
			<Box sx={{ display: "flex" }}>
				<Grid container p={0} spacing={0} sx={{ width: "80%" }}>
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
				<Chip
					label={catInput}
					sx={{ width: "20%", backgroundColor: { backgroundColor } }}
					onClick={handleCatOpen}
					id="category-button"
					aria-controls={open ? "category-menu" : undefined}
					aria-expanded={open ? "true" : undefined}
					aria-haspopup="true"
				/>
				<Menu
					id="category-menu"
					anchorEl={anchorEl}
					open={open}
					onClose={handleCatClose}
					MenuListProps={{
						"aria-labelledby": "category-button",
					}}>
					{props.categories[typeInput].map((category) => (
						<MenuItem value={category} onClick={handleCatClose}>
							{category}
						</MenuItem>
					))}
				</Menu>
			</Box>
		</form>
	)
}
