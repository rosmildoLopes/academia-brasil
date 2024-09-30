import { agba, titan } from '../../font/font';
import Image from 'next/image';

const SubHeroOne = () => {
	return (
		<div className='relative flex justify-center'>
			<div className='grid text-center text-white'>
				<h2
					className={`${titan.className} md:text-4xl text-2xl`}
				>
					ESTUDA NA ACADEMIA NUMEN
				</h2>
				<h4
					className={`${agba.className} md:text-2xl text-base`}
				>
					Sua carreira profissional começa aqui
				</h4>
				<p className='md:text-base py-6 text-xs px-3'>
					Ensinamos do zero{' '}
					<strong>
						as habilidades que grandes empresas do mundo
						estão procurando
					</strong>
					. <br />
					Milhares de graduados dos nossos cursos já
					trabalham no <strong>setor de TI</strong> .
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
