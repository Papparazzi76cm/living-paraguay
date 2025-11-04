
import React from 'react';
import Icon from '../Icon';
import AnimatedDiv from '../AnimatedDiv';

const PermitSection: React.FC = () => {
    
  const InfoCard: React.FC<{ icon: string; title: string; children: React.ReactNode, step: number }> = ({ icon, title, children, step }) => (
    <AnimatedDiv className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 flex items-start space-x-4">
      <div className="flex-shrink-0">
          <div className="relative">
              <div className="w-12 h-12 bg-py-blue text-white rounded-full flex items-center justify-center">
                  <Icon name={icon} className="w-6 h-6" />
              </div>
              <span className="absolute -top-2 -right-2 w-6 h-6 bg-py-red text-white text-xs font-bold rounded-full flex items-center justify-center border-2 border-white">
                  {step}
              </span>
          </div>
      </div>
      <div>
        <h3 className="text-xl font-bold text-py-blue-dark mb-2">{title}</h3>
        <div className="text-gray-600 space-y-2">{children}</div>
      </div>
    </AnimatedDiv>
  );
  
  const ContactForm: React.FC = () => (
    <div className="bg-py-blue-dark p-6 rounded-lg shadow-lg text-white">
        <h3 className="text-2xl font-bold mb-4">Iniciar Consulta Gratuita</h3>
        <form className="space-y-4">
            <div>
                <label htmlFor="name" className="sr-only">Nombre</label>
                <input type="text" id="name" placeholder="Nombre Completo" className="w-full p-3 rounded-md bg-py-blue text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-py-red" />
            </div>
            <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input type="email" id="email" placeholder="Correo Electrónico" className="w-full p-3 rounded-md bg-py-blue text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-py-red" />
            </div>
            <div>
                <label htmlFor="message" className="sr-only">Mensaje</label>
                <textarea id="message" rows={4} placeholder="Cuéntenos sobre su caso..." className="w-full p-3 rounded-md bg-py-blue text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-py-red"></textarea>
            </div>
            <button type="submit" className="w-full bg-py-red hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded-full transition-transform duration-300 hover:scale-105">
                Enviar Consulta
            </button>
        </form>
    </div>
  );

  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedDiv className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-py-blue-dark">Residencia y Cédula en Paraguay</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
            El camino claro y seguro para establecerse legalmente en el corazón de Sudamérica.
          </p>
        </AnimatedDiv>
        
        <div className="grid lg:grid-cols-3 lg:gap-12">
          <main className="lg:col-span-2 space-y-8">
            <InfoCard icon="document" title="Residencia Temporal (Vía General)" step={1}>
                <p>Es el primer paso para la mayoría. Válida por <strong>2 años</strong>.</p>
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>Requisito clave:</strong> Demostrar solvencia económica (aprox. <strong>$5,000 USD</strong> en cuenta bancaria) o contrato de trabajo.</li>
                    <li><strong>Documentos:</strong> Pasaporte válido, certificados de nacimiento y antecedentes penales, todos debidamente <strong>apostillados</strong>.</li>
                    <li>Permite obtener la Cédula de Identidad Paraguaya.</li>
                </ul>
            </InfoCard>

            <InfoCard icon="document" title="Residencia Permanente" step={2}>
                <p>Para establecerse a largo plazo. Hay dos vías principales:</p>
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>Vía Estándar:</strong> Se puede solicitar tras cumplir 21 meses de residencia temporal.</li>
                    <li><strong>Vía Inversionista (SUACE):</strong> Vía directa para quienes establecen una empresa en Paraguay. Requiere obtener la "Constancia de Inversionista".</li>
                     <li>El carnet es definitivo y solo requiere renovación cada 10 años.</li>
                </ul>
            </InfoCard>

            <InfoCard icon="document" title="Cédula de Identidad Paraguaya" step={3}>
                <p>La "llave dorada" para la integración total. Se solicita en el Departamento de Identificaciones de la Policía Nacional una vez obtenida la residencia.</p>
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>Indispensable para:</strong> Abrir cuentas bancarias, obtener licencia de conducir, firmar contratos.</li>
                    <li><strong>Proceso:</strong> Es un trámite separado de la residencia. Requiere el Carnet de Radicación, documentos personales y certificados locales.</li>
                    <li>El tiempo de procesamiento es de <strong>30-45 días hábiles</strong>.</li>
                </ul>
            </InfoCard>

            <AnimatedDiv className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                <h3 className="text-xl font-bold text-py-blue-dark mb-4">Tabla Comparativa de Residencias</h3>
                <div className="overflow-x-auto">
                    <table className="w-full text-left table-auto">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="p-3 font-semibold">Característica</th>
                                <th className="p-3 font-semibold">Temporal</th>
                                <th className="p-3 font-semibold">Permanente (SUACE)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b">
                                <td className="p-3">Duración</td>
                                <td className="p-3">2 años</td>
                                <td className="p-3">Definitiva</td>
                            </tr>
                            <tr className="border-b bg-gray-50">
                                <td className="p-3">Requisito Principal</td>
                                <td className="p-3">Solvencia Económica ($5k)</td>
                                <td className="p-3">Constancia de Inversionista</td>
                            </tr>
                            <tr>
                                <td className="p-3">Vía de Acceso</td>
                                <td className="p-3">Primer paso obligatorio</td>
                                <td className="p-3">Acceso directo</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </AnimatedDiv>
          </main>
          
          <aside className="lg:sticky top-24 h-fit mt-12 lg:mt-0">
             <ContactForm />
          </aside>
        </div>
      </div>
    </section>
  );
};

export default PermitSection;
