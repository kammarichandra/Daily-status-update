import React from 'react'
import  Header from '../../Components/Functional Components_05-10-2026/Header';
import  Welcome from '../../Components/Functional Components_05-10-2026/Welcome'
import  Footer from '../../Components/Functional Components_05-10-2026/Footer'
import Callingfunction from '../../Components/Calling Function_05-10-2026/Callingfunction';
import Expression from '../../Components/Js Expressions_05-10-2026/Expression';
function FunctionalPage() {
  return (
    <div>
        <Header/>
        <br />
        <Welcome/>
        <br />
        <Footer/>
        <br />
        <Callingfunction/>
        <br />
        <Expression/>
    </div>
  )
}

export default FunctionalPage