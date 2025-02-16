import React from 'react'
import { Image } from 'antd'

const Profile = () => {
  return (
    <div className="dark:bg-gray-900 p-2">
      <div className="border-0 shadow-md shadow-gray-600 rounded-lg">
        {/* top content */}
        <div className="flex rounded-t-lg bg-top-color sm:px-2 w-full">
          <div className="h-40 w-40 overflow-hidden sm:rounded-full sm:relative sm:p-0 top-10 left-5 p-3">
            <Image src="https://media.licdn.com/dms/image/v2/D4E03AQHfNZOD_UraIQ/profile-displayphoto-shrink_400_400/B4EZQjRrcKHkAg-/0/1735758625988?e=1744848000&v=beta&t=pzk-CTJzq-tiAUekqPVxUPuD4AGkWhrAaT9jiRUfjZM" />
          </div>

          <div className="w-4/5 sm:text-center pl-5 mt-10 text-start">
            <p className="font-poppins font-bold text-heading sm:text-4xl text-2xl text-white">
              Chaitanya Annamreddy
            </p>
            <p className="text-heading text-gray-400">
              Frontend & Webflow Developer | React & Next.js
            </p>
          </div>
        </div>

        {/* <!-- main content --> */}
        <div className="p-5">
          <div className="flex flex-col sm:flex-row sm:mt-10">
            <div className="flex flex-col sm:w-1/3">
              {/* <!-- My contact --> */}
              <div className="py-3 sm:order-none order-3">
                <h2 className="text-lg font-poppins font-bold text-top-color dark:text-white">
                  My Contact
                </h2>
                <div className="border-2 w-20 border-top-color my-3"></div>

                <div>
                  <div className="flex items-center my-1">
                    <div className="truncate text-gray-700 dark:text-white">
                      chaitanyaannamreddy@gmail.com
                    </div>
                  </div>
                  <div className="flex items-center my-1 text-gray-700 dark:text-white">
                    <div>78*******4</div>
                  </div>
                </div>
              </div>
              {/* <!-- Skills --> */}
              <div className="py-3 sm:order-none order-2">
                <h2 className="text-lg font-poppins font-bold text-top-color dark:text-white">
                  Skills
                </h2>
                <div className="border-2 w-20 border-top-color my-3"></div>

                <div>
                  <div className="flex items-center my-1 text-gray-700 dark:text-white">
                    <div className="ml-2">React, NextJS</div>
                  </div>
                  <div className="flex items-center my-1 text-gray-700 dark:text-white">
                    <div className="ml-2">Html, CSS, JS</div>
                  </div>
                  <div className="flex items-center my-1 text-gray-700 dark:text-white">
                    <div className="ml-2">Tailwind CSS</div>
                  </div>
                </div>
              </div>
              {/* <!-- Education Background --> */}
              <div className="py-3 sm:order-none order-1">
                <h2 className="text-lg font-poppins font-bold text-top-color dark:text-white">
                  Education Background
                </h2>
                <div className="border-2 w-20 border-top-color my-3"></div>

                <div className="flex flex-col space-y-1">
                  <div className="flex flex-col">
                    <p className="font-semibold text-xs text-gray-100 dark:text-white">
                      2022
                    </p>
                    <p className="text-sm font-medium dark:text-white">
                      <span className="text-green-700 dark:text-white">
                        M.S. (Data Science and Artificial Intelligence)
                      </span>
                      , <br></br>Bournemouth University, UK.
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className="font-semibold text-xs text-gray-100 dark:text-white">
                      2018
                    </p>
                    <p className="text-sm font-medium dark:text-white">
                      <span className="text-green-700 dark:text-white">
                        B-Tech
                      </span>
                      , Vellore Institute of Technology, Vellore.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:w-2/3 order-first sm:order-none sm:-mt-10 dark:text-white">
              {/* <!-- About me --> */}
              <div className="py-3">
                <h2 className="text-lg font-poppins font-bold text-top-color">
                  About Me
                </h2>
                <div className="border-2 w-20 border-top-color my-3"></div>
                <p>
                  I am currently interning as a Frontend Developer and Webflow
                  Developer at Atomicwork, where I contribute to creating a
                  modern service management platform designed to revolutionize
                  the digital workplace experience. My work focuses on combining
                  cutting-edge technologies with intuitive design to simplify
                  complex workflows and drive business success.
                </p>
              </div>

              {/* <!-- Professional Experience --> */}
              <div className="py-3">
                <h2 className="text-lg font-poppins font-bold text-top-color">
                  Professional Experience
                </h2>
                <div className="border-2 w-20 border-top-color my-3"></div>

                <div className="flex flex-col">
                  <div className="flex flex-col">
                    <p className="text-lg font-bold text-gray-700 dark:text-white">
                      Atomicwork | Software Engineer
                    </p>
                    <p className="font-semibold text-sm">2024 - Present</p>
                    <p className="font-semibold text-sm text-gray-400 dark:text-white mt-2 mb-1">
                      Key Responsibilities
                    </p>
                    <ul className="text-sm list-disc pl-4 space-y-1 text-gray-400 dark:text-white">
                      <li>
                        Collaborated with cross-functional teams, including
                        design and backend engineering, to develop and launch
                        new features for a modern service management platform.
                      </li>
                      <li>
                        Designed and implemented scalable and responsive
                        frontend solutions using NextJs, React, TypeScript,
                        HTML, CSS, and Webpack.
                      </li>
                      <li>
                        Participated in code reviews, ensuring adherence to
                        high-quality standards and providing constructive
                        feedback to peers.
                      </li>
                      <li>
                        Troubleshot and debugged complex web applications to
                        optimize performance and improve user experience.
                      </li>
                      <li>
                        Kept up-to-date with emerging frontend trends and
                        recommended innovative solutions to enhance platform
                        usability and scalability.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* <!-- Projects --> */}
              <div className="py-3">
                <h2 className="text-lg font-poppins font-bold text-top-color">
                  Projects
                </h2>
                <div className="border-2 w-20 border-top-color my-3"></div>

                <div className="flex flex-col">
                  <div className="flex flex-col">
                    <p className="text-lg font-semibold text-white">
                      Swiggy Clone Application
                    </p>
                    <p className="font-normal text-sm text-gray-400 dark:text-white mb-1 pl-2">
                      Developed a responsive food ordering web application using
                      React, allowing users to browse menus, add items to the
                      cart, and place orders. Integrated Mock Swiggy Live API
                      Data to fetch real-time restaurant data. Enhanced user
                      experience with dynamic filters and search functionality.
                      Designed an intuitive UI using Styled Components and
                      Tailwind CSS, along with Ant Design components like Card,
                      Flex, List, Dropdown, Collapse, Error, Notification and
                      Carousel. Improved performance with Lazy Loading and
                      Context API for global state management. Gained hands-on
                      experience with React Hooks, Custom Hooks, Lazy Loading,
                      Suspense, Props Drilling, Context API, Redux Store, and
                      making API calls
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-lg font-semibold text-white">
                      Movies GPT – AI-powered movie browsing app
                    </p>
                    <p className="font-normal text-sm text-gray-400 dark:text-white mb-1 pl-2">
                      Developed a Netflix clone with AI-powered movie
                      recommendations using OpenAI API.Implemented user
                      authentication (Sign Up, Login, Logout) with Firebase.
                      Integrated TMDB API to fetch and display now-playing and
                      popular movies. Built a GPT-powered search to provide
                      personalized movie suggestions. Embedded YouTube trailers
                      for movies with autoplay and mute functionality. Utilized
                      Redux Toolkit for managing user authentication, managing
                      language preferences and movie data. Designed a modern and
                      responsive UI using MUI (Material-UI) and Ant Design
                      components. Implemented a multi-language support system
                      using i18next to provide seamless localization.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
