import React from 'react'
import Navbar from '../components/Navbar'
import Homelist from '../components/Homelist'
import ListCards from '../components/ListCards'
import Reads from '../components/Reads'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
    <div className='container'>
        
      <Homelist/>
      {/* <ListCards/> */}
      <Reads/>
    </div>
      <Footer/>
    </div>
  )
}

export default Home
