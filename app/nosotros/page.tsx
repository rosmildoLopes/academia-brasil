import React from 'react';
import HeroNosotros from '../components/Heros/HeroNosotros';
import Image from 'next/image';
import Certificacion from '../components/Certificacion';
import { titan } from '../font/font';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Nosotros',
	description:
		'Conoce más sobre Academia Numen, nuestra misión, visión y equipo.',
};

const Nosotros = () => {
	return (
		<div className='py-32 flex flex-col '>
			<div className='flex flex-col md:flex-row md:gap-3 lg:gap-0 justify-center items-center h-auto'>
				<HeroNosotros />
				<div className='flex  flex-col gap-5 text-white w-10/12 md:w-5/12 py-6 md:px-3 text-left text-sm md:text-base h-full'>
					<p className=''>
						Academia Numen nació en 2020 con la misión de
						llevar a cualquier punto del planeta, el
						conocimiento necesario para que nuestros
						estudiantes logren
						<span className='font-bold md:font-extrabold'>
							{' '}
							insertarse o mejorar sus posiciones en el
							mercado laboral.
						</span>
					</p>
					<p className=''>
						Para esto, desarrollamos y adaptamos las mejores
						modalidades educativas para estos nuevos
						tiempos.{' '}
						<span className='font-bold md:font-extrabold'>
							Combinamos la eficiencia y facilidad educativa
						</span>{' '}
						para ofrecerles a nuestros estudiantes la mejor
						alternativa para capacitarse y prepararse para
						los nuevos desafíos profesionales.
					</p>
					<p className=''>
						Todos nuestros cursos y carreras son dictados
						con el mayor rigor pedagógico, para garantizar
						que nuestros alumnos reciban una experiencia
						educativa única y de calidad.
					</p>
					<p className=''>
						Cientos de empresas de todo el mundo confían en
						nuestros egresados y la capacitación de{' '}
						<span className='font-bold md:font-extrabold'>
							Academia Numen
						</span>
						.
					</p>
				</div>
			</div>
			<div className='flex flex-row md:flex-row justify-center items-center h-auto mb-12'>
				<div className='flex  flex-col gap-5 text-white w-10/12 md:w-5/12 py-6 md:px-4 text-left text-sm md:text-base h-full'>
					<h2
						className={`${titan.className} text-violet-gradient text-xl md:text-3xl`}
					>
						MÉTODOS DE ESTUDIO
					</h2>
					<p className=''>
						Nuestro principal objetivo es que el aprendizaje
						de nuestros estudiantes sea el óptimo para cada
						uno de ellos, entendiendo que cada carrera o
						curso tiene sus complejidades y considerando que
						cada uno de ellos adquiere los conocimientos en
						tiempos y procesos diferentes.
					</p>
					<p className=''>
						La educación remota no sólo nos permite llegar a
						cualquier rincón del planeta, también nos da la
						oportunidad de{' '}
						<span className='font-bold md:font-extrabold'>
							personalizar los procesos de aprendizaje y los
							métodos
						</span>
						, acordes a cada carrera y a cada alumno.
					</p>
					<p className=''>
						Con un{' '}
						<span className='font-bold md:font-extrabold'>
							acompañamiento personalizado,
						</span>{' '}
						y combinando el uso de tecnologías y recursos
						logramos que en los plazos programáticos, se
						cumpla el principal objetivo:{' '}
						<span className='font-bold md:font-extrabold'>
							ENSEÑAR.
						</span>
					</p>
				</div>
				<div className='flex justify-center items-center w-10/12 md:w-5/12 md:pl-28'>
					<Image
						src='/iconosPaginaNosotros.svg'
						alt='estrellas'
						width={527}
						height={248}
						className=''
					/>
				</div>
			</div>
			<div>
				<Certificacion />
			</div>
		</div>
	);
};

export default Nosotros;
