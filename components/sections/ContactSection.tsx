
import React, { useState } from 'react';
import Icon from '../Icon';
import AnimatedDiv from '../AnimatedDiv';

const ContactSection: React.FC = () => {
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [errors, setErrors] = useState({ name: '', email: '', message: '' });

    const validate = () => {
        let tempErrors = { name: '', email: '', message: '' };
        let isValid = true;
        if (!formData.name) {
            tempErrors.name = 'El nombre es obligatorio.';
            isValid = false;
        }
        if (!formData.email) {
            tempErrors.email = 'El email es obligatorio.';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            tempErrors.email = 'El formato del email no es válido.';
            isValid = false;
        }
        if (!formData.message) {
            tempErrors.message = 'El mensaje es obligatorio.';
            isValid = false;
        }
        setErrors(tempErrors);
        return isValid;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;
        
        setStatus('sending');
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <section className="py-16 sm:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                 <AnimatedDiv className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-py-blue-dark">Contáctenos</h2>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
                        ¿Tienes preguntas? Estamos aquí para ayudarte a dar el siguiente paso.
                    </p>
                </AnimatedDiv>
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <AnimatedDiv delay={200}>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="sr-only">Nombre</label>
                                <input type="text" name="name" id="name" placeholder="Nombre Completo" value={formData.name} onChange={handleChange} className={`w-full p-3 rounded-md border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-py-blue`} />
                                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                            </div>
                            <div>
                                <label htmlFor="email" className="sr-only">Email</label>
                                <input type="email" name="email" id="email" placeholder="Correo Electrónico" value={formData.email} onChange={handleChange} className={`w-full p-3 rounded-md border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-py-blue`} />
                                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                            </div>
                             <div>
                                <label htmlFor="subject" className="sr-only">Asunto</label>
                                <input type="text" name="subject" id="subject" placeholder="Asunto" value={formData.subject} onChange={handleChange} className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-py-blue" />
                            </div>
                            <div>
                                <label htmlFor="message" className="sr-only">Mensaje</label>
                                <textarea name="message" id="message" rows={5} placeholder="Tu mensaje..." value={formData.message} onChange={handleChange} className={`w-full p-3 rounded-md border ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-py-blue`}></textarea>
                                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                            </div>
                            <div>
                                <button type="submit" disabled={status === 'sending'} className="w-full bg-py-red hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded-full transition-transform duration-300 hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed">
                                    {status === 'sending' ? 'Enviando...' : 'Enviar Mensaje'}
                                </button>
                            </div>
                            {status === 'success' && <p className="text-green-600 text-center font-semibold">¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.</p>}
                            {status === 'error' && <p className="text-red-600 text-center font-semibold">Hubo un error al enviar el mensaje. Por favor, inténtelo de nuevo.</p>}
                        </form>
                    </AnimatedDiv>
                    <AnimatedDiv delay={400} className="bg-py-blue/5 p-8 rounded-lg border border-py-blue/20">
                         <h3 className="text-2xl font-bold text-py-blue-dark mb-6">Información de Contacto</h3>
                         <div className="space-y-4 text-gray-700">
                             <p className="flex items-center"><Icon name="email" className="w-5 h-5 mr-3 text-py-blue"/> <span>info@livingparaguay.com</span></p>
                             <p className="flex items-center"><Icon name="phone" className="w-5 h-5 mr-3 text-py-blue"/> <span>+595 981 123 456</span></p>
                             <p className="flex items-start"><Icon name="location" className="w-5 h-5 mr-3 text-py-blue mt-1"/> <span>Av. Mariscal López 1234<br/>Asunción, Paraguay</span></p>
                         </div>
                         <div className="mt-8 border-t pt-6">
                            <h4 className="font-semibold text-py-blue-dark">Horario de Atención</h4>
                            <p className="text-gray-700">Lunes a Viernes: 9:00 - 17:00</p>
                         </div>
                    </AnimatedDiv>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;