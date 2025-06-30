import React from 'react';

const CompanyLogos: React.FC = () => {
  const companies = [
    'Microsoft', 'Google', 'Apple', 'Amazon', 'Meta', 'Netflix', 'Tesla', 'Adobe'
  ];

  return (
    <section className="company-logos">
      <div className="company-logos__container">
        <div className="company-logos__track">
          {companies.map((company, index) => (
            <div key={index} className="company-logos__item">
              {company}
            </div>
          ))}
          {/* бесконечный скролл */}
          {companies.map((company, index) => (
            <div key={`duplicate-${index}`} className="company-logos__item">
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyLogos;