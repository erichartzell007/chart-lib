import { defineStore } from "pinia";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  getAuth,
  updateProfile,
} from "firebase/auth";

export const useAuthentication = defineStore("auth", {
  state: () => {
    return {
      user: null,
      error: false,
      loading: false,
      disableOAuth: { google: false, twitter: false },
    };
  },

  actions: {
    async registeringUser(data) {
      this.loading = true;
      const { $auth } = useNuxtApp();
      const auth = getAuth();
      try {
        const { user } = await createUserWithEmailAndPassword(
          $auth,
          data.email,
          data.password
        );

        await updateProfile(auth.currentUser, {
          photoURL: data.imageURL,
        });

        localStorage.setItem("user", JSON.stringify(user));

        this.user = user;

        await navigateTo("/dashboard");
      } catch (error) {
        this.error = "An error occured";
      } finally {
        this.loading = false;
      }
    },

    async loginUser(data) {
      this.loading = true;
      const { $auth } = useNuxtApp();

      try {
        const { user } = await signInWithEmailAndPassword(
          $auth,
          data.email,
          data.password
        );

        localStorage.setItem("user", JSON.stringify(user));

        this.user = user;

        await navigateTo("/dashboard");
      } catch (error) {
        this.error = "An error occured";
      } finally {
        this.loading = false;
      }
    },

    async logoutUser() {
      const { $auth } = useNuxtApp();
      await signOut($auth);
      localStorage.removeItem("user");
      await navigateTo("/auth/login");
    },
  },
});
