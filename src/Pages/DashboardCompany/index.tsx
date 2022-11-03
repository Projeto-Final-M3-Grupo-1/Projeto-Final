import { DashboardDev } from "../../Components/Dashboards/DashboardDev";
import { DashboardAdmin } from "../../Components/Dashboards/DashboardAdmin";
import { UserContext } from "../../Providers/UserProvider";
import { useContext } from "react";
import { DashboardOng } from "../../Components/Dashboards/DashboardOng";

export function Dashboard() {
    const { user } = useContext(UserContext);
    const { typeUser } = user;

    return (
        <>
            {typeUser == "admin" ? (
                <DashboardAdmin />
            ) : typeUser == "dev" ? (
                <DashboardDev />
            ) : (
                <DashboardOng />
            )}
        </>
    );
}
