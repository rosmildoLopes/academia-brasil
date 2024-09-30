'use client';
import { useState, ChangeEvent, useEffect } from 'react';
import Image from 'next/image';
import { titan, agba, bagel } from '../font/font';
import useEmblaCarousel from 'embla-carousel-react';
import { EmblaOptionsType } from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';
import useGoogleSheets from '../../auth';
import Link from 'next/link';
import Swal from 'sweetalert2';

type PropType = {
	options?: EmblaOptionsType;
};

type ImageType = {
	src: string;
	alt: string;
	width: number;
	height: number;
};

type CertificadoData = {
	nombre: string;
	apellido: string;
	curso: string;
	link: string;
};

type CertificadoError = {
	error: boolean;
};

const images: ImageType[] = [
	{
		src: './UAA-logoBLANCO.svg',
		alt: 'Universidad Atlántida Argentina',
		width: 162,
		height: 81,
	},
	{
		src: './ProjectManagement1.svg',
		alt: 'Project Management Institute',
		width: 176,
		height: 54,
	},
	{
		src: './ProjectManagement2.svg',
		alt: 'Project Management Training Partner',
		width: 70,
		height: 81,
	},
	{
		src: './MetaBusinessLOGO.svg',
		alt: 'Meta Business Logo',
		width: 400,
		height: 50,
	},
	{
		src: './PartnerX.svg',
		alt: 'Partner Official X',
		width: 53,
		height: 81,
	},
];

