import React, { useState } from 'react';

const DropdownMenu = ({list,setList,noOfOptions}) => {
    const branches = [
        "Computer Science and Engineering",
        "Electrical Engineering",
        "Mechanical Engineering",
        "Civil Engineering",
        "Chemical Engineering",
        "Biochemical Engineering and Biotechnology",
        "Physics Engineering",
        "Mathematics and Computing",
        "Textile Engineering",
        "Engineering Physics",
        "Production and Industrial Engineering",
        "Energy Studies",
        "Materials Science and Engineering",
        "Environmental Engineering"
    ];

  

    // Handle change for specific dropdown
    const handleChange = (event, index) => {
        const updatedList = [...list];
        updatedList[index] = event.target.value;
        setList(updatedList);

        
    };

    // Function to filter out selected options
    const getAvailableOptions = (index) => {
        return branches.filter((branch) => !list.includes(branch) || list[index] === branch);
    };

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
        {[...Array(noOfOptions)].map((_, index) => (
            <div key={index} className="border p-2 rounded flex items-start">
                <span className="mr-2 font-bold">{index + 1}.</span> {/* Index number added here */}
                <Option
                    handleChange={(e) => handleChange(e, index)}
                    optionsArray={getAvailableOptions(index)}
                    selectedOption={list[index]}
                />
            </div>
        ))}
    </div>
    

    );
};

export default DropdownMenu;

const Option = ({ selectedOption, handleChange, optionsArray }) => {
    return (
        <div>
            <select value={selectedOption || ""} onChange={handleChange}>
                <option value="" hidden>Select an option</option>
                {optionsArray.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};
