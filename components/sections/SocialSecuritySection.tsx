
import React from 'react';
import Icon from '../Icon';
import AnimatedDiv from '../AnimatedDiv';

const SocialSecuritySection: React.FC = () => {
  const InfoCard: React.FC<{ icon: string; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <AnimatedDiv className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-py-blue text-white rounded-full flex items-center justify-center mr-4">
          <Icon name={icon} className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-py-blue-dark">{title}</h3>
      </div>
      <div className="text-gray-600 space-y-2">{children}</div>
    </AnimatedDiv>
  );

  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedDiv className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-py-blue-dark">Seguridad Social (IPS)</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
            Entendiendo el Instituto de Previsión Social, el pilar de la salud y jubilación en Paraguay.
          </p>
        </AnimatedDiv>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <InfoCard icon="money" title="Aportes y Contribuciones">
            <p>El sistema se financia con aportes obligatorios sobre el salario del empleado.</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li><strong>Empleado:</strong> Aporta el <strong>9%</strong> de su salario.</li>
              <li><strong>Empleador:</strong> Contribuye con un <strong>16.5%</strong> adicional.</li>
              <li>El total de la contribución es del <strong>25.5%</strong> sobre el salario bruto.</li>
            </ul>
          </InfoCard>

          <InfoCard icon="document" title="Beneficios Cubiertos">
            <p>El IPS ofrece una cobertura integral que incluye:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li><strong>Salud:</strong> Atención médica, hospitalización, medicamentos y subsidios por enfermedad o maternidad para el titular y su familia directa.</li>
              <li><strong>Jubilación:</strong> Pensiones por vejez, invalidez y para sobrevivientes.</li>
              <li>Otros beneficios como asignaciones familiares.</li>
            </ul>
          </InfoCard>

          <InfoCard icon="document" title="Puntos Clave">
            <p>Aspectos importantes a considerar para expatriados:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li><strong>Obligatorio para Empleados:</strong> Si trabajas en relación de dependencia para una empresa paraguaya, la inscripción y el aporte son obligatorios.</li>
              <li><strong>Voluntario para Independientes:</strong> Profesionales independientes y dueños de empresas unipersonales pueden optar por inscribirse para acceder a los beneficios.</li>
              <li><strong>Calidad del Servicio:</strong> La calidad de la atención médica puede variar, y muchos expatriados optan por complementar con un seguro médico privado.</li>
            </ul>
          </InfoCard>
        </div>
      </div>
    </section>
  );
};

export default SocialSecuritySection;