const Certificacion = ({ options }: PropType) => {
	const autoplayOptions = {
		delay: 4000,
		stopOnInteraction: false,
	};

	const carouselOptions: EmblaOptionsType = {
		loop: true,
		...options,
	};

	const [emblaRef] = useEmblaCarousel(carouselOptions, [
		Autoplay(autoplayOptions),
	]);

	const { searchByDNI } = useGoogleSheets() as {
		searchByDNI: (
			dni: string,
		) => Promise<CertificadoData | CertificadoError>;
	};

	const [dni, setDni] = useState<string>('');
	const [certificadoData, setCertificadoData] =
		useState<CertificadoData | null>(null);
	const [error, setError] = useState<boolean>(false);
	useEffect(() => {
		if (certificadoData && !error) {
			const certificadoUrl = `${certificadoData.link}`;
			console.log(
				'Datos del certificado:',
				certificadoData,
			);
			console.log('URL del certificado:', certificadoUrl);
			console.log(
				'ID del certificado:',
				certificadoData.link,
			);
		}
	}, [certificadoData, error]);

	const handleDniChange = (
		e: ChangeEvent<HTMLInputElement>,
	) => {
		setDni(e.target.value);
	};

	const handleBuscarCertificado = async (dni: string) => {
		console.log('Buscando DNI:', dni);
		setError(false);
		const result: CertificadoData | CertificadoError =
			await searchByDNI(dni);

		if ('error' in result && result.error) {
			setError(true);
			setCertificadoData(null);
			Swal.fire({
				title: 'Error',
				text: 'No encontramos el DNI',
				icon: 'error',
				confirmButtonText: 'Ok',
			});
		} else {
			const certificado = result as CertificadoData;
			setCertificadoData(certificado);
			Swal.fire({
				title: 'Certificado Encontrado',
				html: `
                <p class='mb-3'><strong>${certificado.nombre} ${certificado.apellido}</strong> finalizó sus estudios en la Academia Numen en el curso de <strong>${certificado.curso}</strong>.</p>
                <a href="${certificado.link}" target="_blank" class="text-blue-500 underline">Descargar certificado</a>
            `,
				icon: 'success',
				showCloseButton: true,
				showCancelButton: false,
				confirmButtonText: 'Ok',
			});
		}
	};

	const openModal = () => {
		Swal.fire({
			title: '<strong>Validar DNI</strong>',
			html: `
        <input id="dni-input" type="text" placeholder="Ingrese su DNI" class="swal2-input">
      `,
			showCloseButton: true,
			showCancelButton: true,
			focusConfirm: false,
			confirmButtonText: 'Buscar',
			cancelButtonText: 'Cancelar',
			preConfirm: () => {
				const dniInput = (
					Swal.getPopup()!.querySelector(
						'#dni-input',
					) as HTMLInputElement
				).value;
				if (!dniInput) {
					Swal.showValidationMessage(
						'Por favor ingrese un DNI',
					);
					return false;
				}
				return dniInput;
			},
		}).then(result => {
			if (result.isConfirmed && result.value) {
				setDni(result.value);
				handleBuscarCertificado(result.value);
			}
		});
	};

	return (
		<div className='flex flex-col md:w-11/12 w-10/12 justify-center items-center mx-auto my-8 overflow-x-hidden'>
			<div className='flex md:flex-row flex-col'>
				<div className='text-white text-center w-full lg:w-3/6 flex flex-col'>
					<h2
						className={`${titan.className} text-4xl lg:text-3xl lg:text-end`}
					>
						CERTIFICAÇÃO OFICIAL
					</h2>
					<h3
						className={`${agba.className} text-violet-to-green-gradient text-2xl lg:text-xl lg:text-end`}
					>
						Seu esforço tem valor
					</h3>
					<p className='py-4 justify-center text-md lg:text-xs lg:text-end'>
					Nossos cursos possuem{' '}
						<strong>
						certificado de extensão universitária
						</strong>{' '}
						e
						<strong>
							{' '}
							diploma, <br />
						</strong>
						atendendo a todos os padrões e requisitos oficiais. Nós também<br />{' '}
						temos o apoio das principais plataformas.
					</p>

					<div className='lg:w-full lg:flex lg:flex-row hidden items-center justify-center'>
						{/* <div className='pb-4 gap-1 w-full hidden lg:flex lg:flex-row items-center justify-center flex-wrap'>
							{images.map((image, index) => (
								<div
									className={`flex mx-auto justify-center items-center w-44 h-44 ${
										index === 1 ? 'mr-10' : ''
									}`}
									key={index}
								>
									<Image
										src={image.src}
										alt={image.alt}
										width={image.width}
										height={image.height}
										className=''
										layout='intrinsic'
									/>
								</div>
							))}
						</div> */}

						<p className='text-4xl mt-24'>Aca deberian ir imagenes de plataformas "partners"</p>
					</div>

					<div
						className='embla__viewport lg:hidden overflow-x-hidden'
						ref={emblaRef}
					>
						<div className='embla__container pb-4 gap-16 flex'>
							{images.map((image, index) => (
								<div
									className='embla__slide flex mx-auto'
									key={index}
								>
									<Image
										src={image.src}
										alt={image.alt}
										width={image.width}
										height={image.height}
										className='w-full embla__slide__number'
										layout='intrinsic'
									/>
								</div>
							))}
						</div>
					</div>
				</div>

				<div className='w-full lg:w-1/2 flex lg:h-[550px]'>
					<Image
						src='/certificado.svg'
						width={400}
						height={400}
						alt='certificado oficial'
						className='lg:h-[550px] w-full'
						layout='intrinsic'
					/>
				</div>
			</div>

			{/* <div className='flex flex-col items-center justify-center w-full '>
				<button
					onClick={openModal}
					className='px-3 py-2 border-2 border-firstBlue text-center rounded-3xl bg-firstBlue text-black md:text-lg md:px-16 md:py-3 font-black md:bg-firstBlue md:rounded-full md:hover:bg-transparent md:hover:text-firstBlue'
				>
					Validar Certificado
				</button>

				{certificadoData && !error && (
					<div className='flex flex-col items-center mt-24 gap-5 text-white w-11/12 md:w-7/12 py-14  rounded-2xl border border-firstBlue px-10'>
						<p className={`${titan.className} text-green-gradient pb-0 text-center text-4xl`}>
							{certificadoData.nombre}{' '}
							{certificadoData.apellido}
						</p>

						<p className='text-lg md:text-xl italic'>
							Finalizó sus estudios en la Academia Numen en
							el curso de{' '}
						</p>
						<strong className={`${agba.className} text-violet-gradient text-5xl md:text-6xl pb-2`}>{certificadoData.curso}</strong>
						<Link
							href={certificadoData.link}
							target='_blank'
						>
							<p className='px-3 py-2 border-2 border-firstBlue text-center rounded-full bg-firstBlue text-black font-black md:text-lg md:px-16 md:py-3 md:font-black md:bg-firstBlue md:hover:bg-transparent md:hover:text-firstBlue'>
								Descargar certificado
							</p>
						</Link>
					</div>
				)}

				{error && (
					<div className='w-full flex flex-col items-center my-6 text-red-500'>
						<p>No encontramos el DNI</p>
					</div>
				)}
			</div> */}

		</div>
	);
};

export default Certificacion;
