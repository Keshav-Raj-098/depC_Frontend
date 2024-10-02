import React, { useEffect, useState } from 'react';
import { useStudent } from '../../context/studentContext';

const YourApplication = () => {
    
    const {student} = useStudent() 
    const [application,setApplication] = useState("")
    const [loading,setLoading] = useState("")

    const studentid = student?.application;
   

    
    
        useEffect(() => {
            const fetchStudent = async () => {
                try {

                    const requestOptions = {
                        method: 'GET',
                        headers: {
                          'Content-Type': 'application/json', // Specify the content type as JSON
                        },
                      };

                    const url = `${process.env.REACT_APP_BACKEND_URL}/application/read/${studentid}`
                    const response = await fetch(url,requestOptions);
                    const data = await response.json();
              
                    if (data.statusCode === 200) {
                        console.info("Application Found Successfully");
                        setApplication(data.data)
                      } else {
                        console.error("Error:", data);
                      }
                } catch (err) {
                    console.log(err.message);
                } finally {
                    setLoading(false);
                }
            };
    
            fetchStudent();
        }, []);
    
        if (loading) return <div className="text-center">Loading...</div>;
        
    
        if (!application) return <div>No student data found.</div>;
    
        return (
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Student Application</h1>
                <div className="bg-white border border-gray-200 p-4 rounded shadow">
                    <table className="min-w-full">
                        <tbody>
                            <tr>
                                <td className="py-2 px-4 border-b font-semibold">Name:</td>
                                <td className="py-2 px-4 border-b">{application.name}</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b font-semibold">Entry Number:</td>
                                <td className="py-2 px-4 border-b">{application.entryNumber}</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b font-semibold">CGPA:</td>
                                <td className="py-2 px-4 border-b">{application.cgpa}</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b font-semibold">Hostel:</td>
                                <td className="py-2 px-4 border-b">{application.hostel}</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b font-semibold">Affidavit:</td>
                                <td className="py-2 px-4 border-b">{application.affidavit || 'N/A'}</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b font-semibold">List:</td>
                                <td className="py-2 px-4 border-b">{application.list.join(', ')}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    };
    

export default YourApplication
