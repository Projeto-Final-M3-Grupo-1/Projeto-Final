import { useContext, useEffect } from "react";
import { ProjectsContext } from "../../../Providers/ProjectsProvider";
import MenuAsideAdmin from "../../Asides/AsideAdmin";
import { StyledLoginButton } from "../../Button";
import { StyledHeader } from "../../Header/header";
import { MdLogout } from "react-icons/md";
import { AuthContext } from "../../../Providers/AuthContext";
export const DashboardAdmin = () => {
    const { handleNavigate } = useContext(ProjectsContext);
    const { loadingUser, dataUser } = useContext(AuthContext);
    useEffect(() => {
        loadingUser();
    }, []);
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
        </>
    );
};
