import { DashboardDev } from "../../Components/Dashboards/DashboardDev";
import { DashboardAdmin } from "../../Components/Dashboards/DashboardAdmin";
import { UserContext } from "../../Providers/UserProvider";
import { useContext, useEffect } from "react";
import { DashboardOng } from "../../Components/Dashboards/DashboardOng";
import { AuthContext } from "../../Providers/AuthContext";
import { StyledBoxModal } from "../../Components/Modal/ModalLogin/style";
import { CircularProgress } from "@mui/material";

export function Dashboard() {
    const { dataUser, loadingUser } = useContext(AuthContext);

    useEffect(() => {
        loadingUser();
    }, []);
    const { typeUser } = dataUser;
    return (
        <>
            {typeUser == "admin" ? (
                <DashboardAdmin />
            ) : typeUser == "dev" ? (
                <DashboardDev />
            ) : typeUser == "ong" ? (
                <DashboardOng />
            ) : (
                // <StyledBoxModal>
                <CircularProgress />
                // </StyledBoxModal>
            )}
        </>
    );
}
