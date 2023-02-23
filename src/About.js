import React from 'react'
import { useContext } from 'react'
import HeroSection from './components/HeroSection'
import { AppContext, useProduct } from './Context/Productcontext'


/// USECONNTEXT IS Hook
const About = () => {

  // const myname = useContext(AppContext) iski jagah custom hook use krege
  // const myname = useProduct();
    const data={
        name:"Apna  Ecommerce"
      }
  return (
    <>

     
      <HeroSection mydata={data}/>
   
    </>
  )
}

export default About