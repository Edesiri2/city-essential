import React from 'react'
import {useNavigate} from "react-router-dom";

const CityVerse =() => {
  let navigate = useNavigate();
  return (
    <div className='metapage'>
      <video autoPlay muted loop id="myVideo">
        <source src="https://decentraland.org/static/scenes4-9c2c3da09f377ae55b5158c95eb2d1f5.mp4" 
        type="video/mp4" />
      </video>

      <div class="content">
        <h1>Welcome to 9ja CityVerse.</h1><br/>
        <p>Create, explore and trade in the first-ever virtual world owned by its users</p>
        <br />
        <div className='btnDiv'>
          <button className="myBtn" onClick={()=>{navigate("/citybuilder")}}>Emi lokan</button>
          <button className="myBtn" onclick="myFunction()">Start Building</button>
        </div>
      </div>
         
    

    </div>

   
  )
}

export default CityVerse
