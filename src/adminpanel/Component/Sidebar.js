import React from "react";
// import logo from "../assets/img/logo.png";
import { Link, NavLink } from "react-router-dom";

const AdminSidebar = () => {
  // console.log(student);
  return (
    <div className="h-screen w-64 bg-gray-800 text-white">
      <div className="pt-6 px-4">
        <div className=" text-2xl flex justify-around items-center ">
          
          <span>Studio Hub</span>
        </div>

        <div className="flex items-center ml-[56px]">
          <div className="ml-2">
            <p>Aditya Raj</p>
            <div className="flex items-center">
              <div className="bg-[#116411] w-2.5 rounded-full h-2.5 mr-1"></div>
              <div className="text-xs">Online</div>
            </div>
          </div>
        </div>
        <hr class="h-px mt-3 mb-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      </div>
      <ul>
        <Link to={"/admin"}>
          <li className="py-3 px-4 hover:bg-gray-700">
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="size-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="px-2">Home</span>
            </div>
          </li>
        </Link>
        <NavLink to={"/admin/studios"}>
          <li className="py-3 px-4 hover:bg-gray-700">
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="size-5"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-5.5-2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM10 12a5.99 5.99 0 0 0-4.793 2.39A6.483 6.483 0 0 0 10 16.5a6.483 6.483 0 0 0 4.793-2.11A5.99 5.99 0 0 0 10 12Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="px-2">Studio</span>
            </div>
          </li>
        </NavLink>
        <NavLink to={"/pending-review"}>
          <li className="py-3 px-4 hover:bg-gray-700">
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="size-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.403 12.652a3 3 0 0 0 0-5.304 3 3 0 0 0-3.75-3.751 3 3 0 0 0-5.305 0 3 3 0 0 0-3.751 3.75 3 3 0 0 0 0 5.305 3 3 0 0 0 3.75 3.751 3 3 0 0 0 5.305 0 3 3 0 0 0 3.751-3.75Zm-2.546-4.46a.75.75 0 0 0-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                  clip-rule="evenodd"
                />
              </svg>
              <div
                className="px-2 flex justify-between"
                style={{ width: "100%" }}
              >
                <span>Services</span>
                {/* <span class="bg-[#db2727] px-2 rounded-full">{student}</span> */}
              </div>
            </div>
          </li>
        </NavLink>
        <NavLink to={"/pending-review"}>
          <li className="py-3 px-4 hover:bg-gray-700">
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="size-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.403 12.652a3 3 0 0 0 0-5.304 3 3 0 0 0-3.75-3.751 3 3 0 0 0-5.305 0 3 3 0 0 0-3.751 3.75 3 3 0 0 0 0 5.305 3 3 0 0 0 3.75 3.751 3 3 0 0 0 5.305 0 3 3 0 0 0 3.751-3.75Zm-2.546-4.46a.75.75 0 0 0-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                  clip-rule="evenodd"
                />
              </svg>
              <div
                className="px-2 flex justify-between"
                style={{ width: "100%" }}
              >
                <span>Payment</span>
                {/* <span class="bg-[#db2727] px-2 rounded-full">{student}</span> */}
              </div>
            </div>
          </li>
        </NavLink>
        <NavLink to={"/pending-review"}>
          <li className="py-3 px-4 hover:bg-gray-700">
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="size-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.403 12.652a3 3 0 0 0 0-5.304 3 3 0 0 0-3.75-3.751 3 3 0 0 0-5.305 0 3 3 0 0 0-3.751 3.75 3 3 0 0 0 0 5.305 3 3 0 0 0 3.75 3.751 3 3 0 0 0 5.305 0 3 3 0 0 0 3.751-3.75Zm-2.546-4.46a.75.75 0 0 0-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                  clip-rule="evenodd"
                />
              </svg>
              <div
                className="px-2 flex justify-between"
                style={{ width: "100%" }}
              >
                <span>Analytics</span>
                {/* <span class="bg-[#db2727] px-2 rounded-full">{student}</span> */}
              </div>
            </div>
          </li>
        </NavLink>
      </ul>
    </div>
  );
};

export default AdminSidebar;
