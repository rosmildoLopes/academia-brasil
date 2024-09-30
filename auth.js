import { useState, useEffect } from 'react';

const useGoogleSheets = () => {
	const [content, setContent] = useState('');
	const [tokenClient, setTokenClient] = useState(null);

	useEffect(() => {
		const loadGapi = () => {
			const script = document.createElement('script');
			script.src = 'https://apis.google.com/js/api.js';
			script.onload = () => {
				gapi.load('client', initializeGapiClient);
			};
			document.body.appendChild(script);
		};

		const loadGis = () => {
			const script = document.createElement('script');
			script.src = 'https://accounts.google.com/gsi/client';
			script.onload = gisLoaded;
			document.body.appendChild(script);
		};

		loadGapi();
		loadGis();
	}, []);

	const CLIENT_ID =
		process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
	const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
	const DISCOVERY_DOC =
		'https://sheets.googleapis.com/$discovery/rest?version=v4';
	const SCOPES =
		'https://www.googleapis.com/auth/spreadsheets';

	const initializeGapiClient = async () => {
		await gapi.client.init({
			apiKey: API_KEY,
			discoveryDocs: [DISCOVERY_DOC],
		});
	};

	const gisLoaded = () => {
		const client = google.accounts.oauth2.initTokenClient({
			client_id: CLIENT_ID,
			scope: SCOPES,
			callback: '',
		});
		setTokenClient(client);
	};

	const handleAuthClick = () => {
		if (!tokenClient) return;

		tokenClient.callback = async resp => {
			if (resp.error !== undefined) {
				throw resp;
			}
			setIsAuthorized(true);
		};

		if (gapi && gapi.client && gapi.client.getToken) {
			if (gapi.client.getToken() === null) {
				tokenClient.requestAccessToken({
					prompt: 'consent',
				});
			} else {
				tokenClient.requestAccessToken({ prompt: '' });
			}
		} else {
			console.error('GAPI client not initialized');
		}
	};

	const handleSignoutClick = () => {
		if (gapi && gapi.client && gapi.client.getToken) {
			const token = gapi.client.getToken();
			if (token) {
				google.accounts.oauth2.revoke(token.access_token);
				gapi.client.setToken('');
				setContent('');
				setIsAuthorized(false);
			}
		} else {
			console.error('GAPI client not initialized');
		}
	};

	const listMajors = async () => {
		try {
			const response =
				await gapi.client.sheets.spreadsheets.values.get({
					spreadsheetId:
						'14aM_33Dgy7jj_OKNVqlow2r36HV873OCTSMpRMJ5JWQ',
					range: 'certificados!A:F',
				});

			const range = response.result;
			if (
				!range ||
				!range.values ||
				range.values.length === 0
			) {
				setContent('No values found.');
				return;
			}

			const output = range.values.reduce(
				(str, row) => `${str}${row[0]}, ${row[8]}\n`,
				'Name, Major:\n',
			);
			setContent(output);
		} catch (err) {
			setContent(err.message);
		}
	};

	const searchByDNI = async dni => {
		try {
			const response =
				await gapi.client.sheets.spreadsheets.values.get({
					spreadsheetId:
						'14aM_33Dgy7jj_OKNVqlow2r36HV873OCTSMpRMJ5JWQ',
					range: 'certificados!A2:G',
				});
			const rows = response.result.values;
			if (rows && rows.length) {
				for (let i = 0; i < rows.length; i++) {
					const row = rows[i];

					if (row[3].trim() === dni.trim()) {
						console.log('Matching row:', row);
						return {
							id: row[0],
							nombre: row[1],
							apellido: row[2],
							dni: row[3],
							link: row[4] || 'Sin certificado',
							curso: row[5],
							prueba: row[6],
						};
					}
				}
			}

			return { error: true };
		} catch (error) {
			console.error('Error: ', error);
			return { error: true };
		}
	};

	const editContacto = async contenido => {
		if (!gapi || !gapi.client || !gapi.client.sheets) {
			throw new Error('GAPI client not initialized');
		}

		const update = [
			contenido.curso,
			contenido.Nombre,
			contenido.Mail,
			contenido.Mensaje,
			new Date().toISOString(),
		];

		const response =
			await gapi.client.sheets.spreadsheets.values.append({
				spreadsheetId:
					'14aM_33Dgy7jj_OKNVqlow2r36HV873OCTSMpRMJ5JWQ',
				range: 'Contacto!A:H',
				valueInputOption: 'USER_ENTERED',
				resource: {
					values: [update],
				},
			});

		return response;
	};

	return {
		handleAuthClick,
		handleSignoutClick,
		listMajors,
		searchByDNI,
		editContacto,
		content,
	};
};

export default useGoogleSheets;
