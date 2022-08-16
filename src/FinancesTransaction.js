import React from "react"
import Paper from "@mui/material/Paper"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Unstable_Grid2"
import IconButton from "@mui/material/IconButton"
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"
import { styled } from "@mui/material/styles"

const Item = styled("div")(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	display: "flex",
	justifyContent: "start",
	alignItems: "center",
	color: theme.palette.text.secondary,
	height: "100%",
}))

// expenses #ffadad
// incomes #caffbf

export default function FinancesTransaction(props) {
	const { transaction } = props
	const backgroundColor =
		transaction.type === "expenses" ? "#ffadad" : "#caffbf"
	return (
		<Paper elevation={2}>
			<Grid container p={0} spacing={0} sx={{ width: "100%" }}>
				<Grid lg={1}>
					{" "}
					<Box
						sx={{
							height: "100%",
							width: "30px",
							backgroundColor: { backgroundColor },
						}}></Box>
				</Grid>
				<Grid lg={7}>
					<Item>
						{transaction.desc.length <= 35
							? transaction.desc
							: `${transaction.desc.substr(0, 35)}...`}
					</Item>
				</Grid>
				<Grid lg={2}>
					{/* Need to get .00 cents in */}
					<Item sx={{ justifyContent: "end" }}>${transaction.amount}</Item>
				</Grid>
				<Grid lg={2}>
					<Item>
						<IconButton size="small">
							<EditIcon />
						</IconButton>
						<IconButton size="small">
							<DeleteIcon />
						</IconButton>
					</Item>
				</Grid>
			</Grid>
		</Paper>
	)
}
