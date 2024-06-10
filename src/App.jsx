import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {

  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  )
}

export default App
