import { useContext, useEffect } from "react";
import { AuthContext } from "../../../Providers/AuthContext";
import { UserContext } from "../../../Providers/UserProvider";
import HeaderDashboard from "../../HeaderDashboard";
import Publications from "../../Publication";

export const DashboardAdmin = () => {
	const { loadingUser } = useContext(AuthContext);
	const { renderPublications } = useContext(UserContext);
	useEffect(() => {
		loadingUser();
		renderPublications();
	}, []);
	
	return (
		<>
			<HeaderDashboard />
			<Publications></Publications>
		</>
	);
};
