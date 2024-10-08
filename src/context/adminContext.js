// StudentContext.js
import React, { createContext, useContext, useState } from 'react';

const adminContext = createContext();

export const useAdmin = () => {
  return useContext(adminContext);
};

export const AdminProvider = ({ children }) => {
  const [branches, setBranches] = useState([]);
  const [applications, setApplications] = useState([]); 
  const [update, setUpdate] = useState(false)
  const [updatedApplication, setUpdatedApplication] = useState([])

  return (
    <adminContext.Provider 
      value={{  branches, setBranches,
                update,setUpdate,
                applications, setApplications,
                updatedApplication,setUpdatedApplication
       
        
      }}>
      {children}
    </adminContext.Provider>
  );
};
