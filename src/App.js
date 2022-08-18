import "./App.css"
import FinancesApp from "./FinancesApp"
import { ColorProvider } from "./contexts/ColorContext"

function App() {
	return (
		<div className="App">
			<ColorProvider>
				<FinancesApp />
			</ColorProvider>
		</div>
	)
}

export default App
