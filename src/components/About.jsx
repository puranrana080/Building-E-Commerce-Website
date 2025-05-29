import React,{useContext} from 'react'
import Navbar from './Navbar'
import Cart from './Cart'
import AppContext from '../context/AppContext'

const About = () => {
  const {isCartClicked}  =useContext(AppContext)
  return (
    <><Navbar/>
     {isCartClicked && (<Cart/>)}
    
    <div className="container text-center" >
        <h1>About Page</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium nisi dolores harum. Cum vel, rerum molestias maxime illum, minima consequuntur nihil impedit beatae delectus aut quidem vero voluptate, nesciunt eveniet!</p>
    </div>
    </>
  )
}

export default About