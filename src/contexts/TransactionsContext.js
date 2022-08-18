import React, { useReducer, createContext } from "react"
import { v4 as uuidv4 } from "uuid"
import { defaultTransactions } from "../utils/defaultTransactions"

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
	return (
		<TransactionsContext.Provider value={transactions}>
			<DispatchContext.Provider value={dispatch}>
				{props.children}
			</DispatchContext.Provider>
		</TransactionsContext.Provider>
	)
}
