import React from 'react'
 import styled from 'styled-components'

 import Navbar from "./Navbar"
 import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
   <MainHeader>
    
    <NavLink to="/">
      {/* <img className='logo' src="./images/logo.png" alt="mylogo" /> */}
      <div className='logo'>
        Apna Store
      </div>
    </NavLink>

    <Navbar/>


   </MainHeader>
  )
}


const MainHeader = styled.section`
 
  height: 8rem;
  padding: 0 4.8rem;
  
  background-color:${({theme})=>theme.colors.bg};
  display:flex;
  justify-content: space-between;
  align-items: center;

  z-index: 999;
  position: sticky;

  top: 0;
  left: 0;


  .logo{
    height:4rem;
    font-size: 40px;
    font-weight:600;
    margin-left: 20px;
  }

 
`

export default Header