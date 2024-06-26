import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Home from './components/Home'
// import JoinUs from './components/JoinUs'
import MainComponent from './components/MainComponent'
import JoinUs from './components/JoinUs'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainComponent />} />
        <Route path='/joinUs' element={<JoinUs />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
