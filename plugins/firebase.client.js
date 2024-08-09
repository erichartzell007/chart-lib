import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

export default defineNuxtPlugin((nuxtApp) => {
  const firebaseConfig = {
    apiKey: "AIzaSyDNyO_l5zIjMssfXU7m-bVaChbMlscjkYc",
    authDomain: "nuxt-b4b9c.firebaseapp.com",
    projectId: "nuxt-b4b9c",
    storageBucket: "nuxt-b4b9c.appspot.com",
    messagingSenderId: "164759210439",
    appId: "1:164759210439:web:d94d200d91d6903fb731e2",
  };

  const app = initializeApp(firebaseConfig);

  const auth = getAuth(app);
  const firestore = getFirestore(app);

  nuxtApp.vueApp.provide("auth", auth);
  nuxtApp.provide("auth", auth);

  nuxtApp.vueApp.provide("firestore", firestore);
  nuxtApp.provide("firestore", firestore);
});
