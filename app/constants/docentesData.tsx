interface Docente {
	id: number;
	src: string;
	alt: string;
	name: string;
	profession: string;
	course: string;
	extraImages?: {
		src: string;
		alt: string;
		href: string;
	}[];
}

export const docentesProjectManagement: Docente[] = [
	{
		id: 1,
		src: '/nataliaBasil.svg',
		alt: 'Natalia Basil',
		name: 'Natalia Basil',
		profession: ' Especialista en Sistemas de Control',
		course: 'Project Management Professional PMP N°1941090',
		extraImages: [
			{
				src: '/linkedInDocentes.svg',
				alt: 'Natalia',
				href: 'https://www.linkedin.com/in/nbasil/',
			},
		],
	},
	{
		id: 2,
		src: '/pmAlejandroGabay.svg',
		alt: 'Alejandro Gabay',
		name: 'Alejandro Gabay',
		profession:
			'Especializado en la implementación de Metodologías de Gestión y de Proyectos Informáticos y de Servicios',
		course: '',
		extraImages: [
			{
				src: '/linkedInDocentes.svg',
				alt: 'Alejandro',
				href: 'https://www.linkedin.com/in/alejandrogabay/',
			},
		],
	},
	{
		id: 3,
		src: '/pmCarlosMari.svg',
		alt: 'Carlos Mari',
		name: 'Carlos Mari',
		profession: 'PMP, eCommerce Specialist,',
		course: 'CSM-Certified Scrum Master',
		extraImages: [
			{
				src: '/linkedInDocentes.svg',
				alt: 'carlos mari linkedin',
				href: 'https://www.linkedin.com/in/carlos-mari-b781731/',
			},
		],
	},
	{
		id: 4,
		src: '/pmAdrianaCibelli.svg',
		alt: 'Adriana Cibelli',
		name: 'Adriana Cibelli',
		profession:
			'Especialista en Diseño e Implementación de PMO, con certificación PMO-CP® por la Global PMO Alliance',
		course: 'Project Management',
		extraImages: [
			{
				src: '/linkedInDocentes.svg',
				alt: 'Adriana Cibelli linkedin',
				href: 'https://www.linkedin.com/in/adrianacibelli1/',
			},
		],
	},
];
export const docentesFullstack: Docente[] = [
	{
		id: 1,
		src: '/fsMarcosGual.svg',
		alt: 'Marcos Gual',
		name: 'Marcos Gual',
		profession: 'Fullstack Developer',
		course: 'Desarrollador JavaScript',
		extraImages: [
			{
				src: '/linkedInDocentes.svg',
				alt: 'Marcos Gual',
				href: 'https://www.linkedin.com/in/marcos-gual/',
			},
		],
	},
	{
		id: 2,
		src: '/fsCintia.svg',
		alt: 'Cintia',
		name: 'Cintia',
		profession: '',
		course: 'Desarrolladora Fullstack',
		extraImages: [
			{
				src: '/githubDocentes.svg',
				alt: 'Marcos Gual',
				href: 'https://github.com/Cin-1',
			},
		],
	},
	{
		id: 3,
		src: '/fsMatias.svg',
		alt: 'Pedro Ramirez',
		name: 'Matias Dominguez',
		profession: '',
		course: 'Desarrollador Frontend',
		extraImages: [
			{
				src: '/linkedInDocentes.svg',
				alt: 'Marcos Gual',
				href: 'https://www.linkedin.com/in/dominguezmatiasadrian/',
			},
		],
	},
	{
		id: 4,
		src: '/fsFedericoGomez.svg',
		alt: 'Marina Vega',
		name: 'Sebastian Moschini',
		profession: '	',
		course:
			'Tec. Analista de Sistemas y FullStack developer ',
		extraImages: [
			{
				src: '/linkedInDocentes.svg',
				alt: 'Marcos Gual',
				href: 'https://www.linkedin.com/in/sebamoschini/',
			},
		],
	},
	{
		id: 5,
		src: '/fsFederico.svg',
		alt: 'Marina Vega',
		name: 'Federico Gomez',
		profession: '	',
		course: 'Backend developer ',
		extraImages: [
			{
				src: '/linkedInDocentes.svg',
				alt: 'Marcos Gual',
				href: 'https://www.linkedin.com/in/federico-e-gomez/',
			},
		],
	},
];
export const docentesMarketing: Docente[] = [
	{
		id: 1,
		src: '/jeronimo.svg',
		alt: 'Jeronimo Rivera',
		name: 'Jerónimo Rivera',
		profession: 'Marketing Digital',
		course: '',
		extraImages: [
			{
				src: '/linkedInDocentes.svg',
				alt: 'linkedin',
				href: 'https://www.linkedin.com/in/riverajeronimo/',
			},
		],
	},
	{
		id: 2,
		src: '/matiasDeLuca.svg',
		alt: 'Matias de Luca',
		name: 'Matias de Luca',
		profession:
			'Analista de Marketing Digital y Paid Media Lead, Especialista en Google Ads',
		course: '',
		extraImages: [
			{
				src: '/linkedInDocentes.svg',
				alt: 'linkedin',
				href: 'https://www.linkedin.com/in/mat%C3%ADas-de-luca-382880208/',
			},
		],
	},
];
export const docentesCiberseguridad: Docente[] = [
	{
		id: 1,
		src: '/csSolangeGalaz.svg',
		alt: 'Solange Galaz',
		name: 'Solange Galaz',
		profession: 'Licenciada en Sistemas Informáticos',
		course: 'Auditora de TI',
		extraImages: [
			{
				src: '/linkedInDocentes.svg',
				alt: 'Marcos Gual',
				href: 'https://www.linkedin.com/in/lic-solange-galaz/',
			},
		],
	},
	{
		id: 2,
		src: '/csMarcosSuarez.svg',
		alt: 'marcos Suarez',
		name: 'Marcos Suarez',
		profession: 'NcsMarcosSuarez, Pentester',
		course: 'Bug Bounty hunter',
		extraImages: [
			{
				src: '/linkedInDocentes.svg',
				alt: 'Marcos Gual',
				href: 'https://www.linkedin.com/in/marcos-su%C3%A1rez-573770138/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
			},
		],
	},
	{
		id: 3,
		src: '/csRominaTorres.svg',
		alt: 'Romina Torres',
		name: 'Romina Torres',
		profession: 'Analista de Seguridad Informática',
		course: 'SOC Analyst',
		extraImages: [
			{
				src: '/linkedInDocentes.svg',
				alt: 'Marcos Gual',
				href: 'https://www.linkedin.com/in/romina-magali-torres/',
			},
		],
	},
];
export const docentesDataAnalytics: Docente[] = [
	{
		id: 1,
		src: '/daFlavioBevilacqua.svg',
		alt: 'Flavio Bevilacqua',
		name: 'Flavio Bevilacqua',
		profession: 'Consultor Senior en BI & Analytics',
		course: 'Desarrollo de proyectos E-Learning',
		extraImages: [
			{
				src: '/linkedInDocentes.svg',
				alt: 'Marcos Gual',
				href: 'https://www.linkedin.com/in/flabevy/',
			},
		],
	},
];
export const docentesWordpress: Docente[] = [
	{
		id: 1,
		src: '/fsMatias.svg',
		alt: 'Pedro Ramirez',
		name: 'Matias Dominguez',
		profession: '',
		course: 'Desarrollador Frontend',
		extraImages: [
			{
				src: '/linkedInDocentes.svg',
				alt: 'Marcos Gual',
				href: 'https://www.linkedin.com/in/dominguezmatiasadrian/',
			},
		],
	},
];
export const docentesMarketingPolitico: Docente[] = [
	{
		id: 1,
		src: '/fernando.svg',
		alt: 'Foto de Fernando Cerimedo',
		name: 'Fernando Cerimedo',
		profession:
			'Marketing PhD, Director de Marketing Digital',
		course: '',
		extraImages: [
			{
				src: '/linkedInDocentes.svg',
				alt: 'linkedin',
				href: 'https://www.linkedin.com/in/fernando-cerimedo/',
			},
			{
				src: '/mailDocentes.svg',
				alt: 'mail',
				href: 'mailto:fernando@numenpublicidad.com',
			},
			{
				src: '/twitterDocentes.svg',
				alt: 'twitter',
				href: 'https://x.com/FerCerimedo_ok',
			},
		],
	},
	{
		id: 1,
		src: '/nataliaBasil.svg',
		alt: 'Natalia Basil',
		name: 'Natalia Basil',
		profession: ' Especialista en Sistemas de Control',
		course: 'Project Management Professional PMP N°1941090',
		extraImages: [
			{
				src: '/linkedInDocentes.svg',
				alt: 'Natalia',
				href: 'https://www.linkedin.com/in/nbasil/',
			},
		],
	},
	{
		id: 3,
		src: '/agustinCoto.svg',
		alt: 'Matias de Luca',
		name: 'Agustin Coto',
		profession:
			'Ma. Economía y Ciencias Políticas. Licenciado en Historia. Esp. Gestión del Patrimonio',
		course: '',
		extraImages: [
			{
				src: '/linkedInDocentes.svg',
				alt: 'linkedin',
				href: 'https://www.linkedin.com/in/agust%C3%ADn-pedro-coto-4766ba72/',
			},
		],
	},
];
