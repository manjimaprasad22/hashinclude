import React, { useEffect, useState } from 'react'
import filtr from '../assets/images/filtr.png'
import view from '../assets/images/view.png'
import '../assets/css/style.css'
import ListCards from './ListCards'
import { useDispatch, useSelector } from 'react-redux'
import { fetchListing } from '../redux/listing'
import Loader from './Loader'


const Homelist = () => {
  const dispatch = useDispatch()
  const [all, setall] = useState(false)
  const [fil, setfil] = useState(false)
  const [load, setload] = useState()
  const [filName, setfilName] = useState('all')
  useEffect(() => {
    dispatch(fetchListing())
  }, [])
  
  const { divelist, loading } = useSelector((state) => state.divelist);
  const data = divelist?.slice(0, 6);
   

    const handleviewall=()=>{
      setall(!all)
      if(!all){
         setload(true)
      setTimeout(() => {
        setload(false);
      }, 1000);
      }
     
    }
 
  return (
    <div>
      <Loader loading={load || loading} />
      <div className="row mt-4">
        <div className="col-lg-10 d-flex">
            <img src={filtr} alt="" style={{height:'38px'}} onClick={()=>setfil(!fil)}/>
            {fil&&
            <>
            <div className={filName === 'all' ? 'filter-items-active' : 'filter-items'}   name='all' onClick={(e) => setfilName(e.currentTarget.getAttribute('name'))} >ALL</div>
            <div className={filName === 'neom' ? 'filter-items-active' : 'filter-items'} name='neom' onClick={(e) => setfilName(e.currentTarget.getAttribute('name'))}>NEOM</div>
            <div className={filName === 'amaala' ? 'filter-items-active' : 'filter-items'} name='amaala' onClick={(e) => setfilName(e.currentTarget.getAttribute('name'))}>AMAALA</div>
            <div className={filName === 'tdrsc' ? 'filter-items-active' : 'filter-items'} name='tdrsc' onClick={(e) => setfilName(e.currentTarget.getAttribute('name'))}>TDRSC</div>
            <div className={filName === 'makkah' ? 'filter-items-active' : 'filter-items'} name='makkah' onClick={(e) => setfilName(e.currentTarget.getAttribute('name'))}>MAKKAH</div>
            <div className={filName === 'umlajj' ? 'filter-items-active' : 'filter-items'} name='umlajj' onClick={(e) => setfilName(e.currentTarget.getAttribute('name'))}>UMLAJJ</div>
            <div className={filName === 'madina' ? 'filter-items-active' : 'filter-items'} name='madina' onClick={(e) => setfilName(e.currentTarget.getAttribute('name'))}>AL MADINAH</div>
            <div className={filName === 'asir' ? 'filter-items-active' : 'filter-items'} name='asir' onClick={(e) => setfilName(e.currentTarget.getAttribute('name'))}>ASIR</div>
            <div className={filName === 'jazan' ? 'filter-items-active' : 'filter-items'} name='jazan' onClick={(e) => setfilName(e.currentTarget.getAttribute('name'))}>JAZAN</div>
            </>
            }
        </div>
        <div className="col-lg-2 view-all" onClick={handleviewall}>
          {all? <div >View less 
            <img src={view} alt="" style={{rotate:"270deg"}} />
          </div>
          :
           <> View all
            <img src={view} alt="" /></>
          }
        </div>
      </div>
      <ListCards data={all? divelist : data}/>
    </div>
  )
}

export default Homelist
