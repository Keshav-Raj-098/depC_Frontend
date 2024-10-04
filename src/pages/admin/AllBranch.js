import React, { useEffect, useState } from 'react'
import Branch from '../../components/admin/branch'
import { useAdmin } from '../../context/adminContext';

const ALLBranch = () => {

  const { branches, setBranches,update } = useAdmin()
  const [loading, setLoading] = useState(false)
  


  const fetchBranch = async () => {
    try {

      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json', // Specify the content type as JSON
        },
      };

      const url = `${process.env.REACT_APP_BACKEND_URL}/admin/readall`
      setLoading(true)
      const response = await fetch(url, requestOptions);
      const data = await response.json();

      if (data.statusCode === 200) {
        console.info("Branches Found Successfully");
        setBranches(data.data)
      } else {
        console.error("Error:", data);
      }
    } catch (err) {
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };




  useEffect(() => { fetchBranch(); },[update])









  return (
    loading ? <div className='h-[80vh] flex flex-row justify-center items-center'>Loading....</div>
      :
      <div className=" mx-2 w-[97vw] h-full p-4 flex flex-row justify-center items-center">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Branch Name</th>
              <th className="py-3 px-6 text-center">Current No. of Seats</th>
              <th className="py-3 px-6 text-center">Allowed %</th>
              <th className="py-3 px-6 text-center">On Roll</th>
              <th className="py-3 px-6 text-center">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {branches?.map((branch) => (
              <Branch id={branch._id} branchName={branch.branchName}
                currentNumber={branch.currentNumber} allowedPercent={branch.allowedPercent}
                onRoll={branch.onRoll} setLoading={setLoading} update={update}
              />

            ))}
          </tbody>
        </table>
      </div>
  )
}

export default ALLBranch
