import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useStudent } from '../context/studentContext'

const Signin_Signup = () => {

  const {setStudent} = useStudent()

  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [signinorsignup, setThis] = useState("signin")

  const handleSignup = async () => {
    // Collect form data for signup
    const formData = {
      username: name,
      email: email,
      password: password,
    };
  
    // Set up request options with headers
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Specify the content type as JSON
      },
      body: JSON.stringify(formData),
    };
  
    // Build the URL for signup
    const url = `${process.env.REACT_APP_BACKEND_URL}/student/register`;
  
    try {
      // Perform the POST request
      const response = await fetch(url, requestOptions);
      const data = await response.json();
  
      if (data.statusCode === 200) {
        console.info("Signed Up Successfully");
        console.log(data);
        setStudent(data.data)
        navigate("/student/home"); // Navigate to the home page
      } else {
        console.error("Error:", data);
      }
    } catch (error) {
      console.error("Request failed:", error);
    }
  };
  
  const handleLogin = async () => {
    // Collect form data for login
    const formData = {
      username: name,
      password: password,
    };
  
    // Set up request options with headers
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Specify the content type as JSON
      },
      body: JSON.stringify(formData),
    };
  
    // Build the URL for login
    const url = `${process.env.REACT_APP_BACKEND_URL}/student/login`;
  
    try {
      // Perform the POST request
      const response = await fetch(url, requestOptions);
      const data = await response.json();
  
      if (data.statusCode === 200) {
        
        console.info("Logged In Successfully");
        setStudent(data.data.loggedInuser)
        navigate("/student/home"); // Navigate to the home page
      } else {
        console.error("Error:", data);
      }
    } catch (error) {
      console.error("Request failed:", error);
    }
  };
  

  


  return (
    <div className='w-screen h-[85vh] p-10 flex flex-row justify-center items-center'>

      <div className='border-2 border-black rounded-lg p-5 flex flex-col gap-4 min-w-[350px]'>

        <input type="text" className='border-b-2 border-black outline-none'
          placeholder='Username/Kerbros Id' onChange={(e) => { setName(e.target.value) }} />

        {signinorsignup === "signin" &&
          <input type="text" className='border-b-2 border-black outline-none'
            placeholder='Institute email' onChange={(e) => { setEmail(e.target.value) }} />

        }


        <input type="text" className='border-b-2 border-black outline-none'
          placeholder='password' onChange={(e) => { setPassword(e.target.value) }} />

        <button className='h-10 bg-blue-600 mx-3  text-white rounded-2xl'

          onClick={ signinorsignup === "signin" ?handleSignup : handleLogin}
        >{signinorsignup}</button>
        <div>
          {
            signinorsignup === "signin" ? <span>Already have an Account</span> :
              <span>Don't have an Account</span>
          }

          <span className='mx-3 hover:underline hover:text-blue-500 hover:cursor-pointer'

            onClick={() => {
              if (signinorsignup === "signin") { setThis("Login") }
              else { setThis("signin") }
            }}

          >{
              signinorsignup === "signin" ? "Login" : "Sign up"
            }</span>
        </div>

      </div>

    </div>
  )
}

export default Signin_Signup
