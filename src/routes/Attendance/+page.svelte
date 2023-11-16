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
    selectedSubject,
  } from "../../lib/userStorage";
  import { onMount } from "svelte";
  import { current_component } from "svelte/internal";
  import toast, { Toaster } from "svelte-french-toast";

  let selectedSubject1;
  async function setSubject(option) {
    localStorage.setItem("selectedSubject", option);
    console.log(selectedSubject1 + "hahahahadfdsgdf");
  }

  function navigate(URL) {
    goto(URL);
  }

  // async function loadSubject() {
  //   document.getElementById("classSelection").value = selectedSubject1;
  //   console.log(selectedSubject1 + "HAHAHAHAHAHAHAHAHAH");
  // }

  let userUID = "";
  let selecTSub;
  let docsArray = [];
  let attendance = [];
  let nameArray = [];
  let recitation = [];
  let attendanceDates = [];
  let currentDatee;
  let dateSelected;
  let status1;

  async function changeStudentStatus(status, id) {
    console.log(status, id);

    if (status === "Present" || status === "Absent") {
      changeStatus(status, id);
      console.log("test1");
    } else if (status === "Late") {
      changeStatus(status, id);
    }
  }

  async function getDates() {
    const attendanceCollectionRef = collection(
      firestore,
      "Subject",
      `${selecTSub}`,
      "Attendance"
    );

    getDocs(attendanceCollectionRef)
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          attendanceDates.push(doc.id);
          // You can also access the document data using doc.data()
          // const data = doc.data();
          // console.log("Document Data:", data);
        });
      })
      .catch((error) => {
        console.error("Error fetching documents:", error);
      });
    attendanceDates.sort((a, b) => {
      // Convert the dates to Date objects for comparison
      const dateA = new Date(a);
      const dateB = new Date(b);

      // Sort in descending order (latest date first)
      return dateB - dateA;
    });

    // Remove the first element from the array
    attendanceDates.shift();

    const dateInput = document.getElementById("dateSelector1");
    dateInput.value = currentDatee;
    // const selectElement = document.querySelector('#dateSelector1'); // Select by id

    // attendanceDates.forEach((date) => {
    // 	const optionElement = document.createElement('option');
    // 	optionElement.textContent = date;
    // 	selectElement.appendChild(optionElement);
    // });
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

  let presentCount = 0;
  let absentCount = 0;

  async function attendanceCheck(type) {
    presentCount = 0;
    absentCount = 0;
    const date123 =
      document.getElementById("dateSelector1").value || currentDatee;
    console.log(date123);
    console.log(currentDatee);
    if (type === 1) {
      const attendanceCollectionRef = collection(
        firestore,
        "Subject",
        `${selecTSub}`,
        "Attendance"
      );
      const attendanceDocRef = doc(attendanceCollectionRef, await currentDatee);

      return onSnapshot(attendanceDocRef, (attendanceDocSnapshot) => {
        attendance = Object.entries(attendanceDocSnapshot.data()).map(
          ([key, value]) => ({
            id: key,
            ...value,
          })
        );

        // console.log(attendance);
        // for (const record of attendance) {
        //   if (record.status === "Present") {
        //     presentCount++;
        //   } else if (record.status === "Absent") {
        //     absentCount++;
        //   }
        // }

        // console.log(presentCount, absentCount);
        // document.getElementById("present1").textContent = presentCount;
        // document.getElementById("absent1").textContent = absentCount;
        fetchTime();
        fetchNames();
      });
      attendance = attendance;
    }

    if (type === 2) {
      const attendanceCollectionRef = collection(
        firestore,
        "Subject",
        `${selecTSub}`,
        "Attendance"
      );

      const attendanceDocRef = doc(attendanceCollectionRef, await date123);
      return onSnapshot(attendanceDocRef, (attendanceDocSnapshot) => {
        attendance = Object.entries(attendanceDocSnapshot.data()).map(
          ([key, value]) => ({
            id: key,
            ...value,
          })
        );

        // console.log(attendance);
        // for (const record of attendance) {
        //   if (record.status === "Present") {
        //     presentCount++;
        //   } else if (record.status === "Absent") {
        //     absentCount++;
        //   }
        // }

        // console.log(presentCount, absentCount);
        // document.getElementById("present1").textContent = presentCount;
        // document.getElementById("absent1").textContent = absentCount;
        // fetchTime();
        // fetchNames();
      });

      attendance = attendance;
    }
  }

  async function fetchNames() {
    const refers = collection(firestore, "users");
    const ids = attendance.map((item) => item.id); // Extract all IDs from the attendance array

    // Query the Firestore documents by IDs
    const snapshot = await getDocs(refers, where("studentRFID", "in", ids));

    snapshot.forEach((doc) => {
      const id = doc.data().studentRFID;
      const name = doc.data().firstName + " " + doc.data().lastName;

      // Find the item in the attendance array with the matching ID
      const item = attendance.find((el) => el.id === id);

      if (item) {
        // Update the name property for the matching item
        item.name = name;
      }
    });
    attendance.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    attendance = attendance;
    console.log(attendance);
  }
  async function fetchTime() {
    const ids = attendance.map((item) => item.id); // Extract all IDs from the attendance array

    const dbRef = ref(getDatabase());
    const promises = ids.map((id) =>
      onValue(
        child(dbRef, `RFIDATTENDANCE/${currentDatee}/${id}`),
        async (snapshot) => {
          if (snapshot.exists()) {
            const attendanceCollectionRef = collection(
              firestore,
              "Subject",
              `${selecTSub}`,
              "Attendance"
            );
            const attendanceDocRef = doc(attendanceCollectionRef, currentDatee);
            try {
              const attendanceDocSnapshot = await getDoc(attendanceDocRef);
              if (attendanceDocSnapshot.exists()) {
                const attendanceData = attendanceDocSnapshot.data();
                const fieldName = Object.keys(attendanceData).find(
                  (key) => key === id
                );
                if (
                  fieldName &&
                  attendanceData[fieldName].dataStatus !== "changed"
                ) {
                  attendanceData[fieldName].time = snapshot.val().TIME;
                  attendanceData[fieldName].status = "Present";
                  attendanceData[fieldName].dataStatus = "changed";
                  await setDoc(attendanceDocRef, attendanceData);
                } else {
                  console.log(
                    `Field with ID not found or data status is already changed: ${id}`
                  );
                }
              } else {
                console.log("Attendance document does not exist");
              }
            } catch (error) {
              console.error("Error updating attendance document:", error);
            }
          } else {
            console.log(`No data available for ID: ${id}`);
          }
        },
        (error) => {
          console.error(error);
        }
      )
    );

    await Promise.all(promises);
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

  async function changeStatus(action, documentID) {
    console.log(action);
    const attendanceCollectionRef = collection(
      firestore,
      "Subject",
      `${selecTSub}`,
      "Attendance"
    );
    if (action === "Present") {
      console.log("CHECK CGHECK 2", action);
      const attendanceDocRef = doc(attendanceCollectionRef, currentDatee);
      const attendanceDocSnapshot = await getDoc(attendanceDocRef);
      if (attendanceDocSnapshot.exists()) {
        console.log("EXIST");
        const attendanceData = attendanceDocSnapshot.data();
        const fieldName = Object.keys(attendanceData).find(
          (key) => key === documentID
        );
        if (fieldName) {
          attendanceData[fieldName].status = "Present";
          attendanceData[fieldName].late = "False";
          await setDoc(attendanceDocRef, attendanceData);
        }
      }
    } else if (action === "Absent") {
      console.log("CHECK CGHECK 1", action);
      const attendanceDocRef = doc(attendanceCollectionRef, currentDatee);
      const attendanceDocSnapshot = await getDoc(attendanceDocRef);
      if (attendanceDocSnapshot.exists()) {
        const attendanceData = attendanceDocSnapshot.data();
        const fieldName = Object.keys(attendanceData).find(
          (key) => key === documentID
        );
        if (fieldName) {
          attendanceData[fieldName].status = "Absent";
          attendanceData[fieldName].late = "False";
          await setDoc(attendanceDocRef, attendanceData);
        }
      }
    } else if (action === "Late") {
      console.log("CHECK CGHECK 1", action);
      const attendanceDocRef = doc(attendanceCollectionRef, currentDatee);
      const attendanceDocSnapshot = await getDoc(attendanceDocRef);
      if (attendanceDocSnapshot.exists()) {
        const attendanceData = attendanceDocSnapshot.data();
        const fieldName = Object.keys(attendanceData).find(
          (key) => key === documentID
        );
        if (fieldName) {
          attendanceData[fieldName].late = "True";
          await setDoc(attendanceDocRef, attendanceData);
        }
      }
    }
  }

  async function changeStatus2(action, documentID) {
    console.log(action);
    const attendanceCollectionRef = collection(
      firestore,
      "Subject",
      `${selecTSub}`,
      "Attendance"
    );
    if (action === "True") {
      console.log("CHECK CGHECK 2", action);
      const attendanceDocRef = doc(attendanceCollectionRef, currentDatee);
      const attendanceDocSnapshot = await getDoc(attendanceDocRef);
      if (attendanceDocSnapshot.exists()) {
        console.log("EXIST");
        const attendanceData = attendanceDocSnapshot.data();
        const fieldName = Object.keys(attendanceData).find(
          (key) => key === documentID
        );
        if (fieldName) {
          attendanceData[fieldName].late = "True";
          await setDoc(attendanceDocRef, attendanceData);
        }
      }
    } else if (action === "False") {
      console.log("CHECK CGHECK 1", action);
      const attendanceDocRef = doc(attendanceCollectionRef, currentDatee);
      const attendanceDocSnapshot = await getDoc(attendanceDocRef);
      if (attendanceDocSnapshot.exists()) {
        const attendanceData = attendanceDocSnapshot.data();
        const fieldName = Object.keys(attendanceData).find(
          (key) => key === documentID
        );
        if (fieldName) {
          attendanceData[fieldName].late = "False";
          await setDoc(attendanceDocRef, attendanceData);
        }
      }
    }
  }
  let studentNames = [];
  let isRolling = false;
  let previousStudentIndex = -1; // Initialize with an invalid index
  const calledNames = [];
  let recitationType;

  // Function to fetch student names based on their IDs
  async function fetchStudentNames(studentIDs) {
    const studentNames = [];

    for (const studentID of studentIDs) {
      try {
        const queryRef = collection(firestore, "users");
        const querySnapshot = await getDocs(
          query(queryRef, where("studentRFID", "==", studentID))
        );

        if (!querySnapshot.empty) {
          const studentData = querySnapshot.docs[0].data();
          if (studentData && studentData.Name) {
            // Use "Name" here
            studentNames.push(studentData.Name); // Use "Name" here
          } else {
            console.log("No valid Name found for student ID:", studentID);
          }
        } else {
          console.log("No document found for student ID:", studentID);
        }
      } catch (error) {
        console.error("Error fetching student data:", error);
      }
    }

    return studentNames;
  }

  // Call the function to fetch and display notes
  async function change() {
    console.log(selecTSub);
    classCheck();
    await getDates();
    attendanceCheck(1);
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
      getDate();
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

    selectedSubject.subscribe((val) => {
      if (typeof localStorage !== "undefined") {
        localStorage.selectedSubject = val;
        selectedSubject1 = val;
      }
    });

    // newPage();
  });
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
                <a class="py-1 flex justify-center font-medium text-sm"
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
        setSubject(event.target.value);
      }}
    >
      <option disabled selected>Select Class</option>

      {#each docsArray as item1}
        {#if selectedSubject1 == item1.id}
          <option selected class="rounded-xl" value={item1.id}>
            {item1.id}
          </option>
        {:else}
          <option class="rounded-xl" value={item1.id}>
            {item1.id}
          </option>
        {/if}
      {/each}
    </select>

    <input
      id="dateSelector1"
      type="date"
      class="w-56 h-12 font-medium text-sm text-center mx-2 rounded-3xl border border-gray-300 px-2 focus:outline-1 focus:outline-gray-300"
      value="{current_component};"
      on:change={() => attendanceCheck(2)}
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
        {#each attendance as data}
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td class="py-4 text-center">{data.name}</td>
            <td class="text-center">{data.time}</td>
            <td class="text-center">
              {#if data.status == "Present" && data.late === "False"}
                <span
                  class="bg-green-500 text-white py-1 px-3 rounded-full text-xs"
                  >Present</span
                >

                <select
                  on:change={(event) =>
                    changeStudentStatus(event.target.value, data.id)}
                  id="studentStatus"
                  class="select select-xs bg-green-500 focus:none text-white rounded-full w-22 text-xs"
                >
                  <option selected>Present</option>
                  <option>Absent</option>
                  <option>Late</option>
                </select>
              {/if}
              {#if data.status == "Absent" && data.late === "False"}
                <span
                  class="bg-red-500 text-white py-1 px-3 rounded-full text-xs"
                  >Absent</span
                >

                <select
                  on:change={(event) =>
                    changeStudentStatus(event.target.value, data.id)}
                  id="studentStatus"
                  class="select select-xs bg-red-500 focus:none text-white rounded-full w-22 text-xs"
                >
                  <option>Present</option>
                  <option selected>Absent</option>
                  <option>Late</option>
                </select>
              {/if}
              {#if data.late === "True"}
                <span
                  class="bg-yellow-500 text-white py-1 px-3 rounded-full text-xs"
                  >Late</span
                >

                <select
                  on:change={(event) =>
                    changeStudentStatus(event.target.value, data.id)}
                  class="select select-xs bg-yellow-500 focus:none text-white rounded-full w-22 text-xs"
                >
                  <option>Present</option>
                  <option>Absent</option>
                  <option selected>Late</option>
                </select>
              {/if}
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
        on:click={(event) => navigate("/Points")}
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
        on:click={(event) => navigate("/Notes")}
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
        on:click={(event) => navigate("/Actions")}
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
</style> -->
