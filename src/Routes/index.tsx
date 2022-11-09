import { Routes, Route, Navigate } from "react-router-dom";

import { Home } from "../Pages/Home";
import { Dashboard } from "../Pages/DashboardCompany";
import { RegisterDev } from "../Pages/RegisterDev";
import { RegisterOng } from "../Pages/RegisterOng";
import { MyProject } from "../Components/MyProjectDev";
import Publications from "../Components/Publication";
import { ProjectsToApply } from "../Components/ProjectsToApply";
import { RenderProjectsDashAdmin } from "../Components/RenderProjectsDashAdmin";
import { ManageProject } from "../Components/ManageProject";
import { PendingProject } from "../Components/AllProjects/Pendings";

const Routers = () => {
  return (
    <Routes>
      <Route path="home" element={<Home />} />
      <Route path="dashboard" element={<Dashboard />}>
        <Route index element={<Publications />} />
        <Route path="myproject" element={<MyProject />} />
        <Route path="ongmyproject" element={<PendingProject />} />
        <Route path="projectstoapply" element={<ProjectsToApply />} />
        <Route path="projectsadmin" element={<RenderProjectsDashAdmin />} />
        <Route path="manageproject" element={<ManageProject />} />
      </Route>
      <Route path="registerong" element={<RegisterOng />} />
      <Route path="registerdev" element={<RegisterDev />} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};

export default Routers;
