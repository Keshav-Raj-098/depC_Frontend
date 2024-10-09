import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStudent } from '../../context/studentContext';

const Home = () => {
  const navigate = useNavigate();

  const {student} = useStudent()
  const [name, setName] = useState(student?.username || ""); // Initialize with student if available
  const [email, setEmail] = useState(student?.email || "");

  useEffect(() => {
    if (student === null) {
      navigate('/');
    } else {
      setName(student?.username);
      setEmail(student?.email);
    }
  }, [student,navigate]); // Added student to the dependency array

  return (
    <div className='h-[85vh] flex flex-col gap-3 justify-center items-center'>
      <table className="max-w-[500px] bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden">
        <thead>
          <tr className="bg-gray-200 text-gray-700 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Field</th>
            <th className="py-3 px-6 text-left">Value</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          <tr className="border-b hover:bg-gray-100 transition-colors duration-200">
            <td className="py-3 px-6">Name:</td>
            <td className="py-3 px-6">{name}</td>
          </tr>
          <tr className="border-b hover:bg-gray-100 transition-colors duration-200">
            <td className="py-3 px-6">Email:</td>
            <td className="py-3 px-6">{email}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Home;
