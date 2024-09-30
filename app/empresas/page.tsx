import React from 'react';
import { agba, titan } from '../font/font';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Empresas',
	description: 'La mejor formacion para tus colaboradores.',
};

interface servicioEmpresas {
	id: number;
	message: string;
	boldStart: number;
}

const learningData: servicioEmpresas[] = [
	{
		id: 1,
		message: 'Educação Atualizada e de Qualidade',
		boldStart: 0,
	},
	{
		id: 2,
		message: 'Aulas Online ao Vivo',
		boldStart: 0,
	},
	{
		id: 3,
		message: 'A Melhor Plataforma de Educação Digital',
		boldStart: 8,
	},
	{
		id: 4,
		message: 'Acompanhamento Personalizado',
		boldStart: 0,
	},
	{
		id: 5,
		message: 'Relatórios e Acompanhamento',
		boldStart: 0,
	},
	{
		id: 6,
		message:
			'Nossos cursos contam com certificado de extensão universitária',
		boldStart: 24,
	},

];

const Empresas = () => {
	return (
		<div className='py-32 flex flex-col overflow-hidden'>
			<div className='flex justify-center items-center mb-9  mx-auto flex-wrap'>
				<div
					className={`${titan.className} text-white text-4xl mx-auto lg:text-8xl lg:mt-10 flex flex-col justify-center items-center w-full md:w-auto  md:px-0 text-center overflow-hidden`}
				>
					<p>TREINAMENTO&nbsp;</p>
					<p className={`${agba.className} text-firstBlue`}>
						PARA&nbsp;
					</p>
					<p
						className={`${titan.className} text-green-gradient`}
					>
						EMPRESAS
					</p>
				</div>
			</div>
			<div className='flex flex-col justify-center items-center w-full md:w-10/12 mx-auto md:p-12 text-white relative '>
				<Image
					src='/aperturaExclamacion.svg'
					alt='iconos de estrella'
					width={100}
					height={100}
					className='hidden md:block w-6 md:w-14 absolute -left-3'
				/>
				<p className='text-center text-lg md:text-xl  px-6 md:px-20'>
					Na &nbsp;
					<span className='font-bold '>
						Numen Academy&nbsp;
					</span>
					acreditamos no poder de equipes
					bem preparadas. É por isso que oferecemos soluções
					de formação pensadas para impulsionar o
					crescimento do seu negócio através do
					desenvolvimento dos seus colaboradores. Promovemos
					o desenvolvimento dos seus colaboradores. E seus
					colaboradores impulsionam o sucesso da sua
					empresa.
				</p>
				<Image
					src='/cierreExclamacion.svg'
					alt='iconos de estrella'
					width={100}
					height={100}
					className='hidden md:block w-6 md:w-14 absolute -right-3 overflow-x-hidden'
				/>
			</div>
			<section className='flex flex-col justify-center items-center text-white mx-auto  overflow-x-hidden'>
				<div className='flex items-center justify-center gap-12 relative px-12'>
					<h2
						className={`${titan.className} text-4xl md:text-4xl mt-32 text-center `}
					>
						POR QUE NOS ESCOLHER?
					</h2>
					<Image
						src='/estrella2Contacto.svg'
						alt='stickers de lentes'
						width={203}
						height={155}
						className='hidden w-16 md:block absolute -right-12 -bottom-3'
					/>
				</div>
				<div className='flex flex-wrap justify-center p-10 items-center w-full lg:w-11/12 mx-auto '>
					{learningData.map(item => (
						<div
							key={item.id}
							className='w-full md:w-1/2 p-2'
						>
							<div className='flex flex-row items-center rounded xs:pl-16 lg:pl-20 justify-start lg:w-11/12 mx-auto '>
								<div className='bg-firstGreen w-1 h-1 md:w-3 md:h-3 rounded-full' />
								<p className='text-white ml-2 leading-none text-start text-lg md:text-xl '>
									{item.message.substring(
										0,
										item.boldStart,
									)}
									<span className='font-bold'>
										{item.message.substring(item.boldStart)}
									</span>
								</p>
							</div>
						</div>
					))}
				</div>
				<div className='flex justify-center items-center gap-12 mt-8'></div>
			</section>
		</div>
	);
};

export default Empresas;
