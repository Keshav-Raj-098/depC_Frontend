import React from 'react'
import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useStudent } from '../../context/studentContext'

const Layout = () => {

    const navigate = useNavigate();
    const {student} = useStudent(); 

    const handleLogout = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/student/logout/${student._id}`, {
                method: 'POST',
                credentials: 'include', // Include cookies in the request
                headers: {
                    'Content-Type': 'application/json', // Set content type if needed
                },
            });
            
            const data = await response.json()
    
            if (data.statusCode === 200) {
                console.info("Logged out successfully");
                // Optionally, redirect the user or clear user state
                navigate('/'); // Redirect to the registration or login page
            } else {
                console.error("Logout failed:", await response.json());
            }
        } catch (error) {
            console.error("Error during logout:", error);
        }
    };
    

    return (
        <div>
            <div className='flex flex-row-reverse p-3 gap-5'>
                <button className='bg-blue-500 py-2 px-5 rounded-lg text-white'
                onClick={handleLogout}
                >Logout</button>
                <button className='bg-blue-500 py-2 px-5 rounded-lg text-white'
                onClick={()=>{navigate("apply")}}
                >Apply</button>
                <button className='bg-blue-500 py-2 px-5 rounded-lg text-white'
                onClick={()=>{navigate("application")}}
                >See Application</button>
                <button className='bg-blue-500 py-2 px-5 rounded-lg text-white'
                onClick={()=>{navigate("home")}}
                >Home</button>
            </div>
            <Outlet />

        </div>
    )
}

export default Layout
