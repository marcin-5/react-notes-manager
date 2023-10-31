import { createSlice } from "@reduxjs/toolkit";

function formatId(note) {
  return {
    ...note,
    id: note.id.toString(),
  };
}

export const noteSlice = createSlice({
  name: "noteSlice",
  initialState: {
    noteList: [],
  },
  reducers: {
    setNoteList: (currentSlice, action) => {
      currentSlice.noteList = action.payload.map(formatId);
    },
    addNote: (currentSlice, action) => {
      currentSlice.noteList.push(formatId(action.payload));
    },
  },
});

export const noteReducer = noteSlice.reducer;
export const { setNoteList, addNote } = noteSlice.actions;
