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
			text: 'Modalidad Virtual',
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
			text: 'Duración de 7 meses',
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
			text: 'Título Oficial de Diplomatura',
		},
	],
	videoSource:
		'https://player.vimeo.com/video/997766967?h=7b6eb7c54e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
};

export const marketingPoliticoCursoConfig: CursoConfig = {
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
			text: 'Modalidad Virtual',
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
			text: 'Duración de 8 meses',
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
			text: '5 módulos',
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
			text: 'Título Oficial de Diplomatura',
		},
	],
	videoSource:
		'https://player.vimeo.com/video/997766967?h=7b6eb7c54e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
};

export const CommunityManagerCursoConfig: CursoConfig = {
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
			text: 'Modalidad Sincrónica / Asincrónica',
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
			text: 'Duración de 3 meses',
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
			text: '2 módulos',
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
			text: 'Certificación oficial',
		},
	],
	videoSource:
		'https://player.vimeo.com/video/997766967?h=7b6eb7c54e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
};

export const googleAdsCursoConfig: CursoConfig = {
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
			text: 'Modalidad Sincrónica / Asincrónica',
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
			text: 'Duración de 1 mes y medio',
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
			text: 'Certificación oficial',
		},
	],
	videoSource:
		'https://player.vimeo.com/video/997766967?h=7b6eb7c54e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
};

export const projectManagementCursoConfig: CursoConfig = {
	cursoData: [
		{
			id: 1,
			boldStart: 8,
			icon: (
				<Image
					src='/modalidadVirtual.svg'
					alt='Modalidad del curso'
					width={100}
					height={100}
				/>
			),
			text: 'Modalidad Sincrónica/Asincrónica',
		},
		{
			id: 2,
			boldStart: 10,
			icon: (
				<Image
					src='/duracionDelCurso.svg'
					alt='Duración del curso'
					width={100}
					height={100}
				/>
			),
			text: 'Duración de 4 meses',
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
			text: '4 módulos',
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
			text: 'Título de Especialista en Project Management',
		},
	],
	videoSource:
		'https://player.vimeo.com/video/997766967?h=7b6eb7c54e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
};

export const examenPMPCursoConfig: CursoConfig = {
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
			text: 'Modalidad Sincrónica',
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
			text: 'Duración de 2 meses',
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
			text: '6 módulos',
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
			text: 'Título Oficial de Diplomatura',
		},
	],
	videoSource:
		'https://player.vimeo.com/video/997766967?h=7b6eb7c54e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
};

export const agilidadYScrumCursoConfig: CursoConfig = {
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
			text: 'Modalidad Sincrónica',
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
			text: 'Duración de 2 meses',
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
			text: '2 módulos',
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
			text: 'Título Oficial de Diplomatura',
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
			text: 'Modalidad Sincrónica',
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
			text: 'Duración de 8 meses',
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
			text: 'Título de Desarrollador Fullstack',
		},
	],
	videoSource:
		'https://player.vimeo.com/video/997766967?h=7b6eb7c54e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
};

export const backendCursoConfig: CursoConfig = {
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
			text: 'Modalidad Sincrónica',
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
			text: 'Duración de 2 meses',
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
			text: '2 módulos',
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
			text: 'Título de diplomatura',
		},
	],
	videoSource:
		'https://player.vimeo.com/video/997766967?h=7b6eb7c54e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
};

export const frontendCursoConfig: CursoConfig = {
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
			text: 'Modalidad Sincrónica',
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
			text: 'Duración de 6 meses y medio',
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
			text: '4 módulos',
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
			text: 'Título Oficial de Diplomatura',
		},
	],
	videoSource:
		'https://player.vimeo.com/video/997766967?h=7b6eb7c54e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
};

export const desarrolloDeAppsCursoConfig: CursoConfig = {
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
			text: 'Modalidad Sincrónica',
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
			text: 'Duración de 4 meses',
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
			text: '5 módulos',
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
			text: 'Título Oficial de Diplomatura',
		},
	],
	videoSource:
		'https://player.vimeo.com/video/997766967?h=7b6eb7c54e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
};

export const wordPressCursoConfig: CursoConfig = {
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
			text: 'Modalidad Sincrónica',
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
			text: 'Duración de 4 meses',
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
			text: 'Título Oficial de Diplomatura',
		},
	],
	videoSource:
		'https://player.vimeo.com/video/997766967?h=7b6eb7c54e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
};

export const disenoUXUICursoConfig: CursoConfig = {
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
			text: 'Modalidad Sincrónica',
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
			text: 'Duración de 6 meses',
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
			text: '6 módulos',
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
			text: 'Título Oficial de Diplomatura',
		},
	],
	videoSource:
		'https://player.vimeo.com/video/997766967?h=7b6eb7c54e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
};

export const ciberseguridadCursoConfig: CursoConfig = {
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
			text: 'Modalidad Sincrónica',
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
			text: 'Duración de 8 meses',
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
			text: '6 módulos',
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
			text: 'Título Oficial de Diplomatura',
		},
	],
	videoSource:
		'https://player.vimeo.com/video/997766967?h=7b6eb7c54e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
};

export const dataAnalyticsCursoConfig: CursoConfig = {
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
			text: 'Modalidad Sincrónica',
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
			text: 'Duración de 6 meses',
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
			text: '6 módulos',
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
			text: 'Título Oficial de Diplomatura',
		},
	],
	videoSource:
		'https://player.vimeo.com/video/997766967?h=7b6eb7c54e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
};

export const htmlYCssCursoConfig: CursoConfig = {
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
			text: 'Modalidad Sincrónica',
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
			text: 'Duración de 2 meses',
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
			text: '2 módulos',
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
			text: 'Certificación Oficial',
		},
	],
	videoSource:
		'https://player.vimeo.com/video/997766967?h=7b6eb7c54e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
};

export const javascriptCursoConfig: CursoConfig = {
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
			text: 'Modalidad Sincrónica',
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
			text: 'Duración de 2 meses',
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
			text: '1 módulos',
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
			text: 'Certificación Oficial',
		},
	],
	videoSource:
		'https://player.vimeo.com/video/997766967?h=7b6eb7c54e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
};

export const reactCursoConfig: CursoConfig = {
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
			text: 'Modalidad Sincrónica',
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
			text: 'Duración de 2 meses',
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
			text: '1 módulos',
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
			text: 'Certificación Oficial',
		},
	],
	videoSource:
		'https://player.vimeo.com/video/997766967?h=7b6eb7c54e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
};
