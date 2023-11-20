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
    if (selecTSub === "Select Class") {
      toast.error("Please select a class");
      return;
    }
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
        toast.success("Updated the status of a note");
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
    if (selecTSub === "Select Class") {
      toast.error("Please select a class");
      return;
    }
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
        toast.success("Archived a note");
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

  async function noteUndo(id) {
    if (selecTSub === "Select Class") {
      toast.error("Please select a class");
      return;
    }
    const collectionRef = collection(firestore, "Subject", selecTSub, "Notes");
    const docRef = doc(collectionRef, id);
    console.log(id);

    try {
      const docSnapshot = await getDoc(docRef);

      if (docSnapshot.exists()) {
        // The document with the specified ID exists
        const doc = docSnapshot.ref;

        await updateDoc(doc, { Archive: "false" });

        // Optionally, retrieve and return the updated data
        const updatedDocSnapshot = await getDoc(doc);
        const updatedData = updatedDocSnapshot.data();
        toast.success("Unarchived a note");
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
    if (selecTSub === "Select Class") {
      toast.error("Please select a class");
      return;
    }
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
        toast.success("Deleted a note");
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
    if (selecTSub === "Select Class") {
      toast.error("Please select a class");
      return;
    }
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
          toast.success("Note succesfully added");
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });

      title = "";
    } else {
      toast.error("Please enter a title before adding notes.");
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

  let noteArchive = [];

  function fetchAndDisplayNotes2(type) {
    const collectionRef = collection(firestore, "Subject", selecTSub, "Notes");
    const queryRef2 = query(collectionRef, where("Archive", "==", "true"));

    const unsubscribe = onSnapshot(queryRef2, (snapshot) => {
      // Clear the existing array when there's an update
      noteArchive = [];
      // Iterate over each document in the snapshot
      snapshot.forEach((doc) => {
        // Get the data of each document
        const noteData = doc.data();
        noteData.id = doc.id;
        // Push the data into the array
        noteArchive.push(noteData);
      });

      if (type === "Recent") {
        noteArchive = noteArchive.sort((a, b) => {
          console.log("Sorting Recent:", new Date(b.Date), new Date(a.Date));
          return new Date(b.Date) - new Date(a.Date);
        });
      }
      if (type === "Old") {
        noteArchive = noteArchive.sort((a, b) => {
          console.log("Sorting Old:", new Date(a.Date), new Date(b.Date));
          return new Date(a.Date) - new Date(b.Date);
        });
      }
      // Now, noteArray contains the updated data of all documents in the query
      console.log(noteArchive);
    });
  }

  // Call the function to fetch and display notes
  async function change() {
    console.log(selecTSub);
    classCheck();
    fetchAndDisplayNotes(0);
    fetchAndDisplayNotes2(0);
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

<body class="0 h-screen">
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
      on:change={(event) => {
        fetchAndDisplayNotes(event.target.value);
      }}
      id="SortRec"
      class="bg-white w-56 h-12 font-medium text-sm rounded-3xl text-center mx-2 px-2 border border-gray-300 focus:outline-1 focus:outline-gray-300"
    >
      <option disabled selected class="rounded-3xl">Sort By</option>
      <option class="rounded-xl">Recent</option>
      <option class="rounded-xl">Old</option>
    </select>
  </div>

  <div class="mt-5 px-4 items-center text-center h-3/4 overflow-y-auto">
    <div class="flex flex-row ml-3 justify-center mb-2">
      <div class="flex flex-row items-center mt-2 justify-center">
        <input
          bind:value={title}
          class="pl-4 border border-r-0 rounded-l-3xl focus:ring-0 text-sm block bg-white w-60 h-7 border-slate-300 shadow-sm focus:outline-none"
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

      <!--NOTE ARCHIVES -->
      <label
        for="NotesArchives"
        class="mr-8 mt-2 ml-3 rounded-3xl cursor-pointer"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          ><g id="SVGRepo_bgCarrier" stroke-width="0" /><g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          /><g id="SVGRepo_iconCarrier" ble-fi
            ><path
              d="M8.707 6.707a1 1 0 0 0-1.414-1.414L4 8.586 2.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4ZM12 7a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2H12ZM8.707 13.293a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 1 1 1.414-1.414L4 16.586l3.293-3.293a1 1 0 0 1 1.414 0ZM12 15a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2H12Z"
              fill="#currentColor"
              class="fill-current text-gray-600 hover:text-blue-500"
            /></g
          ></svg
        >
      </label>

      <input type="checkbox" id="NotesArchives" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative h-4/6 max-w-3xl text-left">
          <label
            for="NotesArchives"
            class="btn btn-sm btn-circle absolute right-2 top-2">✕</label
          >
          <h3 class="text-xl font-bold text-center">Note Archives</h3>

          <div
            class="relative overflow-y-auto shadow-sm rounded-xl mx-1 mt-8 h-4/5 max-h-4/5"
          >
            <table
              class="text-sm text-gray-500 dark:text-gray-400 w-full rounded-lg shadow-sm"
            >
              <thead
                class="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400 sticky top-0"
              >
                <tr>
                  <th scope="col" class="pr-5 pl-3 py-4 text-left">Note</th>
                  <th scope="col" class="px-6 py-4 text-center">Status</th>
                  <th scope="col" class="px-6 py-4 text-right">Action</th>
                </tr>
              </thead>

              <tbody>
                {#each noteArchive as item1}
                  <tr
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <td class="px-2 pb-1 pt-1 w-36">
                      <h1 class="font-medium text-left text-sm">
                        <span class="text-xs font-normal">{item1.Date}</span><br
                        />
                        {item1.Title}
                      </h1>
                    </td>
                    <td class="text-center">
                      <select
                        on:change={(event) => {
                          noteStatus(item1.id);
                        }}
                        id="selectOption"
                        class="update-status-select border-gray-200 w-28 h-6 mr-1 font-medium text-sm text-center border border-gray focus:none rounded-3xl shadow-sm"
                      >
                        {#if item1.Status == "Only Me"}
                          <option selected value="Only Me">Only Me</option>
                          <option value="Current Class">Share to Class</option>
                        {/if}
                        {#if item1.Status == "Current Class"}
                          <option value="Only Me">Only Me</option>
                          <option selected value="Current Class"
                            >Current Class</option
                          >
                        {/if}
                      </select>
                    </td>
                    <td class="text-center">
                      <button
                        class="px-3 bg-yellow-500 border-transparent hover:bg-yellow-600 hover:border-none text-sm text-white rounded-3xl"
                        on:click={(event) => {
                          noteUndo(item1.id);
                        }}
                      >
                        Undo
                      </button>
                    </td>
                  </tr>
                {/each}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <table
      class="text-sm text-gray-500 dark:text-gray-400 w-full rounded-lg shadow-sm"
    >
      <thead
        class="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400 sticky top-0"
      >
        <tr>
          <th scope="col" class="pr-5 pl-3 py-4 text-left">Note</th>
          <th scope="col" class="px-6 py-4 text-center">Status</th>
          <th scope="col" class="px-6 py-4 text-right">Action</th>
        </tr>
      </thead>

      <tbody>
        {#each noteArray as item1}
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td class="px-2 pb-1 pt-1 w-36">
              <h1 class="font-medium text-left text-sm">
                <span class="text-xs font-normal">{item1.Date}</span><br />
                {item1.Title}
              </h1>
            </td>
            <td class="text-right">
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
                  <option selected value="Current Class">Current Class</option>
                {/if}
              </select>
            </td>
            <td>
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
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>

  <!-- BOTTOM -->
  <div
    id="bottomnav"
    class="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600"
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
          class="bi bi-award-fill text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
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
          class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
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
          class="bi bi-sticky-fill text-blue-500 dark:text-blue-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
          viewBox="0 0 17 17"
        >
          <path
            d="M2.5 1A1.5 1.5 0 0 0 1 2.5v11A1.5 1.5 0 0 0 2.5 15h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 15 8.586V2.5A1.5 1.5 0 0 0 13.5 1h-11zm6 8.5a1 1 0 0 1 1-1h4.396a.25.25 0 0 1 .177.427l-5.146 5.146a.25.25 0 0 1-.427-.177V9.5z"
          />
        </svg>
        <span
          class="text-sm text-blue-500 dark:text-blue-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
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

<style>
  header {
    view-transition-name: header;
  }

  #bottomnav {
    view-transition-name: bottomnav;
  }
</style>
