import { app } from "./init";
// eslint-disable-next-line import/named
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useAlert, useLoading } from "../composables/useNotification";
import { useUser } from "../composables/useGlobals";

const { openAlert } = useAlert();
const { openLoading, closeLoading } = useLoading();
const { clearUser, saveUser } = useUser();

const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  if (user) {
    saveUser(user);
  } else {
    clearUser();
    // User is signed out
    // ...
  }
});

const provider = new GoogleAuthProvider();

export const googleAuth = () => {
  openLoading("Logging you in... 🤩");
  signInWithPopup(auth, provider)
    .then((result) => {
      closeLoading();
      const user = result.user;
      saveUser(user);
      openAlert("You have successfully signed in 🥳");
    })
    .catch((error) => {
      closeLoading();
      openAlert(`Oops seems something went wrong 😕 : ${error.message}`);
    });
};

export const signOutUser = () => {
  openLoading("Signing You out...😗");
  signOut(auth)
    .then(() => {
      clearUser();
      location.reload();
      closeLoading();
    })
    .catch((error) => {
      closeLoading();
      openAlert(`Oops seems something went wrong 😕 : ${error.message}`);
    });
};
