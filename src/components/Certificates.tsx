import React from 'react';

const Certificates: React.FC = () => {
    return (
        <section id="certificates" className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 md:p-16 my-12 max-w-6xl mx-auto">
          <h2 id="certificates-heading" className="text-2xl font-semibold tracking-tight">Certificates</h2>
          <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base">
            <li>React Native Internship Certificate from Icohort Business Ventures Pvt. Ltd</li>
            <li>BigCommerce Certified Partner</li>
          </ul>
        </section>
    );
};

export default Certificates;