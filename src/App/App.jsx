import { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'

// Components
import Login from '../pages/Auth/Login'
import Signup from '../pages/Auth/Signup'
import Header from '../components/Header/Header'

// Image Assets
import CoolCat from '../assets/cool-cat.svg'
import NerdCat from '../assets/nerd-cat.svg'
import HappyCat from '../assets/happy-cat.svg'
import CatInBox from '../assets/cat-in-box.svg'
import TeaCupCat from '../assets/teacup-cat.svg'
import SkaterCat from '../assets/sk8r-boi-cat.svg'

// Services
import * as authService from '../services/authService'

const catImages = [
  SkaterCat, CoolCat,
  NerdCat, HappyCat,
  CatInBox, TeaCupCat,
]

function App() {
  const navigate = useNavigate()
  const [cats, setCats] = useState([])
  const [toys, setToys] = useState([])
  const [user, setUser] = useState(authService.getUser())

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  return (
    <>
      <Header user={user} handleLogout={handleLogout} />
      <main>
        <Routes>
          <Route path="/login" element={<Login user={user} setUser={setUser} />} />
          <Route path="/signup" element={<Signup user={user} setUser={setUser} />} />
        </Routes>
      </main>
    </>
  )
}

export default App