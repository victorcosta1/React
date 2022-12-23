import { Link, Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/NavBar'

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default App
