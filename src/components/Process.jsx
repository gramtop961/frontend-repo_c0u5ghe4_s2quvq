import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const steps = [
  {
    title: 'Discovery',
    desc: 'We learn your goals, tech stack, and pain points to tailor the approach.'
  },
  {
    title: 'Onboarding',
    desc: 'Securely connect banks, payroll, and accounting tools. Clear timelines.'
  },
  {
    title: 'Execution',
    desc: 'Monthly books, proactive tax planning, and KPI dashboards—on autopilot.'
  },
  {
    title: 'Review & Optimize',
    desc: 'Quarterly strategy reviews to refine, reduce taxes, and unlock growth.'
  }
];

const Process = () => {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-semibold sm:text-4xl">A simple, transparent process</h2>
        <p className="mt-3 text-white/70">No surprises. Just reliable execution and clear communication.</p>
      </div>

      <ol className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        {steps.map((s, i) => (
          <li key={s.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="flex items-start gap-3">
              <div className="mt-1">
                <CheckCircle2 className="h-5 w-5 text-emerald-400" />
              </div>
              <div>
                <p className="text-sm text-white/60">Step {i + 1}</p>
                <h3 className="text-lg font-medium">{s.title}</h3>
                <p className="mt-1 text-white/70">{s.desc}</p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Process;
