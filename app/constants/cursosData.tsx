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
};

const cursosData: CursosData = {
	desarrollo: [
		{
			id: 1,
			name: 'DESENVOLVIMENTO WEB FULL STACK',
			modality: 'Síncrona',
			time: '8 meses',
			modules: '8 módulos',
			support: 'Con Tutores',
			info: '/fullstack',
		},
		{
			id: 2,
			name: 'DESENVOLVIMENTO WEB FRONT END',
			modality: 'Síncrona',
			time: '6 meses y medio',
			modules: '4 módulos',
			support: 'Con Tutores',
			info: '/frontend',
		},
		{
			id: 3,
			name: 'DESENVOLVIMENTO DE APPS',
			modality: 'Síncrona',
			time: '4 meses',
			modules: '5 módulos',
			support: 'Virtual Con Tutores',
			info: '/apps',
		},
		{
			id: 4,
			name: 'DESENVOLVIMENTO WORDPRESS',
			modality: 'Síncrona',
			time: '4 meses',
			modules: '8 módulos',
			support: 'Virtual Con Tutores',
			info: '/wordPress',
		},
		{
			id: 5,
			name: 'DISEÑO UX/UI',
			modality: 'Síncrona',
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
			modality: 'Síncrona / Asíncrona',
			time: '3 meses',
			modules: '2 módulos',
			support: 'Virtual',
			info: '/communityManagement',
		},
		{
			id: 4,
			name: 'GOOGLE ADS',
			modality: 'Síncrona / Asíncrona',
			time: '1 mês e meio',
			modules: '7 módulos',
			support: 'Virtual',
			info: '/googleAds',
		},
	],
};

export default cursosData;
