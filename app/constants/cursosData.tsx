export type Curso = {
	id: number;
	name: string;
	modality: string;
	time: string;
	modules: string;
	support: string;
	info: string;
};

export type CursosData = {
	desarrollo: Curso[];
	marketing: Curso[];
	projectManagement: Curso[];
	seguridadYData: Curso[];
	idiomas: Curso[];
	// Agrega más categorías si es necesario
};

const cursosData: CursosData = {
	desarrollo: [
		{
			id: 1,
			name: 'DESARROLLO WEB FULL STACK',
			modality: 'Sincrónica',
			time: '8 meses',
			modules: '8 módulos',
			support: 'Con Tutores',
			info: '/fullstack',
		},
		{
			id: 2,
			name: 'DESARROLLO WEB FRONT END',
			modality: 'Sincrónica',
			time: '6 meses y medio',
			modules: '4 módulos',
			support: 'Con Tutores',
			info: '/frontend',
		},
		{
			id: 3,
			name: 'DESARROLLO DE APLICACIONES',
			modality: 'Sincrónica',
			time: '4 meses',
			modules: '5 módulos',
			support: 'Virtual Con Tutores',
			info: '/apps',
		},
		{
			id: 4,
			name: 'DESARROLLO EN WORDPRESS',
			modality: 'Sincrónica',
			time: '4 meses',
			modules: '8 módulos',
			support: 'Virtual Con Tutores',
			info: '/wordPress',
		},
		{
			id: 5,
			name: 'DISEÑO UX/UI',
			modality: 'Sincrónica',
			time: '6 meses',
			modules: '6 módulos',
			support: 'Virtual Con Tutores',
			info: 'disenoUXUI',
		},
	],
	marketing: [
		{
			id: 1,
			name: 'MARKETING DIGITAL',
			modality: 'Virtual',
			time: '7 meses',
			modules: '7 módulos',
			support: 'Virtual',
			info: '/marketing',
		},
		{
			id: 2,
			name: 'MARKETING POLITICO',
			modality: 'Virtual',
			time: '8 meses',
			modules: '5 módulos',
			support: 'Virtual',
			info: '/marketingPolitico',
		},
		{
			id: 3,
			name: 'COMMUNITY MANAGER',
			modality: 'Sincrónica / Asincrónica',
			time: '3 meses',
			modules: '2 módulos',
			support: 'Virtual',
			info: '/communityManagement',
		},
		{
			id: 4,
			name: 'GOOGLE ADS',
			modality: 'Sincrónica / Asincrónica',
			time: '1 mes y medio',
			modules: '7 módulos',
			support: 'Virtual',
			info: '/googleAds',
		},
	],
	projectManagement: [
		{
			id: 1,
			name: 'PROJECT MANAGEMENT',
			modality: 'Sincrónica / Asincrónica',
			time: '4 meses',
			modules: '4 módulos',
			support: 'Virtual',
			info: '/projectManagement',
		},
		{
			id: 2,
			name: 'PREPARACIÓN PARA EL EXAMEN PMP',
			modality: 'Sincrónica',
			time: '2 meses',
			modules: '6 módulos',
			support: 'Virtual',
			info: '/examenPMP',
		},
		{
			id: 3,
			name: 'AGILIDAD Y SCRUM',
			modality: 'Sincrónica',
			time: '2 meses',
			modules: '2 módulos',
			support: 'Virtual',
			info: '/#',
		},
	],
	seguridadYData: [
		{
			id: 1,
			name: 'CIBERSEGURIDAD',
			modality: 'Sincrónica',
			time: '8 meses',
			modules: '6 módulos',
			support: 'Virtual',
			info: '/ciberseguridad',
		},
		{
			id: 2,
			name: 'DATA ANALYTICS',
			modality: 'Sincrónica',
			time: '6 meses',
			modules: '6 módulos',
			support: 'Virtual',
			info: '/dataAnalytics',
		},
	],
	idiomas: [
		{
			id: 1,
			name: 'IDIOMAS',
			modality: 'Virtual',
			time: '6 meses',
			modules: '5 módulos',
			support: 'Virtual',
			info: 'https://en.wikipedia.org/wiki/Full_stack',
		},
		{
			id: 2,
			name: 'IDIOMAS 2',
			modality: 'Virtual',
			time: '6 meses',
			modules: '5 módulos',
			support: 'Virtual',
			info: 'https://en.wikipedia.org/wiki/Full_stack',
		},
		{
			id: 3,
			name: 'IDIOMAS 3',
			modality: 'Virtual',
			time: '6 meses',
			modules: '5 módulos',
			support: 'Virtual',
			info: 'https://en.wikipedia.org/wiki/Full_stack',
		},
		{
			id: 4,
			name: 'IDIOMAS 4',
			modality: 'Virtual',
			time: '6 meses',
			modules: '5 módulos',
			support: 'Virtual',
			info: 'https://en.wikipedia.org/wiki/Full_stack',
		},
	],
};

export default cursosData;
