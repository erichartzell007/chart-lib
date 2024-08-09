import { useAuthentication } from "~/store/authSlice";

const auth = useAuthentication();

export default defineNuxtRouteMiddleware((to, from) => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return navigateTo("/auth/login");
  } else {
    auth.user = user;
  }
});
