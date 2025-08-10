'use client';

import { Suspense } from 'react';
import ContactForm from '../../components/ContactForm';
import SimpleContactForm from '../../components/SimpleContactForm';

export default function Contact() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <ContactForm />
      </Suspense>
      
      {/* CTAセクション */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">まずは無料相談から</h2>
          <p className="mb-8">お客様の状況に合わせた最適なご提案をいたします</p>
          <SimpleContactForm />
        </div>
      </section>
    </>
  );
} 