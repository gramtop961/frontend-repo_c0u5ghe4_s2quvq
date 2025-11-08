import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Shield, Calculator } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/IKzHtP5ThSO83edK/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlays for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-center px-6 text-white">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
          <Shield className="h-4 w-4 text-emerald-300" />
          <span className="text-sm text-emerald-100">Trusted tax & finance partner</span>
        </div>

        <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
          Modern Accounting for
          <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent"> Ambitious Businesses</span>
        </h1>

        <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
          Streamlined bookkeeping, tax strategy, and CFO insights—delivered with automation, clarity, and care.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-lg bg-emerald-400 px-5 py-3 font-medium text-black transition hover:bg-emerald-300"
          >
            Book a free consultation
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-5 py-3 font-medium text-white backdrop-blur transition hover:bg-white/20"
          >
            <Calculator className="h-4 w-4" />
            Explore services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
