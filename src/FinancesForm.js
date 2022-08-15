import React from "react"
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
	const [financeType, setFinanceType] = React.useState("expenses")

	const handleChange = (event, newAlignment) => {
		setFinanceType(newAlignment)
	}

	return (
		<Box p={5}>
			<h2>Add a Transaction</h2>
			<ToggleButtonGroup
				color="primary"
				value={financeType}
				exclusive
				onChange={handleChange}>
				<ToggleButton value="income">Income</ToggleButton>
				<ToggleButton value="expenses">Expenses</ToggleButton>
			</ToggleButtonGroup>

			<Box my={3} sx={{ display: "flex", alignItems: "flex-end" }}>
				<MonetizationOnIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
				<TextField
					fullWidth
					label="Amount"
					variant="standard"
					InputLabelProps={{
						shrink: true,
					}}
				/>
			</Box>
			<Box mb={3} sx={{ display: "flex", alignItems: "flex-end" }}>
				<CreateOutlinedIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
				<TextField
					fullWidth
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
