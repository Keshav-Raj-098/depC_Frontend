import React,{useState} from 'react'
import { useAdmin } from '../../context/adminContext';

const Branch = ({ id, branchName, currentNumber, allowedPercent, onRoll}) => {

  const [edit,setEdit] = useState(false)
  const { update,setUpdate } = useAdmin()
  
  const [branch_Name, setBranchName] = useState(branchName);
  const [current_Number, setCurrentNumber] = useState(currentNumber);
  const [allowed_Percent, setAllowedPercent] = useState(allowedPercent);
  const [on_Roll, setOnRoll] = useState(onRoll);

  const handleSave = async () => {
    try {

        const branchData = {
            branchName:branch_Name,
            currentNumber:current_Number,
            allowedPercent:allowed_Percent,
            onRoll:on_Roll
        }

      const requestOptions = {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json', // Specify the content type as JSON
        },
        body: JSON.stringify(branchData),
      };

      const url = `${process.env.REACT_APP_BACKEND_URL}/admin/update/${id}`
      const response = await fetch(url, requestOptions);
      const data = await response.json();

      if (data.statusCode === 200) {
        console.info("Branches Found Successfully");
        const branch = data.data
        setBranchName(branch.branchName)
        setCurrentNumber(branch.currentNumber)
        setAllowedPercent(branch.allowedPercent)
        setOnRoll(branch.onRoll)
      } else {
        console.error("Error:", data);
      }
    } catch (err) {
      console.log(err.message);
    } finally {
        if(update===true){setUpdate(false)}
        else{setUpdate(true)}
    }
  };

















  

    return (
        <tr className="border-b border-gray-200 hover:bg-gray-50 ">
            <Box edit={edit} val={branch_Name} setVal={setBranchName}/>
            <Box edit={edit} val={current_Number} setVal={setCurrentNumber}/>
            <Box edit={edit} val={allowed_Percent} setVal={setAllowedPercent}/>
            <Box edit={edit} val={on_Roll} setVal={setOnRoll}/>
           
            
            <td className="py-3 px-6 text-center">
                {edit  ? (
                    <button
                        className="bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600 mr-2"
                        onClick={handleSave}
                    >
                        Save
                    </button>
                ) : (
                    <button
                        className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 mr-2"
                        onClick={() => setEdit(true)}
                    >
                        Edit
                    </button>
                )}
                <button
                    className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
                    // onClick={() => handleDelete(index)}
                >
                    Delete
                </button>
            </td>
        </tr>
    )
}

export default Branch


const Box = ({val,setVal,edit})=>(
    <td className="py-3 px-6 text-left">
    {edit  ? (
        <input
            type="text"
            value={val}
            onChange={(e) => {setVal(e.target.value)}}
            className="border px-2 py-1"
        />
    ) : (
        val
    )}
</td>
)