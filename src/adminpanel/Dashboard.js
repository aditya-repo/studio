import React from "react";
import Card from "../components/Card";
import { NavLink, useNavigate } from "react-router-dom";

// const BASEURL = "http://localhost:4040/";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const data = [
    { id: 1, title: "Add Client", value: 0 },
    { id: 2, title: "Total Client", value: 25 },
    { id: 3, title: "Current Client", value: 12 },
    { id: 4, title: "Expired Client", value: 13 },
  ];

  // console.log(student);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Dashboard Content</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.map((carddata) => (
          <Card data={carddata} key={carddata.id} />
        ))}
      </div>
      <hr class="h-px my-3 bg-gray-200 border-0 dark:bg-gray-400"></hr>

      <div className="grid grid-cols-1 gap-4">
        <div className="p-4 shadow rounded-md border bg-gray-200 ">
          <h3 className="text-2xl font-bold mb-3">Client Data</h3>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
              <thead className="bg-gray-500 border-b">
                <tr>
                  <th className="py-3 px-6 text-left text-sm font-medium text-white w-[10%]">
                    Client ID
                  </th>
                  <th className="py-3 px-6 text-left text-sm font-medium text-white">
                    Project Name
                  </th>
                  <th className="py-3 px-6 text-left text-sm font-medium text-white w-[12%]">
                    Type
                  </th>
                  <th className="py-3 px-6 text-left text-sm font-medium text-white w-[10%]">
                    Date
                  </th>
                  <th className="py-3 px-6 text-left text-sm font-medium text-white w-[10%]">
                    Client Name
                  </th>
                  <th className="py-3 px-6 text-left text-sm font-medium text-white w-[15%]">
                    Address
                  </th>
                  <th className="py-3 px-6 text-left text-sm font-medium text-white w-[8%]">
                    Contact
                  </th>
                  <th className="py-3 px-6 text-left text-sm font-medium text-white w-[10%]">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-6 text-sm text-gray-700">894390</td>
                  <td className="py-2 px-6 text-sm text-gray-700">
                    Punam Weds Pankaj
                  </td>
                  <td className="py-2 px-6 text-sm text-gray-700">Wedding</td>
                  <td className="py-2 px-6 text-sm text-gray-700">
                    12-06-2023
                  </td>
                  <td className="py-2 px-6 text-sm text-gray-700">
                    Aditya Raj
                  </td>
                  <td className="py-2 px-6 text-sm text-gray-700">
                    70 Feet Road, Patna - 800002
                  </td>
                  <td className="py-2 px-6 text-sm text-gray-700">
                    7050020659
                  </td>
                  <td className="py-2 px-6 text-sm text-gray-700">
                    <NavLink to={`/client-info`}>
                      <button className="rounded-md py-2 ring-2 ring-red-300 ring-inset bg-red-800 px-4 text-white">
                        View
                      </button>
                    </NavLink>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
