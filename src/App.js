import { useState,useEffect, } from 'react';
import { Routes, Route, Outlet,useNavigate } from 'react-router-dom';
import MainPage from './pages/Mainpage';
import Signin_Signup from './pages/Signin_Signup';
import Application from './pages/student/Application';
import Home from './pages/student/Home';
import Student from './pages/student/index';
import YourApplication from './pages/student/YourApplication';

function App() {

  const navigate = useNavigate();




  // useEffect(() => {
  //   const checkAuth = async () => {
  //     try {
  //       const url = `${process.env.REACT_APP_BACKEND_URL}/student/`;
  //       const response = await fetch(url, {
  //         method: 'GET',
  //         credentials: 'include',  // Sends the cookies automatically
  //       });
  
  //      // Log the entire response object
  //       const data = await response.json()
      
  //       // Check the response status
  //       if (data.statusCode === 200) {  
  //         const userData =  data.data;  
  //         console.log(userData);
          
  //         setStudent(userData);  // Set authenticated user info in the frontend state
  //       console.log(student);
        
  //       } else {
          
  //         setStudent(null);
  //         navigate("/");
  //       }
  //     } catch (error) {
  //       // Handle error case (e.g., network error)
  //       console.error("Error checking authentication:", error);
  //       setStudent(null);
  //       navigate("/");
  //     }
  //   };
  
  //   checkAuth();
  // }, []);

  

  return (
      <Routes>
        {/* Root route */}
        <Route path='/' element={<MainPage/>} />

        {/* Nested routes under /student */}
          <Route path='register' element={<Signin_Signup/>} />
        <Route path='student' element={<Student/>}>
          <Route path='home' element={<Home/> } />
          <Route path='application' element={<YourApplication/> } />
          <Route path='apply' element={<Application />} />
        </Route>
      </Routes>

  );
}



export default App;
