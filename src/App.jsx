import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import PokemonDetails from './pages/PokemonDetails'
import About from './pages/About'
const url = import.meta.env.VITE_URL

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home url={url} />} />
          <Route path="/pokemon/:id" element={<PokemonDetails url={url} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
