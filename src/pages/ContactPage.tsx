import React from 'react';
import { ContactSection } from '../components/sections/ContactSection';

export const ContactPage: React.FC = () => {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContactSection />
      </div>
    </div>
  );
};
