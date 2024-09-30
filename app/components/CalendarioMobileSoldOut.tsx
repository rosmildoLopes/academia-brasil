'use client';
import React, { useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { PiBackpackBold } from 'react-icons/pi';
import { BiMoviePlay } from 'react-icons/bi';
import { MdScreenSearchDesktop } from 'react-icons/md';
import { TbCaretDown } from 'react-icons/tb';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface Evento {
	startDate: string;
	endDate: string;
	meetingDate: string;
	buttonText: string;
	additionalInfo?: string;
}

interface CalendarioProps {
	eventos: Evento[];
	eventosSoldOut: Evento[];
	linkPreInscripcion: string;
	linkInscripcion: string;
	linkHablarConAsesor: string;
}

const CalendarioMobile: React.FC<CalendarioProps> = ({
	eventos,
	eventosSoldOut,
	linkPreInscripcion,
	linkInscripcion,
	linkHablarConAsesor,
}) => {
	const [showModal, setShowModal] = useState(false);
	const [modalContent, setModalContent] = useState<
		string | null
	>(null);

	const openModal = (content: string) => {
		setModalContent(content);
		setShowModal(true);
	};

	const closeModal = () => {
		setModalContent(null);
		setShowModal(false);
	};

	const [viewportRef, embla] = useEmblaCarousel({
		loop: false,
	});

	const boxVariants = {
		hidden: {
			opacity: 1,
			backgroundColor: '#FFFFFF',
		},
		visible: {
			opacity: 1,
			backgroundColor: '#9CA3AF',
		},
	};

	return (
		<div className='embla__viewport' ref={viewportRef}>
			{eventos.length === 0 &&
			eventosSoldOut.length === 0 ? (
				<div className='flex flex-col items-center justify-center h-64'>
					<p className='text-2xl font-bold'>
						No hay eventos disponibles
					</p>
				</div>
			) : (
				<div className='embla__container flex w-10/12 mx-auto gap-4'>
					{/* Renderizar eventos normales */}
					{eventos.map((evento: Evento, index: number) => (
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
												openModal(
													evento.additionalInfo || '',
												)
											}
										>
											<TbCaretDown />
										</button>
									</div>
									<div className='border-black w-full flex flex-col items-start'>
										<p className='font-extrabold mb-2'>
											Desde el{' '}
										</p>
										<p className='font-black text-4xl'>
											{evento.startDate}
										</p>
									</div>
									<div className='border-black flex flex-row  items-center border-b-2 pb-4 gap-2'>
										<p className='text-start font-extrabold'>
											Hasta el{' '}
										</p>
										<p className='text-start font-black text-lg'>
											{evento.endDate}
										</p>
									</div>
									<div className='py-4  flex items-center justify-between '>
										<p className='font-medium text-lg'>
											{evento.meetingDate}
										</p>
									</div>
								</div>
							</div>
							{/* Fin del contenido del slide */}
						</div>
					))}

					{/* Render eventos sold out */}
					{eventosSoldOut.map(
						(evento: Evento, index: number) => (
							<motion.div
								key={`soldOut-${index}`}
								variants={boxVariants}
								initial='hidden'
								whileInView='visible'
								transition={{ duration: 1.5 }}
								className='embla__slide w-auto border rounded-3xl transition duration-500 p-6 px-8 relative'
							>
								<div className='embla__slide__number text-lg text-black '>
									<div className='flex flex-col gap-4 '>
										<div className='flex gap-2 justify-center items-center '>
											<BiMoviePlay className='text-2xl bg-gray-600 rounded-full h-16 w-16 flex items-center justify-center shadow-lg shadow-slate-900' />
											<MdScreenSearchDesktop className='text-2xl bg-gray-600 rounded-full h-16 w-16 flex items-center justify-center shadow-lg shadow-slate-900' />
											<PiBackpackBold className='text-2xl bg-gray-600 rounded-full h-16 w-16 flex items-center justify-center shadow-lg shadow-slate-900' />
											<button className='flex items-center'>
												<TbCaretDown />
											</button>
										</div>
										<div className='border-black w-full flex flex-col items-start'>
											<p className='font-extrabold mb-2'>
												Desde el{' '}
											</p>
											<p className='font-black text-4xl'>
												{evento.startDate}
											</p>
										</div>
										<div className='border-black flex flex-row  items-center border-b-2 pb-4 gap-2'>
											<p className='text-start font-extrabold'>
												Hasta el{' '}
											</p>
											<p className='text-start font-black text-lg'>
												{evento.endDate}
											</p>
										</div>
										<div className='py-4  flex items-center justify-between '>
											<p className='font-medium text-lg'>
												{evento.meetingDate}
											</p>
										</div>
									</div>
								</div>
								{/* Imagen de "Sold Out" */}
								<div className='w-56 absolute top-2'>
									<Image
										src='soldOut.svg'
										height={200}
										width={200}
										alt='cartel de Sold Out'
										className='w-96'
									/>
								</div>
							</motion.div>
						),
					)}
				</div>
			)}

			{/* Modal para mostrar información adicional */}
			{showModal && (
				<div className='modal fixed inset-0 flex items-center justify-center z-50'>
					<div className='modal-content flex flex-col gap-11 justify-start items-center text-firstBackground bg-firstBlue w-11/12 md:w-3/4 lg:w-1/2 h-[77%] rounded-2xl p-6 relative'>
						<span
							className='text-red-500 font-black absolute right-8 top-6 text-xl cursor-pointer'
							onClick={closeModal}
						>
							X
						</span>
						<div
							dangerouslySetInnerHTML={{
								__html: modalContent || '',
							}}
						/>
						<div className='flex flex-col w-full items-center rounded-b-2xl transition-all duration-1000 p-4 mt-2'>
							<div className='flex flex-col justify-center text-center gap-4'>
								<Link
									href={linkHablarConAsesor}
									target='_blank'
									className='flex flex-col justify-center items-center'
								>
									<div className='flex flex-row'>
										<Image
											src={'./contactoIconCalendar.svg'}
											alt='calendario'
											height={60}
											width={60}
										/>
										<p>
											Quiero que me{' '}
											<strong>contacte un asesor</strong>
											para más información
										</p>
									</div>
									<button className='text-white text-sm font-extrabold py-5'>
										Ver más
									</button>
								</Link>
								<Link
									href={linkPreInscripcion}
									target='_blank'
									className='flex flex-col justify-center items-center'
								>
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
											</strong>
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
								</Link>
								<Link
									href={linkInscripcion}
									target='_blank'
									className='flex flex-col justify-center items-center'
								>
									<div className='flex flex-row'>
										<Image
											src={'./inscripcionIconCalendar.svg'}
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
									<Link
										href={linkInscripcion}
										target='_blank'
										className='text-white text-sm font-extrabold py-5'
									>
										Ver más
									</Link>
								</Link>
							</div>
						</div>
						<button
							className='bg-white text-black px-8 py-3 rounded-3xl font-black'
							onClick={closeModal}
						>
							Cerrar
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default CalendarioMobile;
