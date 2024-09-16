import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
	resources: {
		es: {
			translation: {
				heroTitle: 'Optimización y Resultados Comerciales',
				heroSubtitle:
					'En Nimus Consultora ayudamos a empresas a mejorar sus procesos de ventas con soluciones integrales.',
				contactUs: 'Contáctanos',
			},
		},
	},
	lng: 'es', // Lenguaje por defecto
	fallbackLng: 'es',
	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
