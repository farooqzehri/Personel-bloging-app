import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <Link to={'/'}> home</Link>
    <Link to={'/dashboard'}> dashboard</Link>
    <Link to={'/profile'}> profile</Link>
    <Link to={'/profile:id'}> user</Link>
    <Link to={'/login'}> login</Link>
    <Link to={'/register'}> register</Link>


    </>
  )
}

export default Navbar