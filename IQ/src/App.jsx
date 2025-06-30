import './App.css'
import Navbar from './components/Navbar'
import Landing from './Pages/Landing'
import CreateTest from './Pages/CreateTest'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ paddingTop: '80px' }}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/create-test" element={<CreateTest />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
