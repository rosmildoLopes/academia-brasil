'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { BiMoviePlay } from 'react-icons/bi';
import { MdScreenSearchDesktop } from 'react-icons/md';
import { PiBackpackBold } from 'react-icons/pi';
import { TbCaretDown } from 'react-icons/tb';
import Link from 'next/link';

interface Evento {
	startDate: string;
	endDate: string;
	meetingDate: string;
	additionalInfo?: string;
}

interface CalendarioProps {
	linkPreInscripcion: string;
	linkInscripcion?: string;
	eventos: Evento[];
}

const CalendarioAsincronico: React.FC<CalendarioProps> = ({
	linkPreInscripcion,
	linkInscripcion,
	eventos,
}) => {
	const [showAdditionalInfo, setShowAdditionalInfo] =
		useState(false);
	const [rotate, setRotate] = useState<number>(0);
	const [showModal, setShowModal] = useState(false);
	const [modalContent, setModalContent] = useState<
		string | null
	>(null);

	const toggleAdditionalInfo = () => {
		setShowAdditionalInfo(prevState => !prevState);
	};

	const handleClick = () => {
		setRotate(prevRotate => prevRotate + 180);
	};

	const openModal = (content: string) => {
		setModalContent(content);
		setShowModal(true);
	};

	const closeModal = () => {
		setModalContent(null);
		setShowModal(false);
	};

	return (
		<section className='w-11/12 mx-auto'>
			<div className='embla__container flex w-10/12 mx-auto gap-4 md:hidden'>
				{eventos.map((evento, index) => (
					<div
						key={`normal-${index}`}
						className='embla__slide w-auto bg-white border rounded-3xl transition duration-500 p-6 px-8 '
					>
						{/* Contenido del slide */}
						<div className='embla__slide__number text-lg text-black'>
							<div className='flex flex-col gap-4'>
								<div className='flex gap-2 justify-center items-center'>
									<BiMoviePlay className='text-2xl bg-firstBlue rounded-full h-12  w-12 p-1 flex items-center justify-center shadow-lg shadow-slate-12 00' />
									<MdScreenSearchDesktop className='text-2xl bg-firstBlue rounded-full h-12 p-1 w-12  flex items-center justify-center shadow-lg shadow-slate-12 00' />
									<PiBackpackBold className='text-2xl bg-firstBlue rounded-full h-12  w-12 p-1 flex items-center justify-center shadow-lg shadow-slate-900' />
									<button
										className='flex items-center font-black text-4xl'
										onClick={() =>
											openModal(evento.additionalInfo || '')
										}
									>
										<TbCaretDown />
									</button>
								</div>
								<div className='border-black w-full flex flex-col items-start'>
									<p className='font-extrabold mb-2'></p>
									<p className='font-black text-4xl'>
										{evento.startDate}
									</p>
								</div>
								<div className='border-black flex flex-row  items-center border-b-2'>
									<p className='text-start font-extrabold'></p>
									<p className='text-start font-black text-lg'>
										{evento.endDate}
									</p>
								</div>
								<div className=' flex items-center justify-between '>
									<p className='font-medium text-lg'>
										{evento.meetingDate}
									</p>
								</div>
							</div>
						</div>
						{/* Fin del contenido del slide */}
					</div>
				))}
				{showModal && (
					<div className='modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
						<div className='modal-content relative flex flex-col gap-11 justify-start items-center text-firstBackground bg-firstBlue w-11/12 mx-auto h-[68%] rounded-2xl'>
							<button
								className='text-red-500 font-black absolute right-4 top-2 text-xl cursor-pointer'
								onClick={closeModal}
							>
								X
							</button>
							<div
								dangerouslySetInnerHTML={{
									__html: modalContent || '',
								}}
							/>
							<div className='flex flex-col w-full items-center rounded-b-2xl transition-all duration-1000 p-4 mt-2'>
								<div className='flex flex-col justify-center text-center gap-4'>
									<div className='flex flex-col justify-center items-center'>
										<div className='flex flex-row'>
											<Image
												src={'./contactoIconCalendar.svg'}
												alt='calendario'
												height={60}
												width={60}
											/>
											<p>
												Quiero que me{' '}
												<strong>contacte un asesor</strong>{' '}
												para más información
											</p>
										</div>
										<button className='text-white text-sm font-extrabold py-5'>
											Ver más
										</button>
									</div>
									<div className='flex flex-col justify-center items-center'>
										<div className='flex flex-row'>
											<Image
												src={
													'./preinscripcionIconCalendar.svg'
												}
												alt='preinscripcion'
												height={60}
												width={60}
											/>
											<p>
												Quiero{' '}
												<strong>
													preinscribirme para guardar mi
													vacante
												</strong>{' '}
												(no tendrás que pagar aún)
											</p>
										</div>
										<Link
											href={linkPreInscripcion}
											target='_blank'
											className='text-white text-sm font-extrabold py-5'
										>
											Ver más
										</Link>
									</div>
									<div className='flex flex-col justify-center items-center'>
										<div className='flex flex-row'>
											<Image
												src={
													'./inscripcionIconCalendar.svg'
												}
												alt='inscripcion'
												height={60}
												width={60}
											/>
											<p className='text-center'>
												Quiero
												<strong>
													{' '}
													Inscribirme y comenzar ya
												</strong>
												! (pago online)
											</p>
										</div>
										<button className='text-white text-sm font-extrabold py-5'>
											Ver más
										</button>
									</div>
								</div>
							</div>
							<button
								className='text-red-500 font-black  right-4 top-2 text-xl cursor-pointer'
								onClick={closeModal}
							>
								Cerrar
							</button>
						</div>
					</div>
				)}
			</div>
			<div className='md:flex flex-col bg-white rounded-2xl hidden md:static'>
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
							<p className='font-extrabold'></p>
							<p className='font-black text-4xl'>
								Asincrónico
							</p>
						</div>
					</div>
					<div className='flex w-3/4'>
						<div className='p-4 border-r-2 border-black w-1/3 flex flex-col items-start pl-12'>
							<p className='text-start font-extrabold'></p>
							<p className='text-start font-black text-4xl'>
								Cuando quieras
							</p>
						</div>
						<div className='p-4 w-2/3 flex items-center justify-between'>
							<p className='ml-4 font-medium text-lg'>
								En todo momento
							</p>
							<button
								className='bg-firstBlue text-black font-black rounded-full px-10 py-3 flex items-center gap-4'
								onClick={() => {
									toggleAdditionalInfo();
									handleClick();
								}}
							>
								<p>Ver mas</p>
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
							<div className='flex flex-col justify-center items-center w-1/3'>
								<Image
									src={'./contactoIconCalendar.svg'}
									alt='calendario'
									height={115.34}
									width={116.15}
								/>
								<p className='text-center pt-5 text-lg'>
									Quiero que me{' '}
									<strong>
										contacte un <br /> asesor{' '}
									</strong>
									para más información
								</p>
								<button className='text-white font-extrabold py-5'>
									Ver más
								</button>
							</div>
							<div className='flex flex-col justify-center items-center w-1/3'>
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
									className='text-white font-extrabold py-5'
								>
									Ver más
								</Link>
							</div>
							<div className='flex flex-col justify-center items-center w-1/3'>
								<Image
									src={'./inscripcionIconCalendar.svg'}
									alt='inscripcion'
									height={115.34}
									width={116.15}
								/>
								<p className='text-center pt-5 text-lg'>
									Quiero{' '}
									<strong>Inscribirme y comenzar ya</strong>
									! (pago online)
								</p>
								<button className='text-white font-extrabold py-5'>
									Ver más
								</button>
							</div>
						</div>
					</div>
				)}
			</div>
		</section>
	);
};

export default CalendarioAsincronico;
