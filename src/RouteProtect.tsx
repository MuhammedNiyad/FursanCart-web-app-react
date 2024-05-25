import { Navigate } from "react-router-dom";
import { getUser, getUserToken } from "./helpers/loggedUser"

export const RouterProtector = ({ children }: any) => {
	const userData = getUser();
	const userToken = getUserToken()

	if (userData && userToken) {
		return <>{children}</>
	} else {
		return <Navigate to={"/authorize"} />;
	}
};


export const LoginProtector = ({ children }: any) => {
	const userData = getUser();
	const userToken = getUserToken();

	if (userData && userToken) {
		return <Navigate to={'/'}/>
	} else {
		return <>{children}</>
	}
}