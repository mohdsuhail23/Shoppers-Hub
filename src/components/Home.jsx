import React from 'react'
import Card from './Card'
import Slider from './Slider'
import Footers from './Footers'


function Home() {
  return (
    <>
    <div>
     
    <Slider/>
    <h2 className=" my-5 mx-auto text-center ">Our Latest Products</h2>
      <Card></Card>
      <Footers/>
    </div>
    </>
  )
}

export default Home