import React from 'react';

export interface ClaseItem {
	icon: React.ReactNode;
}

export interface Clase {
	tab: string;
	title: string;
}

export const aprendeTesting: Clase[] = [
	{
		tab: 'Testing',
		title:
			'Aprendé a asegurar la calidad de tu código y el de otros ingresando en el mundo del quality assurance (QA o aseguramiento de calidad). Nuestro curso de testing te va a enseñar las mejores prácticas para asegurar que tanto aplicaciones propias como también las de terceros funcionen correctamente. Aprendé desde fundamentos del testing y su importancia en el ciclo de vida del software a estrategia y planificación de pruebas, gestión de defectos, cómo integrar las metodologías agile en tus procesos de QA y metodologías avanzadas de testing. Vas a aprender no sólo a encontrar errores, sino también a prevenirlos. Perfecto tanto para quienes buscan entrar en la industria tecnológica, como así también para desarrolladores que busquen entregar productos de alta calidad.',
	},
];


