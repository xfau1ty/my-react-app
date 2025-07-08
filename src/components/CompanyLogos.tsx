import React, { useMemo } from 'react';

const CompanyLogos: React.FC = () => {
  const companies = useMemo(() => [
    'Microsoft', 'Google', 'Apple', 'Amazon', 'Meta', 'Netflix', 'Tesla', 'Adobe'
  ], []);

  const duplicatedCompanies = useMemo(() => [...companies, ...companies], [companies]);

  return (
    <section className="company-logos">
      <div className="company-logos__container">
        <div className="company-logos__track">
          {duplicatedCompanies.map((company, index) => (
            <div key={`${company}-${index}`} className="company-logos__item">
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyLogos;