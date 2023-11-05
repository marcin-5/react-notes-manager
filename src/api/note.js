import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { FireBaseApp } from "utils/firebase";

export class NoteAPI {
  static async create(note) {}

  static async deleteById(noteId) {}

  static async updateById(noteId, note) {}

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
}
