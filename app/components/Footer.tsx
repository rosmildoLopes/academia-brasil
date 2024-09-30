import Image from 'next/image';
import Link from 'next/link';
interface CourseData {
	category: string;
	courses: {
		name: string;
		href: string;
	}[];
}
interface ContactData {
	category: string;
	details: { icon: string; text: string }[];
}
interface SocialLink {
	icon?: string;
	link: string;
	target: string;
}
const coursesData: CourseData[] = [
	{
		category: 'Cursos',
		courses: [
			{
				name: 'HTML y CSS',
				href: '/htmlYCss',
			},
			{
				name: 'Javascript',
				href: '/javascript',
			},
			{
				name: 'React',
				href: '/react',
			},
			{
				name: 'Backend',
				href: '/backend',
			},
			{
				name: 'Testing',
				href: '/testing',
			},
			{
				name: 'Community Manager',
				href: '/communityManager',
			},
			{
				name: 'Preparacion Exámen PMP',
				href: '/examenPMP',
			},
			{
				name: 'Google Ads',
				href: '/googleAds',
			},
		],
	},
	{
		category: 'Diplomatura',
		courses: [
			{
				name: 'Fullstack',
				href: '/fullstack',
			},
			{
				name: 'Frontend',
				href: '/frontend',
			},
			{
				name: 'Diseño UX/UI',
				href: '/disenoUXUI',
			},
			{
				name: 'Wordpress',
				href: '/wordPress',
			},
			{
				name: 'Marketing Digital',
				href: '/marketing',
			},
			{
				name: 'Marketing Político',
				href: '/marketingPolitico',
			},
			{
				name: 'Ciberseguridad',
				href: '/ciberseguridad',
			},
			{
				name: 'Data Analytics',
				href: '/dataAnalytics',
			},
			{
				name: 'Project Management',
				href: '/projectManagement',
			},
			{
				name: 'Project Management Asincrónico',
				href: '/projectManagementAsincronico',
			},
		],
	},
	{
		category: 'Accesos',
		courses: [
			{
				name: 'Blog',
				href: '/blog',
			},
			{
				name: 'La Academia',
				href: '/nosotros',
			},
			{
				name: 'Terminos y condiciones',
				href: '/terminos-y-condiciones',
			},
		],
	},
];
const contactData: ContactData[] = [
	{
		category: 'Contacto',
		details: [
			{ icon: '/location.svg', text: 'Huergo 949 Piso 12' },
			{
				icon: '/location.svg',
				text: 'Buenos Aires - Argentina',
			},
			{ icon: '/cell.svg', text: '+54 (11) 3126-2388' },
			{ icon: '/mail.svg', text: 'info@academianumen.com' },
		],
	},
];
const socialLinks: SocialLink[] = [
	{
		icon: '/facebook.svg',
		link: 'https://www.facebook.com/AcademiaNumen/',
		target: '_blank',
	},
	{
		icon: '/instagram.svg',
		link: 'https://www.instagram.com/academianumen',
		target: '_blank',
	},
	{
		icon: '/twitter.svg',
		link: 'https://twitter.com/Academianumen',
		target: '_blank',
	},
];
const Footer: React.FC = () => {
	return (
		<footer className='bg-secondBackground flex flex-col justify-center items-center overflow-x-hidden w-full text-white h-auto lg:px-16 lg:pt-20'>
			<div className='w-full px-0 gap-10 flex flex-col md:flex-row md:justify-between'>
				<div className='flex md:block pt-16 md:pt-0 justify-center'>
					<Image
						src='/logo.svg'
						alt='logo'
						width={217}
						height={49.73}
						layout='intrinsic'
					/>
				</div>
				<div className='flex md:gap-16 flex-col md:flex-row p-5 px-20'>
					<div className='flex flex-row gap-4 md:gap-4 justify-center mx-auto w-10/12 md:w-full'>
						{coursesData.map((categoryData, index) => (
							<div
								key={index}
								className='leading-loose mb-10'
							>
								<h4 className='font-bold text-xl md:text-xl lg:text-2xl mb-3'>
									{categoryData.category}
								</h4>
								{categoryData.courses.map(
									(course, index) => (
										<p
											key={index}
											className='hover:text-blue-400 text-sm leading-loose'
										>
											<Link
												href={course.href}
												target='_blank'
											>
												<p>{course.name}</p>
											</Link>
										</p>
									),
								)}
							</div>
						))}
					</div>
					<div className='flex flex-col mb-4'>
						{contactData.map((categoryData, index) => (
							<div
								key={index}
								className='text-[14px] leading-loose mb-1 flex flex-col justify-center items-center md:items-start'
							>
								<h4 className='font-bold text-xl mb-2'>
									{categoryData.category}
								</h4>
								{categoryData.details.map(
									(detail, index) => (
										<div
											key={index}
											className={`flex justify-start items-center `}
										>
											<Image
												src={detail.icon}
												alt='detalles '
												width={11}
												height={13}
												className='mr-2'
											/>
											<p className='hover:text-blue-500'>
												{detail.text}
											</p>
										</div>
									),
								)}
							</div>
						))}
						<div className='flex justify-center md:justify-start'>
							{socialLinks.map((socialLink, index) => (
								<Link
									key={index}
									href={socialLink.link}
									target={socialLink.target}
								>
									<Image
										src={socialLink.icon || ''}
										alt='iconos de redes sociales'
										width={31}
										height={31}
										className='mr-2'
										layout='intrinsic'
									/>
								</Link>
							))}
						</div>
					</div>
				</div>
			</div>
			<div className='flex justify-center items-center bg-firstBackground text-center h-auto p-4 w-screen italic text-xs overflow-x-hidden'>
				<p>
					Copyright
					<span>
						{' '}
						&copy; {new Date().getFullYear()} Desarrollado
						por NUMEN PUBLICIDAD.
					</span>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
