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
          <p class="font-medium text-md my-auto mr-3" id="userName">
            Hi, Mwenzi Teacher
          </p>
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
                <a
                  href="/Login"
                  class=" py-1 flex justify-center font-medium text-sm"
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
    <select
      class="select select-bordered font-medium focus:outline-1 w-full rounded-3xl max-w-xs"
    >
      <option disabled selected>Select Class</option>
      <option>Diamond - Math</option>
      <option>Ruby - Science</option>
    </select>

    <select
      id="SortRec"
      class="w-56 h-12 font-medium text-sm rounded-3xl text-center mx-2 px-2 border border-gray-300 focus:outline-1 focus:outline-gray-300"
    >
      <option selected class="rounded-3xl">Sort By</option>
      <option class="rounded-xl">Recent</option>
      <option class="rounded-xl">Old</option>
    </select>
  </div>

  <div class="mt-5 px-4 items-center text-center h-3/4 overflow-y-auto">
    <div class="flex flex-row items-center mt-2 justify-center">
      <input
        class="pl-4 border border-r-0 rounded-l-3xl focus:ring-0 text-sm block bg-white w-64 h-7 border-slate-300 shadow-sm focus:outline-none"
        placeholder="Add Notes"
        type="text"
        name="search12"

      />
      <button
        id="addButton"
        class="add-button w-12 h-7 border border-slate-300 rounded-r-3xl bg-blue-500 hover:bg-blue-700 border-none transform transition-transform focus:scale-100 active:scale-95"

      >
        <svg
          width="20px"
          height="20px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          class="ml-3"
          ><g id="SVGRepo_bgCarrier" stroke-width="0" /><g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          /><g id="SVGRepo_iconCarrier">
            <path
              fill="#f2f2f2"
              fill-rule="evenodd"
              d="M9 17a1 1 0 102 0v-6h6a1 1 0 100-2h-6V3a1 1 0 10-2 0v6H3a1 1 0 000 2h6v6z"
            />
          </g></svg
        >
      </button>
    </div>
    <div class="divider mb-0" />
    
    <div class="flex flex-row justify-between w-full items-center px-2 pb-1 pt-1">
        <h1 class="font-medium text-left text-sm w-40">Present Lesson 1</h1>
        <div class="flex items-center">
          <select
            class="update-status-select border-gray-200 w-32 h-6 mr-1 font-medium text-sm text-center border border-gray focus:none rounded-3xl shadow-sm"
          >
            <option disabled hidden class="rounded-3xl">Share</option>
            <option value="Only Me">Only Me</option>
            <option value="Current Class">Share to Class</option>
          </select>
          <button class="update-status-button pl-1">
            <img
              src="done.png"
              class="h-7 transform transition-transform focus:scale-100 active:scale-90"
              alt="..."
            />
          </button>
          <button class="delete-button">
            <img
              src="delete.png"
              class="h-7 transform transition-transform focus:scale-100 active:scale-90"
              alt="..."
            />
          </button>
        </div>
      </div>
      <div class="divider mt-0" />
  </div>



  <!-- BOTTOM -->
  <div
    class="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600"
  >
    <div class="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
      <button
        type="button"
        class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
        onclick="window.location.href='/Attendance'"
      >
        <svg
          class="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
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
          class="w-6 h-6 mb-1 text-blue-500 dark:text-blue-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
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
          class="text-sm text-blue-500 dark:text-blue-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
          >Notes</span
        >
      </button>
      <button
        type="button"
        class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
        onclick="window.location.href='/Actions'"
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
  </style>
   -->
