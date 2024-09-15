import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

// Mock data (to be replaced by API data in the future)
const clientData = [
  {
    id: 894390,
    projectName: "Punam Weds Pankaj",
    type: "Wedding",
    date: "12-06-2023",
    clientName: "Aditya Raj",
    address: "70 Feet Road, Patna - 800002",
    contact: "7050020659",
  },
  {
    id: 894391,
    projectName: "Aarav Weds Ananya",
    type: "Engagement",
    date: "15-07-2023",
    clientName: "Ravi Kumar",
    address: "123 Main Street, Delhi - 110001",
    contact: "9876543210",
  },
  {
    id: 894392,
    projectName: "Meera Weds Raj",
    type: "Reception",
    date: "20-08-2023",
    clientName: "Sanjay Sharma",
    address: "456 Elm Street, Mumbai - 400002",
    contact: "9123456789",
  }
  
  // Add more client objects here as needed
];

const Studio = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Dashboard Content</h2>
      <hr className="h-px my-3 bg-gray-200 border-0 dark:bg-gray-400"></hr>

      <div className="grid grid-cols-1 gap-4">
        <div className="p-4 shadow rounded-md border bg-gray-200">
          <h3 className="text-2xl font-bold mb-3">Client Data</h3>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
              <thead className="bg-gray-500 border-b">
                <tr>
                  <th className="py-3 px-6 text-left text-sm font-medium text-white w-[10%]">Client ID</th>
                  <th className="py-3 px-6 text-left text-sm font-medium text-white">Project Name</th>
                  <th className="py-3 px-6 text-left text-sm font-medium text-white w-[12%]">Type</th>
                  <th className="py-3 px-6 text-left text-sm font-medium text-white w-[10%]">Date</th>
                  <th className="py-3 px-6 text-left text-sm font-medium text-white w-[10%]">Client Name</th>
                  <th className="py-3 px-6 text-left text-sm font-medium text-white w-[15%]">Address</th>
                  <th className="py-3 px-6 text-left text-sm font-medium text-white w-[8%]">Contact</th>
                  <th className="py-3 px-6 text-left text-sm font-medium text-white w-[10%]">Action</th>
                </tr>
              </thead>
              <tbody>
                {clientData.map((client) => (
                  <tr key={client.id}>
                    <td className="py-2 px-6 text-sm text-gray-700">{client.id}</td>
                    <td className="py-2 px-6 text-sm text-gray-700">{client.projectName}</td>
                    <td className="py-2 px-6 text-sm text-gray-700">{client.type}</td>
                    <td className="py-2 px-6 text-sm text-gray-700">{client.date}</td>
                    <td className="py-2 px-6 text-sm text-gray-700">{client.clientName}</td>
                    <td className="py-2 px-6 text-sm text-gray-700">{client.address}</td>
                    <td className="py-2 px-6 text-sm text-gray-700">{client.contact}</td>
                    <td className="py-2 px-6 text-sm text-gray-700">
                      <NavLink to={`/admin/studio/${client.id}`}>
                        <button className="rounded-md py-2 ring-2 ring-red-300 ring-inset bg-red-800 px-4 text-white">
                          View
                        </button>
                      </NavLink>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Studio;
