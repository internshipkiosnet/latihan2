import React from "react";

function EmployeeTable({ employee, search, selectedAgama, selectedNIPPrefix, currentPage, setCurrentPage, itemsPerPage }) {
  const filteredEmployees = employee.filter(item => {
    const isNIPMatched = selectedNIPPrefix === '' || String(item.nip_pgwi).startsWith(selectedNIPPrefix);
    const isAgamaMatched = selectedAgama === '' || item.agama === selectedAgama;
    
    if (search === '') {
      return isNIPMatched && isAgamaMatched;
    } else {
      return (
        (item.nama.toLowerCase().includes(search.toLowerCase())) &&
        isNIPMatched && isAgamaMatched
      );
    }
  });

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const totalPages = Math.ceil(filteredEmployees.length / itemsPerPage);

  return (
    <div className="">
  
      <table className="text-sm text-left text-gray-500 dark:text-gray-400 w-full ">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-800">
            <th className="px-6 py-3 text-left font-medium">Name</th>
            <th className="px-6 py-3">NIP</th>
            <th className="px-6 py-3">Email</th>
            <th className="px-6 py-3">Agama</th>
            <th className="px-6 py-3">Status Perkawinan</th>
            <th className="px-6 py-3 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees
            .slice(startIndex, endIndex)
            .map(item => (
              <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {item.nama}
                </td>
                <td className="px-6 py-4">
                  {item.nip_pgwi}
                </td>
                <td className="px-6 py-4">
                  {item.email}
                </td>
                <td className="px-6 py-4">
                  {item.agama}
                </td>
                <td className="px-6 py-4">
                  {item.status_perkawinan}
                </td>
                <td className="px-6 py-4 text-right">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                    Edit
                  </a>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className="pagination mt-4 flex justify-end">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="mx-4">Page {currentPage} of {totalPages}</span>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={endIndex >= filteredEmployees.length}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default EmployeeTable;
