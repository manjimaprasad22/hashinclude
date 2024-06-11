import React from 'react'
import view from '../assets/images/view.png'
import plastic from '../assets/images/plastic.png'
import bluesea from '../assets/images/bluesea.png'
import dive from '../assets/images/dive.png'
import scuba from '../assets/images/scuba.png'
import courage from '../assets/images/courage.png'
import free from '../assets/images/free.png'

const Reads = () => {
    
  return (
    <div className="row mt-4">

      <div className="col-lg-10 d-flex">
      <h5>Reads</h5>
            
        </div>
        <div className="col-lg-2 view-all">
            View all 
            <img src={view} alt="" />
        </div>
        <div className="col-lg-5 d-block m">
            <div className='plastic  mb-2 '>
                <p className='div-title'>The Fight<br/> Against plastic</p>
            </div>
            <div className="row d-flex ">
            <div className='col-6 ' style={{paddingLeft:'0px'}}>
                <div className="bluesea">

                <p className='div-title'>My own...Deep<br/>Blue Sea</p>
                </div>
            </div>
            <div className='col-6 ' style={{paddingRight:'0px'}}>
                <div className="dive">

                <p className='div-title'>DiveMaster<br/>Rock</p>
                </div>
            </div>
            </div>
        </div>
        <div className="col-lg-4">
            <div className='scuba'>
            <p className='div-title'>SCUBA Diving...my <br/>Rebirth!</p>
            </div>

        </div>
        <div className="col-lg-3 d-block ">
            <div className="row ">
                
            <div className='free'>
            <p className='div-title'>Free diving. Did you<br/>know that</p>
            </div>
            </div>
            <div className="row p-1">

            <div className='courage'>
            <p className='div-title'>DiveMaster<br/>Rock</p>
            </div>
            </div>

        </div>
      
    </div>
  )
}

export default Reads
