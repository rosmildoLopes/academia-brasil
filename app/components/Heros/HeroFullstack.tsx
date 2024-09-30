'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { titan } from '@/app/font/font';
import Link from 'next/link';
import HablarConAsesor from '../HablarConAsesor';
import ProgramaFullstack from '../programaForms/ProgramaDesarrollo';

export default function HeroFullstack() {
	const [showModal, setShowModal] = useState(false);
	const handleButtonClick = () => {
		setShowModal(true);
	};
	return (
		<div className='relative w-full pt-4'>
			<div className='w-1/12'>
				<Image
					src={'./cursadas.svg'}
					alt='Cursada Virtual'
					width={141}
					height={57}
					className='absolute top-8 left-20	lg:w-36 hidden lg:block'
				/>
			</div>

			<div className='flex gap-6 w-8/12 mx-auto justify-center lg:hidden'>
				<Image
					src={'./CursadaVirtualIcon.svg'}
					alt='Cursada Virtual'
					width={141}
					height={57}
					className='w-20  lg:w-36'
				/>
				<Image
					src={'./CursadaRemotaIcon.svg'}
					alt='Cursada Remota'
					width={141}
					height={57}
					className='w-20 lg:w-36'
				/>
				<Image
					src={'./CursadaHibridaIcon.svg'}
					alt='Cursada Híbrida'
					width={141}
					height={57}
					className='w-20  lg:w-36'
				/>
			</div>
			<h2
				className={`${titan.className} flex justify-center mb-6 md:pr-30 md:mb-10 mx-auto text-green-gradient text-5xl lg:text-9xl`}
			>
				DESARROLLO
			</h2>
			<Image
				src={'./fullstackIconHero.svg'}
				alt='Icon'
				width={116}
				height={130}
				className='absolute w-[63px] h-[47px] z-10 top-16 md:w-[116px] md:h-[130px] md:left-60 md:top-20'
			/>
			<div className='relative w-11/12  lg:w-10/12 mx-auto text-violet-gradient text-[44px] md:text-9xl flex justify-center md:pl-10 -mt-8'>
				<span className={`${titan.className}`}>
					Web Fullstack
				</span>
			</div>
			<Image
				src={'./fullstackIconHero2.svg'}
				alt='Icon'
				width={144}
				height={183}
				className='absolute w-[82px] h-[58px] z-50 top-6 -right-4 md:w-[144px] md:h-[183px] md:right-40 md:top-1 '
			/>
			<div className='flex flex-col pt-4 w-[70%] space-y-3 mx-auto font-black text-xs text-firstBlue md:flex-row md:space-x-5 md:w-full md:space-y-0 md:justify-center'>
				<button
					onClick={handleButtonClick}
					className='px-3 py-2 border-2 border-firstBlue text-center rounded-3xl hover:bg-firstBlue hover:text-black md:text-lg md:px-16 md:py-3 md:text-black md:bg-firstBlue md:rounded-full md:hover:bg-transparent md:hover:text-firstBlue'
				>
					Descargar Programa
				</button>
				<HablarConAsesor
					message='Estoy interesado en el curso de Fullstack , me gustaría recibir mas información'
					phoneNumber='5491131262388'
				/>
				<Link
					href='https://tienda.academianumen.com.ar/producto/desarrollo-web-full-stack-inicio-agosto-2024-2/'
					target='_blank'
					className='px-3 py-2 border-2 border-firstBlue text-center rounded-3xl hover:bg-firstBlue hover:text-black md:text-lg md:px-16 md:py-3 md:text-black md:bg-firstBlue md:rounded-full md:hover:bg-transparent md:hover:text-firstBlue'
				>
					Inscribirme
				</Link>
			</div>
			{showModal && (
				<ProgramaFullstack
					onClose={() => setShowModal(false)}
				/>
			)}
		</div>
	);
}
