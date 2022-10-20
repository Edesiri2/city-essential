import React, {useState} from 'react'

const Evoting =() => {

  const [nin, setNin]=useState('')
  const [password, setPassword]=useState('')
  const db ={name:'Eric', password: 'drake7'}
  const submit = () =>{
    (db.name===nin && db.password===password)? console.log('correct'): console.log('false');
  }
  return (
    <div className='metapage'>
        
        <div className='glass'><h1>E VOTING</h1>
         <div><input onChange={e=>setNin(e.target.value)} type="text" placeholder='enter your NIN' /></div>
         <div className='pwd'> <input onChange ={e=>setPassword(e.target.value)} type= "password"  placeholder='password'/> </div>
         <button onClick={submit} className='bttn'>Submit</button>
         <div className='OTP'><h6>Create an OTP?</h6></div>
         </div>




        </div>

   
  )
}

export default Evoting
