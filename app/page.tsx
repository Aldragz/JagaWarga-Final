'use client';

import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import FAQ from './components/FAQ';
import Newsletter from './components/Newsletter';
import DownloadCenter from './components/DownloadCenter';

const SectionLoader = () => (
  <div className="py-5 text-center">
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);

export default function Home() {
  return (
    <main>
      <Navbar />
      <Suspense fallback={<SectionLoader />}>
        <Hero />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Features />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <HowItWorks />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Pricing />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <FAQ />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <DownloadCenter />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Newsletter />
      </Suspense>
      <Footer />
    </main>
  );
}