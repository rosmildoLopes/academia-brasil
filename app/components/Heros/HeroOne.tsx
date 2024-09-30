import Image from 'next/image';
import {
	bagel,
	shrikhand,
	luckiest,
	titan,
	ultra,
} from '../../font/font';

export default function HeroOne() {
	return (
		<section className='mt-36 mb-10 h-auto w-full overflow-hidden'>
			<div className='text-white flex flex-col justify-center items-center '>
				<h1
					className={`${titan.className} text-green-gradient text-5xl md:text-9xl w-[80%] text-center`}
				>
					Prepare-se{' '}
				</h1>
				<div className='flex '>
					<div
						className={`${ultra.className} text-white text-5xl  md:text-9xl  w-full text-center relative px-2`}
					>
						<p>PARA O </p>
						<Image
							src='/like.svg'
							width={200}
							height={200}
							alt='icono de me gusta'
							className='absolute -left-10 top-0 lg:-left-32 w-14 h-14 md:w-20 md:h-20  lg:w-36 lg:h-36 flex items-center'
						/>
						<Image
							src='/target.svg'
							width={100}
							height={100}
							alt='icono de un blanco'
							className='absolute -right-8 top-0 w-12 h-12 lg:-right-20 lg:w-32 lg:h-32'
						/>
					</div>
				</div>

				<div className='flex items-center w-full justify-center'>
					<div className='text-4xl md:text-9xl text-nowrap w-[70%] lg:ml-16 text-violet-gradient flex items-center justify-center'>
						<p className={`${ultra.className}`}>P</p>
						<p className={`${bagel.className} lg:mb-3`}>
							r
						</p>
						<p className={`${ultra.className}  lg:mt-2`}>
							e
						</p>
						<p
							className={`${shrikhand.className}  lg:mt-6`}
						>
							s
						</p>
						<p className={`${bagel.className}  lg:mb-2`}>
							e
						</p>
						<p className={`${luckiest.className}  lg:mt-3`}>
							n
						</p>
						<p
							className={`${shrikhand.className}  lg:mt-5`}
						>
							t
						</p>
						<p className={`${luckiest.className}  lg:mt-2`}>
							e
						</p>
						<Image
							src='/arrow.svg'
							width={100}
							height={100}
							alt='icono de una flecha'
							className='w-5 ml-2 md:w-11 lg:ml-6 lg:mt-2 text-violet-gradient'
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
