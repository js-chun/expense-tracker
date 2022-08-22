//for now with default transactions
import { v4 as uuidv4 } from "uuid"

export const defaultTransactions = [
	{
		amount: 1000.0,
		desc: "For Rent",
		date: "2022-08-05",
		type: "income",
		category: "Others",
		id: uuidv4(),
	},
	{
		amount: 1762.84,
		desc: "Work",
		date: "2022-08-13",
		type: "income",
		category: "Paycheck",
		id: uuidv4(),
	},
	{
		amount: 1762.84,
		desc: "Work",
		date: "2022-08-27",
		type: "income",
		category: "Paycheck",
		id: uuidv4(),
	},
	{
		amount: 2150.0,
		desc: "Rent",
		date: "2022-08-01",
		type: "expenses",
		category: "Housing",
		id: uuidv4(),
	},
	{
		amount: 320.0,
		desc: "NSLSC",
		date: "2022-08-02",
		type: "expenses",
		category: "Others",
		id: uuidv4(),
	},
	{
		amount: 75.0,
		desc: "Phone",
		date: "2022-08-04",
		type: "expenses",
		category: "Utilities",
		id: uuidv4(),
	},
	{
		amount: 29.35,
		desc: "Black Bean Noodles",
		date: "2022-08-22",
		type: "expenses",
		category: "Food",
		id: uuidv4(),
	},
	{
		amount: 28.03,
		desc: "H-Mart",
		date: "2022-08-13",
		type: "expenses",
		category: "Food",
		id: uuidv4(),
	},
	{
		amount: 18.63,
		desc: "Netflix",
		date: "2022-08-03",
		type: "expenses",
		category: "Entertainment",
		id: uuidv4(),
	},
	{
		amount: 23.67,
		desc: "Chicken",
		date: "2022-08-07",
		type: "expenses",
		category: "Food",
		id: uuidv4(),
	},
	{
		amount: 20.43,
		desc: "McDonalds",
		date: "2022-08-10",
		type: "expenses",
		category: "Food",
		id: uuidv4(),
	},
	{
		amount: 38.4,
		desc: "Udemy Courses",
		date: "2022-08-22",
		type: "expenses",
		category: "Personal",
		id: uuidv4(),
	},
	{
		amount: 14.68,
		desc: "Spotify",
		date: "2022-08-15",
		type: "expenses",
		category: "Entertainment",
		id: uuidv4(),
	},
	{
		amount: 20.0,
		desc: "McDonalds",
		date: "2022-07-10",
		type: "expenses",
		category: "Food",
		id: uuidv4(),
	},
	{
		amount: 20.1,
		desc: "SkipTheDishes",
		date: "2022-07-22",
		type: "expenses",
		category: "Personal",
		id: uuidv4(),
	},
	{
		amount: 1500.0,
		desc: "Income",
		date: "2022-07-04",
		type: "income",
		category: "Paycheck",
		id: uuidv4(),
	},
]
