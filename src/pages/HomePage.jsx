import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import NavBar from './NavBar'
import { FaWhatsapp } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import { IoIosCall } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
var componets = [
  {
    boxname:"Trip Details",
    path:"/trip"
  },
  {
    boxname:"Other Expenses",
    path:"/expense"
  },
  {
    boxname:"Diesal Bill",
    path:"/diseal"
  },
  {
    boxname:"Rto and PC",
    path:"/rto"
  }
  ,
  {
    boxname:"Smailage",
    path:"/smailage"
  },
  {
    boxname:"Calculate",
    path:"/final"
  }
]

const HomePage = () => {
  return (
    <>
    <NavBar/>
    <div className="home">
      <div className="home-page">
      {componets.map((path,index)=>(
        <Link className='boxComponets' key={index} to={path.path}>{path.boxname}</Link>
      ))}
      </div>
      <button className="viewBtn">View Sheet</button>
    </div>
    <footer>
      <p>Copyrights © 2025</p>
      <div className='Owner-Ship'>
        <p>For Contact : Varatharaj, Murugesan</p>
      </div>
      <div className='icons'>
          <div className="call"><a href="tel:+919003601919"><IoIosCall/></a></div>
          <div className="wsapp"><a href="https://wa.me/919003601919" target="_blank"><FaWhatsapp /></a></div>
          <div className="mail"><a href="mailto:mathiyarasu.m0607@gmail.com"><SiMinutemailer /></a></div>
          <div className="insta"><a href="https://www.instagram.com/0607_mathi/" target="_blank"><FaInstagram/></a></div>
      </div>
    </footer>
    </>
  )
}

export default HomePage