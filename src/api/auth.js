import { FireBaseApp } from "utils/firebase";
import { signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

export class AuthAPI {
  static async signin(email, password) {
    const response = await signInWithEmailAndPassword(FireBaseApp.auth, email, password);
    return response.user.toJSON();
  }
  static async signup(email, password) {
    const response = await createUserWithEmailAndPassword(FireBaseApp.auth, email, password);
    return response.user.toJSON();
  }
  static async signout() {
    signOut(FireBaseApp.auth);
  }
}
