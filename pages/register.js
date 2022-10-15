import { useState } from "react";
import Layout from "../components/Layout";

const Register = () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
    error: '',
    success: '',
    buttonText: 'Register'
  })

  

  const registerForm = () => (
    <form onSubmit={handleSubmit}>
      <div class="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
        <div class="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
          <h1 class="text-center text-2xl mb-5">Register for an account...</h1>
          <div class="bg-white shadow-2xl w-full rounded-3xl divide-y divide-gray-200">
            <div class="px-5 py-7">
              <label class="font-semibold text-sm text-gray-600 pb-1 block">
                Name
              </label>
              <input
                onChange={handleChange('name')}
                type="text"
                class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              />
              <label class="font-semibold text-sm text-gray-600 pb-1 block">
                E-Mail
              </label>
              <input
              onChange={handleChange('email')}
                type="text"
                class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              />
              <label class="font-semibold text-sm text-gray-600 pb-1 block">
                Password
              </label>
              <input
                onChange={handleChange('password')}
                type="text"
                class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              />
              <fieldset className="space-y-5">
                <legend className="">Select area of interest</legend>
                <div className="relative flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="comments"
                      aria-describedby="comments-description"
                      name="comments"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="comments"
                      className="font-medium text-gray-700"
                    >
                      Breathing techniques
                    </label>
                  </div>
                </div>
                <div className="relative flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="candidates"
                      aria-describedby="candidates-description"
                      name="candidates"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="candidates"
                      className="font-medium text-gray-700"
                    >
                      Mindfulness
                    </label>
                  </div>
                </div>
                <div className="relative flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="offers"
                      aria-describedby="offers-description"
                      name="offers"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="offers"
                      className="font-medium text-gray-700"
                    >
                      Anxiety and stress reduction
                    </label>
                  </div>
                </div>
                <div>
                  <hr className="p-6 border-black-muted w-full" />
                </div>
              </fieldset>
              <button
                type="button"
                class="transition duration-200 bg-oxford hover:bg-venetian focus:shadow-xl focus:ring-4 focus:ring-marigold focus:ring-opacity-0 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
              >
                <span class="inline-block mr-2 text-white">Login</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="w-4 h-4 inline-block"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
            <div class="py-5">
              <div class="grid grid-cols-2 gap-1">
                <div class="text-center sm:text-left whitespace-nowrap">
                  <button class="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      class="w-4 h-4 inline-block align-text-top"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                      />
                    </svg>
                    <span class="inline-block ml-1">Forgot Password</span>
                  </button>
                </div>
                <div class="text-center sm:text-right whitespace-nowrap">
                  <button class="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      class="w-4 h-4 inline-block align-text-bottom	"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                    <span class="inline-block ml-1">Help</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="py-5">
            <div class="grid grid-cols-2 gap-1">
              <div class="text-center sm:text-left whitespace-nowrap">
                <button class="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-200 focus:outline-none focus:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="w-4 h-4 inline-block align-text-top"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                  <span class="inline-block ml-1">Back to your-app.com</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );

  return (
    <Layout>
      <div class="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
        <div class="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
          <h1 class="text-center text-2xl mb-5">Register for an account...</h1>
          <div class="bg-white shadow-2xl w-full rounded-3xl divide-y divide-gray-200">
            <div class="px-5 py-7">
              <label class="font-semibold text-sm text-gray-600 pb-1 block">
                Name
              </label>
              <input
                type="text"
                class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              />
              <label class="font-semibold text-sm text-gray-600 pb-1 block">
                E-Mail
              </label>
              <input
                type="text"
                class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              />
              <label class="font-semibold text-sm text-gray-600 pb-1 block">
                Password
              </label>
              <input
                type="text"
                class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              />
              <fieldset className="space-y-5">
                <legend className="">Select area of interest</legend>
                <div className="relative flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="comments"
                      aria-describedby="comments-description"
                      name="comments"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="comments"
                      className="font-medium text-gray-700"
                    >
                      Breathing techniques
                    </label>
                  </div>
                </div>
                <div className="relative flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="candidates"
                      aria-describedby="candidates-description"
                      name="candidates"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="candidates"
                      className="font-medium text-gray-700"
                    >
                      Mindfulness
                    </label>
                  </div>
                </div>
                <div className="relative flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="offers"
                      aria-describedby="offers-description"
                      name="offers"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="offers"
                      className="font-medium text-gray-700"
                    >
                      Anxiety and stress reduction
                    </label>
                  </div>
                </div>
                <div>
                  <hr className="p-6 border-black-muted w-full" />
                </div>
              </fieldset>
              <button
                type="button"
                class="transition duration-200 bg-oxford hover:bg-venetian focus:shadow-xl focus:ring-4 focus:ring-marigold focus:ring-opacity-0 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
              >
                <span class="inline-block mr-2 text-white">Login</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="w-4 h-4 inline-block"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
            <div class="py-5">
              <div class="grid grid-cols-2 gap-1">
                <div class="text-center sm:text-left whitespace-nowrap">
                  <button class="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      class="w-4 h-4 inline-block align-text-top"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                      />
                    </svg>
                    <span class="inline-block ml-1">Forgot Password</span>
                  </button>
                </div>
                <div class="text-center sm:text-right whitespace-nowrap">
                  <button class="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      class="w-4 h-4 inline-block align-text-bottom	"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                    <span class="inline-block ml-1">Help</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="py-5">
            <div class="grid grid-cols-2 gap-1">
              <div class="text-center sm:text-left whitespace-nowrap">
                <button class="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-200 focus:outline-none focus:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="w-4 h-4 inline-block align-text-top"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                  <span class="inline-block ml-1">Back to your-app.com</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
