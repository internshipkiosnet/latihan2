import '../../../App.js';
import React, { useState, useEffect } from 'react';
import Sidebar from "../../../component/Sidebar";
import axios from 'axios';
import EmployeeTable from '../../../component/Employee'; // Update the path if needed
import { Link } from 'react-router-dom';
import CreateEmployee from '../Create';

const ITEMS_PER_PAGE = 10; // Number of items to display per page
const INITIAL_PAGE = 1;    // Initial page number

function App() {
  const [employee, setEmployee] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedAgama, setSelectedAgama] = useState('');
  const [selectedNIPPrefix, setSelectedNIPPrefix] = useState('');
  const [currentPage, setCurrentPage] = useState(INITIAL_PAGE);

  useEffect(function () {
    axios.get("http://127.0.0.1:8000/api/employee").then(function (response) {
      const employeeData = response.data.data; // Make sure the data key matches your API response
      setEmployee(employeeData);
    });
  }, []);

  const agamaOptions = ['Islam', 'Kristen', 'Katolik', 'Hindu', 'Buddha', 'Konghucu'];
  const nipPrefixOptions = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  return (
    <div className="App flex">
      <Sidebar />

      <div className='px-10 w-11/12'>
        <Link to='/employee/create'>Add Employee</Link>
        <div className="flex items-center mb-4 border-gray-300 border-2 border-solid w-fit px-5 py-3 rounded-md items-start ">
          <input
            type="text"
            placeholder="Search"
            className=" p-1 w-80 border-gray-300 border-r-2 border-solid focus:border-none outline-none"
            onChange={(e) => setSearch(e.target.value)}
          />
          <select
            value={selectedAgama}
            onChange={(e) => setSelectedAgama(e.target.value)}
            className=" p-1 border-gray-300 border-r-2 border-solid focus:border-none outline-none"
          >
            <option value="">All Agama</option>
            {agamaOptions.map((agama, index) => (
              <option key={index} value={agama}>{agama}</option>
            ))}
          </select>
          <select
            value={selectedNIPPrefix}
            onChange={(e) => setSelectedNIPPrefix(e.target.value)}
            className=" p-1 focus:border-none outline-none"
          >
            <option value="">All NIP Prefixes</option>
            {nipPrefixOptions.map((prefix, index) => (
              <option key={index} value={prefix}>{prefix}</option>
            ))}
          </select>
          
        </div>
       
        
        <EmployeeTable
          employee={employee}
          search={search}
          selectedAgama={selectedAgama}
          selectedNIPPrefix={selectedNIPPrefix}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          itemsPerPage={ITEMS_PER_PAGE}
        />
        

 

       
      </div>
    </div>
  );
}

export default App;
