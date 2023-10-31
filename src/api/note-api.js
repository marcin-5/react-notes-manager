import axios from "axios";

const BASE_URL = "http://localhost:3200/notes";

export class NoteAPI {
  static async create(note) {
    return this.formatId((await axios.post(`${BASE_URL}`, note)).data);
  }

  static async deleteById(noteId) {
    return (await axios.delete(`${BASE_URL}/${noteId}`)).data;
  }

  static async updateById(noteId, note) {
    return this.formatId((await axios.patch(`${BASE_URL}/${noteId}`, note)).data);
  }

  static async fetchAll() {
    return (await axios.get(`${BASE_URL}`)).data.map(this.formatId);
  }

  static formatId(note) {
    return {
      ...note,
      id: note.id.toString(),
    };
  }
}
