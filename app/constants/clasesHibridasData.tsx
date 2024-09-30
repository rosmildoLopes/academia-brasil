import React from 'react';
import { HiOutlineAcademicCap } from 'react-icons/hi';
import { CgTimer } from 'react-icons/cg';
import { PiNotepadBold } from 'react-icons/pi';
import { HiOutlineDesktopComputer } from 'react-icons/hi';

export interface ClaseItem {
	icon: React.ReactNode;
	item: string;
}

export interface Clase {
	tab: string;
	title: string;
	items: ClaseItem[];
}

export const clasesHibridasData1: Clase[] = [
	{
		tab: 'Clase 1',
		title: 'Tema que se va a ver: Lalalala laalal si lalalala ñalalal1',
		items: [
			{ icon: <HiOutlineAcademicCap />, item: 'Punteo' },
			{ icon: <CgTimer />, item: 'Punteo' },
			{ icon: <PiNotepadBold />, item: 'Punteo' },
			{ icon: <HiOutlineDesktopComputer />, item: 'Punteo' },
		],
	},
];

export const clasesHibridasData2: Clase[] = [
	{
		tab: 'Clase 2',
		title: 'Tema que se va a ver: Lalalala laalal si lalalala ñalalal2',
		items: [
			{ icon: <HiOutlineAcademicCap />, item: 'Punteo' },
			{ icon: <CgTimer />, item: 'Punteo' },
			{ icon: <PiNotepadBold />, item: 'Punteo' },
			{ icon: <HiOutlineDesktopComputer />, item: 'Punteo' },
		],
	},
];

export const clasesHibridasData3: Clase[] = [
	{
		tab: 'Clase 3',
		title: 'Tema que se va a ver: Lalalala laalal si lalalala ñalalal3',
		items: [
			{ icon: <HiOutlineAcademicCap />, item: 'Punteo' },
			{ icon: <CgTimer />, item: 'Punteo' },
			{ icon: <PiNotepadBold />, item: 'Punteo' },
			{ icon: <HiOutlineDesktopComputer />, item: 'Punteo' },
		],
	},
];
