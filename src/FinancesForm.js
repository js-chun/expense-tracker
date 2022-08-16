import React, { useState } from "react"
import { getDateString, getDateInTimezone } from "./utils/FormHelper"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import ToggleButton from "@mui/material/ToggleButton"
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup"
import TextField from "@mui/material/TextField"
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn"
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined"
import TodayOutlinedIcon from "@mui/icons-material/TodayOutlined"
import AddOutlinedIcon from "@mui/icons-material/AddOutlined"

export default function FinancesForm() {
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

	const handleDollarChange = (evt) => {
		if (
			/^[1-9]\d*$/.test(evt.target.value) ||
			evt.target.value === "0" ||
			evt.target.value === ""
		)
			setTransaction({ ...transaction, dollars: evt.target.value })
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

	return (
		<Box p={5}>
			<h2>Add a Transaction</h2>
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
					inputProps={{ min: 0, step: "1" }}
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
				endIcon={<AddOutlinedIcon />}>
				Add Transaction
			</Button>
		</Box>
	)
}
