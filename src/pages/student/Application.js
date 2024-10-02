import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import DropdownMenu from '../../components/student/Dropdown';
import { useStudent } from '../../context/studentContext';


const Application = () => {

  const navigate = useNavigate()
  const {student,setStudent} = useStudent()

  const hostels = [
    "Aravali", "Girnar", "Himadri", "Jwalamukhi", "Kailash", "Karakoram",
    "Kumaon", "Nilgiri", "Satpura", "Shivalik", "Udaigiri", "Vindhyachal",
    "Zanskar", "Vindyachal",
  ];

  const [fullname, setFullname] = useState("")
  const [entryNo, setEntryNo] = useState("")
  const [cgpa, setCgpa] = useState("")
  const [hostel, setHostel] = useState("None")
  const [list, setList] = useState(Array(5).fill("")); // Array of 5 dropdowns
  const [noOfOptions, setNoOfOptions] = useState(5);



  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Collect form data
    const formData = {
      name: fullname,           // Change `fullname` to `name`
      entryNumber: entryNo,
      cgpa: cgpa,
      hostel: hostel,
      list: list
    };
  
    // Set up request options with headers
    const requestOptions = {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json', // Specify the content type as JSON
        // Optional: Add any other headers if needed
        // 'Authorization': `Bearer ${token}`, // if required
      },
      body: JSON.stringify(formData), 
    };
  
    // Build the URL using environment variable
    console.log(student._id);
    
    const url = `${process.env.REACT_APP_BACKEND_URL}/application/create/${student._id}`;
  
    console.log('Form Data:', formData);
    
    try {
      // Perform the POST request
      const response = await fetch(url, requestOptions);
      const data = await response.json();
  
      if (data.statusCode === 200) {
        console.info("Applied Successfully");
        console.log(data.data);
        
        setStudent(data.data)
        navigate("/student/Home");  // Navigate to the appropriate page
      } else {
        console.error("Error:", data);
      }
    } catch (error) {
      console.error("Request failed:", error);
    }
  };
  

  
  






  return (
 
    student?.application ? <div>You Have alraedy Aplplied</div>

     : <div className='p-10 flex flex-col items-start justify-start gap-6 bg-white shadow-lg rounded-lg max-w-3xl mx-auto'>
        <h1 className='text-2xl font-bold text-gray-800 mb-6'>Application Details</h1>

        <Line title={"Full Name"} setFunction={setFullname} />
        <Line title={"Entry Form"} setFunction={setEntryNo} />
        <Line title={"CGPA"} setFunction={setCgpa} />

        <div className='flex flex-row items-center gap-4 w-full'>
          <span className='text-gray-700 font-medium'>Hostel:</span>
          <div className='border-[1px] border-gray-300 rounded-lg p-2'>
            <select
              value={hostel}
              onChange={(e) => { setHostel(e.target.value) }}
              className='outline-none bg-transparent'
            >
              <option value="" hidden>Select an option</option>
              {hostels.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        <DropdownMenu list={list} noOfOptions={8} setList={setList} />

        <button
          onClick={handleSubmit}
          className='bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg mt-4'>
          Submit
        </button>
      </div>


  )
}

export default Application

const Line = ({ title, setFunction }) => (

  <div>
    <span>{title}:-</span>
    <input className='border-b-2 outline-none border-black' type="text" onChange={(e) => { setFunction(e.target.value) }} />
  </div>
)