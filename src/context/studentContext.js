// StudentContext.js
import React, { createContext, useContext, useState } from 'react';

const StudentContext = createContext();

export const useStudent = () => {
  return useContext(StudentContext);
};

export const StudentProvider = ({ children }) => {
  const [student, setStudent] = useState(null); // Student details

  return (
    <StudentContext.Provider 
      value={{ 
        student, 
        setStudent, 
       
        
      }}>
      {children}
    </StudentContext.Provider>
  );
};
