import { useState, useContext } from "react"
import FinancesForm from "./FinancesForm"
import FinancesDashboard from "./FinancesDashboard"
import FinancesHistory from "./FinancesHistory"
import { MUIColorSwitch } from "./styles/MUIColorSwitch"
import { ThemeProvider } from "@mui/material/styles"
import { ColorContext } from "./contexts/ColorContext"
import TransactionsProvider from "./contexts/TransactionsContext"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"

const categories = {
	expenses: [
		"Housing",
		"Transportation",
		"Food",
		"Utilities",
		"Personal",
		"Entertainment",
		"Others",
	],
	income: ["Paycheck", "Investment", "Others"],
}

export default function FinancesApp() {
	const [open, setOpen] = useState(false)
	const colorMode = useContext(ColorContext)

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
		<ThemeProvider theme={colorMode.theme}>
			<CssBaseline />
			<Container maxWidth="sm">
				<h1>Finance Tracker</h1>
				<MUIColorSwitch
					checked={colorMode.isDarkMode}
					onChange={colorMode.handleToggle}
				/>
				<TransactionsProvider>
					<FinancesDashboard />
					<Button
						onClick={toggleDrawer(true)}
						variant="contained"
						sx={{ marginY: "1rem" }}>
						Add Transactions
					</Button>
					<Drawer open={open} onClose={toggleDrawer(false)}>
						<Box sx={{ width: 400 }} role="presentation">
							<FinancesForm categories={categories} />
						</Box>
					</Drawer>
					<FinancesHistory />
				</TransactionsProvider>
			</Container>
		</ThemeProvider>
	)
}
