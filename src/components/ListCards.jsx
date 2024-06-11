import React, { useEffect } from 'react'
import '../assets/css/style.css'
import heart from '../assets/images/heart.svg'
import maps from '../assets/images/maps.png'
import { useDispatch, useSelector } from 'react-redux'
import { fetchListing } from '../redux/listing'

const ListCards = ({data}) => {
  
  
    
    return (
        <div className='row listing-content' >
            {data?.map((obj,i)=>{
                const backgroundStyle = {
                    backgroundImage: `url(${obj?.featured_image})`,
                
                  };
                return(

            <div className='row col-sm-12 col-md-6 col-lg-4 card-boby'>
                <div className='row col-lg-12 list-card' style={backgroundStyle}>

                <div className="row col-9">
                    <div className="col-8">
                        <h4>{obj?.title}</h4>
                        <p>{obj?.zone}</p>
                    </div>
                    <div className="col-4">
                        <div className='heart'>

                            <img src={heart} alt="" style={{ height: '30px' }} />
                        </div>
                    </div>
                    <div className='row left-bottom-section'>
                        <div className="col-9 d-block p-0">
                            <div>

                                <img src={obj?.map_icon} alt="" className="img-fluid mb-1" style={{width:'25px'}} /> Distance 15Km
                            </div>
                            <div>

                                <img src={obj?.timer} alt="" className="img-fluid mb-1" style={{width:'25px'}} /> Top dive time {obj?.top_divetime_min}-{obj?.top_divetime_max} Mn
                            </div>

                        </div>
                        <div className="col-3 d-block rating-border m-0">
                            <div>

                                <img src={obj?.star} alt="" className="star-image" style={{width:'20px'}}/> {obj?.avg_rating}
                            </div>
                            <div>


                                Rating
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3 d-block card-measures text-center">
                    <img src={obj?.depth_img} alt="" className="img-fluid mb-1" />
                    <p>{obj?.depth_min}-{obj?.depth_max} M</p>
                    <img src={obj?.temperature_img} alt=""  className="img-fluid mb-1" />
                    
                    <p>{obj?.water_temp_min}-{obj?.water_temp_max}&deg;C</p>
                    <img src={obj?.visibilty_img} alt="" className="img-fluid mb-1" />
                    <p>{obj?.visibility_min}-{obj?.visibility_max}M</p>
                    <img src={obj?.current_img} alt="" className="img-fluid mb-1" />
                    <p style={{textTransform:'uppercase'}}>{obj?.current}</p>
                </div>
                </div>
            </div>
            )})}
        </div>
    )
}

export default ListCards
