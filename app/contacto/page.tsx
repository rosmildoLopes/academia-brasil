import React from 'react';
import Form from '../components/Form';
import ContactForm from '../components/contactForm/contactForm';
import Consulta from '../components/Consulta';
import {
	agba,
	titan,
	ultra,
	bagel,
	shrikhand,
	luckiest,
} from '../font/font';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Contacto',
	description:
		'Ponete en contacto con Academia Numen para cualquier consulta o información.',
};

const vocacionFonts = [
	{ letter: 'V', fontClass: ultra.className },
	{ letter: 'o', fontClass: bagel.className },
	{ letter: 'c', fontClass: ultra.className },
	{ letter: 'a', fontClass: shrikhand.className },
	{ letter: 'ç', fontClass: ultra.className },
	{ letter: 'ã', fontClass: ultra.className },
	{ letter: 'O', fontClass: shrikhand.className },
];

const Contacto = () => {
	return (
		<div className='py-24'>
			<div className='flex justify-center items-center mb-9  mx-auto flex-wrap'>
				<div
					className={`${titan.className} text-white text-3xl lg:text-5xl lg:mt-10 flex flex-wrap justify-center items-center w-7/12 text-center`}
				>
					<p>ESTUDE NA&nbsp;</p>
					<p className={`${agba.className} text-firstBlue`}>
						NUMEN&nbsp;ACADEMY
					</p>
					<p
						className={`${titan.className} text-green-gradient`}
					>
						ONDE VOCÊ ESTIVER
					</p>
				</div>
			</div>
			<div className='flex flex-col lg:flex-row gap-8 w-11/12 mx-auto'>
				<Consulta />
				<ContactForm />
			</div>
			<div className='flex justify-center items-center w-10/12 lg:w-9/12 relative mx-auto my-6 '>
				<div className='text-white flex flex-row gap-8 justify-center items-center text-4xl lg:text-7xl'>
					<div className='flex items-center gap-6 w-11/12 mx-auto'>
						<Image
							src='/aperturaExclamacion.svg'
							alt='tu vocacion te espera'
							width={100}
							height={100}
							className='w-6 md:w-12 '
						/>
						<div className='flex flex-col justify-center items-center'>
							<div className='flex justify-center items-center'>
								<p className={`${ultra.className}`}>
									SUA&nbsp;
								</p>
								<p>
									{vocacionFonts.map((item, index) => (
										<span
											key={index}
											className={`${item.fontClass} text-violet-gradient`}
										>
											{item.letter}
										</span>
									))}
								</p>
							</div>
							<div className='flex justify-center items-center'>
								<p
									className={`${ultra.className} text-center`}
								>
									ESPERA POR{' '}
									<span
										className={`${titan.className} text-green-gradient`}
									>
										VOCÊ
									</span>
								</p>
							</div>
						</div>
						<Image
							src='/cierreExclamacion.svg'
							alt='tu vocacion te espera'
							width={100}
							height={100}
							className='w-6 md:w-12'
						/>
					</div>

					<div className='flex items-center'>
						<Image
							src='/estrella1Contacto.svg'
							alt='tu vocacion te espera'
							width={100}
							height={100}
							className='absolute w-16 left-0 -top-14 lg:-top-20'
						/>
					</div>
				</div>

				<Image
					src='/estrella2Contacto.svg'
					alt='tu vocacion te espera'
					width={100}
					height={100}
					className='absolute w-16 right-0 -bottom-20 lg:-bottom-10'
				/>
			</div>
		</div>
	);
};

export default Contacto;
