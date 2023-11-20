
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

    if (selecTSub === "Select Class") {
      toast.error("Please select a class");
      return;
    }
  try {
    const attendanceCollectionRef = collection(
      firestore,
      "Subject",
      `${selecTSub}`,
      "Recitation"
    );

    const querySnapshot = await getDocs(attendanceCollectionRef);

    // Loop through the documents and update each one
    querySnapshot.forEach(async (doc) => {
      try {
        const docRef = doc.ref;

        // Update the document fields
        await updateDoc(docRef, {
          totalPoints: 0, // Set to the desired value for totalPoints
          day: null, // Set to the desired value for day
          week: null, // Set to the desired value for week
        });

        toast.success("Points reset successfully.");
      } catch (updateError) {
        // Handle the error that occurred during the update
        console.error("Error updating document:", updateError);
        toast.error("Error resetting points. Please try again.");
      }
    });
  } catch (fetchError) {
    // Handle the error that occurred while fetching documents
    console.error("Error fetching documents:", fetchError);
    toast.error("Error fetching recitation documents. Please try again.");
  }
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
    toast.success("Updated student points");
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

<style>
  header {
	view-transition-name: header;
}

  #bottomnav {
    view-transition-name: bottomnav;
}
</style>

<body class="h-screen">
  <header class="text-gray-600 body-font view-transition-name: header;"> 
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
              <a  on:click={(event) => navigate("/Teacher-Login")} class=" py-1 flex justify-center font-medium text-sm"
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
      class="bg-white w-56 h-12 font-medium text-sm rounded-3xl text-center mx-2 px-2 border border-gray-300 focus:outline-1 focus:outline-gray-300"
    >
      <option selected class="rounded-3xl">Total Points</option>
      <option class="rounded-xl">Daily</option>
      <option class="rounded-xl">Weekly</option>
    </select>
  </div>
  <div class="mt-6 mb-3 flex w-full justify-center">
    <label for="reset"
      class="bg-red-500 rounded-3xl text-sm text-white w-32 h-7 text-center font-medium pt-1"
      >Reset Points</label
    >
    <input type="checkbox" id="reset" class="modal-toggle" />
    <div class="modal">
      <div class="modal-box relative h-36">
        <label
            for="reset"
            class="btn btn-sm btn-circle absolute right-2 top-2">✕</label
          >
        <h3 class="text-lg font-bold text-center mt-4">Are you sure to reset all points?</h3>
        <div class="mt-6 mb-1 flex justify-center">
         <button id="yesButton" on:click={resetRecitationPoints} class="bg-red-500 rounded-3xl mx-2 w-20 text-white px-4 font-medium">Yes</button>
         <label for="reset" class="bg-gray-200 rounded-3xl w-20 text-black font-medium text-center px-4 mx-2">No</label>
        </div>
      </div>
    </div>
  </div>


  <div class="mt-2 px-4 items-center text-center h-3/4 overflow-y-auto">
    <table
      class="text-sm text-gray-500 dark:text-gray-400 w-full rounded-lg shadow-sm"
    >
      <thead
        class="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400 sticky top-0"
      >
        <tr>
          <th scope="col" class="px-6 py-4 text-center">Rank</th>
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
    id="bottomnav" class="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600"
  >
    <div class="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
      <button
      on:click={(event) => navigate("/Attendance")}
      type="button"
      class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="27"
        height="28"
        fill="currentColor"
        class="bi bi-person-fill-check text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
        viewBox="0 0 16 16"
      >
        <path
          d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514ZM11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
        <path
          d="M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z"
        />
      </svg>
      <span
        class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
        >Attendance</span
      >
    </button>

    <button
      on:click={(event) => navigate("/Points")}
      type="button"
      class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="28"
        fill="currentColor"
        class="bi bi-award-fill text-blue-500 dark:text-blue-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
        viewBox="0 0 16 16"
      >
        <path
          d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864 8 0z"
        />
        <path
          d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"
        />
      </svg>
      <span
        class="text-sm text-blue-500 dark:text-blue-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
        >Points</span
      >
    </button>
    <button
      on:click={(event) => navigate("/Notes")}
      type="button"
      class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="28"
        fill="currentColor"
        class="bi bi-sticky-fill text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
        viewBox="0 0 17 17"
      >
        <path
          d="M2.5 1A1.5 1.5 0 0 0 1 2.5v11A1.5 1.5 0 0 0 2.5 15h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 15 8.586V2.5A1.5 1.5 0 0 0 13.5 1h-11zm6 8.5a1 1 0 0 1 1-1h4.396a.25.25 0 0 1 .177.427l-5.146 5.146a.25.25 0 0 1-.427-.177V9.5z"
        />
      </svg>
      <span
        class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
        >Notes</span
      >
    </button>
    <button
      on:click={(event) => navigate("/Actions")}
      type="button"
      class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="28"
        fill="currentColor"
        class="bi bi-grid-fill text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
        viewBox="0 0 17 17"
      >
        <path
          d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z"
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

