import React, { useEffect, useState } from 'react';
import { useAdmin } from '../../context/adminContext';

const Applications = () => {

    const { applications, setApplications } = useAdmin()
    const [loading, setLoading] = useState(false)


  const fetchApplications = async () => {
    try {

      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json', // Specify the content type as JSON
        },
      };

      const url = `${process.env.REACT_APP_BACKEND_URL}/admin/readallApplicants`
      setLoading(true)
      const response = await fetch(url, requestOptions);
      const data = await response.json();
      
      if (data.statusCode === 200) {
          console.info("Application Found Successfully");
          setApplications(data.data)
          console.log(applications);
        console.log(data.data);
        
      } else {
        console.error("Error:", data);
      }
    } catch (err) {
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };




  useEffect(() => { fetchApplications(); },[])





  return (
    
    loading ? <div className='h-[80vh] flex flex-row justify-center items-center'>Loading....</div>
      :
<div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Applications</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="w-full bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">#</th>
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Entry Number</th>
              <th className="py-3 px-6 text-left">CGPA</th>
              <th className="py-3 px-6 text-left">Branch</th>
              <th className="py-3 px-6 text-left">List</th>
              <th className="py-3 px-6 text-left">Submitted On</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {applications.map((app, appIndex) => (
              <tr key={app._id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left">{appIndex + 1}</td>
                <td className="py-3 px-6 text-left">{app.name}</td>
                <td className="py-3 px-6 text-left">{app.entryNumber}</td>
                <td className="py-3 px-6 text-left">{app.cgpa}</td>
                <td className="py-3 px-6 text-left">{app.branch}</td>
                <td className="py-3 px-6 text-left">
                  <ul className="list-disc list-inside">
                    {app.list.map((item, itemIndex) => (
                      <li key={itemIndex}>{itemIndex + 1}. {item}</li>
                    ))}
                  </ul>
                </td>
                <td className="py-3 px-6 text-left">{new Date(app.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Applications;
