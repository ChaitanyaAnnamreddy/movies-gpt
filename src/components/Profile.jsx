import React from 'react'

const Profile = () => {
  return (
    <div class="bg-gray-100 p-2">
      <div class="border-0 shadow-md shadow-gray-600 rounded-lg">
        {/* top content */}
        <div class="flex rounded-t-lg bg-top-color sm:px-2 w-full">
          <div class="h-40 w-40 overflow-hidden sm:rounded-full sm:relative sm:p-0 top-10 left-5 p-3">
            <img src="https://media.licdn.com/dms/image/v2/D4E03AQHfNZOD_UraIQ/profile-displayphoto-shrink_400_400/B4EZQjRrcKHkAg-/0/1735758625988?e=1744848000&v=beta&t=pzk-CTJzq-tiAUekqPVxUPuD4AGkWhrAaT9jiRUfjZM" />
          </div>

          <div class="w-4/5 sm:text-center pl-5 mt-10 text-start">
            <p class="font-poppins font-bold text-heading sm:text-4xl text-2xl">
              Chaitanya Annamreddy
            </p>
            <p class="text-heading">
              Frontend & Webflow Developer | React & Next.js
            </p>
          </div>
        </div>

        {/* <!-- main content --> */}
        <div class="p-5">
          <div class="flex flex-col sm:flex-row sm:mt-10">
            <div class="flex flex-col sm:w-1/3">
              {/* <!-- My contact --> */}
              <div class="py-3 sm:order-none order-3">
                <h2 class="text-lg font-poppins font-bold text-top-color">
                  My Contact
                </h2>
                <div class="border-2 w-20 border-top-color my-3"></div>

                <div>
                  <div class="flex items-center my-1">
                    <a class="w-6 text-gray-700 hover:text-orange-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        class="h-4"
                      >
                        <path
                          fill="currentColor"
                          d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                        ></path>
                      </svg>
                    </a>
                    <div class="ml-2 truncate">
                      chaitanyaannamreddy@gmail.com
                    </div>
                  </div>
                  <div class="flex items-center my-1">
                    <a
                      class="w-6 text-gray-700 hover:text-orange-600"
                      aria-label="Visit TrendyMinds YouTube"
                      href=""
                      target="_blank"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        class="h-4"
                      >
                        <path
                          fill="currentColor"
                          d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
                        ></path>
                      </svg>
                    </a>
                    <div>789*******</div>
                  </div>
                </div>
              </div>
              {/* <!-- Skills --> */}
              <div class="py-3 sm:order-none order-2">
                <h2 class="text-lg font-poppins font-bold text-top-color">
                  Skills
                </h2>
                <div class="border-2 w-20 border-top-color my-3"></div>

                <div>
                  <div class="flex items-center my-1">
                    <a
                      class="w-6 text-gray-700 hover:text-orange-600"
                      aria-label="Visit TrendyMinds Twitter"
                      href=""
                      target="_blank"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296"
                          stroke="#1C274C"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                        <path
                          d="M13.9868 5L12.9934 8.70743M11.8432 13L10.0132 19.8297"
                          stroke="#1C274C"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                        <path
                          d="M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296"
                          stroke="#1C274C"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                      </svg>
                    </a>
                    <div class="ml-2">React, NextJS</div>
                  </div>
                  <div class="flex items-center my-1">
                    <a
                      class="w-6 text-gray-700 hover:text-orange-600"
                      aria-label="Visit TrendyMinds Twitter"
                      href=""
                      target="_blank"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296"
                          stroke="#1C274C"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                        <path
                          d="M13.9868 5L12.9934 8.70743M11.8432 13L10.0132 19.8297"
                          stroke="#1C274C"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                        <path
                          d="M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296"
                          stroke="#1C274C"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                      </svg>
                    </a>
                    <div class="ml-2">Html, CSS, JS</div>
                  </div>
                  <div class="flex items-center my-1">
                    <a class="w-6 text-gray-700 hover:text-orange-600">
                      <svg
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="currentColor"
                          d="M7.50006 2.5C6.47409 2.5 5.59203 2.77691 4.89966 3.37037C4.21227 3.95956 3.76259 4.81729 3.51314 5.88638C3.45869 6.1197 3.57742 6.35885 3.79619 6.45654C4.01496 6.55423 4.27228 6.483 4.40967 6.28672C4.7263 5.8344 5.04244 5.56261 5.3462 5.42313C5.64038 5.28805 5.95748 5.26068 6.32069 5.35797C6.68723 5.45615 6.97097 5.74369 7.41643 6.22816L7.43082 6.24382C7.76661 6.60905 8.17623 7.0546 8.73649 7.40028C9.31785 7.75898 10.0413 7.99999 11.0001 7.99999C12.026 7.99999 12.9081 7.72307 13.6005 7.12962C14.2878 6.54043 14.7375 5.6827 14.987 4.61361C15.0414 4.38029 14.9227 4.14114 14.7039 4.04345C14.4852 3.94576 14.2278 4.01698 14.0904 4.21326C13.7738 4.66559 13.4577 4.93737 13.1539 5.07686C12.8597 5.21194 12.5426 5.23931 12.1794 5.14202C11.8129 5.04384 11.5291 4.7563 11.0837 4.27182L11.0693 4.25616C10.7335 3.89093 10.3239 3.44538 9.76362 3.09971C9.18227 2.74101 8.45883 2.5 7.50006 2.5Z"
                        />
                        <path
                          fill="currentColor"
                          d="M4.00006 6.99999C2.97409 6.99999 2.09203 7.2769 1.39966 7.87036C0.712271 8.45955 0.262592 9.31727 0.0131365 10.3864C-0.0413057 10.6197 0.0774162 10.8588 0.296186 10.9565C0.514956 11.0542 0.772276 10.983 0.909673 10.7867C1.2263 10.3344 1.54244 10.0626 1.8462 9.92312C2.14038 9.78804 2.45747 9.76067 2.82069 9.85796C3.18723 9.95614 3.47097 10.2437 3.91643 10.7282L3.93082 10.7438C4.2666 11.109 4.67624 11.5546 5.23649 11.9003C5.81785 12.259 6.54128 12.5 7.50006 12.5C8.52602 12.5 9.40808 12.2231 10.1005 11.6296C10.7878 11.0404 11.2375 10.1827 11.487 9.1136C11.5414 8.88027 11.4227 8.64113 11.2039 8.54343C10.9852 8.44574 10.7278 8.51697 10.5904 8.71325C10.2738 9.16558 9.95768 9.43736 9.65391 9.57684C9.35974 9.71192 9.04264 9.7393 8.67942 9.64201C8.31289 9.54383 8.02915 9.25628 7.58369 8.77181L7.56929 8.75615C7.23351 8.39092 6.82388 7.94537 6.26362 7.59969C5.68227 7.241 4.95883 6.99999 4.00006 6.99999Z"
                        />
                      </svg>
                    </a>
                    <div class="ml-2">Tailwind CSS</div>
                  </div>
                </div>
              </div>
              {/* <!-- Education Background --> */}
              <div class="py-3 sm:order-none order-1">
                <h2 class="text-lg font-poppins font-bold text-top-color">
                  Education Background
                </h2>
                <div class="border-2 w-20 border-top-color my-3"></div>

                <div class="flex flex-col space-y-1">
                  <div class="flex flex-col">
                    <p class="font-semibold text-xs text-gray-700">2022</p>
                    <p class="text-sm font-medium">
                      <span class="text-green-700">
                        M.S. (Data Science and Artificial Intelligence)
                      </span>
                      , <br></br>Bournemouth University, UK.
                    </p>
                  </div>
                  <div class="flex flex-col">
                    <p class="font-semibold text-xs text-gray-700">2018</p>
                    <p class="text-sm font-medium">
                      <span class="text-green-700">B-Tech</span>, Vellore
                      Institute of Technology, Vellore.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex flex-col sm:w-2/3 order-first sm:order-none sm:-mt-10">
              {/* <!-- About me --> */}
              <div class="py-3">
                <h2 class="text-lg font-poppins font-bold text-top-color">
                  About Me
                </h2>
                <div class="border-2 w-20 border-top-color my-3"></div>
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
              <div class="py-3">
                <h2 class="text-lg font-poppins font-bold text-top-color">
                  Professional Experience
                </h2>
                <div class="border-2 w-20 border-top-color my-3"></div>

                <div class="flex flex-col">
                  <div class="flex flex-col">
                    <p class="text-lg font-bold text-gray-700">
                      Atomicwork | Software Engineer
                    </p>
                    <p class="font-semibold text-sm text-gray-700">
                      2024 - Present
                    </p>
                    <p class="font-semibold text-sm text-gray-700 mt-2 mb-1">
                      Key Responsibilities
                    </p>
                    <ul class="text-sm list-disc pl-4 space-y-1">
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
              <div class="py-3">
                <h2 class="text-lg font-poppins font-bold text-top-color">
                  Projects
                </h2>
                <div class="border-2 w-20 border-top-color my-3"></div>

                <div class="flex flex-col">
                  <div class="flex flex-col">
                    <p class="text-lg font-semibold text-gray-700">
                      Swiggy Clone Application
                    </p>
                    <p class="font-normal text-sm text-gray-700 mb-1 pl-2">
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
                  <div class="flex flex-col">
                    <p class="text-lg font-semibold text-gray-700">
                      Movies GPT – AI-powered movie browsing app
                    </p>
                    <p class="font-normal text-sm text-gray-700 mb-1 pl-2">
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
