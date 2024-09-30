import { agba, titan } from '../font/font';
import Image from 'next/image';

const SubHeroOne = () => {
	return (
		<div className='relative flex justify-center'>
			<div className='grid text-center text-white'>
				<h2
					className={`${titan.className} md:text-4xl text-2xl`}
				>
					ESTUDIÁ EN ACADEMIA NUMEN
				</h2>
				<h4
					className={`${agba.className} md:text-2xl text-base`}
				>
					Tu carrera profesional empieza acá
				</h4>
				<p className='md:text-base py-6 text-xs px-3'>
					Te enseñamos desde cero{' '}
					<strong>
						las habilidades que las grandes empresas del
						mundo están buscando
					</strong>
					. <br />
					Miles de egresados de nuestros{' '}
					<strong>cursos y diplomaturas</strong>, ya están
					trabajando en el <strong>sector IT</strong>.
				</p>
			</div>
			<div>
				<Image
					src={'./subHeroOneIcon.svg'}
					alt='mejores cursos'
					width={203.51}
					height={183.31}
					className='hidden absolute md:w-[203px] md:h-[183px] md:bottom-1 md:block'
				/>
				<Image
					src={'./subHeroOneIconMobile.svg'}
					alt='icon mobile'
					width={203.51}
					height={183.31}
					className='absolute w-[59px] h-[57px] top-44 right-1 md:hidden'
				/>
			</div>
		</div>
	);
};

export default SubHeroOne;
