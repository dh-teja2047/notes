import { Store } from "pullstate";

export const NoteStore = new Store({
  notes: {
    notesName: "",
    notesColor: "",
    content: [],
    id:''
  }
});