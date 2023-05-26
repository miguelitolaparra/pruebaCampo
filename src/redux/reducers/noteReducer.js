// noteReducer.js

// Importar los tipos de acciones necesarios
import { createSlice } from '@reduxjs/toolkit';

// Definir el estado inicial
const initialState = {
  notes: [],
};

// Crear el slice del reducer
const noteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    addNote: (state, action) => {
      // Lógica para agregar una nueva nota
      const newNote = action.payload;
      state.notes.push(newNote);
    },
    deleteNote: (state, action) => {
      // Lógica para eliminar una nota
      const noteId = action.payload;
      state.notes = state.notes.filter(note => note.id !== noteId);
    },
  },
});

// Exportar los actions y reducer generados automáticamente
export const { addNote, deleteNote } = noteSlice.actions;
export default noteSlice.reducer;
