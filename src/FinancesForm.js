import React, { useState } from "react"
import { getDateString, getDateInTimezone } from "./utils/FormHelper"
import { v4 as uuidv4 } from "uuid"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import ToggleButton from "@mui/material/ToggleButton"
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup"
import TextField from "@mui/material/TextField"
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn"
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined"
import TodayOutlinedIcon from "@mui/icons-material/TodayOutlined"
import AddOutlinedIcon from "@mui/icons-material/AddOutlined"

export default function FinancesForm(props) {
	const { addTransaction } = props
	const [financeType, setFinanceType] = useState("expenses")
	const [transaction, setTransaction] = useState({
		dollars: "",
		cents: "",
		desc: "",
		date: getDateString(),
	})

	const handleTypeChange = (event, newAlignment) => {
		setFinanceType(newAlignment)
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

	const handleSubmit = (evt) => {
		evt.preventDefault()
		let amount = +transaction.dollars + transaction.cents / 100
		console.log(amount)
		props.addTransaction({
			amount,
			desc: transaction.desc,
			date: transaction.date,
			type: financeType,
			id: uuidv4(),
		})
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
				<Button
					size="large"
					variant="contained"
					fullWidth
					type="submit"
					endIcon={<AddOutlinedIcon onSubmit={handleSubmit} />}>
					Add Transaction
				</Button>
			</form>
		</Box>
	)
}
