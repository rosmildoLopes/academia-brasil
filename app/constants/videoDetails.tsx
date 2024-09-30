import Image from 'next/image';

interface CursoData {
	id: number;
	boldStart: number;
	icon: JSX.Element;
	text: string;
}

interface CursoConfig {
	cursoData: CursoData[];
	videoSource: string;
}

export const marketingCursoConfig: CursoConfig = {
	cursoData: [
		{
			id: 1,
			boldStart: 10,
			icon: (
				<Image
					src='/modalidadVirtual.svg'
					alt='Modalidad del curso'
					width={100}
					height={100}
				/>
			),
			text: 'Modalidade Virtual',
		},
		{
			id: 2,
			boldStart: 12,
			icon: (
				<Image
					src='/duracionDelCurso.svg'
					alt='Duración del curso'
					width={100}
					height={100}
				/>
			),
			text: 'Duração de 7 meses',
		},
		{
			id: 3,
			boldStart: 0,
			icon: (
				<Image
					src='/modulos.svg'
					alt='Cantidad de módulos'
					width={100}
					height={100}
				/>
			),
			text: '7 módulos',
		},
		{
			id: 4,
			boldStart: 0,
			icon: (
				<Image
					src='/tituloOficial.svg'
					alt='Título oficial'
					width={100}
					height={100}
				/>
			),
			text: 'Título Oficial',
		},
	],
	videoSource:
		'https://player.vimeo.com/video/997766967?h=7b6eb7c54e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
};

export const fullstackCursoConfig: CursoConfig = {
	cursoData: [
		{
			id: 1,
			boldStart: 12,
			icon: (
				<Image
					src='/modalidadVirtual.svg'
					alt='Modalidad del curso'
					width={100}
					height={100}
				/>
			),
			text: 'Modalidade Síncrona',
		},
		{
			id: 2,
			boldStart: 14,
			icon: (
				<Image
					src='/duracionDelCurso.svg'
					alt='Duración del curso'
					width={100}
					height={100}
				/>
			),
			text: 'Duração de 8 meses',
		},
		{
			id: 3,
			boldStart: 0,
			icon: (
				<Image
					src='/modulos.svg'
					alt='Cantidad de módulos'
					width={100}
					height={100}
				/>
			),
			text: '8 módulos',
		},
		{
			id: 4,
			boldStart: 0,
			icon: (
				<Image
					src='/tituloOficial.svg'
					alt='Título oficial'
					width={100}
					height={100}
				/>
			),
			text: 'Título de Desenvolvimento Fullstack',
		},
	],
	videoSource:
		'https://player.vimeo.com/video/997766967?h=7b6eb7c54e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
};
