import React from 'react';
import { COST_OF_LIVING_DATA, NEIGHBORHOODS_DATA } from '../../constants';
import AnimatedDiv from '../AnimatedDiv';

const CostOfLivingCard: React.FC<{ data: typeof COST_OF_LIVING_DATA[0] }> = ({ data }) => (
    <AnimatedDiv className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
        <h3 className="text-2xl font-bold text-py-blue-dark">{data.city}</h3>
        <p className="text-sm text-gray-500 mb-4">Costo de vida mensual estimado (USD)</p>
        <ul className="space-y-2 text-gray-700">
            <li className="flex justify-between"><span>Alquiler (2 hab):</span> <span className="font-semibold">${data.rent}</span></li>
            <li className="flex justify-between"><span>Alimentación:</span> <span className="font-semibold">${data.food}</span></li>
            <li className="flex justify-between"><span>Transporte:</span> <span className="font-semibold">${data.transport}</span></li>
            <li className="flex justify-between"><span>Servicios:</span> <span className="font-semibold">${data.utilities}</span></li>
        </ul>
        <div className="border-t mt-4 pt-3 flex justify-between font-bold text-lg text-py-blue-dark">
            <span>Total Estimado:</span>
            <span>${data.rent + data.food + data.transport + data.utilities}</span>
        </div>
    </AnimatedDiv>
);

const NeighborhoodCard: React.FC<{ data: typeof NEIGHBORHOODS_DATA[0] }> = ({ data }) => (
    <AnimatedDiv className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
        <img src={data.image} alt={data.name} className="w-full h-48 object-cover bg-gray-200" />
        <div className="p-4">
            <h3 className="font-bold text-xl text-py-blue-dark">{data.name}</h3>
            <p className="text-gray-600 mt-2 text-sm">{data.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
                {data.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-py-blue/10 text-py-blue text-xs font-semibold rounded-full">{tag}</span>
                ))}
            </div>
        </div>
    </AnimatedDiv>
);

const NeighborhoodGuide: React.FC = () => {
    return (
        <section className="py-16 sm:py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Cost of Living */}
                <AnimatedDiv className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-py-blue-dark">Costo de Vida en Paraguay</h2>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
                        Una mirada a los gastos mensuales en las principales ciudades para una planificación financiera efectiva.
                    </p>
                </AnimatedDiv>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                    {COST_OF_LIVING_DATA.map(cityData => (
                        <CostOfLivingCard key={cityData.city} data={cityData} />
                    ))}
                </div>

                {/* Featured Neighborhoods */}
                <AnimatedDiv className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-py-blue-dark">Barrios Destacados de Asunción</h2>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
                        Encuentra el ambiente perfecto para tu estilo de vida en la capital.
                    </p>
                </AnimatedDiv>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {NEIGHBORHOODS_DATA.map(neighborhood => (
                        <NeighborhoodCard key={neighborhood.id} data={neighborhood} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NeighborhoodGuide;