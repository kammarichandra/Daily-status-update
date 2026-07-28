import React from 'react'
import Product from './Product'
import ReactFegment from './ReactFegment'
import Student from './Student'
import WithoutFragment from './WithoutFragment'
import Header from './MultipuleComponents/Header'
import Footer from './MultipuleComponents/Footer'

function ReactHome() {
  return (
    <div>
        <Product/>
        <ReactFegment/>
        <Student/>
        <WithoutFragment/>
        <hr />
        <Header/>
        <h1>welcome !</h1>
        <Footer/>

    </div>
  )
}

export default ReactHome;