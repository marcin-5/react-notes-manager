import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";
import { FireBaseApp } from "utils/firebase";

export class NoteAPI {
  static async create(formValues) {
    const response = await addDoc(collection(FireBaseApp.db, "notes"), formValues);
    return {
      id: response.id,
      ...formValues,
    };
  }

  static async deleteById(noteId) {
    deleteDoc(doc(FireBaseApp.db, "notes", noteId));
  }

  static async updateById(id, values) {
    const q = doc(FireBaseApp.db, "notes", id);
    await updateDoc(q, values);
    return {
      id,
      ...values,
    };
  }

  static async fetchAll() {
    const q = query(collection(FireBaseApp.db, "notes"), orderBy("created_at", "asc"));
    const response = await getDocs(q);
    return response.docs.map((document) => {
      return {
        id: document.id,
        ...document.data(),
      };
    });
  }

  static onShouldSyncNotes(onChange) {
    const q = query(collection(FireBaseApp.db, "notes"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      if (!querySnapshot.metadata.hasPendingWrites) {
        // console.log("you are not synced with the notes collection");
        onChange();
      }
    });
    return unsub;
  }
}
