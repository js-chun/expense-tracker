import React, { useState, useReducer, createContext, useEffect } from "react"
import { v4 as uuidv4 } from "uuid"
import { defaultTransactions } from "../utils/defaultTransactions"
import { getDateInTimezone } from "../utils/FormHelper"
import { isSameMonth } from "../utils/dateHelper"

function transactionReducer(state, action) {
	switch (action.type) {
		case "ADD":
			return [...state, { id: uuidv4(), ...action.transaction }]
		case "UPD":
			return state.map((transaction) =>
				transaction.id === action.id
					? {
							...transaction,
							type: action.transaction.type,
							desc: action.transaction.desc,
							amount: action.transaction.amount,
							category: action.transaction.category,
					  }
					: transaction
			)
		case "DEL":
			return state.filter((transaction) => transaction.id !== action.id)
	}
}

export const TransactionsContext = createContext()
export const DispatchContext = createContext()

export default function TransactionsProvider(props) {
	const [transactions, dispatch] = useReducer(
		transactionReducer,
		defaultTransactions
	)
	const [date, setDate] = useState(new Date())

	const handleDatePrev = () => {
		setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1))
	}

	const handleDateNext = () => {
		setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1))
	}

	const [viewTransactions, setViewTransactions] = useState(
		transactions
			.filter((transaction) =>
				isSameMonth(getDateInTimezone(new Date(transaction.date)), date)
			)
			.sort((a, b) => new Date(a.date) - new Date(b.date))
	)

	useEffect(() => {
		setViewTransactions(
			transactions
				.filter((transaction) =>
					isSameMonth(getDateInTimezone(new Date(transaction.date)), date)
				)
				.sort((a, b) => new Date(a.date) - new Date(b.date))
		)
	}, [transactions, date])

	return (
		<TransactionsContext.Provider
			value={{ viewTransactions, date, handleDatePrev, handleDateNext }}>
			<DispatchContext.Provider value={dispatch}>
				{props.children}
			</DispatchContext.Provider>
		</TransactionsContext.Provider>
	)
}
