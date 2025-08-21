import React from 'react';
import { servicesData } from '../../data/services';
import ServiceCard from '../ui/ServiceCard';

const Services = () => {
  return (
    <>
      <h2 className="text-center font-press text-2xl md:text-3xl lg:text-4xl uppercase mb-16">
        Services I Provide
      </h2>
      
      {/* Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service, index) => (
          <ServiceCard 
            key={service.id} 
            service={service} 
            index={index} 
          />
        ))}
      </div>
    </>
  );
};

export default Services;