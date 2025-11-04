import React, { useState, useEffect } from 'react';
import { Page } from '../../types';
import AnimatedDiv from '../AnimatedDiv';

interface HeroSectionProps {
    setActivePage: (page: Page) => void;
}

const images = [
  '/assets/hero-1.svg',
  '/assets/hero-2.svg',
  '/assets/hero-3.svg',
];

const HeroSection: React.FC<HeroSectionProps> = ({ setActivePage }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-[calc(100vh-4rem)] text-white overflow-hidden">
            {images.map((src, index) => (
                <div
                    key={src}
                    className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
                        index === currentIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ backgroundImage: `url(${src})` }}
                />
            ))}
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center">
                <AnimatedDiv>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
                        Tu Nueva Vida en <span className="text-py-red">Paraguay</span> Comienza Aquí
                    </h1>
                </AnimatedDiv>
                <AnimatedDiv delay={200}>
                    <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-200">
                        La guía definitiva para expatriados. Simplificamos tu mudanza, desde la residencia hasta encontrar tu hogar ideal.
                    </p>
                </AnimatedDiv>
                <AnimatedDiv delay={400} className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                    <button onClick={() => setActivePage('permits')} className="bg-py-red hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform duration-300 hover:scale-105">
                        Obtener Residencia
                    </button>
                    <button onClick={() => setActivePage('housing')} className="bg-transparent border-2 border-white hover:bg-white hover:text-py-blue-dark text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300">
                        Buscar Vivienda
                    </button>
                </AnimatedDiv>
            </div>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                            index === currentIndex ? 'bg-white' : 'bg-white/50 hover:bg-white/75'
                        }`}
                    />
                ))}
            </div>
        </section>
    );
};

export default HeroSection;