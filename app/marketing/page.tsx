import Image from 'next/image';
import HeroMarketing from '../components/Heros/heroMarketing';
import CaracteristicasDelCurso from '../components/CaracteristicasDelCurso';
import Learnings, {
	LearningItem,
} from '../components/Learnings';
import BeneficiosAlumnos from '../components/BeneficiosAlumnos';
import Docentes from '../components/Docentes';
import Calendario from '../components/Calendario';
import CalendarioSoldOut from '../components/CalendarioSoldOut';
import CalendarioMobileSoldOut from '../components/CalendarioMobileSoldOut';
import { titan, agba } from '../font/font';
import { marketingCursoConfig } from '../constants/videoDetails';
import { docentesMarketing } from '../constants/docentesData';
import Faq from '../components/SobreLaDiplomatura';
import { faqs } from '../constants/faqs';
import { Metadata } from 'next';
import AsesorFrontCalendar from '../components/AsesorFrontCalendar';

export const metadata: Metadata = {
	title: 'Formación en Marketing Digital',
	description:
		'Ofrecemos formación completa en marketing digital. Conviértete en un experto en SEO, publicidad online y estrategias de contenido. ¡Empieza ahora!',
};
const eventos = [
	{
		startDate: '12/11/24',
		endDate: '12/06/25',
		meetingDate: 'Martes 19 Hs',
		buttonText: 'Quiero empezar',
	},
];
// Fechas agotadas
const eventosSoldOut = [
	{
		startDate: '08/08/24',
		endDate: '08/03/25',
		meetingDate: 'Jueves 19 Hs',
		buttonText: 'Quiero empezar',
	},
];
const misLearningItems: LearningItem[] = [
	{
		id: 1,
		message: 'Fundamentos de Marketing Digital',
		boldStart: 0,
	},
	{
		id: 2,
		message:
			'Técnicas y herramientas para diseñar estrategias de Marketing Digital',
		boldStart: 0,
	},
	{
		id: 3,
		message:
			'Identificar contenidos y redes sociales acordes al público objetivo.',
		boldStart: 0,
	},
	{
		id: 4,
		message:
			'Pauta publicitaria: Google Ads, Meta Ads y mailing.',
		boldStart: 0,
	},
	{
		id: 5,
		message: 'Análisis de datos y elaboración de reportes',
		boldStart: 0,
	},
	{
		id: 6,
		message:
			'Segmentar y dirigir tus mensajes a audiencias específicas',
		boldStart: 0,
	},
];
export default function Marketing() {
	return (
		<section className='py-24 flex flex-col gap-16'>
			<HeroMarketing />
			<Learnings learningItems={misLearningItems} />
			<CaracteristicasDelCurso
				config={marketingCursoConfig}
			/>
			<BeneficiosAlumnos />
			{/* Este div va a ser visible para dispositivos medianos en adelante (hidden md:flex)  */}
			<div className='hidden lg:flex flex-col gap-7'>
				<div className='flex items-center  justify-center'>
					<h2
						className={` ${titan.className} text-white text-center text-4xl`}
					>
						CALENDARIO
					</h2>
				</div>
				{eventosSoldOut.map((evento, index) => (
					<CalendarioSoldOut
						key={index}
						startDate={evento.startDate}
						endDate={evento.endDate}
						meetingDate={evento.meetingDate}
						buttonText={evento.buttonText}
					/>
				))}
				{eventos.map((evento, index) => (
					<Calendario
						key={index}
						startDate={evento.startDate}
						endDate={evento.endDate}
						meetingDate={evento.meetingDate}
						buttonText={evento.buttonText}
						linkPreInscripcion='/preInscripcionMarketing'
						linkInscripcion='https://tienda.academianumen.com.ar/producto/marketing-digital-inicio-agosto-2024/'
						linkHablarConAsesor={AsesorFrontCalendar({
							phoneNumber: '5491131262388',
							message:
								'Estoy interesado en el curso de Marketing, me gustaría recibir más información',
						})}
					/>
				))}
			</div>
			<div className='flex flex-col lg:hidden gap-7'>
				<div className='flex items-center  justify-center'>
					<h2
						className={` ${titan.className} text-white text-center text-4xl`}
					>
						CALENDARIO
					</h2>
				</div>
				<CalendarioMobileSoldOut
					eventos={eventos}
					eventosSoldOut={eventosSoldOut}
					linkPreInscripcion='/preInscripcionMarketing'
					linkHablarConAsesor={AsesorFrontCalendar({
						phoneNumber: '5491131262388',
						message:
							'Estoy interesado en el curso de Marketing , me gustaría recibir más información',
					})}
					linkInscripcion='https://tienda.academianumen.com.ar/producto/marketing-digital-inicio-agosto-2024/'
				/>
			</div>
			<div className='flex flex-col justify-center items-center gap-8'>
				<h2
					className={` ${titan.className} text-white text-center text-4xl`}
				>
					DOCENTES
				</h2>
				<Docentes dataDocentes={docentesMarketing} />
				<div className='flex flex-col w-full justify-center items-center'>
					<h2
						className={` ${titan.className} text-white text-center text-2xl mb-5 lg:text-3xl`}
					>
						LO QUE TENÉS QUE SABER SOBRE LA DIPLOMATURA
					</h2>
					<div className='flex relative w-full'>
						<Image
							src='interrogacion.svg'
							alt='signo de pregunta'
							width={100}
							height={100}
							layout='intrinsic'
							className='hidden md:block absolute left-20 top-1/3 w-32'
						/>
						<Faq faqs={faqs} />
						<Image
							src='starsPreguntasFrecuentes.svg'
							alt='signo de pregunta'
							width={100}
							height={100}
							layout='intrinsic'
							className='hidden md:block absolute right-12 bottom-0'
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
