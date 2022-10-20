import React, {useState} from 'react'
import metapage5 from '../Assets/metapage5.jpg'
function CityBuilder() {
  return (
    <div className='city-builder'>
        <img src= {metapage5} className='citypic'/>
        <div className='glass-form'><h1>this is working</h1></div>
    </div>
  )
}

export default CityBuilder