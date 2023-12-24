import React, { useState } from "react"
import { NoteStore } from "../store/NotesDetails";
import styles from './ViewNotes.module.css';
function ViewNotes() {

  const activeNote = NoteStore.useState((s) => s.notes);
  const [content, setContent] = useState("");

  function onSubmit() {
    console.log(activeNote);
    NoteStore.update((s) => {
      const clonedNote = {
        ...s.notes,
      };
      clonedNote.content.push({
        timestamp: Date.now(),
        value: content, // contentRef.current,
      });
      s.notes = clonedNote;
    });
    setContent('');
  }


  const handleKeyPress = (e) => {
    // If the Enter key is pressed, submit the input
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <div style={{ backgroundColor: '#E8E8E8', }}>
      <div style={{ display: 'flex' }}>
        <div className={styles.notesTitleDisc} style={{ backgroundColor: activeNote.NotesColor }}>
          <p className={styles.tilteDisc}>{activeNote.NotesTitle.substring(0, 2).toUpperCase()}</p>
        </div>
        <p style={{ padding: '0px 0px 0px 10px' }}>{activeNote.NotesTitle}</p>
      </div>
      <div className={styles.contentBox} >
        content:{' '}
        {Array.isArray(activeNote.content)
          ? activeNote.content.map((notes) => {
            return (
              <div>
                <p>{new Date(notes.timestamp).toLocaleDateString()}</p>
                <p>{new Date(notes.timestamp).toLocaleTimeString()}</p>
                <p>{notes.value}</p>
              </div>
            );
          })
          : null}
      </div>

      <div className={styles.inputBox}>
        <input
          onChange={(e) => {
            // contentRef.current = e.target.value;
            setContent(e.target.value);
          }}
          value={content}
          placeholder="Enter your text here..........."
          onKeyPress={handleKeyPress}
        />
        <span
          role="button"
          onClick={onSubmit}
          style={{ cursor: 'pointer', marginLeft: '5px' }}
        >
          🚀
        </span>
      </div>
    </div>

  )
}

export default ViewNotes
