'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import {
	bagel,
	shrikhand,
	luckiest,
	titan,
	ultra,
} from '../../font/font';
import Link from 'next/link';
import ProgramaMarketing from '../programaForms/ProgramaMarketing';

export default function HeroMarketing() {
	const [showModal, setShowModal] = useState(false);
	const handleButtonClick = () => {
		setShowModal(true);
	};
	return (
		<div className='relative w-full'>
			<div className='flex flex-col-reverse justify-center relative '>
				<Image
					src={'./cursadas.svg'}
					alt='Cursada Virtual'
					width={141}
					height={57}
					className='absolute top-8 left-20	lg:w-36 hidden lg:block'
					layout='intrinsic'
				/>
				<h2
					className={`${titan.className} w-11/12 mx-auto text-green-gradient text-5xl lg:text-9xl text-center`}
				>
					MARKETING
				</h2>
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
						layout='intrinsic'
					/>
					<Image
						src={'./CursadaHibridaIcon.svg'}
						alt='Cursada Híbrida'
						width={141}
						height={57}
						className='w-20  lg:w-36'
						layout='intrinsic'
					/>
				</div>
			</div>
			<div className='relative w-7/12  lg:w-6/12 mx-auto text-violet-gradient text-5xl md:text-9xl flex justify-center py-5 -mt-8 items-center'>
				<Image
					src={'./mkt1.svg'}
					alt='Icon'
					width={150.36}
					height={163.7}
					layout='intrinsic'
					className='absolute w-10 lg:w-44 -left-2 lg:-left-16'
				/>
				<Image
					src={'./mkt2.svg'}
					alt='Icon	'
					width={150.36}
					height={163.7}
					layout='intrinsic'
					className='absolute w-10 lg:w-44 -right-4 lg:-right-20'
				/>
				<span className={`${titan.className}`}>
					Digital
				</span>
			</div>
			<div className='flex flex-col pt-4 w-[70%] space-y-3 mx-auto font-black text-xs text-firstBlue md:flex-row md:space-x-5 md:w-full md:space-y-0 md:justify-center'>
				<button
					onClick={handleButtonClick}
					className='px-3 py-2 border-2 border-firstBlue rounded-3xl hover:bg-firstBlue hover:text-black md:text-lg text-center md:px-16 md:py-3 md:text-black md:bg-firstBlue md:rounded-full md:hover:bg-transparent md:hover:text-firstBlue'
				>
					Baixar Programa
				</button>
				<Link
					href='https://web.whatsapp.com/send?phone=5491131262388&text=Estoy%20interesado%20en%20el%20curso%20de%20Marketing%20Digital%20,me%20gustaría%20recibir%20mas%20información'
					target='_blank'
					className='px-3 py-2 border-2 border-firstBlue rounded-3xl hover:bg-firstBlue hover:text-black md:text-lg md:px-16 md:py-3 text-center md:text-black md:bg-firstBlue md:rounded-full md:hover:bg-transparent md:hover:text-firstBlue'
				>
					Quero falar com alguém
				</Link>
				<Link
					href='https://tienda.academianumen.com.ar/producto/marketing-digital-inicio-agosto-2024/'
					target='_blank'
					className='px-3 py-2 border-2 border-firstBlue rounded-3xl hover:bg-firstBlue hover:text-black md:text-lg md:px-16 md:py-3 text-center md:text-black md:bg-firstBlue md:rounded-full md:hover:bg-transparent md:hover:text-firstBlue'
				>
					Inscrever-se
				</Link>
			</div>
			{showModal && (
				<ProgramaMarketing
					onClose={() => setShowModal(false)}
				/>
			)}
		</div>
	);
}
