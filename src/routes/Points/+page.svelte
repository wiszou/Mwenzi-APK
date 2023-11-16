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

  let userUID = "";
  let selecTSub;
  let docsArray = [];
  let attendance = [];
  let nameArray = [];
  let recitation = [];
  let attendanceDates = [];
  let currentDatee;
  let dateSelected;

  async function classCheck() {
    const collectionRef = collection(firestore, "Subject");
    const queryRef = query(collectionRef, where("teacherID", "==", userUID));
    const querySnapshot = await getDocs(queryRef);

    docsArray = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      data: doc.data(),
    }));
  }

  async function resetRecitationPoints() {
    const attendanceCollectionRef = collection(
      firestore,
      "Subject",
      `${selecTSub}`,
      "Recitation"
    );

    const querySnapshot = await getDocs(attendanceCollectionRef);

    querySnapshot.forEach(async (doc) => {
      const docRef = doc.ref;
      await updateDoc(docRef, {
        totalPoints: 0, // Set to the desired value for totalPoints
        day: null, // Set to the desired value for day
        week: null, // Set to the desired value for week
      });
    });

    toast.success("Points reset successfully.");
  }

  async function recitationCheck() {
    const selectOption = document.getElementById("SortRec").value;
    const attendanceCollectionReflll = collection(
      firestore,
      "Subject",
      `${selecTSub}`,
      "Recitation"
    );
    return onSnapshot(attendanceCollectionReflll, (snapshot) => {
      recitation = [];
      // Clear the recitation array before populating it again
      snapshot.forEach((doc) => {
        const documentData = doc.data();
        const documentName = doc.id;
        const totalPoints = documentData.totalPoints;
        const week = documentData.week || 0;
        const day = documentData.day || 0;

        const documentInfo = {
          id: documentName,
          totalPoints: totalPoints,
          week: week,
          day: day,
        };

        recitation.push(documentInfo);
      });

      if (selectOption == "Total Points") {
        recitation.sort((a, b) => b.totalPoints - a.totalPoints);

        recitation.forEach((item, index) => {
          item.ranking = index + 1;
        });

        console.log("Updated recitation array with ranking:", recitation);
        console.log("recitation array:", recitation);
      } else if (selectOption == "Weekly") {
        recitation.sort((a, b) => b.week - a.week);

        recitation.forEach((item, index) => {
          item.ranking = index + 1;
        });
      } else if (selectOption == "Daily") {
        recitation.sort((a, b) => b.day - a.day);

        recitation.forEach((item, index) => {
          item.ranking = index + 1;
        });
      }

      fetchNamesTwo();
    });
  }

  // Iterate over each object
  async function fetchNamesTwo() {
    const refer = collection(firestore, "users");
    const ids = recitation.map((item) => item.id); // Extract all IDs from the recitation array

    // Query the Firestore documents by IDs
    const snapshot = await getDocs(refer, where("studentRFID", "in", ids));

    snapshot.forEach((doc) => {
      const id = doc.data().studentRFID;
      const name = doc.data().firstName + " " + doc.data().lastName;

      // Find the item in the recitation array with the matching ID
      const item = recitation.find((el) => el.id === id);

      if (item) {
        // Update the name property for the matching item
        item.name = name;
      }
    });
    recitation = recitation;
  }

  function getDate() {
    fetch("http://worldtimeapi.org/api/timezone/Asia/Manila")
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

  async function changeDocumentID(action, documentID) {
    const recitationCollectionReflllty = collection(
      firestore,
      "Subject",
      `${selecTSub}`,
      "Recitation"
    );

    if (action === "minus") {
      const recitationDocRef = doc(recitationCollectionReflllty, documentID);

      // Retrieve the document data
      const docSnapshot = await getDoc(recitationDocRef);
      if (docSnapshot.exists()) {
        const docData = docSnapshot.data();

        // Decrease the value of the totalPoint field by 1
        const newTotalPoint = docData.totalPoints - 1;
        const WeekTotalPoint = docData.week - 1;
        const DayTotalPoint = docData.day - 1;

        // Update the document with the new value
        await updateDoc(recitationDocRef, {
          totalPoints: newTotalPoint,
          week: WeekTotalPoint,
          day: DayTotalPoint,
        });
        console.log("Minus button clicked for document ID:", documentID);
      }
    }

    // Perform the desired action based on the button clicked
    else if (action === "add") {
      const recitationDocRefe = doc(recitationCollectionReflllty, documentID);

      // Retrieve the document data
      const docSnapshot = await getDoc(recitationDocRefe);
      if (docSnapshot.exists()) {
        const docData = docSnapshot.data();

        // Decrease the value of the totalPoint field by 1
        const newTotalPoint = docData.totalPoints + 1;
        const WeekTotalPoint = docData.week + 1;
        const DayTotalPoint = docData.day + 1;
        // Update the document with the new value
        await updateDoc(recitationDocRefe, {
          totalPoints: newTotalPoint,
          week: WeekTotalPoint,
          day: DayTotalPoint,
        });
        console.log("Minus button clicked for document ID:", documentID);
      }
      console.log("Add button clicked for document ID:", documentID);
      // Perform any other actions specific to the add button
    }
  }

  let studentNames = [];
  let isRolling = false;
  let previousStudentIndex = -1; // Initialize with an invalid index
  const calledNames = [];
  let recitationType;

  // Call the function to fetch and display notes
  async function change() {
    console.log(selecTSub);
    classCheck();
    recitationCheck();
    sortRecitation();
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

  async function sortRecitation() {
    console.log("haha");
    const selectOption = document.getElementById("SortRec").value;
    const totalElements = document.getElementsByClassName("pointsDisplay1");
    const weekElements = document.getElementsByClassName("pointsDisplay2");
    const dayElements = document.getElementsByClassName("pointsDisplay3");

    if (selectOption === "Total Points") {
      for (let i = 0; i < totalElements.length; i++) {
        totalElements[i].hidden = false;
      }
      for (let i = 0; i < weekElements.length; i++) {
        weekElements[i].hidden = true;
      }
      for (let i = 0; i < dayElements.length; i++) {
        dayElements[i].hidden = true;
      }

      recitation.sort((a, b) => b.totalPoints - a.totalPoints);

      recitation.forEach((item, index) => {
        item.ranking = index + 1;
      });
    }

    if (selectOption === "Weekly") {
      for (let i = 0; i < totalElements.length; i++) {
        totalElements[i].hidden = true;
      }
      for (let i = 0; i < weekElements.length; i++) {
        weekElements[i].hidden = true;
      }
      for (let i = 0; i < dayElements.length; i++) {
        dayElements[i].hidden = false;
      }

      recitation.sort((a, b) => b.week - a.week);

      recitation.forEach((item, index) => {
        item.ranking = index + 1;
      });
    }

    if (selectOption === "Daily") {
      for (let i = 0; i < totalElements.length; i++) {
        totalElements[i].hidden = true;
      }
      for (let i = 0; i < weekElements.length; i++) {
        weekElements[i].hidden = false;
      }
      for (let i = 0; i < dayElements.length; i++) {
        dayElements[i].hidden = true;
      }

      recitation.sort((a, b) => b.day - a.day);

      recitation.forEach((item, index) => {
        item.ranking = index + 1;
      });
    }
    recitationCheck();
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
      id="SortRec"
      on:change={sortRecitation}
      class="w-56 h-12 font-medium text-sm rounded-3xl text-center mx-2 px-2 border border-gray-300 focus:outline-1 focus:outline-gray-300"
    >
      <option selected class="rounded-3xl">Total Points</option>
      <option class="rounded-xl">Daily</option>
      <option class="rounded-xl">Weekly</option>
    </select>
  </div>
  <div class="mt-6 flex w-full justify-start pl-6">
    <button class="bg-red-500 rounded-3xl text-sm text-white w-24 h-6" on:click={resetRecitationPoints}
      >Reset Points</button
    >
  </div>
  <div class="mt-2 px-4 items-center text-center h-3/4 overflow-y-auto">
    <table
      class="text-sm text-gray-500 dark:text-gray-400 w-full rounded-lg shadow-sm"
    >
      <thead
        class="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400 sticky top-0"
      >
        <tr>
          <th scope="col" class="px-6 py-4 text-left">Rank</th>
          <th scope="col" class="px-6 py-4 text-center">Student</th>
          <th scope="col" class="px-6 py-4 text-center">Points</th>
          <th scope="col" class="px-6 py-4 text-center">Update</th>
        </tr>
      </thead>

      <tbody>
        {#each recitation as data}
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td class="py-4 text-center">{data.ranking}</td>
            <td class="text-center">{data.name}</td>
            <td id="pointsDisplay1" class="pointsDisplay1 text-center"
              >{data.totalPoints}</td
            >
            <td id="pointsDisplay2" class="pointsDisplay2 text-center" hidden
              >{data.day}</td
            >
            <td id="pointsDisplay3" class="pointsDisplay3 text-center" hidden
              >{data.week}</td
            >
            <td class="text-center">
              <!-- svelte-ignore a11y-click-events-have-key-events -->
              <img
                on:click={() => changeDocumentID("minus", data.id)}
                src="minus.png"
                class="btn btn-xs px-1 bg-transparent hover:bg-transparent border-none"
                alt="..."
              />
              <!-- svelte-ignore a11y-click-events-have-key-events -->
              <img
                on:click={() => changeDocumentID("add", data.id)}
                src="add.png"
                class="btn btn-xs px-1 bg-transparent hover:bg-transparent border-none"
                alt="..."
              />
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
      >
        <svg
          class="w-6 h-6 mb-1 text-blue-500 dark:text-blue-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
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
          class="text-sm text-blue-500 dark:text-blue-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
          >Points</span
        >
      </button>
      <button
        type="button"
        class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
        onclick="window.location.href='/Notes'"
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

  <Toaster />
</body>

<style>
  /* Style for the toggle when it's checked (toggled) */
  .toggle-success:checked {
    background-color: #10b981; /* Green color */
  }

  /* Default style for the toggle when it's not checked (not toggled) */
  .toggle-success {
    background-color: #ef4444; /* Red color */
  }
</style>
