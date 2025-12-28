import React, { useState } from 'react';
import { ArrowLeft, Code2, Sparkles } from 'lucide-react';
import ServiceCard from './ServiceCard';
import ServiceModal from './ServiceModal';
import { SERVICES } from '../services';
import { Service } from '../types';

interface ServicesPageProps {
    onBack: () => void;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ onBack }) => {
    const [selectedService, setSelectedService] = useState<Service | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleShowDetails = (service: Service) => {
        setSelectedService(service);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedService(null);
    };

    return (
        <div className="relative min-h-screen bg-slate-950 text-white">
            {/* Background */}
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 py-8 px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-6xl">
                    {/* Back Button */}
                    <button
                        onClick={onBack}
                        className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Volver a Planes
                    </button>

                    {/* Header */}
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary mb-4">
                            <Code2 className="h-4 w-4" />
                            Servicios Adicionales
                        </div>
                        <h1 className="text-3xl sm:text-4xl font-black text-white mb-3">
                            Desarrollo Web y{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                                Apps Móviles
                            </span>
                        </h1>
                        <p className="text-sm text-slate-400 max-w-xl mx-auto">
                            Llevamos tu negocio al siguiente nivel con sitios web profesionales y aplicaciones móviles. Precios en Guaraníes.
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
                        {SERVICES.map((service) => (
                            <ServiceCard
                                key={service.id}
                                service={service}
                                onShowDetails={handleShowDetails}
                            />
                        ))}
                    </div>

                    {/* Contact CTA */}
                    <div className="mt-12 text-center">
                        <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-slate-900/50 border border-white/5">
                            <div className="flex items-center justify-center size-12 rounded-xl bg-primary/10">
                                <Sparkles className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-center sm:text-left">
                                <p className="text-sm font-bold text-white mb-1">¿Necesitas algo diferente?</p>
                                <p className="text-xs text-slate-400">Contáctanos para un presupuesto personalizado</p>
                            </div>
                            <a
                                href="https://wa.me/5950983338958?text=Hola!%20Necesito%20una%20cotización%20personalizada"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full bg-green-500 hover:bg-green-600 px-6 py-2.5 text-sm font-bold text-white transition-all"
                            >
                                WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Service Modal */}
            <ServiceModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                service={selectedService}
            />
        </div>
    );
};

export default ServicesPage;
