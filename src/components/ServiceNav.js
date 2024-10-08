import React from "react";
import { NavLink } from "react-router-dom";

const StudioServiceNavigation = () => {

    return (
        <div className="pt-3 mb-3">
            <div className="flex pb-2">
                <NavLink to={'/123456/client-info'} >
                    <div className="px-8">Basic Info</div>
                </NavLink>
                <NavLink to={'/123456/cloud'}>
                    <div className="px-8">Cloud</div>
                </NavLink>
                <NavLink to={'/123456/invites'}>
                    <div className="px-8">Invitation Card</div>
                </NavLink>
                <NavLink to={'/123456/process'}>
                    <div className="px-8">Process Update</div>
                </NavLink>
                <NavLink to={'/123456/client-data'} >
                    <div className="px-8">Client Data</div>
                </NavLink>
            </div>
            <div style={{ borderBottom: '0.1px solid #E0E0E0' }}></div>
        </div>
    );
};

export default StudioServiceNavigation;