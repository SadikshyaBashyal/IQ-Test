import './App.css'
import Navbar from './components/Navbar'
import Landing from './Pages/Landing'
import Contact from './Pages/Contact'
import LogicalReasoning from './Pages/LogicalReasoning'
import VerbalReasoning from './Pages/VerbalReasoning'
import SpatialReasoning from './Pages/SpatialReasoning'
import Memory from './Pages/Memory'
import Text from './Pages/Text'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path = "/verbal-reasoning" element={<VerbalReasoning />} />
        <Route path = "/logical-reasoning" element={<LogicalReasoning />} />
        <Route path = "/memory" element={<Memory />} />
        <Route path = "/spatial-reasoning" element={<SpatialReasoning />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/test" element={<Text />} />
      </Routes>
    </Router>
  )
}

export default App
