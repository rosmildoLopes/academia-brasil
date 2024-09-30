'use client';

import Image from 'next/image';
import React from 'react';
import { agba } from '../font/font';
import { titan } from '../font/font';

const Beneficios = () => {
	return (
		<div className='relative pb-10'>
			<div className=''>
				<Image
					src='/box.svg'
					alt=''
					width={140}
					height={140}
					className='absolute w-[60px] h-[60px] left-10 md:w-[140px] md:h-[140px] md:left-60 md:bottom-32 z-10'
				/>
			</div>
			<div className='w-72 ml-12 text-center md:w-full'>
				<h2
					className={`${titan.className} font-bold text-2xl md:text-4xl text-white md:w-9/12 mx-auto`}
				>
					BENEFICIOS DE{' '}
					<span
						className={`${agba.className} text-firstBlue text-2xl md:text-4xl`}
					>
						ACADEMIA NUMEN
					</span>
				</h2>
			</div>
			<div className='logos bg-secondBlue md:p-16 mt-6 overflow-hidden p-3 flex flex-row justify-center items-center lg:h-28'>
				<div className='logos-slide flex flex-row'>
					<div className='flex flex-row items-center mr-40'>
						<Image
							src='/comisionesReducidasIcon.svg'
							alt='comisiones reducidas'
							width={75}
							height={75}
							priority
							className='w-[50px] h-[50px] md:w-[75px] md:h-[75px]'
						/>
						<p className='pl-2 md:text-3xl text-lg text-white font-bold'>
							Comisiones <br />
							reducidas
						</p>
					</div>
					<div className='flex flex-row items-center mr-40'>
						<Image
							src='/bolsaDeTrabajoIcon.svg'
							alt='bolsa de trabajo'
							width={75}
							height={75}
							priority
							className='w-[50px] h-[50px] md:w-[75px] md:h-[75px]'
						/>
						<p className='pl-2 md:text-3xl text-lg text-white font-bold'>
							Bolsa de <br />
							trabajo
						</p>
					</div>
					<div className='flex flex-row items-center mr-40'>
						<Image
							src='/certificacionOficialIcon.svg'
							alt='certificacion oficial'
							width={75}
							height={75}
							priority
							className='w-[50px] h-[50px] md:w-[75px] md:h-[75px]'
						/>
						<p className='pl-2 md:text-3xl text-lg text-white font-bold'>
							Certificación <br /> oficial
						</p>
					</div>
					<div className='flex flex-row items-center mr-40'>
						<Image
							src='/comunidadNumenIcon.svg'
							alt='comunidad numen'
							width={75}
							height={75}
							priority
							className='w-[50px] h-[50px] md:w-[75px] md:h-[75px]'
						/>
						<p className='pl-2 md:text-3xl text-lg text-white font-bold'>
							Comunidad <br />{' '}
							<span
								className={`${agba.className} text-firstBlue`}
							>
								Numen %
							</span>
						</p>
					</div>
				</div>
				<div className='logos-slide flex flex-row '>
					<div className='flex flex-row items-center mr-40'>
						<Image
							src='/comisionesReducidasIcon.svg'
							alt='comisiones reducidas'
							width={75}
							height={75}
							priority
							className='w-[50px] h-[50px] md:w-[75px] md:h-[75px]'
						/>
						<p className='pl-2 md:text-3xl text-lg text-white font-bold'>
							Comisiones <br />
							reducidas
						</p>
					</div>
					<div className='flex flex-row items-center mr-40'>
						<Image
							src='/bolsaDeTrabajoIcon.svg'
							alt='bolsas de trabajo'
							width={75}
							height={75}
							priority
							className='w-[50px] h-[50px] md:w-[75px] md:h-[75px]'
						/>
						<p className='pl-2 md:text-3xl text-lg text-white font-bold'>
							Bolsa de <br />
							trabajo
						</p>
					</div>
					<div className='flex flex-row items-center mr-40'>
						<Image
							src='/certificacionOficialIcon.svg'
							alt='certificacion oficial'
							width={75}
							height={75}
							priority
							className='w-[50px] h-[50px] md:w-[75px] md:h-[75px]'
						/>
						<p className='pl-2 md:text-3xl text-lg text-white font-bold'>
							Certificación <br /> oficial
						</p>
					</div>
					<div className='flex flex-row items-center mr-40'>
						<Image
							src='/comunidadNumenIcon.svg'
							alt='comunidad numen'
							width={75}
							height={75}
							priority
							className='w-[50px] h-[50px] md:w-[75px] md:h-[75px]'
						/>
						<p className='pl-2 md:text-3xl text-lg text-white font-bold'>
							Comunidad <br />{' '}
							<span
								className={`${agba.className} text-firstBlue`}
							>
								Numen %
							</span>
						</p>
					</div>
				</div>
				<div className='logos-slide flex flex-row'>
					<div className='flex flex-row items-center mr-40'>
						<Image
							src='comisionesReducidasIcon.svg'
							alt='comisiones reducidas'
							width={75}
							height={75}
							priority
							className='w-[50px] h-[50px] md:w-[75px] md:h-[75px]'
						/>
						<p className='pl-2 md:text-3xl text-lg text-white font-bold'>
							Comisiones <br />
							reducidas
						</p>
					</div>
					<div className='flex flex-row items-center mr-40'>
						<Image
							src='/bolsaDeTrabajoIcon.svg'
							alt='bolsas de trabajo'
							width={75}
							height={75}
							priority
							className='w-[50px] h-[50px] md:w-[75px] md:h-[75px]'
						/>
						<p className='pl-2 md:text-3xl text-lg text-white font-bold'>
							Bolsa de <br />
							trabajo
						</p>
					</div>
					<div className='flex flex-row items-center mr-40'>
						<Image
							src='/certificacionOficialIcon.svg'
							alt='certificacion oficial'
							width={75}
							height={75}
							priority
							className='w-[50px] h-[50px] md:w-[75px] md:h-[75px]'
						/>
						<p className='pl-2 md:text-3xl text-lg text-white font-bold'>
							Certificación <br /> oficial
						</p>
					</div>
					<div className='flex flex-row items-center mr-40'>
						<Image
							src='/comunidadNumenIcon.svg'
							alt='comunidad numen'
							width={75}
							height={75}
							priority
							className='w-[50px] h-[50px] md:w-[75px] md:h-[75px]'
						/>
						<p className='pl-2 md:text-3xl text-lg text-white font-bold'>
							Comunidad <br />{' '}
							<span
								className={`${agba.className} text-firstBlue`}
							>
								Numen %
							</span> 
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Beneficios;
