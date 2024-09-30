import Image from 'next/image';
import HeroFullstack from '../components/Heros/HeroFullstack';
import CaracteristicasDelCurso from '../components/CaracteristicasDelCurso';
import Learnings, {
	LearningItem,
} from '../components/Learnings';
import BeneficiosAlumnos from '../components/BeneficiosAlumnos';
import Docentes from '../components/Docentes';
import Calendario from '../components/Calendario';
import CalendarioSoldOut from '../components/CalendarioSoldOut';
import CalendarioMobileSoldOut from '../components/CalendarioMobileSoldOut';
import { titan } from '../font/font';
import { fullstackCursoConfig } from '../constants/videoDetails';
import { docentesFullstack } from '../constants/docentesData';
import Faq from '../components/SobreLaDiplomatura';
import { faqs } from '../constants/faqs';
import { Metadata } from 'next';
import FullStackForm from '../components/cursos/fullstack/form';
import AsesorFrontCalendar from '../components/AsesorFrontCalendar';

export const metadata: Metadata = {
	title: 'Curso de Desarrollo Web Full Stack',
	description: 'Aprende desarrollo web Full Stack con nuestro curso completo. Domina frontend y backend, y conviértete en un desarrollador web profesional.',
};

const eventos = [
	{
		startDate: '13/11/24',
		endDate: '13/07/25',
		meetingDate: 'Miércoles 19 Hs',
		buttonText: 'Quiero empezar',
	},
];
// Fechas agotadas
const eventosSoldOut = [
	{
		startDate: '02/08/24',
		endDate: '02/04/25',
		meetingDate: 'Viernes 19 Hs',
		buttonText: 'Quiero empezar',
	},
];
const misLearningItems: LearningItem[] = [
	{
		id: 1,
		message:
			'Crear sitios web adaptables y dinámicos desde cero',
		boldStart: 17,
	},
	{
		id: 12,
		message: 'Agregar interactividad con Javascript',
		boldStart: 8,
	},
	{
		id: 3,
		message: 'Crear sitios más complejos con React',
		boldStart: 12,
	},
	{
		id: 4,
		message: 'Tecnologías del lado del servidor (backend)',
		boldStart: 16,
	},
];
export default function fullstack() {
	return (
		<section className='py-24 flex flex-col gap-16'>
			<HeroFullstack />
			<Learnings learningItems={misLearningItems} />
			<CaracteristicasDelCurso
				config={fullstackCursoConfig}
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
						linkPreInscripcion='/preInscripcionFullstack'
						linkHablarConAsesor={AsesorFrontCalendar({
							phoneNumber: '5491131262388',
							message:
								'Estoy interesado en el curso de Fullstack, me gustaría recibir más información',
						})}
						linkInscripcion='https://tienda.academianumen.com.ar/producto/desarrollo-web-full-stack-inicio-agosto-2024-2/'
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
					linkPreInscripcion='/preInscripcionFullstack'
					linkHablarConAsesor={AsesorFrontCalendar({
						phoneNumber: '5491131262388',
						message:
							'Estoy interesado en el curso de Fullstack, me gustaría recibir más información',
					})}
					linkInscripcion='https://tienda.academianumen.com.ar/producto/desarrollo-web-full-stack-inicio-agosto-2024-2/'
				/>
			</div>
			<div className='flex flex-col justify-center items-center gap-8'>
				<h2
					className={` ${titan.className} text-white text-center text-4xl`}
				>
					DOCENTES
				</h2>
				<Docentes dataDocentes={docentesFullstack} />

				<div className='flex flex-col w-full justify-center items-center'>
					<h2
						className={` ${titan.className} text-white text-center text-2xl mb-5 lg:text-3xl`}
					>
						LO QUE TENÉS QUE SABER SOBRE LA DIPLOMATURA
					</h2>
					<Faq faqs={faqs} />
				</div>
			</div>
		</section>
	);
}
