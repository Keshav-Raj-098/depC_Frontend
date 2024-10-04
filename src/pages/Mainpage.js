import React from 'react'
import { useNavigate } from 'react-router-dom'

const Mainpage = () => {
   
  const navigate = useNavigate();

  return (
    <div className='flex flex-row justify-center items-center h-screen w-screen gap-2'>

      <span>Admin page not created</span>
     
      <MoveButton name={"Admin"} handleclick={()=>{navigate("/admin/home")}}/>
      <MoveButton name={"student"} handleclick={()=>{navigate("/register")}}/>
      
    </div>
  )
}


const MoveButton =({name,handleclick})=>{


  return  <button className='border-[1px] border-black p-2 rounded-lg'
  onClick={handleclick}
  >{name}</button>
}

export default Mainpage
