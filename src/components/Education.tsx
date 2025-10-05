import React from 'react';

const Education: React.FC = () => {
    return (
        <section
            id="education"
            aria-labelledby="education-heading"
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 md:p-16 my-12 max-w-6xl mx-auto"
        >
            <h2
                id="education-heading"
                className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight mb-8"
            >
                Education
            </h2>

            <ul className="list-disc pl-6 space-y-4 text-sm md:text-base text-gray-700 dark:text-gray-300">
                <li>
                    <span className="font-medium text-indigo-500">
                       Bachelor of Technology – Computer Science & Engineering:
                    </span>{" "}
                    Mahatma Gandhi University, Kerala, India (2014–2018)
                </li>
            </ul>
        </section>
    );
};

export default Education;
