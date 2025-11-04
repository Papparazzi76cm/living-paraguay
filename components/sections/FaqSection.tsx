
import React, { useState } from 'react';
import { FAQ_DATA } from '../../constants';
import Icon from '../Icon';
import AnimatedDiv from '../AnimatedDiv';

const AccordionItem: React.FC<{ item: typeof FAQ_DATA[0], isOpen: boolean, onClick: () => void }> = ({ item, isOpen, onClick }) => {
    return (
        <div className="border-b border-gray-200">
            <h2>
                <button
                    type="button"
                    className="flex justify-between items-center w-full p-5 font-medium text-left text-gray-700 hover:bg-gray-100"
                    onClick={onClick}
                >
                    <span className="text-lg text-py-blue-dark">{item.question}</span>
                    <Icon name={isOpen ? 'minus' : 'plus'} className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
            </h2>
            <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden">
                    <div className="p-5 border-t-0 text-gray-600">
                        <p>{item.answer}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const FaqSection: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleClick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-16 sm:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedDiv className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-py-blue-dark">Preguntas Frecuentes</h2>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
                        Respuestas a las dudas más comunes de los futuros residentes de Paraguay.
                    </p>
                </AnimatedDiv>
                
                <AnimatedDiv className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
                    {FAQ_DATA.map((item, index) => (
                        <AccordionItem
                            key={index}
                            item={item}
                            isOpen={openIndex === index}
                            onClick={() => handleClick(index)}
                        />
                    ))}
                </AnimatedDiv>
            </div>
        </section>
    );
};

export default FaqSection;
