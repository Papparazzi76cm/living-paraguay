import { NavLink, Property, School, FAQItem, CostOfLiving, Neighborhood } from './types';

export const LOGO_URL = '/assets/logo.svg';

export const NAV_LINKS: NavLink[] = [
  { name: 'Inicio', page: 'home' },
  { name: 'Permisos', page: 'permits' },
  { name: 'Vivienda', page: 'housing' },
  { name: 'Colegios', page: 'schools' },
  { name: 'Barrios', page: 'neighborhoods' },
  { name: 'Impuestos', page: 'taxation' },
  { name: 'IPS', page: 'social-security'},
  { name: 'FAQ', page: 'faq' },
  { name: 'Contacto', page: 'contact' },
];

export const PROPERTIES_DATA: Property[] = [
  { id: 1, image: '/assets/prop-1.svg', price: 1200, operation: 'Alquiler', type: 'Departamento', title: 'Moderno Departamento en Villa Morra', location: 'Villa Morra, Asunción', area: 120, bedrooms: 2, bathrooms: 2, city: 'Asunción' },
  { id: 2, image: '/assets/prop-2.svg', price: 250000, operation: 'Venta', type: 'Casa', title: 'Lujosa Casa con Piscina en Yacht', location: 'Yacht y Golf Club, Lambaré', area: 450, bedrooms: 4, bathrooms: 5, city: 'Asunción' },
  { id: 3, image: '/assets/prop-3.svg', price: 800, operation: 'Alquiler', type: 'Departamento', title: 'Apartamento con vista al río', location: 'Costanera, Encarnación', area: 90, bedrooms: 2, bathrooms: 1, city: 'Encarnación' },
  { id: 4, image: '/assets/prop-4.svg', price: 180000, operation: 'Venta', type: 'Casa', title: 'Casa familiar en barrio cerrado', location: 'Paraná Country Club, Ciudad del Este', area: 300, bedrooms: 3, bathrooms: 3, city: 'Ciudad del Este' },
  { id: 5, image: '/assets/prop-5.svg', price: 950, operation: 'Alquiler', type: 'Casa', title: 'Acogedora casa en Sajonia', location: 'Sajonia, Asunción', area: 150, bedrooms: 3, bathrooms: 2, city: 'Asunción' },
  { id: 6, image: '/assets/prop-6.svg', price: 50000, operation: 'Venta', type: 'Terreno', title: 'Amplio terreno en San Bernardino', location: 'San Bernardino', area: 1000, bedrooms: 0, bathrooms: 0, city: 'Asunción' },
];

export const SCHOOLS_DATA: School[] = [
    { id: 1, image: '/assets/school-1.svg', name: 'American School of Asunción (ASA)', location: 'Asunción', languages: ['Inglés', 'Español'], levels: ['Pre-K', 'Primaria', 'Secundaria'], ranking: 4.8, city: 'Asunción' },
    { id: 2, image: '/assets/school-2.svg', name: 'St. Annes School', location: 'Asunción', languages: ['Inglés', 'Español'], levels: ['Primaria', 'Secundaria'], ranking: 4.5, city: 'Asunción' },
    { id: 3, image: '/assets/school-3.svg', name: 'Colegio Internacional', location: 'Asunción', languages: ['Español', 'Inglés'], levels: ['Pre-K', 'Primaria', 'Secundaria'], ranking: 4.6, city: 'Asunción' },
    { id: 4, image: '/assets/school-4.svg', name: 'Colegio Goethe', location: 'Asunción', languages: ['Alemán', 'Español'], levels: ['Pre-K', 'Primaria', 'Secundaria'], ranking: 4.7, city: 'Asunción' },
    { id: 5, image: '/assets/school-5.svg', name: 'Liberty School', location: 'Asunción', languages: ['Inglés', 'Español'], levels: ['Pre-K', 'Primaria', 'Secundaria'], ranking: 4.4, city: 'Asunción' },
    { id: 6, image: '/assets/school-6.svg', name: 'Colegio Alemán Concordia', location: 'Asunción', languages: ['Alemán', 'Español'], levels: ['Primaria', 'Secundaria'], ranking: 4.3, city: 'Asunción' },
    { id: 7, image: '/assets/school-7.svg', name: 'Colegio San José', location: 'Ciudad del Este', languages: ['Español'], levels: ['Primaria', 'Secundaria'], ranking: 4.2, city: 'Ciudad del Este'},
    { id: 8, image: '/assets/school-8.svg', name: 'Colegio Inmaculada Concepción', location: 'Encarnación', languages: ['Español'], levels: ['Pre-K', 'Primaria', 'Secundaria'], ranking: 4.5, city: 'Encarnación'}
];

