import { DashboardDev } from "../../Components/Dashboards/DashboardDev";
import { DashboardAdmin } from "../../Components/Dashboards/DashboardAdmin";
import { UserContext, UserProvider } from "../../Providers/UserProvider";
import { useContext } from "react";
import { DashboardOng } from "../../Components/Dashboards/DashboardOng";

export function Dashboard() {
  const { type } = useContext(UserContext);
  const { typeUser } = type;
  console.log(typeUser);
  return (
    <>
      {typeUser === "admin" ? (
        <DashboardAdmin />
      ) : typeUser === "dev" ? (
        <DashboardDev />
      ) : (
        <DashboardOng />
      )}
    </>
  );
}
