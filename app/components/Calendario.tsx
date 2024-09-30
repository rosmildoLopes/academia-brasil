'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { BiMoviePlay } from 'react-icons/bi';
import { MdScreenSearchDesktop } from 'react-icons/md';
import { PiBackpackBold } from 'react-icons/pi';
import Link from 'next/link';

interface CalendarioProps {
	startDate: string;
	endDate: string;
	meetingDate: string;
	buttonText: string;
	linkPreInscripcion: string;
	linkInscripcion: string;
	linkHablarConAsesor: string;
}

const Calendario: React.FC<CalendarioProps> = ({
	startDate,
	endDate,
	meetingDate,
	buttonText,
	linkPreInscripcion,
	linkInscripcion,
	linkHablarConAsesor,
}) => {
	const [showAdditionalInfo, setShowAdditionalInfo] =
		useState(false);

	const toggleAdditionalInfo = () => {
		setShowAdditionalInfo(prevState => !prevState);
	};

	const [rotate, setRotate] = useState<number>(0);

	const handleClick = () => {
		setRotate(prevRotate => prevRotate + 180);
	};

	return (
		<section className='w-11/12 mx-auto'>
			<div className='flex flex-col bg-white rounded-2xl'>
				<div className='rounded-2xl flex flex-row justify-between items-center p-4 w-full'>
					<div className='w-1/4'>
						<div className='relative'>
							<div className='absolute flex -top-10 left-7 gap-2'>
								<div className='text-2xl bg-firstBlue rounded-full h-9 w-9 flex items-center justify-center shadow-lg shadow-slate-900'>
									<BiMoviePlay />
								</div>
								<div className='text-2xl bg-firstBlue rounded-full h-9 w-9 flex items-center justify-center shadow-lg shadow-slate-900'>
									<MdScreenSearchDesktop />
								</div>
								<div className='text-2xl bg-firstBlue rounded-full h-9 w-9 flex items-center justify-center shadow-lg shadow-slate-900'>
									<PiBackpackBold />
								</div>
							</div>
						</div>
						<div className='p-4 border-r-2 border-black w-full flex flex-col items-start pl-10'>
							<p className='font-extrabold'>Desde el:</p>
							<p className='font-black text-4xl'>
								{startDate}
							</p>
						</div>
					</div>
					<div className='flex w-3/4'>
						<div className='p-4 border-r-2 border-black w-1/3 flex flex-col items-start pl-12'>
							<p className='text-start font-extrabold'>
								Hasta el:
							</p>
							<p className='text-start font-black text-4xl'>
								{endDate}
							</p>
						</div>
						<div className='p-4 w-2/3 flex items-center justify-between'>
							<p className='ml-4 font-medium text-lg'>
								{meetingDate}
							</p>
							<button
								className='bg-firstBlue text-black font-black rounded-full px-10 py-3 flex items-center gap-4'
								onClick={() => {
									toggleAdditionalInfo();
									handleClick();
								}}
							>
								<p>{buttonText}</p>
								<div
									style={{
										transform: `rotate(${rotate}deg)`,
										transition:
											'transform 0.3s ease-in-out',
										display: 'inline-block',
									}}
								>
									<Image
										src='down.svg'
										height={50}
										width={50}
										alt='flecha hacia inferior'
										className='w-5'
									/>
								</div>
							</button>
						</div>
					</div>
				</div>
				{showAdditionalInfo && (
					<div className='flex flex-col items-center text-firstBackground bg-firstBlue rounded-2xl h-340 transition-all duration-1000 py-8 px-20 mt-2'>
						<div className='flex justify-center items-center space-x-36'>
							<Link
								href={linkHablarConAsesor}
								target='_blank'
								className='flex flex-col justify-center items-center w-1/3'
							>
								<Image
									src={'./contactoIconCalendar.svg'}
									alt='calendario'
									height={115.34}
									width={116.15}
								/>
								<p className='text-center pt-5 text-lg'>
									Quiero que me{' '}
									<strong>
										contacte un <br />
										asesor{' '}
									</strong>
									para mas información
								</p>
								<button className='text-white font-extrabold py-5'>
									Ver más
								</button>
							</Link>
							<Link
								href={linkPreInscripcion}
								target='_blank'
								className='flex flex-col justify-center items-center w-1/3'
							>
								<Image
									src={'./preinscripcionIconCalendar.svg'}
									alt='preinscripcion'
									height={115.34}
									width={116.15}
								/>
								<p className='text-center pt-5 text-lg'>
									Quiero{' '}
									<strong>
										preinscribirme para guardar mi vacante
									</strong>{' '}
									(no tendrás que pagar aún)
								</p>
								<Link
									href={linkPreInscripcion}
									target='_blank'
									className='text-white font-extrabold py-5'
								>
									Ver más
								</Link>
							</Link>
							<Link
								href={linkInscripcion}
								target='_blank'
								className='flex flex-col justify-center items-center w-1/3'
							>
								<Image
									src={'./inscripcionIconCalendar.svg'}
									alt='inscripcion'
									height={115.34}
									width={116.15}
								/>
								<p className='text-center pt-5 text-lg'>
									Quiero{' '}
									<strong>
										Inscribirme y comenzar ya{' '}
									</strong>
									! (pago online)
								</p>
								<Link
									href={linkInscripcion}
									target='_blank'
									className='text-white font-extrabold py-5'
								>
									Ver más
								</Link>
							</Link>
						</div>
					</div>
				)}
			</div>
		</section>
	);
};

export default Calendario;
