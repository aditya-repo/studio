import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
import reportWebVitals from "./reportWebVitals";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Layout from "./Layout";
import Dashboard from "./pages/Dashboard";
import ClientDetails from "./pages/ClientDetails";
import FileUploadContainer from "./pages/Test";
import Admin from "./Admin";
import AdminDashboard from "./adminpanel/Dashboard";
import Studio from "./adminpanel/Component/Studio";
import StudioInfo from "./adminpanel/Component/StudioInfo";
import ClientCard from "./components/ClientInfo";
import CloudCard from "./components/cloudUpload";
import ALlInviteList from "./pages/Invites";
import InviteAllCard from "./pages/InviteAll";
import SingleInvites from "./components/singleInvites";
import InviteRequest from "./pages/InviteRequest";
import ClientDataApi from "./pages/ClientData";

const router = createBrowserRouter(
  createRoutesFromElements(
    <div>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Dashboard />} />
        {/* <Route path="/client-info" element={<FileUploadContainer />} /> */}
        {/* <Route path="/client-info" element={<ClientDetails />} /> */}
        <Route path="/:id" element={<ClientDetails />}>
          <Route path="/:id/client-info" element={<ClientCard />} />
          <Route path="/:id/cloud" element={<CloudCard />} />
          <Route path="/:id/invites" element={<ALlInviteList />} />
          <Route path="/:id/invites/:type" element={<InviteAllCard />} />
          <Route path="/:id/invites/:type/:templateid" element={<SingleInvites />} />
          <Route path="/:id/invites/:type/:templateid/checkout" element={<InviteRequest />} />
          <Route path="/:id/client-data" element={<ClientDataApi />} />
        </Route>
      </Route>
      <Route path="/admin" element={<Admin />}>
        <Route path="" element={<AdminDashboard />} />
        <Route path="/admin/studios" element={<Studio />} />
        <Route path="/admin/studio/:id" element={<StudioInfo />} />
      </Route>
    </div>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
