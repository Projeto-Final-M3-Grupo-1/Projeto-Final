import { Routes, Route, Navigate } from "react-router-dom";

import { Home } from "../Pages/Home";
import { Dashboard } from "../Pages/DashboardCompany";
import { RegisterDev } from "../Pages/RegisterDev";
import { RegisterOng } from "../Pages/RegisterOng";

const Routers = () => {
    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/registerong" element={<RegisterOng />} />
            <Route path="/registerdev" element={<RegisterDev />} />
            <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
    );
};

export default Routers;
