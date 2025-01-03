import Link from 'next/link'

export default function Experience() {
    return(
        <div className= 'bg-gradient-to-br from-gray-700 via-indigo-800 to-purple-700 p-10'>
            <h2 className='font-bold text-lg my-12 text-white text-center gap-3'> EXPERIENCE </h2>
           
            {/* <ol className="relative border-s border-gray-200 dark:border-gray-700">                  
                <li className="mb-10 ms-6">            
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg>
                    </span>
                    <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Flowbite Application UI v2.0.0 <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">Latest</span></h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on January 13th, 2022</time>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
                    <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"><svg className="w-3.5 h-3.5 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z"/>
                <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/>
            </svg> Download ZIP</a>
                </li>
                <li className="mb-10 ms-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg>
                    </span>
                    <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Flowbite Figma v1.3.0</h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 7th, 2021</time>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
                </li>
                <li className="ms-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg>
                    </span>
                    <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Flowbite Library v1.2.2</h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 2nd, 2021</time>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
                </li>
            </ol> */}
            {/* <ol className="relative border-l-2 border-r-2 border-gray-200 dark:border-gray-700 mx-auto max-w-4xl">
                <li className="mb-10 flex justify-end">
                    <div className="relative w-1/2 pr-8 text-right">
                    <span className="absolute right-[-15px] top-0 w-6 h-6 bg-blue-100 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900 flex items-center justify-center">
                        <svg className="w-3 h-3 text-blue-800 dark:text-blue-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg>
                    </span>
                    <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Flowbite Application UI v2.0.0</h3>
                    <time className="block mb-2 text-sm font-normal text-gray-400 dark:text-gray-500">Released on January 13th, 2022</time>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                        Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.
                    </p>
                    </div>
                </li>
                <li className="mb-10 flex justify-start">
                    <div className="relative w-1/2 pl-8 text-left">
                    <span className="absolute left-[-15px] top-0 w-6 h-6 bg-blue-100 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900 flex items-center justify-center">
                        <svg className="w-3 h-3 text-blue-800 dark:text-blue-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg>
                    </span>
                    <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Flowbite Figma v1.3.0</h3>
                    <time className="block mb-2 text-sm font-normal text-gray-400 dark:text-gray-500">Released on December 7th, 2021</time>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                        All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.
                    </p>
                    </div>
                </li>
                <li className="flex justify-end">
                    <div className="relative w-1/2 pr-8 text-right">
                    <span className="absolute right-[-15px] top-0 w-6 h-6 bg-blue-100 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900 flex items-center justify-center">
                        <svg className="w-3 h-3 text-blue-800 dark:text-blue-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg>
                    </span>
                    <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Flowbite Library v1.2.2</h3>
                    <time className="block mb-2 text-sm font-normal text-gray-400 dark:text-gray-500">Released on December 2nd, 2021</time>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Get started with dozens of web components and interactive elements built on top of Tailwind CSS.
                    </p>
                    </div>
                </li>
                </ol> */}
                {/* <div class="relative">
    <div class="absolute inset-0 flex justify-center">
        <div class="w-0.5 bg-gray-200 dark:bg-gray-700"></div>
    </div>

    <ol class="relative">

        <li class="mb-10 flex justify-between items-center w-full">
            <div class="order-1 w-5/12 text-right">
                <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Flowbite Application UI v2.0.0</h3>
                <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on January 13th, 2022</time>
                <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
            </div>
            <div class="order-2 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
            </div>
        </li>


        <li class="mb-10 flex justify-between items-center w-full">
            <div class="order-1 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
            </div>
            <div class="order-2 w-5/12">
                <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Flowbite Figma v1.3.0</h3>
                <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 7th, 2021</time>
                <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
            </div>
        </li>
    </ol>
</div> */}
        <div class="relative">

            <div class="absolute inset-0 flex justify-center">
                <div class="w-0.5 bg-gray-200 dark:bg-gray-700"></div>
            </div>

            <ol class="relative">
            
                <li class="mb-10 flex justify-between items-center w-full">
    
                    <div class="w-5/12 text-right">
                        <h3 class="mb-1 text-lg font-semibold text-white dark:text-white">MS Computer Science</h3>
                        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">September 2023 - May 2025 | GPA 4.0</time>
                        <p class="text-base font-normal text-gray-200 dark:text-gray-400">Stevens Institute of Technology, New Jersey</p>
                        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Graduation with a Masters in Computer Science with a concentration in Machine Learning and Big Data Analytics. </p>
                    </div>

                    <div class="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                    </div>
                
                    <div class="w-5/12"></div>
                </li>

            
                <li class="mb-10 flex justify-between items-center w-full">
            
                    <div class="w-5/12"></div>

                    <div class="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                    </div>

                    <div class="w-5/12 text-left">
                        <h3 class="mb-1 text-lg font-semibold text-white dark:text-white">Data Engineering and DevOps Intern</h3>
                        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">September 2024 - Present</time>
                        <p class="text-base font-normal text-gray-200 dark:text-gray-400">Oncology Reference Inc., New Jersey</p>

                        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Development of scalable data pipelines for medical research data and machine learning for categorization of data</p>
                    </div>
                </li>
                <li class="mb-10 flex justify-between items-center w-full">
            
                    <div class="w-5/12"></div>

                    <div class="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                    </div>

                    <div class="w-5/12 text-left">
                        <h3 class="mb-1 text-lg font-semibold text-white dark:text-white">Technology Consultant</h3>
                        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2024 - September 2024</time>
                        <p class="text-base font-normal text-gray-200 dark:text-gray-400">OneIT, Stevens Institute of Technology, New Jersey</p>
                        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Troubleshooting IT issues for users on campus and maintaining CRM</p>
                    </div>
                </li>
                <li class="mb-10 flex justify-between items-center w-full">
            
                <div class="w-5/12 text-right">
                        <h3 class="mb-1 text-lg font-semibold text-white dark:text-white">BTech Information Technology</h3>
                        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">July 2019 - July 2023 | GPA 3.62</time>
                        <p class="text-base font-normal text-gray-200 dark:text-gray-400">Manipal Institute of Technology, Manipal, India</p>
                        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Graduation with a Bachelors in Information Technology with a concentration in Machine Learning and Big Data Analytics. </p>
                    </div>

                    <div class="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                    </div>

                    <div class="w-5/12 text-left">
                        <h3 class="mb-1 text-lg font-semibold text-white dark:text-white">Software Engineering Intern</h3>
                        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">January 2023 - May 2023</time>
                        <p class="text-base font-normal text-gray-200 dark:text-gray-400">Chipspirit, Bangalore, India</p>
                        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Software development for a data diode</p>
                    </div>
                </li>
                <li class="mb-10 flex justify-between items-center w-full">
            
                    <div class="w-5/12"></div>

                    <div class="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                    </div>

                    <div class="w-5/12 text-left">
                        <h3 class="mb-1 text-lg font-semibold text-white dark:text-white">Business Analyst Intern</h3>
                        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">May 2022 - July 2022</time>
                        <p class="text-base font-normal text-gray-200 dark:text-gray-400">Deloitte USI, Hyderabad, India</p>
                        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Tax tech intern for business analyst in deloitte</p>
                    </div>
                </li>
                <li class="mb-10 flex justify-between items-center w-full">
            
                    <div class="w-5/12"></div>

                    <div class="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                    </div>

                    <div class="w-5/12 text-left">
                        <h3 class="mb-1 text-lg font-semibold text-white dark:text-white">Data Science Intern</h3>
                        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">July 2021 - September 2021</time>
                        <p class="text-base font-normal text-gray-200 dark:text-gray-400">Horned Owl Pvt Ltd, India</p>
                        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">machine learning projects on analysing restaurant sales trends</p>
                    </div>
                </li>
            </ol>
        </div>






        </div>
    )
}