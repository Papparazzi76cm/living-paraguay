
import React, { useState, useMemo } from 'react';
import Icon from '../Icon';
import AnimatedDiv from '../AnimatedDiv';
import { CURRENCY_RATES } from '../../constants';

type TaxMode = 'IRP' | 'IVA';
type Currency = 'PYG' | 'USD' | 'EUR';

const TaxCalculator: React.FC = () => {
    const [mode, setMode] = useState<TaxMode>('IRP');
    const [currency, setCurrency] = useState<Currency>('USD');
    const [irpIncome, setIrpIncome] = useState(50000);
    const [deductibles, setDeductibles] = useState<{id: number, amount: number}[]>([{id: 1, amount: 10000}]);
    const [ivaIncome, setIvaIncome] = useState(4000);
    const [ivaExpenses, setIvaExpenses] = useState(1500);

    const convertToPyg = (amount: number) => amount * CURRENCY_RATES[currency];

    const handleAddDeductible = () => {
        setDeductibles([...deductibles, {id: Date.now(), amount: 0}]);
    };
    
    const handleRemoveDeductible = (id: number) => {
        setDeductibles(deductibles.filter(d => d.id !== id));
    };

    const handleDeductibleChange = (id: number, value: number) => {
        setDeductibles(deductibles.map(d => d.id === id ? {...d, amount: value} : d));
    };

    const irpCalculation = useMemo(() => {
        const incomePyg = convertToPyg(irpIncome);
        const totalDeductiblesPyg = deductibles.reduce((sum, d) => sum + convertToPyg(d.amount), 0);
        const netIncomePyg = Math.max(0, incomePyg - totalDeductiblesPyg);

        let tax = 0;
        if (netIncomePyg > 150000000) {
            tax = (50000000 * 0.08) + (100000000 * 0.09) + ((netIncomePyg - 150000000) * 0.10);
        } else if (netIncomePyg > 50000000) {
            tax = (50000000 * 0.08) + ((netIncomePyg - 50000000) * 0.09);
        } else if (netIncomePyg > 0) {
            tax = netIncomePyg * 0.08;
        }
        return { incomePyg, totalDeductiblesPyg, netIncomePyg, tax };
    }, [irpIncome, deductibles, currency]);

    const ivaCalculation = useMemo(() => {
        const incomePyg = convertToPyg(ivaIncome);
        const expensesPyg = convertToPyg(ivaExpenses);
        const debit = incomePyg / 11;
        const credit = expensesPyg / 11;
        const tax = Math.max(0, debit - credit);
        return { debit, credit, tax };
    }, [ivaIncome, ivaExpenses, currency]);
    
    return (
        <AnimatedDiv className="bg-white p-6 sm:p-8 rounded-lg shadow-2xl border border-gray-200 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Config Panel */}
                <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-py-blue-dark">Calculadora de Impuestos Estimados</h3>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Modo de Cálculo</label>
                        <div className="flex mt-1 rounded-md shadow-sm">
                            <button onClick={() => setMode('IRP')} className={`px-4 py-2 text-sm font-medium border border-gray-300 rounded-l-md w-1/2 ${mode === 'IRP' ? 'bg-py-blue text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}>Empleado (IRP)</button>
                            <button onClick={() => setMode('IVA')} className={`-ml-px px-4 py-2 text-sm font-medium border border-gray-300 rounded-r-md w-1/2 ${mode === 'IVA' ? 'bg-py-blue text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}>Independiente (IVA)</button>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="currency" className="block text-sm font-medium text-gray-700">Moneda</label>
                        <select id="currency" value={currency} onChange={(e) => setCurrency(e.target.value as Currency)} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-py-blue focus:border-py-blue sm:text-sm rounded-md">
                            <option value="USD">USD - Dólar Americano</option>
                            <option value="EUR">EUR - Euro</option>
                            <option value="PYG">PYG - Guaraní</option>
                        </select>
                    </div>

                    {/* IRP Fields */}
                    {mode === 'IRP' && (
                        <div className="space-y-4 animate-fade-in">
                            <div>
                                <label htmlFor="irp-income" className="block text-sm font-medium text-gray-700">Ingreso Anual Bruto ({currency})</label>
                                <input type="number" id="irp-income" value={irpIncome} onChange={e => setIrpIncome(Number(e.target.value))} className="mt-1 block w-full pl-3 py-2 border-gray-300 rounded-md shadow-sm focus:ring-py-blue focus:border-py-blue"/>
                            </div>
                            <h4 className="text-md font-medium text-gray-700">Gastos Deducibles ({currency})</h4>
                            <div className="space-y-2 max-h-40 overflow-y-auto pr-2">
                                {deductibles.map((d, i) => (
                                    <div key={d.id} className="flex items-center gap-2">
                                        <input type="number" value={d.amount} onChange={e => handleDeductibleChange(d.id, Number(e.target.value))} className="block w-full pl-3 py-2 border-gray-300 rounded-md shadow-sm"/>
                                        <button onClick={() => handleRemoveDeductible(d.id)} className="p-2 text-gray-500 hover:text-py-red hover:bg-red-100 rounded-full"><Icon name="trash" className="w-5 h-5"/></button>
                                    </div>
                                ))}
                            </div>
                             <button onClick={handleAddDeductible} className="text-sm font-medium text-py-blue hover:underline">Añadir gasto</button>
                        </div>
                    )}
                    
                    {/* IVA Fields */}
                    {mode === 'IVA' && (
                        <div className="space-y-4 animate-fade-in">
                            <div>
                                <label htmlFor="iva-income" className="block text-sm font-medium text-gray-700">Ingresos Mensuales ({currency})</label>
                                <input type="number" id="iva-income" value={ivaIncome} onChange={e => setIvaIncome(Number(e.target.value))} className="mt-1 block w-full pl-3 py-2 border-gray-300 rounded-md shadow-sm focus:ring-py-blue focus:border-py-blue"/>
                            </div>
                             <div>
                                <label htmlFor="iva-expenses" className="block text-sm font-medium text-gray-700">Gastos Mensuales Deducibles ({currency})</label>
                                <input type="number" id="iva-expenses" value={ivaExpenses} onChange={e => setIvaExpenses(Number(e.target.value))} className="mt-1 block w-full pl-3 py-2 border-gray-300 rounded-md shadow-sm focus:ring-py-blue focus:border-py-blue"/>
                            </div>
                        </div>
                    )}
                </div>
                {/* Results Panel */}
                <div className="bg-py-blue-dark p-6 rounded-lg text-white flex flex-col justify-center">
                    <h3 className="text-xl font-bold mb-4">Resultado Estimado</h3>
                     {mode === 'IRP' ? (
                        <div className="space-y-3">
                            <div className="flex justify-between"><span>Ingresos Brutos:</span> <span>{irpCalculation.incomePyg.toLocaleString('es-PY')} Gs</span></div>
                            <div className="flex justify-between"><span>Deducibles:</span> <span>- {irpCalculation.totalDeductiblesPyg.toLocaleString('es-PY')} Gs</span></div>
                            <div className="border-t border-gray-500 my-2"></div>
                            <div className="flex justify-between font-semibold"><span>Renta Neta Gravada:</span> <span>{irpCalculation.netIncomePyg.toLocaleString('es-PY')} Gs</span></div>
                            <div className="mt-4 pt-4 text-center">
                                <p className="text-sm text-gray-300">Impuesto IRP Anual a Pagar</p>
                                <p className="text-4xl font-extrabold text-py-red tracking-tight">{irpCalculation.tax.toLocaleString('es-PY', {maximumFractionDigits: 0})} Gs</p>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-3">
                             <div className="flex justify-between"><span>IVA Débito (Ventas):</span> <span>{ivaCalculation.debit.toLocaleString('es-PY', {maximumFractionDigits: 0})} Gs</span></div>
                            <div className="flex justify-between"><span>IVA Crédito (Compras):</span> <span>- {ivaCalculation.credit.toLocaleString('es-PY', {maximumFractionDigits: 0})} Gs</span></div>
                            <div className="border-t border-gray-500 my-2"></div>
                            <div className="mt-4 pt-4 text-center">
                                <p className="text-sm text-gray-300">Impuesto IVA Mensual a Pagar</p>
                                <p className="text-4xl font-extrabold text-py-red tracking-tight">{ivaCalculation.tax.toLocaleString('es-PY', {maximumFractionDigits: 0})} Gs</p>
                            </div>
                        </div>
                    )}
                    <p className="text-xs text-gray-400 mt-6 text-center">Este es un cálculo estimado y no constituye asesoramiento fiscal.</p>
                </div>
            </div>
        </AnimatedDiv>
    );
};


const TaxSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState('principles');
    
    const tabs = [
        { id: 'principles', title: 'Principios Clave' },
        { id: 'residence', title: 'Residencia Fiscal' },
        { id: 'main-taxes', title: 'Impuestos Principales' },
        { id: 'glossary', title: 'Glosario' },
    ];

    const TabContent = () => {
        switch(activeTab) {
            case 'principles':
                return (
                    <div className="grid md:grid-cols-2 gap-6">
                        <InfoCard icon="document" title="Principio de Territorialidad">Paraguay solo grava las rentas generadas DENTRO de sus fronteras. Ingresos de fuente extranjera (salarios remotos, dividendos de Apple, etc.) no pagan impuestos.</InfoCard>
                        <InfoCard icon="document" title="Baja Imposición">El sistema se caracteriza por tasas impositivas bajas, con una tasa máxima del 10% para la mayoría de los impuestos sobre la renta (IRP e IRE).</InfoCard>
                    </div>
                );
            case 'residence':
                 return (
                    <div className="grid md:grid-cols-2 gap-6">
                        <InfoCard icon="document" title="Residencia Migratoria (Cédula)">Es un estatus administrativo otorgado por Migraciones. Es el primer paso y te da identidad legal en el país.</InfoCard>
                        <InfoCard icon="document" title="Residencia Fiscal (Estatus Tributario)">Se adquiere permaneciendo más de 120 días en un año civil. Este estatus, no la Cédula, es el que determina tus obligaciones fiscales y te permite beneficiarte del principio de territorialidad.</InfoCard>
                    </div>
                );
             case 'main-taxes':
                 return (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <InfoCard icon="money" title="IRP (Renta Personal)">Grava ingresos de personas físicas. Se divide en rentas por servicios (salarios, honorarios) y rentas de capital (alquileres locales). Tasa progresiva del 8% al 10%.</InfoCard>
                        <InfoCard icon="building" title="IVA (Valor Agregado)">Impuesto al consumo que se aplica a la mayoría de bienes y servicios. La tasa general es del 10%.</InfoCard>
                         <InfoCard icon="money" title="IDU (Dividendos y Utilidades)">Grava la distribución de ganancias de empresas paraguayas a sus socios. Tasa del 8% para residentes y 15% para no residentes.</InfoCard>
                    </div>
                );
             case 'glossary':
                return (
                    <div className="space-y-4">
                        <p><strong className="text-py-blue-dark">DNIT:</strong> Dirección Nacional de Ingresos Tributarios, la autoridad fiscal unificada.</p>
                        <p><strong className="text-py-blue-dark">RUC:</strong> Registro Único de Contribuyentes, tu número de identificación fiscal.</p>
                        <p><strong className="text-py-blue-dark">IRE:</strong> Impuesto a la Renta Empresarial.</p>
                    </div>
                );
            default: return null;
        }
    }
    
    const InfoCard: React.FC<{ icon: string; title: string; children: React.ReactNode}> = ({ icon, title, children}) => (
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex items-start space-x-4">
            <div className="flex-shrink-0 w-10 h-10 bg-py-blue/10 text-py-blue rounded-full flex items-center justify-center">
                <Icon name={icon} className="w-5 h-5" />
            </div>
            <div>
                <h4 className="text-lg font-bold text-py-blue-dark mb-1">{title}</h4>
                <p className="text-gray-600 text-sm">{children}</p>
            </div>
        </div>
    );

    return (
        <section className="py-16 sm:py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedDiv className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-py-blue-dark">Sistema Tributario Paraguayo</h2>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
                        Una guía clara y una herramienta útil para entender la fiscalidad como expatriado.
                    </p>
                </AnimatedDiv>
                
                <TaxCalculator />

                <div className="w-full">
                    <div className="mb-6 border-b border-gray-200">
                        <nav className="-mb-px flex space-x-6" aria-label="Tabs">
                            {tabs.map(tab => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`${
                                        activeTab === tab.id
                                            ? 'border-py-red text-py-blue-dark'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors`}
                                >
                                    {tab.title}
                                </button>
                            ))}
                        </nav>
                    </div>
                    <AnimatedDiv>
                       <TabContent />
                    </AnimatedDiv>
                </div>
            </div>
        </section>
    );
};

export default TaxSection;
