import React, { useState, useMemo } from 'react';
import { School } from '../../types';
import { SCHOOLS_DATA } from '../../constants';
import AnimatedDiv from '../AnimatedDiv';

const SchoolCard: React.FC<{ school: School }> = ({ school }) => (
    <AnimatedDiv className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 flex flex-col">
        <img src={school.image} alt={school.name} className="w-full h-48 object-cover bg-gray-200" />
        <div className="p-4 flex flex-col flex-grow">
            <h3 className="font-bold text-lg text-py-blue-dark">{school.name}</h3>
            <p className="text-sm text-gray-500 mt-1">{school.location}</p>
            <div className="mt-3 space-y-2 text-sm flex-grow">
                <p><span className="font-semibold">Idiomas:</span> {school.languages.join(', ')}</p>
                <p><span className="font-semibold">Niveles:</span> {school.levels.join(', ')}</p>
            </div>
            <div className="mt-4 flex justify-between items-center border-t pt-3">
                <span className="text-sm font-semibold text-gray-700">Ranking</span>
                <span className="px-3 py-1 bg-py-blue text-white rounded-full text-sm font-bold">{school.ranking}/5.0</span>
            </div>
        </div>
    </AnimatedDiv>
);

const SchoolList: React.FC = () => {
    const [city, setCity] = useState('Todos');

    const filteredSchools = useMemo(() => {
        return SCHOOLS_DATA.filter(s => city === 'Todos' || s.city === city);
    }, [city]);

    return (
        <section className="py-16 sm:py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedDiv className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-py-blue-dark">Educación de Calidad para tu Familia</h2>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
                        Descubre los mejores colegios internacionales y privados en Paraguay.
                    </p>
                </AnimatedDiv>

                <div className="mb-8 max-w-xs mx-auto">
                    <label className="block text-sm font-medium text-gray-700">Filtrar por Ciudad</label>
                    <select onChange={e => setCity(e.target.value)} value={city} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-py-blue focus:border-py-blue sm:text-sm rounded-md">
                        <option>Todos</option>
                        <option>Asunción</option>
                        <option>Encarnación</option>
                        <option>Ciudad del Este</option>
                    </select>
                </div>
                
                {filteredSchools.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredSchools.map(school => (
                            <SchoolCard key={school.id} school={school} />
                        ))}
                    </div>
                ) : (
                     <div className="text-center py-16">
                        <p className="text-xl text-gray-500">No se encontraron colegios en la ciudad seleccionada.</p>
                    </div>
                )}

            </div>
        </section>
    );
};

export default SchoolList;