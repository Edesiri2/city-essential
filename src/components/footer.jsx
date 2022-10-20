import React from 'react'
import { FaTwitter,FaInstagram } from 'react-icons/fa'
import { GoMail} from 'react-icons/go'
const Foot =() => {


  return (
   <footer className='footde'>
     <div className='row'>
     <div className='col' >
      <p className='title'>City Essential</p>
      <p> Birthed  in Lagos Nigeria, and has cut across 17 Africa countries.</p>
      </div>
     <div className='col'><p className='title'>Office</p></div>
     <div className='col'><p className='title'>Link</p>
    <ul><li><FaInstagram/>: @cityessential/instagram</li><li><FaTwitter/>:@cityessential/twitter</li>
      </ul> </div>
     <div className='col'><p className='title'>News-Letter</p>
     <form><GoMail/><input className='gmai'/>
     </form></div></div>
   </footer>
  )
}

export default Foot