import React from 'react'
import styled from 'styled-components'
import FeatureProduct from './components/FeatureProduct';
import HeroSection from './components/HeroSection';
import Service from './components/Service';
import Trusted from './components/Trusted';
const Home = () => {
  const data={
    name:"Apna Store"
  }
  return (
    
  <>
    <HeroSection mydata={data}/>
    <FeatureProduct/>
    <Service/>
    <Trusted/>
    
  </>
  )
}





export default Home