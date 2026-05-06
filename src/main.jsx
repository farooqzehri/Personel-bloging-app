import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import Singleuser from './pages/Singleuser'
import Navbar from './components/Navbar'

createRoot(document.getElementById('root')).render(
<BrowserRouter>
<Navbar/>
<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login/>} />
    <Route path='/register' element={<Register/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/profile' element={<Profile/>}/>
    <Route path='/singleuser' element={<Singleuser/>}/>
</Routes>
</BrowserRouter>
)
