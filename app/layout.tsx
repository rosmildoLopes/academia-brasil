import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import Footer from './components/Footer';
import Navbar2 from './components/Navbar/Navbar2';
import WhatsAppButton from './components/WhatsAppButton';
import Script from 'next/script';

const mont = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
	metadataBase: new URL('https://www.academianumen.com.br'),
	title: {
		template: '%s | Academia Numen',
		default: 'Academia Numen',
	},
	description:
		'Na Academia Numen, encontre cursos de marketing, fullstack, frontend, cibersegurança, agilidade e scrum, gerenciamento de projetos, análise de dados, design UX/UI, React, JavaScript, backend e WordPress. Prepare-se para o presente com nossa ampla oferta de formação digital.',
	openGraph: {
		title: 'Academia Numen',
		description:
			'Na Academia Numen, encontre cursos de marketing, fullstack, frontend, cibersegurança, agilidade e scrum, gerenciamento de projetos, análise de dados, design UX/UI, React, JavaScript, backend e WordPress. Prepare-se para o presente com nossa ampla oferta de formação digital.',
		images: [
			'https://www.academianumen.com.br/opengraph-image.png',
		],
	},
	twitter: {
		card: 'summary_large_image',
		site: '@Academianumen',
		title: 'Academia Numen',
		description:
			'Na Academia Numen, encontre cursos de marketing, fullstack, frontend, cibersegurança, agilidade e scrum, gerenciamento de projetos, análise de dados, design UX/UI, React, JavaScript, backend e WordPress. Prepare-se para o presente com nossa ampla oferta de formação digital.',
		images: [
			'https://www.academianumen.com.br/opengraph-image.png',
		],
	},
};


export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='es'>
			<head>
				<Script
					src='https://www.googletagmanager.com/gtag/js?id=G-THFCHNK06S'
					strategy='afterInteractive' 
				></Script>
				<Script
					id='google-analytics'
					strategy='afterInteractive'
				>
					{`
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', 'G-THFCHNK06S');
					`}
				</Script>
			</head>
			<body
				className={`${mont.className} z-0 bg-firstBackground md:overflow-x-hidden relative`}
			>
				<Navbar2 />
				{children}
				<WhatsAppButton />
				<Footer />
			</body>
		</html>
	);
}
