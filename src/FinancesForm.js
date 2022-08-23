import React, { useState, useContext } from "react"
import { getDateString, getDateInTimezone } from "./utils/FormHelper"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import ToggleButton from "@mui/material/ToggleButton"
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup"
import TextField from "@mui/material/TextField"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import InputLabel from "@mui/material/InputLabel"
import Snackbar from "@mui/material/Snackbar"
import Slide from "@mui/material/Slide"
import MuiAlert from "@mui/material/Alert"
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn"
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined"
import TodayOutlinedIcon from "@mui/icons-material/TodayOutlined"
import AddOutlinedIcon from "@mui/icons-material/AddOutlined"
import ViewListIcon from "@mui/icons-material/ViewList"

import { DispatchContext } from "./contexts/TransactionsContext"

const Alert = React.forwardRef(function Alert(props, ref) {
	return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

function TransitionDown(props) {
	return <Slide {...props} direction="down" />
}

export default function FinancesForm(props) {
	const dispatch = useContext(DispatchContext)
	const [financeType, setFinanceType] = useState("expenses")
	const [transaction, setTransaction] = useState({
		dollars: "",
		cents: "",
		desc: "",
		category: "",
		date: getDateString(),
	})
	const [alertOpen, setAlertOpen] = useState(false)

	const handleTypeChange = (event, newType) => {
		if (financeType !== event.target.value) setFinanceType(newType)
	}

	//popover component when invalid value
	const handleDollarChange = (evt) => {
		if (
			/^[1-9]\d*$/.test(evt.target.value) ||
			evt.target.value === "0" ||
			evt.target.value === ""
		) {
			setTransaction({ ...transaction, dollars: evt.target.value })
		} else {
			return
		}
	}

	const handleCentChange = (evt) => {
		if (
			/^\d\d{0,1}$/.test(evt.target.value) ||
			evt.target.value === "00" ||
			evt.target.value === ""
		) {
			setTransaction({ ...transaction, cents: evt.target.value.substr(0, 2) })
		}
	}

	const handleDescChange = (evt) => {
		setTransaction({ ...transaction, desc: evt.target.value })
	}

	const handleDateChange = (evt) => {
		if (getDateInTimezone(new Date(evt.target.value)) <= new Date()) {
			setTransaction({ ...transaction, date: evt.target.value })
		}
	}

	const handleCategoryChange = (evt) => {
		setTransaction({ ...transaction, category: evt.target.value })
	}

	const handleSubmit = (evt) => {
		evt.preventDefault()
		let amount = +transaction.dollars + transaction.cents / 100
		dispatch({
			type: "ADD",
			transaction: {
				amount,
				desc: transaction.desc,
				date: transaction.date,
				type: financeType,
				category: transaction.category,
			},
		})
		setTransaction({ dollars: "", cents: "", desc: "", date: getDateString() })
		setAlertOpen(true)
	}

	const handleAlertClose = () => {
		setAlertOpen(false)
	}

	return (
		<Box p={5}>
			<h2>Add a Transaction</h2>
			<form onSubmit={handleSubmit}>
				<ToggleButtonGroup
					color="primary"
					value={financeType}
					exclusive
					onChange={handleTypeChange}>
					<ToggleButton value="income">Income</ToggleButton>
					<ToggleButton value="expenses">Expenses</ToggleButton>
				</ToggleButtonGroup>
				<Box my={3} sx={{ display: "flex", alignItems: "flex-end" }}>
					<CreateOutlinedIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
					<TextField
						fullWidth
						value={transaction.desc}
						onChange={handleDescChange}
						label="Description"
						variant="standard"
						InputLabelProps={{
							shrink: true,
						}}
					/>
				</Box>
				<Box mb={3} sx={{ display: "flex", alignItems: "flex-end" }}>
					<MonetizationOnIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
					<TextField
						fullWidth
						value={transaction.dollars === 0 ? "" : transaction.dollars}
						onChange={handleDollarChange}
						label="Amount"
						type="number"
						inputProps={{ step: "1" }}
						variant="standard"
						InputLabelProps={{
							shrink: true,
						}}
					/>
					.
					<TextField
						value={transaction.cents}
						onChange={handleCentChange}
						type="number"
						inputProps={{ min: "00", max: "99", step: "1" }}
						placeholder="00"
						variant="standard"
					/>
				</Box>
				<Box mb={3} sx={{ display: "flex", alignItems: "flex-end" }}>
					<TodayOutlinedIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
					<TextField
						fullWidth
						value={transaction.date}
						onChange={handleDateChange}
						variant="standard"
						type="date"
						label="Date"
						InputLabelProps={{
							shrink: true,
						}}
					/>
				</Box>
				<Box mb={3} sx={{ display: "flex", alignItems: "flex-end" }}>
					<ViewListIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
					<FormControl variant="standard" fullWidth>
						<InputLabel id="category-label">Category</InputLabel>
						<Select
							labelId="category-label"
							value={transaction.category}
							onChange={handleCategoryChange}
							label="Category">
							{props.categories[financeType].map((category) => (
								<MenuItem value={category}>{category}</MenuItem>
							))}
						</Select>
					</FormControl>
				</Box>
				<Button
					size="large"
					variant="contained"
					fullWidth
					type="submit"
					endIcon={<AddOutlinedIcon onSubmit={handleSubmit} />}>
					Add Transaction
				</Button>
			</form>
			<Snackbar
				open={alertOpen}
				autoHideDuration={1000}
				onClose={handleAlertClose}
				TransitionComponent={TransitionDown}
				anchorOrigin={{ vertical: "top", horizontal: "center" }}>
				<Alert
					onClose={handleAlertClose}
					severity="success"
					sx={{ width: "100%" }}>
					Transaction successfully added!
				</Alert>
			</Snackbar>
		</Box>
	)
}
