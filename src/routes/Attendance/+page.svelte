<body class=" bg-gray-50 h-screen">
  <header class="text-gray-600 body-font">
    <!-- svelte-ignore a11y-missing-attribute -->
    <div class="mx-6 flex flex-wrap pt-5 flex-col md:flex-row items-center">
      <div class="w-full flex flex-row justify-between">
        <nav class="flex">
          <!-- svelte-ignore a11y-missing-attribute -->
          <img src="Mwenzi5.png" class="h-14 pb-2" alt="..." />
        </nav>
        <div class="flex flex-row">

          <p class="font-medium text-md my-auto mr-3" id="userName">Hi, Mwenzi Teacher</p>
          <button class="dropdown dropdown-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="green"
              class="bi bi-person-circle"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path
                fill-rule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
              />
            </svg>
            <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
            <ul
              tabindex="0"
              class="text-center rounded-2xl mt-2 dropdown-content shadow bg-base-100 w-24"
            >
              <li class="rounded-2xl hover:bg-gray-200">
                <a href="/Login" class="py-1 flex justify-center font-medium text-sm"
                  >Log out</a
                >
              </li>
            </ul>
          </button>
        </div>
      </div>
    </div>
  </header>

  <div class="flex justify-center mt-4 mx-6">
    <select class="select select-bordered font-medium focus:outline-1 w-full rounded-3xl max-w-xs">
      <option disabled selected>Select Class</option>
      <option>Diamond - Math</option>
      <option>Ruby - Science</option>
    </select>

    <input
    id="dateSelector1"
    type="date"
    class="w-56 h-12 font-medium text-sm text-center mx-2 rounded-3xl border border-gray-300 px-2 focus:outline-1 focus:outline-gray-300"
    value=""
  />
  </div>



  <div class="mt-5 px-4 items-center text-center h-3/4 overflow-y-auto">
    <table
      class="text-sm text-gray-500 dark:text-gray-400 w-full rounded-lg shadow-sm"
    >
      <thead
        class="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400 sticky top-0"
      >
        <tr>
          <th scope="col" class="px-5 py-4 text-left">Student</th>
          <th scope="col" class="px-6 py-4 text-center">Time</th>
          <th scope="col" class="px-6 py-4 text-center">Status</th>
        </tr>
      </thead>

      <tbody>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <td class="py-4 text-center">Luis Santiago</td>
          <td class="text-center">00:00</td>
          <td class="text-center">
            <!-- <span class="bg-green-500 text-white py-1 px-3 rounded-full text-xs"
              >Present</span
            > -->
            <select
              class="select select-xs bg-green-500 focus:none text-white rounded-full w-22 text-xs"
            >
              <option disabled selected>Present</option>
              <option>Absent</option>
              <option>Late</option>
            </select>
          </td>
        </tr>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <td class="py-4 text-center">Ace Dela Cuesta</td>
          <td class="text-center">00:00</td>
          <td class="text-center">
            <!-- <span class="bg-green-500 text-white py-1 px-3 rounded-full text-xs"
              >Present</span
            > -->
            <select
              class="select select-xs bg-red-500 focus:none text-white rounded-full w-22 text-xs"
            >
              <option disabled selected>Absent</option>
              <option>Present</option>
              <option>Late</option>
            </select>
          </td>
        </tr>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <td class="py-4 text-center">Kyle Dela Pena</td>
          <td class="text-center">00:00</td>
          <td class="text-center">
            <!-- <span class="bg-green-500 text-white py-1 px-3 rounded-full text-xs"
              >Present</span
            > -->
            <select
              class="select select-xs bg-yellow-500 focus:none text-white rounded-full w-22 text-xs"
            >
              <option disabled selected>Late</option>
              <option>Present</option>
              <option>Absent</option>
            </select>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- BOTTOM -->
  <div
    class="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600"
  >
    <div class="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
      <button
        type="button"
        class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
      >
        <svg
          class="w-6 h-6 mb-1 text-blue-500 dark:text-blue-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
          />
        </svg>
        <span
          class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
          >Attendance</span
        >
      </button>
      
      <button
        type="button"
        class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
        onclick="window.location.href='/Points'"
     >
        <svg
          class="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
          />
        </svg>
        <span
          class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
          >Points</span
        >
      </button>
      <button
        type="button"
        class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
      >
        <svg
          class="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"
          />
        </svg>
        <span
          class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
          >Notes</span
        >
      </button>
      <button
        type="button"
        class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
      >
        <svg
          class="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
          />
        </svg>
        <span
          class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
          >Actions</span
        >
      </button>
    </div>
  </div>
</body>

<!-- <style>
  /* Style for the toggle when it's checked (toggled) */
  .toggle-success:checked {
    background-color: #10b981; /* Green color */
  }

  /* Default style for the toggle when it's not checked (not toggled) */
  .toggle-success {
    background-color: #ef4444; /* Red color */
  }
</style> -->
