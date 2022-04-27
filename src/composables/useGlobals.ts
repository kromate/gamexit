import { useStorage } from '@vueuse/core';
import { ref } from 'vue';

export const GlobalState = useStorage("GlobalState", {
  darkMode: "",
  savedData: [],
  isLoggedIn: false,
  UserRef: "",
});

export const currentUser = {
  user: GlobalState.value.UserRef
    ? ref(JSON.parse(GlobalState.value.UserRef))
    : ref(null),
};

export const useUser = () => {
  const saveUser = (user) => {
    currentUser.user.value = user;
    GlobalState.value.UserRef = JSON.stringify(user);
    GlobalState.value.isLoggedIn = true;
  };

  const clearUser = () => {
    currentUser.user.value = null;
    GlobalState.value.UserRef = '';
    GlobalState.value.isLoggedIn = false;
  };

  return { ...GlobalState.value, ...currentUser, saveUser, clearUser };
};
