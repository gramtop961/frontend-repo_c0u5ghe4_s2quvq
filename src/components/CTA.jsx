import React from 'react';
import { Calendar, Mail } from 'lucide-react';

const CTA = () => {
  return (
    <section id="contact" className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-500/20 via-cyan-500/10 to-blue-500/20 p-8 px-6 py-16 backdrop-blur md:p-16">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-semibold sm:text-4xl">Let’s optimize your finances</h2>
        <p className="mt-3 text-white/80">
          Book a free 20-minute call to assess your needs and map out a plan.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-400 px-5 py-3 font-medium text-black transition hover:bg-emerald-300"
          >
            <Calendar className="h-4 w-4" />
            Schedule a call
          </a>
          <a
            href="mailto:hello@yourfirm.com"
            className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-5 py-3 font-medium text-white backdrop-blur transition hover:bg-white/20"
          >
            <Mail className="h-4 w-4" />
            hello@yourfirm.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
