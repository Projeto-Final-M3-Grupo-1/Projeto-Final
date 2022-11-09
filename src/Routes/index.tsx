import { Routes, Route, Navigate } from "react-router-dom";

import { Home } from "../Pages/Home";
import { Dashboard } from "../Pages/DashboardCompany";
import { RegisterDev } from "../Pages/RegisterDev";
import { RegisterOng } from "../Pages/RegisterOng";
import Test from "../Components/Modal/ModalNovaPublicacao";
import { MyProject } from "../Components/MyProjectDev";
import Publications from "../Components/Publication";
import { ProjectsToApply } from "../Components/ProjectsToApply";
import { ManageProject } from "../Components/ManageProject";
import { ProjectDevelop } from "../Components/ProjectDevelop";
import { ProjectPending } from "../Components/ProjectPending";

const Routers = () => {
    return (
        <Routes>
            <Route path="home" element={<Home />} />
            <Route path="dashboard" element={<Dashboard />}>
                <Route index element={<Publications />} />
                <Route path="myproject" element={<MyProject />} />
                <Route path="projectstoapply" element={<ProjectsToApply />} />
                <Route path="projectdevelop" element={<ProjectDevelop />} />
                <Route path="projectpending" element={<ProjectPending />} />
                <Route path="manageproject" element={<ManageProject />} />
            </Route>
            <Route path="registerong" element={<RegisterOng />} />
            <Route path="registerdev" element={<RegisterDev />} />
            <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
    );
};

export default Routers;
