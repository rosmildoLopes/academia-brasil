import Certificacion from './components/Certificacion';
import Beneficios from './components/Beneficios';
import Cursos from './components/Cursos';
import HeroOne from './components/Heros/HeroOne';
import SubHeroOne from './components/Heros/SubHeroOne';
import Comunidad from './components/Comunidad';
import Testimonios from './components/Testimonios2';

export default function Home() {
	return (
		<main className='flex flex-col'>
			<HeroOne />
			<SubHeroOne />
			<Beneficios />
			<Cursos />
			<Certificacion />
			<Testimonios />
			<Comunidad />
		</main>
	);
}
