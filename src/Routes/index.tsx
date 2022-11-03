import { Routes, Route, Navigate } from "react-router-dom";

import { Home } from "../Pages/Home";
import { DashboardDev } from "../Pages/DashboardDev";
import { DashboardCompany } from "../Pages/DashboardCompany";
import { RegisterDev } from "../Pages/RegisterDev";
import { RegisterOng } from "../Pages/RegisterOng";

const Routers = () => {
    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/dashboarddev" element={<DashboardDev />} />
            <Route path="/dashboardcompany" element={<DashboardCompany />} />
            <Route path="/registerong" element={<RegisterOng />} />
            <Route path="/registerdev" element={<RegisterDev />} />
            <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
    );
};

export default Routers;
