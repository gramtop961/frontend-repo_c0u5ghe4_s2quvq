import React from 'react';
import { BarChart3, Briefcase, Receipt, FileCheck2 } from 'lucide-react';

const services = [
  {
    icon: <Receipt className="h-6 w-6 text-emerald-500" />,
    title: 'Tax Strategy & Filing',
    desc: 'Proactive, year-round planning to minimize liabilities and streamline filings.'
  },
  {
    icon: <Briefcase className="h-6 w-6 text-emerald-500" />,
    title: 'Bookkeeping & Payroll',
    desc: 'Accurate monthly books, reconciliations, and compliant payroll management.'
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-emerald-500" />,
    title: 'Fractional CFO',
    desc: 'Forecasts, KPIs, and cash flow insights to drive confident decisions.'
  },
  {
    icon: <FileCheck2 className="h-6 w-6 text-emerald-500" />,
    title: 'Compliance & Advisory',
    desc: 'Sales tax nexus, entity setup, audits, and on-demand advisory.'
  }
];

const Services = () => {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-semibold sm:text-4xl">Services designed for growth</h2>
        <p className="mt-3 text-white/70">
          A complete finance stack—modular and scalable—so you can focus on building.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => (
          <div
            key={s.title}
            className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-emerald-400/40 hover:bg-white/10"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-400/10 ring-1 ring-emerald-400/30">
              {s.icon}
            </div>
            <h3 className="mt-4 text-lg font-medium">{s.title}</h3>
            <p className="mt-2 text-sm text-white/70">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
