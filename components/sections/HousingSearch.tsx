import React, { useState, useMemo } from 'react';
import { Property } from '../../types';
import { PROPERTIES_DATA } from '../../constants';
import Icon from '../Icon';
import AnimatedDiv from '../AnimatedDiv';

const PropertyCard: React.FC<{ property: Property }> = ({ property }) => (
    <AnimatedDiv className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 transform hover:-translate-y-1 transition-all duration-300">
        <img src={property.image} alt={property.title} className="w-full h-48 object-cover bg-gray-200" />
        <div className="p-4">
            <div className="flex justify-between items-start">
                <div>
                    <p className="text-sm font-semibold text-py-blue">{property.operation} &bull; {property.type}</p>
                    <h3 className="font-bold text-lg mt-1 text-py-blue-dark">{property.title}</h3>
                </div>
                <p className="text-xl font-extrabold text-py-red whitespace-nowrap">
                    {property.operation === 'Venta' ? '$' : ''}
                    {property.price.toLocaleString('es-PY')}
                    {property.operation === 'Alquiler' ? ' Gs' : ''}
                </p>
            </div>
            <p className="text-sm text-gray-500 mt-1">{property.location}</p>
            <div className="mt-4 flex justify-between text-sm text-gray-600 border-t pt-3">
                <span>{property.area} m²</span>
                {property.bedrooms > 0 && <span>{property.bedrooms} hab.</span>}
                {property.bathrooms > 0 && <span>{property.bathrooms} baños</span>}
            </div>
        </div>
    </AnimatedDiv>
);

const HousingSearch: React.FC = () => {
    const [city, setCity] = useState('Todos');
    const [operation, setOperation] = useState('Todos');
    const [type, setType] = useState('Todos');
    const [maxPrice, setMaxPrice] = useState(300000);

    const filteredProperties = useMemo(() => {
        return PROPERTIES_DATA.filter(p => {
            const priceCondition = operation === 'Venta' ? p.price <= maxPrice : p.price <= maxPrice*30;
            return (city === 'Todos' || p.city === city) &&
                   (operation === 'Todos' || p.operation === operation) &&
                   (type === 'Todos' || p.type === type) &&
                   priceCondition;
        });
    }, [city, operation, type, maxPrice]);

    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMaxPrice(Number(e.target.value));
    };

    return (
        <section className="py-16 sm:py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedDiv className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-py-blue-dark">Encuentra tu Hogar en Paraguay</h2>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
                        Explora nuestra selección de propiedades en las mejores ubicaciones del país.
                    </p>
                </AnimatedDiv>

                <div className="sticky top-16 bg-white/90 backdrop-blur-md p-4 rounded-lg shadow-md z-40 mb-8 border">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
                        {/* Filters */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Ciudad</label>
                            <select onChange={e => setCity(e.target.value)} value={city} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-py-blue focus:border-py-blue sm:text-sm rounded-md">
                                <option>Todos</option>
                                <option>Asunción</option>
                                <option>Encarnación</option>
                                <option>Ciudad del Este</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Operación</label>
                            <select onChange={e => setOperation(e.target.value)} value={operation} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-py-blue focus:border-py-blue sm:text-sm rounded-md">
                                <option>Todos</option>
                                <option>Alquiler</option>
                                <option>Venta</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Tipo de Propiedad</label>
                            <select onChange={e => setType(e.target.value)} value={type} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-py-blue focus:border-py-blue sm:text-sm rounded-md">
                                <option>Todos</option>
                                <option>Casa</option>
                                <option>Departamento</option>
                                <option>Terreno</option>
                            </select>
                        </div>
                        <div className="md:col-span-2 lg:col-span-1">
                            <label className="block text-sm font-medium text-gray-700">Precio Máximo (USD)</label>
                            <input type="range" min="10000" max="300000" step="10000" value={maxPrice} onChange={handlePriceChange} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-py-blue"/>
                            <div className="text-center text-sm font-semibold text-py-blue-dark mt-1">${maxPrice.toLocaleString('es-PY')}</div>
                        </div>
                    </div>
                </div>

                {filteredProperties.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProperties.map(property => (
                            <PropertyCard key={property.id} property={property} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16">
                        <p className="text-xl text-gray-500">No se encontraron propiedades con los filtros seleccionados.</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default HousingSearch;