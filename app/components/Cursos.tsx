'use client';
import { Titan_One } from 'next/font/google';
import React, { useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import cursosData, {
	CursosData,
	Curso,
} from '../constants/cursosData';
import Image from 'next/image';
import { titan } from '../font/font';
import { GrNext } from 'react-icons/gr';
import { GrPrevious } from 'react-icons/gr';
import CursosMobile from './CursosMobile';

type Categoria =
	| 'desarrollo'
	| 'marketing'

const Cursos = () => {
	const [emblaRef, emblaApi] = useEmblaCarousel(
		{ loop: false },
		[],
	);

	const scrollPrev = useCallback(() => {
		if (emblaApi) emblaApi.scrollPrev();
	}, [emblaApi]);

	const scrollNext = useCallback(() => {
		if (emblaApi) emblaApi.scrollNext();
	}, [emblaApi]);

	const [categoriaSeleccionada, setCategoriaSeleccionada] =
		useState<Categoria>('desarrollo');

	const handleCategoriaClick = (categoria: Categoria) => {
		setCategoriaSeleccionada(categoria);
	};

	const renderCursos = () => {
		const cursosCategoria =
			cursosData[categoriaSeleccionada];

		if (!cursosCategoria) {
			return (
				<p>
					Não há cursos disponíveis para esta categoria.
				</p>
			);
		}

		return (
			<div className='embla relative w-full mx-auto overflow-x-hidden'>
				<button
					className='embla__prev'
					onClick={scrollPrev}
				>
					<GrPrevious className='w-10 h-10 md:w-14 md:h-14 absolute top-[250px] -left-2 md:top-64 md:-left-2 z-50 hover:text-white' />
				</button>
				<div
					className='embla__viewport w-full'
					ref={emblaRef}
				>
					<div className='embla__container w-full space-x-6 pt-10'>
						{cursosCategoria.map(
							(curso: {
								id: React.Key | null | undefined;
								name:
									| string
									| number
									| boolean
									| React.ReactElement<
											any,
											| string
											| React.JSXElementConstructor<any>
									  >
									| Iterable<React.ReactNode>
									| React.ReactPortal
									| React.PromiseLikeOfReactNode
									| null
									| undefined;
								modality:
									| string
									| number
									| boolean
									| React.ReactElement<
											any,
											| string
											| React.JSXElementConstructor<any>
									  >
									| Iterable<React.ReactNode>
									| React.ReactPortal
									| React.PromiseLikeOfReactNode
									| null
									| undefined;
								time:
									| string
									| number
									| boolean
									| React.ReactElement<
											any,
											| string
											| React.JSXElementConstructor<any>
									  >
									| Iterable<React.ReactNode>
									| React.ReactPortal
									| React.PromiseLikeOfReactNode
									| null
									| undefined;
								modules:
									| string
									| number
									| boolean
									| React.ReactElement<
											any,
											| string
											| React.JSXElementConstructor<any>
									  >
									| Iterable<React.ReactNode>
									| React.ReactPortal
									| React.PromiseLikeOfReactNode
									| null
									| undefined;
								support:
									| string
									| number
									| boolean
									| React.ReactElement<
											any,
											| string
											| React.JSXElementConstructor<any>
									  >
									| Iterable<React.ReactNode>
									| React.ReactPortal
									| React.PromiseLikeOfReactNode
									| null
									| undefined;
								info: string | undefined;
							}) => (
								<div
									key={curso.id}
									className='w-[90%] md:w-[29%] md:h-auto bg-firstBlue border-transparent rounded-3xl transition duration-500 embla__slide'
								>
									<div className='embla__slide__number md:p-10 px-6 pt-7 text-black text-left space-y-7 h-[22rem] md:h-[26rem]'>
										<h4 className='font-black text-2xl md:text-3xl'>
											{curso.name}
										</h4>
										<div className='flex'>
											<Image
												src={'modalidadIcon.svg'}
												alt='modalidad icon'
												width={29.92}
												height={29.92}
												className='mr-3'
											/>
											<p className='text-sm md:text-lg text-white'>
												Modalidade{' '}
												<span className='font-extrabold'>
													{curso.modality}
												</span>
											</p>
										</div>
										<div className='flex'>
											<Image
												src={'duracionIcon.svg'}
												alt='icon de reloj que indica duracion'
												width={29.92}
												height={29.92}
												className='mr-3'
											/>
											<p className='text-sm md:text-lg text-white'>
											Duração de{' '}
												<span className='font-extrabold'>
													{curso.time}
												</span>
											</p>
										</div>
										<div className='flex'>
											<Image
												src={'modulosIcon.svg'}
												alt='icon de los modulos'
												width={23.27}
												height={29.92}
												className='mr-3'
											/>
											<p className='font-extrabold text-sm md:text-lg text-white'>
												{curso.modules}
											</p>
										</div>
										<div className='flex'>
											<Image
												src={'apoyoIcon.svg'}
												alt='Apoyo Icon'
												width={28.22}
												height={26.6}
												className='mr-3'
											/>
											<p className='text-sm md:text-lg text-white'>
												Ajuda{' '}
												<span className='font-extrabold'>
													{curso.support}
												</span>
											</p>
										</div>
									</div>
									<div className='flex justify-center'>
										<a
											href={curso.info}
											target='_blank'
											rel='noopener noreferrer'
											className='px-8 py-3 mb-6 border border-black rounded-full bg-black text-white font-black md:text-[18px] text-[11px]'
										>
											Mais informações
										</a>
									</div>
								</div>
							),
						)}
					</div>
				</div>
				<button
					className='embla__next'
					onClick={scrollNext}
				>
					<GrNext className='w-10 h-10 md:w-14 md:h-14 absolute top-[249px] right-8 md:top-64 md:right-16 hover:text-white' />
				</button>
			</div>
		);
	};

	return (
		<div className='text-center'>
			<div className='relative'>
				<h3
					className={`${titan.className} text-white pb-5 mg:text-4xl text-2xl`}
				>
					CURSOS
				</h3>
				<Image
					src={'./starIconCursos.svg'}
					alt='Icono de estrella'
					width={67.3}
					height={69.14}
					className='absolute md:top-0 md:right-20 -top-12 -right-3'
				/>
			</div>
			<div className='hidden md:block'>
				<div className='flex col space-x-10 justify-center'>
					<button
						className={`px-7 py-2 font-black rounded-3xl text-firstBlue border-2 border-firstBlue active:bg-firstBlue active:text-black`}
						onClick={() =>
							handleCategoriaClick('desarrollo')
						}
					>
						Programação
					</button>
					<button
						className={`px-7 py-2 font-black rounded-3xl text-firstBlue border-2 border-firstBlue active:bg-firstBlue active:text-black`}
						onClick={() =>
							handleCategoriaClick('marketing')
						}
					>
						Marketing
					</button>
				</div>
			</div>
			<CursosMobile
				onCategoriaClick={handleCategoriaClick}
			/>
			<div className='flex justify-center ml-12 mb-10'>
				{renderCursos()}
			</div>
		</div>
	);
};

export default Cursos;
