
import React, { useState } from 'react';
import { Page } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/sections/HeroSection';
import PermitSection from './components/sections/PermitSection';
import HousingSearch from './components/sections/HousingSearch';
import SchoolList from './components/sections/SchoolList';
import NeighborhoodGuide from './components/sections/NeighborhoodGuide';
import TaxSection from './components/sections/TaxSection';
import SocialSecuritySection from './components/sections/SocialSecuritySection';
import FaqSection from './components/sections/FaqSection';
import ContactSection from './components/sections/ContactSection';
import Chatbot from './components/chatbot/Chatbot';

const App: React.FC = () => {
    const [activePage, setActivePage] = useState<Page>('home');

    const renderPage = () => {
        switch (activePage) {
            case 'home':
                return <HeroSection setActivePage={setActivePage} />;
            case 'permits':
                return <PermitSection />;
            case 'housing':
                return <HousingSearch />;
            case 'schools':
                return <SchoolList />;
            case 'neighborhoods':
                return <NeighborhoodGuide />;
            case 'taxation':
                return <TaxSection />;
            case 'social-security':
                return <SocialSecuritySection />;
            case 'faq':
                return <FaqSection />;
            case 'contact':
                return <ContactSection />;
            default:
                return <HeroSection setActivePage={setActivePage} />;
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Header activePage={activePage} setActivePage={setActivePage} />
            <main className="flex-grow">
                {renderPage()}
            </main>
            <Footer setActivePage={setActivePage}/>
            <Chatbot />
        </div>
    );
};

export default App;
