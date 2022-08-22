import React, { useContext } from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious"
import SkipNextIcon from "@mui/icons-material/SkipNext"
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth"
import { MUIColorSwitch } from "./styles/MUIColorSwitch"
import { ColorContext } from "./contexts/ColorContext"
import { TransactionsContext } from "./contexts/TransactionsContext"
import { months } from "./utils/dateHelper"
import TextField from "@mui/material/TextField"

export default function FinanceBar(props) {
	const colorMode = useContext(ColorContext)
	const transCtx = useContext(TransactionsContext)
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<MUIColorSwitch
						checked={colorMode.isDarkMode}
						onChange={colorMode.handleToggle}
					/>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						{months[transCtx.date.getMonth()]} {transCtx.date.getFullYear()}
					</Typography>
					<IconButton onClick={transCtx.handleDatePrev}>
						<SkipPreviousIcon />
					</IconButton>
					<IconButton onClick={transCtx.handleDateNext}>
						<SkipNextIcon />
					</IconButton>
					<IconButton>
						<CalendarMonthIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
		</Box>
	)
}
