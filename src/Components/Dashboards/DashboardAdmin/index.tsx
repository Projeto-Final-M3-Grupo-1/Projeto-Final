import { useContext, useEffect } from "react";
import { AuthContext } from "../../../Providers/AuthContext";
import HeaderDashboard from "../../HeaderDashboard";
import Publications from "../../Publication";

export const DashboardAdmin = () => {
	const { loadingUser } = useContext(AuthContext);
	useEffect(() => {
		loadingUser();
	}, []);
	return (
		<>
			<HeaderDashboard />
			<Publications></Publications>
		</>
	);
};
