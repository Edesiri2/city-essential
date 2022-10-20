import React, {useState}from 'react'
import {useNavigate} from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import picture from '../Assets/bird pic.jpg'
import girafy from '../Assets/giraffy.jfif'


function Home() {
  let navigate= useNavigate();


  return (
    <div className='landing-page'>
        <div className='left'><h1>Be Among the  very few to Xperience the African MetaVerse with City Essential.....</h1>
        <p>Global Pionners of Elite innovators. moving across 54 africa sub urbarns...Our Dreams are finally Awake...This means that and that means this. that is alot of Lorem epsuim. </p>
        <button onClick={()=>{navigate("/cityverse");}} className='btn'>EXPLORE</button></div> 
        <div className='right'>
            <Carousel autoPlay infiniteLoop >
                <div>
                    <img src={picture} alt='img1' />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={girafy} alt='img2'/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    
                    <p className="legend">Create</p>
                </div>
            </Carousel>
        </div>
    </div>
  )
}

export default Home