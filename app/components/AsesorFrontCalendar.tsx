interface HablarInscripcionProps {
	phoneNumber: string;
	message: string;
}

const AsesorFrontCalendar = ({
	phoneNumber,
	message,
}: HablarInscripcionProps): string => {
	const encodedMessage = encodeURIComponent(message);

	return typeof window !== 'undefined' &&
		window.innerWidth >= 768
		? `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`
		: `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};

export default AsesorFrontCalendar;
