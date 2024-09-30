'use client';
import React, { useState } from 'react';
import { BsCaretDown } from 'react-icons/bs';
import Image from 'next/image';
import testimoniosData from '../constants/testimoniosData';
import useEmblaCarousel from 'embla-carousel-react';
import { DotButton, useDotButton } from './Dots';
import Autoplay from 'embla-carousel-autoplay';
import { titan } from '../font/font';
import Link from 'next/link';

const Testimonios = () => {
	const [selectedValue, setSelectedValue] = useState(
		'Project_Management',
	);
	const [emblaRef, emblaApi] = useEmblaCarousel(
		{ loop: true },
		[Autoplay()],
	);

	const { selectedIndex, scrollSnaps, onDotButtonClick } =
		useDotButton(emblaApi);

	const handleSelectionChange = (value: string) => {
		setSelectedValue(value);
	};

	const renderTestimonios = () => {
		switch (selectedValue) {
			case 'Fullstack':
				return testimoniosData.Fullstack.map(testimonio => (
					<div
						key={testimonio.id}
						className='embla__slide '
					>
						<div className='embla__slide__number md:max-w-[700px] max-w-[290px]'>
							<h3 className='text-pink-700 lg:p-4 md:text-[16px] text-sm font-bold w-full md:max-w-auto mx-auto'>
								<strong>{testimonio.name}</strong>/
								{testimonio.profession}
							</h3>
							<p className='text-white italic md:max-w-[700px] max-w-[290px] md:text-[16px] text-sm w-full md:max-w-auto  mx-auto'>
								{testimonio.review}
							</p>
							<Link
								href={testimonio.linkedin}
								target='_blank'
								className='flex justify-center mt-8'
							>
								<Image
									src='/verLinkedin.svg'
									alt='LinkedIn'
									width={118}
									height={37}
									className='w-32 md:w-56'
								/>
							</Link>
						</div>
					</div>
				));
			case 'Diseño_UX/UI':
				return testimoniosData['Diseño UX/UI'].map(
					testimonio => (
						<div
							key={testimonio.id}
							className='embla__slide flex-shrink-0 flex-grow-0'
						>
							<div className='embla__slide__number md:max-w-[700px] max-w-[290px]'>
								<h3 className='text-pink-700 lg:p-4 md:text-[16px] text-sm font-bold w-full md:max-w-auto mx-auto'>
									<strong>{testimonio.name}</strong>/
									{testimonio.profession}
								</h3>
								<p className='text-white italic md:max-w-[700px] max-w-[290px] md:text-[16px] text-sm w-full md:max-w-auto  mx-auto'>
									{testimonio.review}
								</p>
								<Link
									href={testimonio.linkedin}
									target='_blank'
									className='flex justify-center mt-8'
								>
									<Image
										src='/verLinkedin.svg'
										alt='LinkedIn'
										width={118}
										height={37}
										className='w-32 md:w-56'
									/>
								</Link>
							</div>
						</div>
					),
				);
			case 'FrontEnd':
				return testimoniosData.FrontEnd.map(testimonio => (
					<div
						key={testimonio.id}
						className='embla__slide flex-shrink-0 flex-grow-0'
					>
						<div className='embla__slide__number md:max-w-[700px]'>
							<h3 className='text-pink-700 lg:p-4 md:text-[16px] text-sm font-bold w-full md:max-w-[700px] max-w-[290px] mx-auto'>
								<strong>{testimonio.name}</strong>/
								{testimonio.profession}
							</h3>
							<p className='text-white italic md:text-[16px] text-sm w-full md:max-w-[700px] max-w-[290px] mx-auto'>
								{testimonio.review}
							</p>
							<Link
								href={testimonio.linkedin}
								target='_blank'
								className='flex justify-center mt-8'
							>
								<Image
									src='/verLinkedin.svg'
									alt='LinkedIn'
									width={118}
									height={37}
									className='w-32 md:w-56'
								/>
							</Link>
						</div>
					</div>
				));
			case 'Ciberseguridad':
				return testimoniosData.Ciberseguridad.map(
					testimonio => (
						<div
							key={testimonio.id}
							className='embla__slide flex-shrink-0 flex-grow-0'
						>
							<div className='embla__slide__number md:max-w-[700px] max-w-[290px]'>
								<h3 className='text-pink-700 lg:p-4 md:text-[16px] text-sm font-bold w-full md:max-w-[700px] max-w-[290px] mx-auto'>
									<strong>{testimonio.name}</strong>/
									{testimonio.profession}
								</h3>
								<p className='text-white italic md:text-[16px] text-sm w-full md:max-w-[700px] max-w-[290px] mx-auto'>
									{testimonio.review}
								</p>
								<Link
									href={testimonio.linkedin}
									target='_blank'
									className='flex justify-center mt-8'
								>
									<Image
										src='/verLinkedin.svg'
										alt='LinkedIn'
										width={118}
										height={37}
										className='w-32 md:w-56'
									/>
								</Link>
							</div>
						</div>
					),
				);
			case 'Community_Manager':
				return testimoniosData['Community Manager'].map(
					testimonio => (
						<div
							key={testimonio.id}
							className='embla__slide flex-shrink-0 flex-grow-0'
						>
							<div className='embla__slide__number md:max-w-[700px] max-w-[290px]'>
								<h3 className='text-pink-700 lg:p-4 md:text-[16px] text-sm font-bold w-full md:max-w-auto mx-auto'>
									<strong>{testimonio.name}</strong>/
									{testimonio.profession}
								</h3>
								<p className='text-white italic md:max-w-[700px] max-w-[290px] md:text-[16px] text-sm w-full md:max-w-auto  mx-auto'>
									{testimonio.review}
								</p>
								<Link
									href={testimonio.linkedin}
									target='_blank'
									className='flex justify-center mt-8'
								>
									<Image
										src='/verLinkedin.svg'
										alt='LinkedIn'
										width={118}
										height={37}
										className='w-32 md:w-56'
									/>
								</Link>
							</div>
						</div>
					),
				);
			case 'Marketing_Digital':
				return testimoniosData['Marketing Digital'].map(
					testimonio => (
						<div
							key={testimonio.id}
							className='embla__slide flex-shrink-0 flex-grow-0'
						>
							<div className='embla__slide__number md:max-w-[700px] max-w-[290px]'>
								<h3 className='text-pink-700 lg:p-4 md:text-[16px] text-sm font-bold w-full md:max-w-auto mx-auto'>
									<strong>{testimonio.name}</strong>/
									{testimonio.profession}
								</h3>
								<p className='text-white italic md:max-w-[700px] max-w-[290px] md:text-[16px] text-sm w-full md:max-w-auto  mx-auto'>
									{testimonio.review}
								</p>
								<Link
									href={testimonio.linkedin}
									target='_blank'
									className='flex justify-center mt-8'
								>
									<Image
										src='/verLinkedin.svg'
										alt='LinkedIn'
										width={118}
										height={37}
										className='w-32 md:w-56'
									/>
								</Link>
							</div>
						</div>
					),
				);
			case 'Project_Management':
				return testimoniosData['Project Management'].map(
					testimonio => (
						<div
							key={testimonio.id}
							className='embla__slide flex-shrink-0 flex-grow-0'
						>
							<div className='embla__slide__number md:max-w-[700px] max-w-[290px]'>
								<h3 className='text-pink-700 text-center lg:p-4 text-[16px] font-bold w-full md:max-w-[700px] max-w-[290px] mx-auto'>
									<strong>{testimonio.name}</strong>/
									{testimonio.profession}
								</h3>
								<p className='text-white italic md:max-w-[700px] max-w-[290px] md:text-[16px] text-sm w-full md:max-w-auto  mx-auto'>
									{testimonio.review}
								</p>
								<Link
									href={testimonio.linkedin}
									target='_blank'
									className='flex justify-center mt-8'
								>
									<Image
										src='/verLinkedin.svg'
										alt='LinkedIn'
										width={118}
										height={37}
										className='w-32 md:w-56'
									/>
								</Link>
							</div>
						</div>
					),
				);
			default:
				return (
					<p className='text-white italic md:text-[16px] text-sm w-full md:max-w-auto  mx-auto'>
						Podés selecionar comentarios de nuestros alumnos
						en sus distintos cursos
					</p>
				);
		}
	};

	return (
		<div
			id='testimonios'
			className='text-center pt-4 my-16'
		>
			<div className='text-white relative lg:w-8/12 mx-auto mb-4'>
				<h3
					className={`${titan.className} text-4xl lg:text-5xl font-semibold`}
				>
					TESTIMONIOS
				</h3>
				<Image
					src='/TestimoniosIcons.svg'
					alt='Icons'
					width={290.25}
					height={163.61}
					className='absolute w-12 lg:w-48 right-3 lg:right-12 -mt-[90px]'
				/>
			</div>
			<div className='lg:p-4'>
				<div className='flex justify-center items-center relative'>
					<div className='relative border border-violet-container rounded-full w-8/12 lg:w-3/12'>
						<select
							value={selectedValue}
							onChange={e =>
								handleSelectionChange(e.target.value)
							}
							className='block appearance-none text-pink-500 py-2 px-12 rounded-full leading-tight focus:outline-none text-center text-base lg:text-lg font-semibold'
						>
							<option
								className='bg-firstBackground text-base lg:text-xl'
								value='Empty'
							>
								Selecciona una opción
							</option>
							<option
								className='bg-firstBackground text-base lg:text-xl'
								value='Fullstack'
							>
								Fullstack
							</option>
							<option
								className='bg-firstBackground text-base lg:text-xl'
								value='Marketing_Digital'
							>
								Marketing Digital
							</option>
							<option
								className='bg-firstBackground text-base lg:text-xl'
								value='Project_Management'
							>
								Project Management
							</option>
							<option
								className='bg-firstBackground text-base lg:text-xl'
								value='Diseño_UX/UI'
							>
								Diseño UX/UI
							</option>
							<option
								className='bg-firstBackground text-base lg:text-xl'
								value='FrontEnd'
							>
								FrontEnd
							</option>
							<option
								className='bg-firstBackground text-base lg:text-xl'
								value='Ciberseguridad'
							>
								Ciberseguridad
							</option>
							<option
								className='bg-firstBackground text-base lg:text-xl'
								value='Community_Manager'
							>
								Community Manager
							</option>
						</select>
						<div className='pointer-events-none absolute  inset-y-0 right-0 flex items-center px-2 text-pink-500'>
							<BsCaretDown
								size={26}
								className='text-xl mx-1'
							/>
						</div>
					</div>
				</div>
			</div>
			<div className='flex space-x-3 p-4 justify-center relative z-20'>
				<Image
					src='/Testimonios-Left.svg'
					alt='Comillas'
					width={189.54}
					height={130}
					className='hidden md:block'
				/>
				<div
					className='embla__viewport w-full md:max-w-[700px] max-w-[290px] overflow-hidden '
					ref={emblaRef}
				>
					<div
						className='embla__container w-full md:max-w-[700px] space-x-9'
					>
						{renderTestimonios()}
					</div>
					<div className='embla__controls absolute bottom-0 left-1/2 -translate-x-1/2 w-full'>
						<div className='embla__dots flex'>
							{scrollSnaps.map((_, index) => (
								<DotButton
									key={index}
									onClick={() => onDotButtonClick(index)}
									className={'embla__dot hover:bg-firstPink'.concat(
										index === selectedIndex
											? ' embla__dot--selected'
											: '',
									)}
								/>
							))}
						</div>
					</div>
				</div>
				<Image
					src='/Testimonios-Right.svg'
					alt='Comillas'
					width={189.54}
					height={129.96}
					className='hidden md:block'
				/>
				<Image
					src='/Testimonios-Right.svg'
					alt='Comillas'
					width={189.54}
					height={130}
					className='absolute z-10 w-20 right-5 top-14 lg:hidden'
				/>
				<Image
					src='/Testimonios-Left.svg'
					alt='Comillas'
					width={189.54}
					height={130}
					className='absolute z-10 w-20 left-5 top-14 lg:hidden'
				/>
			</div>
		</div>
	);
};

export default Testimonios;
