import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";
import AddNewFile from "../components/AddNewFile";
import ClientCard from "../components/ClientInfo";
import FolderList from "../components/FolderDetails";

const ClientDetails = () => {
  const { id } = useParams();

  // Use random data for demonstration purposes
  const clientData = {
    clientId: "894390",
    projectName: "Punam Weds Pankaj",
    type: "Wedding",
    bookingdate: "19-07-2023",
    date: "12-06-2023",
    clientName: "Aditya Raj",
    address: "70 Feet Road, Patna - 800002",
    contact: "7050020659",
    venue: "Patliputra Marriage Lawn",
  };

  return (
    <div className="p-4">
      <ClientCard clientData={clientData} />

      <div className="border border-gray-300 rounded-lg p-6 bg-white shadow-sm">
        <div className="flex justify-between items-center">
          <h2>
            <strong>Add New</strong>
          </h2>
          <div>
            <span className="font-bold">Total Uploaded </span>: 28.92 GB
          </div>
        </div>
        <div className="my-3">
          <AddNewFile />
          <ProgressBar />
        </div>
        <div className="w-[100%] h-[1px] my-8 border-dashed border-b-[1px]  border-black-700"></div>
        <FolderList />
      </div>
    </div>
  );
};

export default ClientDetails;
