import React from "react"
import FinancesForm from "./FinancesForm"
import FinancesDashboard from "./FinancesDashboard"
import FinancesHistory from "./FinancesHistory"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import Button from "@mui/material/Button"

export default function FinancesApp() {
	const [open, setOpen] = React.useState(false)

	const toggleDrawer = (isOpen) => (event) => {
		if (
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return
		}
		setOpen(isOpen)
	}

	return (
		<Container maxWidth="sm">
			<h1>Finance Tracker</h1>
			<FinancesDashboard />
			<Button
				onClick={toggleDrawer(true)}
				variant="contained"
				sx={{ marginY: "1rem" }}>
				Add Transactions
			</Button>
			<Drawer open={open} onClose={toggleDrawer(false)}>
				<Box sx={{ width: 400 }} role="presentation">
					<FinancesForm />
				</Box>
			</Drawer>
			<FinancesHistory />
		</Container>
	)
}
