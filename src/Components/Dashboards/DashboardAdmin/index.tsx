import { useContext } from "react";
import { ProjectsContext } from "../../../Providers/ProjectsProvider";
import MenuAsideAdmin from "../../Asides/AsideAdmin";
import { StyledLoginButton } from "../../Button";
import { StyledHeader } from "../../Header/header";
import { MdLogout } from "react-icons/md";
export const DashboardAdmin = () => {
  const { handleNavigate } = useContext(ProjectsContext);
  return (
    <>
      <StyledHeader>
        <h2>Logo</h2>
        <StyledLoginButton onClick={() => handleNavigate("/home")}>
          <MdLogout className="logout" />
          Logout
        </StyledLoginButton>
      </StyledHeader>
      <MenuAsideAdmin />
      <h1>eu sou a das do ADMIN</h1>
    </>
  );
};
