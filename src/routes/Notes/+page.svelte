<script>
  import { auth, database } from "$lib/firebase";
  import {
    doc,
    setDoc,
    query,
    where,
    getDocs,
    collection,
    getDoc,
    onSnapshot,
    updateDoc,
    addDoc,
    deleteDoc,
  } from "firebase/firestore";
  import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
  import { goto } from "$app/navigation";
  import { firebase, firestore, functions } from "$lib/firebase";
  import { getDatabase, ref, onValue, get, child } from "firebase/database";
  import {
    subjectSelected1,
    userId,
    timeFrom,
    timeTo,
  } from "../../lib/userStorage";
  import { onMount } from "svelte";
  import { current_component } from "svelte/internal";
  import toast, { Toaster } from "svelte-french-toast";
  
  function navigate(URL) {
    goto(URL);
  }

  let userUID = "";
  let selecTSub;
  let docsArray = [];
  let attendance = [];
  let nameArray = [];
  let recitation = [];
  let attendanceDates = [];
  let currentDatee;
  let dateSelected;

  async function noteStatus(id) {
    const optionValue = document.getElementById("selectOption").value;
    const collectionRef = collection(firestore, "Subject", selecTSub, "Notes");
    const docRef = doc(collectionRef, id);
    console.log(id);

    try {
      const docSnapshot = await getDoc(docRef);

      if (docSnapshot.exists()) {
        // The document with the specified ID exists
        const doc = docSnapshot.ref;

        // Update the "Archive" field to "true"
        await updateDoc(doc, { Status: optionValue });

        // Optionally, retrieve and return the updated data
        const updatedDocSnapshot = await getDoc(doc);
        const updatedData = updatedDocSnapshot.data();
        return updatedData;
      } else {
        // Document does not exist
        console.log("No such document!");
        return null;
      }
    } catch (error) {
      console.error("Error updating document:", error);
      throw error;
    }
  }

  async function noteCompletion(id) {
    const collectionRef = collection(firestore, "Subject", selecTSub, "Notes");
    const docRef = doc(collectionRef, id);
    console.log(id);

    try {
      const docSnapshot = await getDoc(docRef);

      if (docSnapshot.exists()) {
        // The document with the specified ID exists
        const doc = docSnapshot.ref;

        await updateDoc(doc, { Archive: "true" });

        // Optionally, retrieve and return the updated data
        const updatedDocSnapshot = await getDoc(doc);
        const updatedData = updatedDocSnapshot.data();
        return updatedData;
      } else {
        // Document does not exist
        console.log("No such document!");
        return null;
      }
    } catch (error) {
      console.error("Error updating document:", error);
      throw error;
    }
  }

  async function noteDelete(id) {
    const collectionRef = collection(firestore, "Subject", selecTSub, "Notes");
    const docRef = doc(collectionRef, id);

    try {
      const docSnapshot = await getDoc(docRef);

      if (docSnapshot.exists()) {
        // The document with the specified ID exists
        const doc = docSnapshot.ref;

        // Delete the document
        await deleteDoc(doc);

        console.log("Document successfully deleted!");

        // Optionally, you can return some information about the deleted document if needed
        const deletedData = docSnapshot.data();
        return deletedData;
      } else {
        // Document does not exist
        console.log("No such document!");
        return null;
      }
    } catch (error) {
      console.error("Error deleting document:", error);
      throw error;
    }
  }

  async function classCheck() {
    const collectionRef = collection(firestore, "Subject");
    const queryRef = query(collectionRef, where("teacherID", "==", userUID));
    const querySnapshot = await getDocs(queryRef);

    docsArray = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      data: doc.data(),
    }));
  }

  function getDate() {
    fetch("https://worldtimeapi.org/api/timezone/Asia/Manila")
      .then((response) => response.json())
      .then((data) => {
        // Extract the date components
        var currentDate = new Date(data.datetime);
        var year = currentDate.getFullYear();
        var month = currentDate.getMonth() + 1;
        var day = currentDate.getDate();

        // Format the date as desired (e.g., YYYY-MM-DD)
        currentDatee =
          year +
          "-" +
          month.toString().padStart(2, "0") +
          "-" +
          day.toString().padStart(2, "0");

        console.log(currentDatee); // Output: 2023-05-26
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }

  function sortNotes() {
    const sortDates = () => {
      noteArray = noteArray.sort((a, b) => new Date(b.Date) - new Date(a.Date));
    };
    console.log(noteArray);
  }

  let studentNames = [];
  let isRolling = false;
  let previousStudentIndex = -1; // Initialize with an invalid index
  const calledNames = [];
  let recitationType;

  let title = ""; // Declare a variable to hold the input value

  function addNote() {
    if (title.trim() !== "") {
      const collectionRef = collection(
        firestore,
        "Subject",
        selecTSub,
        "Notes"
      );

      addDoc(collectionRef, {
        Title: title,
        Date: currentDatee,
        Status: "Only Me",
        Archive: "false",
      })
        .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });

      title = "";
    } else {
      alert("Please enter a title before adding notes.");
    }
  }

  let noteArray = [];
  function fetchAndDisplayNotes(type) {
    const collectionRef = collection(firestore, "Subject", selecTSub, "Notes");
    const queryRef2 = query(collectionRef, where("Archive", "==", "false"));

    const unsubscribe = onSnapshot(queryRef2, (snapshot) => {
      // Clear the existing array when there's an update
      noteArray = [];

      // Iterate over each document in the snapshot
      snapshot.forEach((doc) => {
        // Get the data of each document
        const noteData = doc.data();
        noteData.id = doc.id;
        // Push the data into the array
        noteArray.push(noteData);
      });

      if (type === "Recent") {
        noteArray = noteArray.sort((a, b) => {
          console.log("Sorting Recent:", new Date(b.Date), new Date(a.Date));
          return new Date(b.Date) - new Date(a.Date);
        });
      }
      if (type === "Old") {
        noteArray = noteArray.sort((a, b) => {
          console.log("Sorting Old:", new Date(a.Date), new Date(b.Date));
          return new Date(a.Date) - new Date(b.Date);
        });
      }
      // Now, noteArray contains the updated data of all documents in the query
      console.log(noteArray);
    });
  }

  // Call the function to fetch and display notes
  async function change() {
    console.log(selecTSub);
    classCheck();
    fetchAndDisplayNotes(0);
  }

  async function getuserName(id) {
    const queryRef1 = collection(firestore, "users");
    const queryRef2 = query(queryRef1, where("UID", "==", id));
    const querySnapshot = await getDocs(queryRef2);
    if (querySnapshot.docs.length > 0) {
      const doc = querySnapshot.docs[0];
      console.log(doc.data().Name);
      document.getElementById("userName").textContent =
        doc.data().firstName + " " + doc.data().lastName;
    } else {
      return "Teacher not found";
    }
  }

  onMount(() => {
    const unsubscribe = userId.subscribe((value) => {
      // Use the value of userId here
      userUID = localStorage.getItem("userId");
      console.log(userUID);
      getuserName(userUID);
      classCheck();
      return () => {
        unsubscribe();
      };
    });

    subjectSelected1.subscribe((val) => {
      if (typeof localStorage !== "undefined") {
        localStorage.subjectSelected1 = val;
      }
    });

    timeFrom.subscribe((val) => {
      if (typeof localStorage !== "undefined") {
        localStorage.timeFrom = val;
      }
    });

    timeTo.subscribe((val) => {
      if (typeof localStorage !== "undefined") {
        localStorage.timeTo = val;
      }
    });

    // newPage();
  });
  getDate();
