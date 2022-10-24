import React from 'react'
import '../SCSS/Footer.scss'
import NavBar from './NavBar'

const Footer = () => {
  return (
    <footer className='Footer'>
        <a href="https://www.instagram.com/"><img  src="/instagram_logo_2016.svg.png" alt="" /></a>
        <a href="https://www.facebook.com/"><img  src="/logo face.jpg" alt="" /></a>
        <a href="https://www.whatsapp.com/"><img  src="/logow.png" alt="" /></a>
        <NavBar/>
    </footer>
    
  )
}

export default Footer