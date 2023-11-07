import './App.css'
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/home'
import Settings from './pages/settings'

function App() {
  return (

    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/settings">Settings</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>

  )
}

export default App
