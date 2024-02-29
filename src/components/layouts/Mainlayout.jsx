import React, { Children } from 'react'
import Navigation from '../navbar/Navigation'
import MyFooter from '../footer/MyFooter'

const Mainlayout = ({children}) => {
   

  return (
    <>
    <Navigation />
    {children}
    <MyFooter />
    </>
  )
}

export default Mainlayout