import './App.css'
import Navbar from './components/Navbar'
import Landing from './Pages/Landing'
import CreateTest from './Pages/CreateTest'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  )
}

export default App
