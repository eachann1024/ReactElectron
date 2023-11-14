import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import Home from './pages/home/home'
import AppHeader from './pages/appHeader'
import Settings from './pages/settings'

function App() {
	return (
		<Router>
			<AppHeader />
			{/*  <nav>
        <Link to="/">Home</Link>
        <Link to="/settings">Settings</Link>
      </nav> */}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/settings" element={<Settings />} />
			</Routes>
		</Router>
	)
}

export default App
