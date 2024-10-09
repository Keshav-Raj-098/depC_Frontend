import React, { useState } from 'react'
import { useAdmin } from '../../context/adminContext';


const BranchChange = () => {

    const [loading, setLoading] = useState(false)
    const {updatedApplication,setUpdatedApplication} = useAdmin()

    const FetchupdateApplications = async () => {
        try {
    
          const requestOptions = {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json', // Specify the content type as JSON
            },
          };
    
          const url = `${process.env.REACT_APP_BACKEND_URL}/admin/applyChange`
          setLoading(true)
          const response = await fetch(url, requestOptions);
          const data = await response.json();
          
          if (data.statusCode === 200) {
              console.info("Application Updated Successfully");
              setUpdatedApplication(data.data)
             
         
            
          } else {
            console.error("Error:", data);
          }
        } catch (err) {
          console.log(err.message);
        } finally {
          setLoading(false);
        }
      };

    const FetchremoveChanges = async () => {
        try {
    
          const requestOptions = {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json', // Specify the content type as JSON
            },
          };
    
          const url = `${process.env.REACT_APP_BACKEND_URL}/admin/removeChange`
          setLoading(true)
          const response = await fetch(url, requestOptions);
          const data = await response.json();
          
          if (data.statusCode === 200) {
              console.info("Removed Changes Successfully");
              setUpdatedApplication(data.data)
         
            
          } else {
            console.error("Error:", data);
          }
        } catch (err) {
          console.log(err.message);
        } finally {
          setLoading(false);
        }
      };
    


    return (
        <div>
            <div className='my-3 flex flex-row justify-center items-center gap-5'>

                <button className='px-4 py-2 bg-blue-500 text-center text-white rounded-lg'
                
                onClick={FetchupdateApplications}
                
                >Commit</button>
                <button className='px-4 py-2 bg-red-500 text-center text-white rounded-lg'
                 onClick={FetchremoveChanges}
                >revert</button>

            </div>

            {
                loading ?

                    <div className='h-[80vh] flex flex-row justify-center items-center'>Loading....</div>

                    :
                    <div>
                        <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                            <thead>
                                <tr>
                                    <th className="py-3 px-6 bg-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">#</th>
                                    <th className="py-3 px-6 bg-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Name</th>
                                    <th className="py-3 px-6 bg-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Entry Number</th>
                                    <th className="py-3 px-6 bg-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">From Branch</th>
                                    <th className="py-3 px-6 bg-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">To Branch</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                              
                              {
                                updatedApplication.map((e,index)=>(
                                    <tr>
                                    <td className="py-4 px-6 text-sm text-gray-700">
                                        {index+1}</td>
                                    <td className="py-4 px-6 text-sm text-gray-700">{e.name}</td>
                                    <td className="py-4 px-6 text-sm text-gray-700">
                                        {e.entryNumber}</td>
                                    <td className="py-4 px-6 text-sm text-gray-700">
                                        {e.branch}
                                    </td>
                                    <td className="py-4 px-6 text-sm text-gray-700">
                                        { e.newBranch ? 
                                        e.newBranch
                                      :
                                      "None"
                                    }</td>
                                </tr>
                                ))
                              }
                               

                            </tbody>
                        </table>





                    </div>
            }





        </div>
    )
}

export default BranchChange


