import Link from 'next/link'

export default function Experience() {
    return(
        <div className= 'bg-gradient-to-br from-gray-700 via-indigo-800 to-purple-700 p-10'>
            <h2 className='font-bold text-lg my-12 text-white text-center gap-3'> EXPERIENCE </h2>
        <div className="relative">

            <div className="absolute inset-0 flex justify-center">
                <div className="w-0.5 bg-gray-200 dark:bg-gray-700"></div>
            </div>

            <ol className="relative">
            
                <li className="mb-10 flex justify-between items-center w-full">
    
                    <div className="w-5/12 text-right">
                        <h3 className="mb-1 text-lg font-semibold text-white dark:text-white">MS Computer Science</h3>
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">September 2023 - May 2025 | GPA 4.0</time>
                        <p className="text-base font-normal text-gray-200 dark:text-gray-400">Stevens Institute of Technology, New Jersey</p>
                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Graduation with a Masters in Computer Science with a concentration in Machine Learning and Big Data Analytics. </p>
                    </div>

                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                    </div>
                
                    <div className="w-5/12"></div>
                </li>

            
                <li className="mb-10 flex justify-between items-center w-full">
            
                    <div className="w-5/12"></div>

                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                    </div>

                    <div className="w-5/12 text-left">
                        <h3 className="mb-1 text-lg font-semibold text-white dark:text-white">Data Engineering and DevOps Intern</h3>
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">September 2024 - Present</time>
                        <p className="text-base font-normal text-gray-200 dark:text-gray-400">Oncology Reference Inc., New Jersey</p>

                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Development of scalable data pipelines for medical research data and machine learning for categorization of data</p>
                    </div>
                </li>
                <li className="mb-10 flex justify-between items-center w-full">
            
                    <div className="w-5/12"></div>

                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                    </div>

                    <div className="w-5/12 text-left">
                        <h3 className="mb-1 text-lg font-semibold text-white dark:text-white">Technology Consultant</h3>
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2024 - September 2024</time>
                        <p className="text-base font-normal text-gray-200 dark:text-gray-400">OneIT, Stevens Institute of Technology, New Jersey</p>
                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Troubleshooting IT issues for users on campus and maintaining CRM</p>
                    </div>
                </li>
                <li className="mb-10 flex justify-between items-center w-full">
            
                <div className="w-5/12 text-right">
                        <h3 className="mb-1 text-lg font-semibold text-white dark:text-white">BTech Information Technology</h3>
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">July 2019 - July 2023 | GPA 3.62</time>
                        <p className="text-base font-normal text-gray-200 dark:text-gray-400">Manipal Institute of Technology, Manipal, India</p>
                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Graduation with a Bachelors in Information Technology with a concentration in Machine Learning and Big Data Analytics. </p>
                    </div>

                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                    </div>

                    <div className="w-5/12 text-left">
                        <h3 className="mb-1 text-lg font-semibold text-white dark:text-white">Software Engineering Intern</h3>
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">January 2023 - May 2023</time>
                        <p className="text-base font-normal text-gray-200 dark:text-gray-400">Chipspirit, Bangalore, India</p>
                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Software development for a data diode</p>
                    </div>
                </li>
                <li className="mb-10 flex justify-between items-center w-full">
            
                    <div className="w-5/12"></div>

                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                    </div>

                    <div className="w-5/12 text-left">
                        <h3 className="mb-1 text-lg font-semibold text-white dark:text-white">Business Analyst Intern</h3>
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">May 2022 - July 2022</time>
                        <p className="text-base font-normal text-gray-200 dark:text-gray-400">Deloitte USI, Hyderabad, India</p>
                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Tax tech intern for business analyst in deloitte</p>
                    </div>
                </li>
                <li className="mb-10 flex justify-between items-center w-full">
            
                    <div className="w-5/12"></div>

                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                    </div>

                    <div className="w-5/12 text-left">
                        <h3 className="mb-1 text-lg font-semibold text-white dark:text-white">Data Science Intern</h3>
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">July 2021 - September 2021</time>
                        <p className="text-base font-normal text-gray-200 dark:text-gray-400">Horned Owl Pvt Ltd, India</p>
                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">machine learning projects on analysing restaurant sales trends</p>
                    </div>
                </li>
            </ol>
        </div>






        </div>
    )
}