import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const notesSlice = createSlice({
  name: "notes",
  //using localStorage instead of DB rn
  initialState: {
    notes: localStorage.getItem("notes")
      ? JSON.parse(localStorage.getItem("notes"))
      : [],
  },
  reducers: {
    addNote: (state, action) => {
      const note = action.payload;
      state.notes.push(note);
      localStorage.setItem("notes", JSON.stringify(state.notes));
      toast.success("Note added successfully");
    },
    updateNote: (state, action) => {
      const updatedNote = action.payload;
      const index = state.notes.findIndex(
        (item) => item._id === updateNote._id,
      );

      //index = -1 if index is not found
      if(index >= 0){
        state.notes[index] = updateNote;
        localStorage.setItem("notes", JSON.stringify(state.notes));
        toast.success("Note updated");
      }else{
        toast.error("The note doesn't exist");
        return;
      }
    },
    removeNote: (state, action) => {
      const _id = action.payload;
      const index = state.notes.findIndex(item => item._id === _id);
      if(index >= 0){
        state.notes.splice(index, 1);
        localStorage.setItem("notes", JSON.stringify(state.notes));
        toast("Note deleted");
      }else{
        toast("Note is already deleted or invalid request.");
        return;
      }
    },
    resetAllNotes: (state) => {
      state.notes = []; 
      localStorage.removeItem("notes");
      toast("Deleted all notes");
      return;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addNote, updateNote, removeNote, resetAllNotes } =
  notesSlice.actions;

export default notesSlice.reducer;
