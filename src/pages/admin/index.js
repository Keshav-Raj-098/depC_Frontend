import React from 'react'
import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Index = () => {

   
    const navigate = useNavigate();

  return (
    <div>
           <div>
            <div className='flex flex-row-reverse p-3 gap-5'>
              
                <button className='bg-blue-500 py-2 px-5 rounded-lg text-white'
                onClick={()=>{navigate("/")}}
                >Log Out</button>
                <button className='bg-blue-500 py-2 px-5 rounded-lg text-white'
                onClick={()=>{navigate("change")}}
                >Change</button>
                <button className='bg-blue-500 py-2 px-5 rounded-lg text-white'
                onClick={()=>{navigate("branch")}}
                >Branch</button>
                <button className='bg-blue-500 py-2 px-5 rounded-lg text-white'
                onClick={()=>{navigate("applicants")}}
                >See Applicants</button>
                <button className='bg-blue-500 py-2 px-5 rounded-lg text-white'
                onClick={()=>{navigate("Home")}}
                >Home</button>
            </div>
            <Outlet />

        </div>
      
    </div>
  )
}

export default Index
