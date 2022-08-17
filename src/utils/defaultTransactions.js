//for now with default transactions
import { v4 as uuidv4 } from "uuid"

export const defaultTransactions = [
	{
		amount: 30.0,
		desc: "Chicken",
		date: "2022-08-15",
		type: "expenses",
		id: uuidv4(),
	},
	{
		amount: 1000.32,
		desc: "PayTest",
		date: "2022-08-15",
		type: "income",
		id: uuidv4(),
	},
	{
		amount: 25.5,
		desc: "Cult of the Lamb",
		date: "2022-08-10",
		type: "expenses",
		id: uuidv4(),
	},
]
