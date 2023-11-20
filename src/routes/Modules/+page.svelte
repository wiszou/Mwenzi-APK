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
    const subjectRef = collection(firestore, "Subject");
    const queryRef = query(
      subjectRef,
      where("students", "array-contains", userUID)
    );

    const querySnapshot = await getDocs(queryRef);

    docsArray = querySnapshot.docs.map((doc) => doc.id);
    console.log(docsArray);
  }

  let presentCount = 0;
  let absentCount = 0;

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
  let studentNames = [];
  let isRolling = false;
  let previousStudentIndex = -1; // Initialize with an invalid index
  const calledNames = [];
  let recitationType;
  async function getRandomName() {
    if (selecTSub === "Select Class") {
      toast.error("Please select a class");
      return;
    }
    if (isRolling) return; // Prevent multiple clicks while rolling
    const collectionRef = collection(
      firestore,
      "Subject",
      `${selecTSub}`,
      "Attendance"
    );
    const queryRef = doc(collectionRef, currentDatee);

    try {
      const querySnapshot = await getDoc(queryRef);
      if (querySnapshot.exists()) {
        const data = querySnapshot.data();

        // Assuming 'data' is an object with map fields, iterate through the fields
        const presentNames = [];

        if (recitationType === "Present Only") {
          for (const field in data) {
            if (
              data[field].status === "Present" &&
              !calledNames.includes(field)
            ) {
              // Do something with the map field where status is "Present"
              console.log(`Field ${field} is Present`);
              presentNames.push(field);
            }
          }
        }

        if (recitationType === "All Students") {
          for (const field in data) {
            presentNames.push(field);
          }
        }

        if (presentNames.length > 0) {
          const randomIndex = Math.floor(Math.random() * presentNames.length);
          const randomStudentId = presentNames[randomIndex];
          const randomStudentName = await getNameRecitation(randomStudentId);

          // Update the UI with the random student name
          updateRandomizerName(randomStudentName);

          // Add the called name to the list
          calledNames.push(randomStudentId);
        } else {
          if (calledNames.length > 0) {
            updateRandomizerName("All present students have been called");
          } else {
            updateRandomizerName("There are no currently Present students");
          }
        }
      } else {
        console.log("Document does not exist");
      }
    } catch (error) {
      console.error("Error retrieving document:", error);
    }
  }

  function resetRecitation() {
    if (selecTSub === "Select Class") {
      toast.error("Please select a class");
      return;
    }
    calledNames.length = 0;

    // You can also update the UI to indicate that the list has been reset
    updateRandomizerName("List of called students has been reset");
  }

  var isEditing = false;

  function toggleEditButton() {
    if (selecTSub === "Select Class") {
      toast.error("Please select a class");
      return;
    }
    if (weekStatus === "") {
      toast.error("Please select a week");
      return;
    }
    isEditing = !isEditing; // Toggle the editing state
    var saveButton = document.getElementById("saveButton1"); // You need to define 'saveButton' if it's used elsewhere.

    // Loop through the selected elements and enable/disable them based on the editing state
    var elementsToEnable = [
      "day1select",
      "day1input",
      "day1checkbox",
      "day2select",
      "day2input",
      "day2checkbox",
      "day3select",
      "day3input",
      "day3checkbox",
      "day4select",
      "day4input",
      "day4checkbox",
      "day5select",
      "day5input",
      "day5checkbox",
      // Add IDs for other days here as needed
    ];

    for (var i = 0; i < elementsToEnable.length; i++) {
      var element = document.getElementById(elementsToEnable[i]);
      if (element) {
        if (isEditing) {
          element.removeAttribute("disabled");
          element.removeAttribute("readonly");
        } else {
          element.setAttribute("disabled", "disabled");
          element.setAttribute("readonly", "readonly");
        }
      }
    }

    // Add or remove the "pointer-events-none" class based on the editing state
    if (!isEditing) {
      saveButton.classList.add("pointer-events-none");
    } else {
      saveButton.classList.remove("pointer-events-none");
    }

    // Update the button text based on the editing state
    var editButton = document.getElementById("editButton");
    editButton.textContent = isEditing ? "Done" : "Edit";
  }

  function updateRandomizerName(name) {
    const randomizerNameElement = document.getElementById("randomizerName");
    if (randomizerNameElement) {
      randomizerNameElement.textContent = name;
    }
  }

  async function getNameRecitation(id) {
    try {
      const queryRef1 = collection(firestore, "users");
      const queryRef2 = query(queryRef1, where("studentRFID", "==", id));
      const querySnapshot = await getDocs(queryRef2);

      if (querySnapshot.docs.length > 0) {
        const doc = querySnapshot.docs[0];
        return doc.data().Name;
      } else {
        return "Student not found";
      }
    } catch (error) {
      console.error("Error retrieving student name:", error);
      throw error; // Re-throw the error to handle it in the calling function
    }
  }
  let groupType;
  async function groupStudents() {
    if (selecTSub === "Select Class") {
      toast.error("Please select a class");
      return;
    }
    if (groupType === "Select") {
      toast.error("Please select students");
      return;
    }

    // Create a reference to the specific document within the 'Subject' collection

    if (groupType === "Present Only") {
      try {
        const collectionRef = collection(
          firestore,
          "Subject",
          `${selecTSub}`,
          "Attendance"
        );
        const queryRef = doc(collectionRef, currentDatee);
        const querySnapshot123 = await getDoc(queryRef);
        const selectedGroupSize = parseInt(
          document.getElementById("groupSize").value
        );
        if (querySnapshot123.exists()) {
          const data = querySnapshot123.data();
          const studentIdsx = [];
          console.log("yeahS");
          if (recitationType === "Present Only") {
            for (const field in data) {
              if (data[field].status === "Present") {
                // Do something with the map field where status is "Present"
                console.log(`Field ${field} is Present`);
                studentIdsx.push(field);
              }
            }

            if (!isNaN(selectedGroupSize) && selectedGroupSize > 0) {
              const studentNames = await fetchStudentNames(studentIdsx);

              const groupedStudents = [];

              // Iterate through the student names and group them
              for (let i = 0; i < studentNames.length; i += selectedGroupSize) {
                groupedStudents.push(
                  studentNames.slice(i, i + selectedGroupSize)
                );
              }

              displayGroupedStudents(groupedStudents);
            } else {
              toast.error("Please select a valid group size.");
              console.log("Please select a valid group size.");
            }
          }
        }
      } catch (error) {
        console.error("Error fetching document:", error);
      }
    }

    if (groupType === "All Students") {
      try {
        const docRef = doc(firestore, "Subject", selecTSub);
        const docSnapshot = await getDoc(docRef);

        if (docSnapshot.exists()) {
          // Assuming 'students' is the name of the field containing the student array
          const studentIDs = docSnapshot.data().students;

          if (studentIDs) {
            // Get the selected group size from the select element with the 'groupSize' id
            const selectedGroupSize = parseInt(
              document.getElementById("groupSize").value
            );

            if (!isNaN(selectedGroupSize) && selectedGroupSize > 0) {
              // Fetch student names based on their IDs
              const studentNames = await fetchStudentNames(studentIDs);
              // Create an array to store the grouped students
              const groupedStudents = [];

              // Iterate through the student names and group them
              for (let i = 0; i < studentNames.length; i += selectedGroupSize) {
                groupedStudents.push(
                  studentNames.slice(i, i + selectedGroupSize)
                );
              }
              console.log(groupedStudents);
              // Display the grouped students in the HTML table
              displayGroupedStudents(groupedStudents);
            } else {
              toast.error("Please select a valid group size.");
              console.log("Please select a valid group size.");
            }
          } else {
            console.log("No 'students' field found in the document.");
            toast.log("No 'students' field found in the document.");
          }
        } else {
          console.log("Document does not exist.");
        }
      } catch (error) {
        console.error("Error fetching document:", error);
      }
    }
  }

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

  function displayGroupedStudents(groupedStudents) {
    // Get a reference to the table body
    const tableBody = document.getElementById("groupTableBody");

    // Clear any existing rows in the table body
    tableBody.innerHTML = "";

    // Iterate through the grouped students and create rows for each group
    groupedStudents.forEach((group, index) => {
      // Create a new table row
      const row = document.createElement("tr");

      // Add inline style to add spacing between rows (adjust the margin value as needed)
      row.style.marginBottom = "20px"; // You can adjust the spacing as needed

      // Create a table cell for the group number
      const groupNumberCell = document.createElement("th");
      groupNumberCell.classList.add("text-center", "border-b", "py-2");
      groupNumberCell.setAttribute("scope", "row");
      groupNumberCell.textContent = index + 1;

      // Create a table cell for the group members
      const groupMembersCell = document.createElement("td");
      groupMembersCell.classList.add("text-center", "border-b", "py-1");

      // Iterate through the group members and add them to the cell
      group.forEach((member) => {
        const memberElement = document.createElement("div");
        memberElement.textContent = member;
        groupMembersCell.appendChild(memberElement);
      });

      // Add the cells to the row
      row.appendChild(groupNumberCell);
      row.appendChild(groupMembersCell);

      // Add the row to the table body
      tableBody.appendChild(row);
    });
  }

  let title = ""; // Declare a variable to hold the input value

  // Call the function to fetch and display notes

	async function getuserName(id) {
		const queryRef1 = collection(firestore, 'users');
		const queryRef2 = query(queryRef1, where('studentRFID', '==', id));
		const querySnapshot = await getDocs(queryRef2);
		if (querySnapshot.docs.length > 0) {
			const doc = querySnapshot.docs[0];
			document.getElementById('userName').textContent =
				doc.data().firstName + ' ' + doc.data().lastName;
		} else {
			return 'Student not found';
		}
	}

  let day1x = "";
  let day2x = "";
  let day3x = "";
  let day4x = "";
  let day5x = "";

  let day1status = "";
  let day2status = "";
  let day3status = "";
  let day4status = "";
  let day5status = "";

  let day1status2 = "";
  let day2status2 = "";
  let day3status2 = "";
  let day4status2 = "";
  let day5status2 = "";

  let weekStatus = "Week 1";

  async function createWeeklyLesson() {
    if (selecTSub === "Select Class") {
      toast.error("Please select a class");
      return;
    }
    console.log("test");
    const collectionRef = collection(
      firestore,
      "Subject",
      selecTSub,
      "Lessons"
    );
    const week1DocRef = doc(collectionRef, weekStatus); // Create a document reference with 'week1' as the ID
    const data1 = {
      day1: {
        Link: day1x,
        Status: day1status,
        Share: day1status2,
      },
      day2: {
        Link: day2x,
        Status: day2status,
        Share: day2status2,
      },
      day3: {
        Link: day3x,
        Status: day3status,
        Share: day3status2,
      },
      day4: {
        Link: day4x,
        Status: day4status,
        Share: day4status2,
      },
      day5: {
        Link: day5x,
        Status: day5status,
        Share: day5status2,
      },
    };

    try {
      await setDoc(week1DocRef, data1);
      toast.success("Lesson Material Updated");
      console.log("Document written with ID: week1");
    } catch (error) {
      console.error("Error writing document: ", error);
    }
  }

  async function resetWeeklyLesson() {
    if (selecTSub === "Select Class") {
      toast.error("Please select a class");
      return;
    }
    if (weekStatus === "") {
      toast.error("Please select a week");
      return;
    }
    console.log("test");
    const collectionRef = collection(
      firestore,
      "Subject",
      selecTSub,
      "Lessons"
    );
    const week1DocRef = doc(collectionRef, weekStatus); // Create a document reference with 'week1' as the ID
    const data1 = {
      day1: {
        Link: "",
        Status: "",
        Share: "",
      },
      day2: {
        Link: "",
        Status: "",
        Share: "",
      },
      day3: {
        Link: "",
        Status: "",
        Share: "",
      },
      day4: {
        Link: "",
        Status: "",
        Share: "",
      },
      day5: {
        Link: "",
        Status: "",
        Share: "",
      },
    };

    try {
      await setDoc(week1DocRef, data1);
      console.log("Document written with ID: week1");
    } catch (error) {
      console.error("Error writing document: ", error);
    }
  }

  async function updateLessonText() {
    if (selecTSub === "Select Class") {
      toast.error("Please select a class");
      return;
    }
    const weekSelector = document.getElementById("weekSelector");
    const selectedValue = weekSelector.value;
    const collectionRef = collection(
      firestore,
      "Subject",
      selecTSub,
      "Lessons"
    );
    const week1DocRef = doc(collectionRef, selectedValue); // Use the selectedValue
    try {
      const docSnapshot = await getDoc(week1DocRef);

      if (docSnapshot.exists()) {
        const queriedData = docSnapshot.data();

        for (let day = 1; day <= 5; day++) {
          const inputElement = document.getElementById(`day${day}input`);

          const dayData = queriedData[`day${day}`];
					if (dayData.Share == 'Current Class') {
						if (dayData) {
							if (dayData.Link !== null) {
								inputElement.value = dayData.Link || '';
							}
						}
					}
        }
      } else {
        console.log("Document does not exist.");
        for (let day = 1; day <= 5; day++) {
          const inputElement = document.getElementById(`day${day}input`);
          inputElement.value = "";
        }
      }
    } catch (error) {
      console.error("Error getting document:", error);
    }
  }

  let studentIDxx;

  function redirectToLink(id) {
    const inputElement = document.getElementById(id);
    const inputValue = inputElement.value.trim();
    const link = "https:" + inputValue;
    if (inputValue) {
      window.open(link, "_blank");
    }
  }

  async function studentInformation(id) {
    studentIDxx = id;
    const queryRef1 = collection(firestore, "users");
    const queryRef2 = query(queryRef1, where("studentRFID", "==", id));
    const querySnapshot = await getDocs(queryRef2);
    const namex = document.getElementById("studentNamex");
    const idx = document.getElementById("studentIDx");
    const addressx = document.getElementById("studentAddressx");
    const parent = document.getElementById("studentParentx");
    const contact = document.getElementById("studentContactx");
    const medical = document.getElementById("studentMedicalx");

    querySnapshot.forEach((doc) => {
      // Access the data within each document
      const data = doc.data();
      namex.textContent = data.Name || "";

      // Update "studentIDx" element
      idx.textContent = data.studentID || "";

      // Update "studentParentx" element
      parent.value = data.parentName || "";

      // Update "studentContactx" element
      contact.value = data.contactNum || "";

      // Update "addressx" element
      addressx.value = data.address || "";

      // Update "medical" element
      medical.value = data.medicalCondition || "";
    });
  }

  function undisabledInputs() {
    const addressx = document.getElementById("studentAddressx");
    const parent = document.getElementById("studentParentx");
    const contact = document.getElementById("studentContactx");
    const medical = document.getElementById("studentMedicalx");
    const savebutton = document.getElementById("saveButtonx1");

    if (addressx.disabled) {
      addressx.removeAttribute("disabled");
      parent.removeAttribute("disabled");
      contact.removeAttribute("disabled");
      medical.removeAttribute("disabled");
      savebutton.classList.remove("pointer-events-none");
    } else {
      addressx.setAttribute("disabled", "disabled");
      parent.setAttribute("disabled", "disabled");
      contact.setAttribute("disabled", "disabled");
      medical.setAttribute("disabled", "disabled");
      savebutton.classList.add("pointer-events-none");
    }
  }

  async function saveStudentInformation() {
    const queryRef1 = collection(firestore, "users");
    const queryRef2 = query(queryRef1, where("studentRFID", "==", studentIDxx));

    const addressx = document.getElementById("studentAddressx").value;
    const parent = document.getElementById("studentParentx").value;
    const contact = document.getElementById("studentContactx").value;
    const medical = document.getElementById("studentMedicalx").value;

    try {
      const querySnapshot = await getDocs(queryRef2);

      querySnapshot.forEach(async (doc) => {
        // Assuming docRef is the reference to the document you want to update
        await updateDoc(doc.ref, {
          parentName: parent,
          contactNum: contact,
          address: addressx,
          medicalCondition: medical,
        });
      });
    } catch (error) {
      console.error("Error updating documents:", error);
    }
  }

  let timeFrom1;
  let timeTo1;

  async function newPage() {
    if (timeFrom1 === null || timeFrom1 === undefined) {
      console.log("Please select a date");
      return;
    }

    if (timeTo1 === null || timeTo1 === undefined) {
      console.log("Please select a date");
      return;
    }

    const subjectSelected1 = selecTSub; // Assuming selecTSub is a value you want to store
    localStorage.setItem("subjectSelected1", subjectSelected1);
    localStorage.setItem("timeTo", timeTo1);
    localStorage.setItem("timeFrom", timeFrom1);
    const testing = localStorage.getItem("subjectSelected1");
    console.log(testing);
    location.window;
    window.location.href = "/Export-Page";
  }

  async function change() {
    console.log(selecTSub);
    classCheck();
    updateLessonText();
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
            <a  on:click={(event) => navigate("/Student-Login")} class=" py-1 flex justify-center font-medium text-sm"
              >Log out</a
            >
          </li>
          </ul>
        </button>
      </div>
    </div>
  </div>
</header>

<div class="mx-6 mt-4">
    <div
      class="text-lg font-bold text-center justify-center"
    >   
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
      <option class="rounded-xl" value={item1}>
        {item1}
      </option>
    {/each}
  </select>
    <select
    placeholder="Select Week"
    id="weekSelector"
    bind:value={weekStatus}
    on:change={updateLessonText}
    class="select select-bordered font-medium focus:outline-1 w-full rounded-3xl max-w-xs"
  >
    <option class="rounded-3xl" selected>Week 1</option>
    <option class="rounded-3xl">Week 2</option>
    <option class="rounded-3xl">Week 3</option>
    <option class="rounded-3xl">Week 4</option>
    <option class="rounded-3xl">Week 5</option>
    <option class="rounded-3xl">Week 6</option>
    <option class="rounded-3xl">Week 7</option>
    <option class="rounded-3xl">Week 8</option>
  </select>

    </div>

    <div
      class="w-full flex flex-col mx-auto
   py-3 outline rounded-3xl outline-gray-50 mt-5"
    >
      <div class="mx-auto w-full mt-3 pr-3 pl-1">
        <!--WEEK-->
        <div class="flex flex-row justify-center">
         
        </div>
        <h1 class="text-left mt-2 mb-3 ml-5 text-sm">Day 1</h1>
        <div class="flex items-center mt-1 pl-4">
          <input
            id="day1input"
            type="text"
            bind:value={day1x}
            placeholder="www.googledrive.com/lesson1/"
            class="input input-bordered w-11/12 focus:border-none cursor-pointer text-sm"
            readonly
          />
          <button
            class="text-sm text-blue-500 hover:text-blue-400 ml-1"
            on:click={() => redirectToLink("day1input")}>Open Link</button
          >
        </div>

        <h1 class="text-left mt-3 mb-3 ml-5 text-sm">Day 2</h1>
        <div class="flex items-center mt-1 pl-4">
          <input
            bind:value={day2x}
            id="day2input"
            type="text"
            placeholder="www.googledrive.com/lesson1/"
            class="input input-bordered w-11/12 focus:border-none cursor-pointer text-sm"
            readonly
          />
          <button
            class="text-sm text-blue-500 hover:text-blue-400 ml-1"
            on:click={() => redirectToLink("day2input")}>Open Link</button
          >
        </div>

        <h1 class="text-left mt-3 mb-3 ml-5 text-sm">Day 3</h1>
        <div class="flex items-center mt-1 pl-4">
          <input
            bind:value={day3x}
            id="day3input"
            type="text"
            placeholder="www.googledrive.com/lesson1/"
            class="input input-bordered w-11/12 focus.border-none cursor-pointer text-sm"
            readonly
          />
          <button
            class="text-sm text-blue-500 hover:text-blue-400 ml-1"
            on:click={() => redirectToLink("day3input")}>Open Link</button
          >
        </div>

        <h1 class="text-left mt-3 mb-3 ml-5 text-sm">Day 4</h1>
        <div class="flex items-center mt-1 pl-4">
          <input
            bind:value={day4x}
            id="day4input"
            type="text"
            placeholder="www.googledrive.com/lesson1/"
            class="input input-bordered w-11/12 focus:border-none cursor-pointer text-sm"
            readonly
          />
          <button
            class="text-sm text-blue-500 hover:text-blue-400 ml-1"
            on:click={() => redirectToLink("day4input")}>Open Link</button
          >
        </div>

        <h1 class="text-left mt-3 mb-3 ml-5 text-sm">Day 5</h1>
        <div class="flex items-center mt-1 pl-4">
          <input
            bind:value={day5x}
            id="day5input"
            type="text"
            placeholder="www.googledrive.com/lesson1/"
            class="input input-bordered w-11/12 focus.border-none cursor-pointer text-sm"
            readonly
          />
          <button
            class="text-sm text-blue-500 hover:text-blue-400 ml-1"
            on:click={() => redirectToLink("day5input")}>Open Link</button
          >
        </div>
        <!--END WEEK-->
      </div>

    </div>
</div>

<!-- BOTTOM -->
<div
  id="bottomnav"
  class="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600"
>
  <div class="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
    <button
      type="button"
      class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
      on:click={(event) => navigate("/Student-Attendance")}
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
      on:click={(event) => navigate("/Student-Points")}
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
      on:click={(event) => navigate("/Student-Notes")}
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
      on:click={(event) => navigate("/Modules")}
      type="button"
      class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="28"
        fill="currentColor"
        class="bi bi-grid-fill text-blue-500 dark:text-blue-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
        viewBox="0 0 17 17"
      >
        <path
          d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z"
        />
      </svg>
      <span
        class="text-sm text-blue-500 dark:text-blue-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
        >Modules</span
      >
    </button>
  </div>
</div>
<Toaster />

<style>
  header {
    view-transition-name: header;
  }

  #bottomnav {
    view-transition-name: bottomnav;
  }
</style>
