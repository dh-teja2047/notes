import React, { useState, useEffect } from "react"
import { NoteStore } from "../store/NotesDetails";
import styles from './ViewNotes.module.css';
import { FaLocationArrow } from "react-icons/fa6";

function ViewNotes() {

  const activeNote = NoteStore.useState((s) => s.notes);

  const [data, setData] = useState([]); // to retrieve data stored in the local storage

  const [content, setContent] = useState([]);

  const notesListStored = localStorage.getItem('notesList')

  useEffect(() => {
    
    if (notesListStored) {
      setData(JSON.parse(notesListStored));
    }
  }, []);

  const activeContent = data.find(note => note.id === activeNote.id)

  const  onSubmit =() => {

    const newData = [...data];
    console.log([...data])
    console.log(typeof newData)
    console.log(newData.valueOf())
    newData.forEach((item) => {
    const activeId = activeNote.id;
    const currentId = item.id;
    console.log(activeId)
    console.log(currentId)
    
    if (activeId == currentId){

      const newContent = [...item.NotesContent, { content, timestamp: new Date() }];
      item.NotesContent = newContent;
      localStorage.setItem('notesListStored', JSON.stringify(newData));
      setData(newData);
      setContent('');
        // const newContent = [...item.NotesContent,content]
        // {
        //     item.NotesContent= newContent; 
        //     // const timestamp = Date.now()
        // }

        // localStorage.setItem('notesListStored', JSON.stringify(newData)); 
        // setData(newData);
        // setContent('');
    }
    else{
        return null
    }
  });
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
        {
        activeContent && Array.isArray(activeContent.NotesContent)
          ? activeContent.NotesContent.map((notes, index) => {
            return (
              <div key={index} style={{display: 'flex'}}>
                <div style={{display: 'block', margin:'0px 0px 0px 50px', width:'150px'}}>
                <p>{new Date(notes.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}</p>
                <p>{new Date(notes.timestamp).toLocaleDateString([], { day: 'numeric', month: 'long', year: 'numeric' })}</p>  
                </div>
                <p style={{margin:'10px 0px 0px 60px', width:'750px'}}>{notes.content}</p>
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
          style={{
            border:'none',
            width:'1000px'
          }}
        />
        <span
          role="button"
          onClick={onSubmit}
          style={{ cursor: 'pointer', marginLeft: '5px' }}
        >
          {/* 🚀 */}
          <FaLocationArrow />

        </span>
      </div>
    </div>

  )
}

export default ViewNotes