export const FAQ_DATA: FAQItem[] = [
    {
      question: '¿Cuál es el primer paso para obtener la residencia en Paraguay?',
      answer: 'El primer paso para la mayoría de los extranjeros es solicitar la Residencia Temporal. Esta tiene una duración de dos años y requiere demostrar solvencia económica de aproximadamente 5,000 USD, además de presentar documentos personales apostillados como pasaporte, certificado de nacimiento y antecedentes penales.',
    },
    {
      question: '¿Necesito apostillar mis documentos?',
      answer: 'Sí, es un requisito crucial. Todos los documentos personales emitidos fuera de Paraguay (certificado de nacimiento, matrimonio, antecedentes penales, etc.) deben contar con la Apostilla de La Haya para ser válidos. Esto simplifica enormemente el proceso de legalización.',
    },
    {
      question: '¿Qué es la Cédula de Identidad Paraguaya y por qué es importante?',
      answer: 'La Cédula de Identidad Paraguaya es el documento de identidad local. Es considerada la "llave dorada" para la integración, ya que es indispensable para realizar trámites básicos como abrir una cuenta bancaria, firmar contratos de alquiler, obtener una línea telefónica u obtener la licencia de conducir.',
    },
    {
      question: '¿Puedo obtener la Residencia Permanente directamente?',
      answer: 'Sí, es posible. La vía más común es a través del sistema SUACE para inversionistas. Al establecer una empresa en Paraguay y obtener la "Constancia de Inversionista", se puede solicitar la Residencia Permanente sin necesidad de pasar por la temporal.',
    },
    {
        question: '¿Paraguay grava los ingresos obtenidos en el extranjero?',
        answer: 'No, en general. Paraguay se rige por el Principio de Territorialidad, lo que significa que solo grava las rentas generadas dentro de sus fronteras. Ingresos como salarios por trabajo remoto para empresas extranjeras, dividendos de acciones extranjeras o intereses bancarios del exterior no están sujetos a impuestos en Paraguay para residentes fiscales.',
    },
    {
        question: '¿Cuál es la diferencia entre residencia migratoria y residencia fiscal?',
        answer: 'Es una distinción crítica. La residencia migratoria (la Cédula) es un estatus otorgado por la Dirección de Migraciones. La residencia fiscal es un estatus definido por la autoridad tributaria (DNIT), generalmente basado en permanecer más de 120 días en el país en un año civil. Tener la Cédula no garantiza automáticamente la residencia fiscal, la cual es necesaria para beneficiarse del sistema tributario territorial.',
    }
];

export const COST_OF_LIVING_DATA: CostOfLiving[] = [
    { city: 'Asunción', rent: 650, food: 350, transport: 100, utilities: 80 },
    { city: 'Encarnación', rent: 450, food: 300, transport: 80, utilities: 70 },
    { city: 'Ciudad del Este', rent: 500, food: 320, transport: 90, utilities: 75 },
];

export const NEIGHBORHOODS_DATA: Neighborhood[] = [
    { id: 1, name: 'Villa Morra', image: '/assets/neighborhood-1.svg', description: 'El corazón moderno de Asunción, lleno de shoppings, restaurantes gourmet y vida nocturna. Ideal para quienes buscan comodidad y estar en el centro de la acción.', tags: ['Moderno', 'Comercial', 'Vida Nocturna'] },
    { id: 2, name: 'Las Lomas / Carmelitas', image: '/assets/neighborhood-2.svg', description: 'Una zona residencial exclusiva y tranquila, con embajadas, colegios de élite y amplias áreas verdes. Perfecto para familias y ejecutivos.', tags: ['Exclusivo', 'Residencial', 'Seguro'] },
    { id: 3, name: 'Barrio Jara', image: '/assets/neighborhood-3.svg', description: 'Un barrio tradicional y familiar con excelente ubicación, cercano al centro y con buena conexión a toda la ciudad. Ofrece una mezcla de casas y edificios.', tags: ['Tradicional', 'Familiar', 'Céntrico'] },
    { id: 4, name: 'Sajonia', image: '/assets/neighborhood-4.svg', description: 'Conocido por sus edificios históricos y su cercanía al Palacio de Justicia y el estadio Defensores del Chaco. Un barrio con mucha historia y carácter.', tags: ['Histórico', 'Bohemio', 'Cultural'] },
];

export const CURRENCY_RATES = {
    PYG: 1,
    USD: 7500,
    EUR: 8100,
};