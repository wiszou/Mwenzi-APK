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
    import { userId } from "../lib/userStorage";
    import { onMount } from "svelte";
    import { browser } from "$app/environment";
    import toast, { Toaster } from "svelte-french-toast";
    import { goto } from "$app/navigation";
  
    let email = "";
    let password = "";
    let userUID = "";
    async function login() {
      return new Promise(async (resolve, reject) => {
        if (email === "" || password === "") {
          console.log("Email or password is empty");
          reject("Email or Password is empty");
          return; // Exit the function
        }
  
        toast.promise(
          (async () => {
            const q = query(
              collection(firestore, "users"),
              where("email", "==", email)
            );
            const querySnapshot = await getDocs(q);
  
            let foundUser = false;
  
            try {
              for (const doc of querySnapshot.docs) {
                foundUser = true;
                const userData = doc.data();
                console.log("Document data:", userData);
  
                if (userData.userRole === "teacher") {
                  if (userData.password === password) {
                    console.log("User is a Teacher");
                    const userUID = userData.UID;
                    userId.set(userUID);
                    const userUID1 = localStorage.getItem("userId");
                    goto("../Attendance");
                    resolve("Log In Successful");
                    return; // Exit the loop if login is successful
                  } else {
                    console.log("Wrong Password");
                    throw new Error("Wrong Password");
                  }
                } else {
                  console.log("User is not a Teacher");
                  throw new Error("User is not a Teacher");
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
  
  <div
    class="pb-5 flex items-center justify-center min-h-screen px-5"
  >
    <div class="container mx-auto">
      <div class="max-w-md mx-auto">
        <div class="flex justify-center">
          <a href="/..">
          <img
            src="Mwenzi5.png"
            class="w-64 duration-500 hover:scale-105 hover:-translate-10"
            alt="..."
          />
        </a>
        </div>
        <div class="mt-7 mx-12">
          <form>
            <div class="mb-4">
              <label for="email" class="block mb-2 text-md font-medium text-gray"
                >Email</label
              >
              <input
                bind:value={email}
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-3xl focus:outline-none"
              />
            </div>
            <div class="mb-5">
              <label
                for="password"
                class="block mb-2 text-md font-medium text-gray">Password</label
              >
              <input
                bind:value={password}
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-3xl focus:outline-none"
              />
            </div>
            <button
              on:click={login}
              class=" w-full px-3 py-3 mt-1 text-white bg-[#2ea44f] focus:outline-none font-medium rounded-3xl hover:bg-[#1e7d3f] duration-300 hover:scale-105"
              >Log In</button
            >
          </form>
        </div>
      </div>
    </div>
  </div>
  <Toaster />
  