</script>

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
                <a class=" py-1 flex justify-center font-medium text-sm"
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
      id="classSelection"
      class="select select-bordered font-medium focus:outline-1 w-full rounded-3xl max-w-xs"
      bind:value={selecTSub}
      on:change={(event) => {
        change();
      }}
    >
      <option disabled selected>Select Class</option>

      {#each docsArray as item1}
        <option class="rounded-xl" value={item1.id}>
          {item1.id}
        </option>
      {/each}
    </select>

    <select
      on:change={(event) => {
        fetchAndDisplayNotes(event.target.value);
      }}
      id="SortRec"
      class="w-56 h-12 font-medium text-sm rounded-3xl text-center mx-2 px-2 border border-gray-300 focus:outline-1 focus:outline-gray-300"
    >
      <option disabled selected class="rounded-3xl">Sort By</option>
      <option class="rounded-xl">Recent</option>
      <option class="rounded-xl">Old</option>
    </select>
  </div>
  <!-- 
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

    <div
      class="flex flex-row justify-between w-full items-center px-2 pb-1 pt-1"
    >
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
  </div> -->

  <div class="mt-5 px-4 items-center text-center h-3/4 overflow-y-auto">
    <div class="flex flex-row items-center mt-2 justify-center">
      <input
        bind:value={title}
        class="pl-4 border border-r-0 rounded-l-3xl focus:ring-0 text-sm block bg-white w-64 h-7 border-slate-300 shadow-sm focus:outline-none"
        placeholder="Add Notes"
        type="text"
        name="search12"
      />
      <button
        on:click={addNote}
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
    <table
      class="text-sm text-gray-500 dark:text-gray-400 w-full rounded-lg shadow-sm"
    >
      <thead
        class="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400 sticky top-0"
      >
        <tr>
          <th scope="col" class="px-5 py-4 text-left">Note Name</th>
          <th scope="col" class="px-6 py-4 text-right">Status</th>
        </tr>
      </thead>

      <tbody>
        {#each noteArray as item1}
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td class="px-2 pb-1 pt-1 w-64">
              <h1 class="font-medium text-left text-sm w-full">
                {item1.Title} - {item1.Date}
              </h1>
            </td>
            <td class="px-6 text-right">
              <div class="flex items-center justify-end">
                <select
                  on:change={(event) => {
                    noteStatus(item1.id);
                  }}
                  id="selectOption"
                  class="update-status-select border-gray-200 w-32 h-6 mr-1 font-medium text-sm text-center border border-gray focus:none rounded-3xl shadow-sm"
                >
                  {#if item1.Status == "Only Me"}
                    <option selected value="Only Me">Only Me</option>
                    <option value="Current Class">Share to Class</option>
                  {/if}
                  {#if item1.Status == "Current Class"}
                    <option value="Only Me">Only Me</option>
                    <option selected value="Current Class">Current Class</option
                    >
                  {/if}
                </select>
                <button
                  class="update-status-button pl-1"
                  on:click={(event) => {
                    noteCompletion(item1.id);
                  }}
                >
                  <img
                    src="done.png"
                    class="h-7 transform transition-transform focus:scale-100 active:scale-90"
                    alt="..."
                  />
                </button>
                <button
                  class="delete-button"
                  on:click={(event) => {
                    noteDelete(item1.id);
                  }}
                >
                  <img
                    src="delete.png"
                    class="h-7 transform transition-transform focus:scale-100 active:scale-90"
                    alt="..."
                  />
                </button>
              </div>
            </td>
          </tr>
        {/each}
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
        on:click={(event) => navigate("/Attendance")}
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
        on:click={(event) => navigate("/Points")}
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
        on:click={(event) => navigate("/Actions")}
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
  <Toaster />
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
