interface UserData {
	id: string;
	username: string;
	email: string;
}

function parseUserData(cookieValue:any): UserData | null {
	try {
		const parsedUser = JSON.parse(cookieValue);
		if (
			typeof parsedUser === 'object' &&
			parsedUser !== null &&
			'id' in parsedUser &&
			'username' in parsedUser &&
			'email' in parsedUser
		) {
			return parsedUser as UserData;
		}
	} catch (error) {
		console.error('Failed to parse user data from cookie:', error);
	}
	return null;
}

const userCookie = localStorage.getItem("userData");
const userData = parseUserData(userCookie);
const userToken = localStorage.getItem("accessToken");

export const getUserId = () => {
	
	return userData?.id;
};

export const getUser = () => {
	return localStorage.getItem('userData')
}

export const getUserToken = () => {
	return userToken;
}