import { message } from 'antd';
import axios from 'axios';

export const getLocation = () => {
	return new Promise<string | null>((resolve, reject) => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				async (position) => {
					const { latitude, longitude } = position.coords;
					try {
						const currency = await getCountry(latitude, longitude);
						resolve(currency);
					} catch (error) {
						reject(error);
					}
				},
				(error) => {
					switch (error.code) {
						case error.PERMISSION_DENIED:
							message.error('User denied the request for Geolocation.');
							break;
						case error.POSITION_UNAVAILABLE:
							message.error('Location information is unavailable.');
							break;
						case error.TIMEOUT:
							message.error('The request to get user location timed out.');
							break;
						default:
							message.error('An unknown error occurred.');
							break;
					}
					reject('Geolocation error');
				}
			);
		} else {
			message.error('Geolocation is not supported by this browser.');
			reject('Geolocation not supported');
		}
	});
};

const getCountry = async (latitude: number, longitude: number) => {
	const apiKey = 'e876d698f4f84779a58212cc5b59427f';
	const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`;
	try {
		const response = await axios.get(url);
		const country = response.data.results[0].components.country;
		return getCurrencyCode(country);
	} catch (error) {
		message.error('Failed to fetch country information.');
		throw new Error('Failed to fetch country information');
	}
};

const getCurrencyCode = (country: string): string | null => {
	
	const currencyMap: { [key: string]: string } = {
		'United Arab Emirates': 'AED',
		'Saudi Arabia': 'SAR',
		'Qatar': 'QAR',
		'India': 'INR',
	};
	return currencyMap[country] || null;
};
