<script>
  import { firebase, firestore, functions } from "$lib/firebase";
  import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
  import {
    doc,
    setDoc,
    query,
    where,
    getDocs,
    getDoc,
    collection,
    addDoc,
    updateDoc,
    arrayUnion,
  } from "firebase/firestore";
  import { userId } from "../../lib/userStorage";
  import { onMount } from "svelte";
  import { browser } from "$app/environment";
  import toast, { Toaster } from "svelte-french-toast";
  import { goto } from "$app/navigation";

  let studentID = "";
  async function login() {
    return new Promise(async (resolve, reject) => {
      if (studentID == "") {
        toast.error("Student ID is empty");
        return; // Exit the function
      }

      toast.promise(
        (async () => {
          const q = query(
            collection(firestore, "users"),
            where("studentID", "==", studentID)
          );
          const querySnapshot = await getDocs(q);

          let foundUser = false;

          try {
            for (const doc of querySnapshot.docs) {
              foundUser = true;
              const userData = doc.data();
              console.log("Document data:", userData);

              if (userData.userRole === "student") {
                console.log("User is a student");
                const userUID = userData.studentRFID;
                userId.set(userUID);
                const userUID1 = localStorage.getItem("userId");
                goto("../Student-Attendance");
                resolve("Log In Successful");
                return; // Exit the loop if login is successful
              } else {
                console.log("User is not a Student");
                throw new Error("User is not a Student");
              }
            }

            // If the loop completes and no user is found
            if (!foundUser) {
              console.log("User not found");
              throw new Error("Login failed");
            }
          } catch (error) {
            console.error("Error during login:", error);
            throw new Error("Login failed");
          }
        })(),
        {
          loading: "Logging In...",
          success: "Log In Successful",
          error: (error) => error.message, // Display the error message in the toaster
        }
      );
    });
  }
  onMount(() => {
    userId.subscribe((val) => {
      if (browser) localStorage.userId = val;
    });
  });
</script>


<div class="absolute ml-5 mt-4">
  <a href="/..">
    <button class=""
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="currentColor"
        class="bi bi-arrow-left-circle-fill text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
        viewBox="0 0 16 16"
      >
        <path
          d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
        />
      </svg></button
    >
  </a>
</div>

<div class="flex items-center justify-center min-h-screen px-5">
  <div class="container mx-auto">
    <div class="max-w-md mx-auto">
      <div class="flex justify-center">
        <a href="/..">
          <img
            src="Mwenzi5.png"
            class="w-64 max-w-full duration-500 hover:scale-105 hover:-translate-10"
            alt="..."
          />
        </a>
      </div>
      <div class="m-7 mx-12">
        <form>
          <div class="mb-4">
            <label for="email" class="block mb-2 text-md font-medium text-gray"
              >Student ID</label
            >
            <input
			bind:value={studentID}
              type="text"
              required
              name="email"
              id="email"
              placeholder="Student ID"
              class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-3xl focus:outline-none"
            />
          </div>
          <button
            on:click={login}
            class=" w-full px-3 py-3 text-white bg-[#2ea44f] focus:outline-none font-medium rounded-3xl hover:bg-[#1e7d3f] duration-300 hover:scale-105"
            >Log In</button
          >
        </form>
      </div>
    </div>
  </div>
</div>
