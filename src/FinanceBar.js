import React, { useContext } from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Tooltip from "@mui/material/Tooltip"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious"
import SkipNextIcon from "@mui/icons-material/SkipNext"
import TodayIcon from "@mui/icons-material/Today"
import { MUIColorSwitch } from "./styles/MUIColorSwitch"
import { ColorContext } from "./contexts/ColorContext"
import { TransactionsContext } from "./contexts/TransactionsContext"
import { months } from "./utils/dateHelper"

export default function FinanceBar(props) {
	const colorMode = useContext(ColorContext)
	const transCtx = useContext(TransactionsContext)
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<Tooltip
						title={`Change to ${colorMode.isDarkMode ? "Light" : "Dark"} Mode`}>
						<MUIColorSwitch
							checked={colorMode.isDarkMode}
							onChange={colorMode.handleToggle}
						/>
					</Tooltip>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						{months[transCtx.date.getMonth()]} {transCtx.date.getFullYear()}
					</Typography>
					<Tooltip title="Previous Month">
						<IconButton onClick={transCtx.handleDatePrev}>
							<SkipPreviousIcon />
						</IconButton>
					</Tooltip>
					<Tooltip title="Next Month">
						<IconButton onClick={transCtx.handleDateNext}>
							<SkipNextIcon />
						</IconButton>
					</Tooltip>
					<Tooltip title="This Month">
						<IconButton>
							<TodayIcon onClick={transCtx.handleDateToday} />
						</IconButton>
					</Tooltip>
				</Toolbar>
			</AppBar>
		</Box>
	)
}
