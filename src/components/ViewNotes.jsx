import React, { useState, useEffect } from "react"
import { NoteStore } from "../store/NotesDetails";
import styles from './ViewNotes.module.css';
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

  const  onSubmit =() => {

    const newData = [...data];
    console.log([...data])
    console.log(typeof newData)
    console.log(newData.valueOf())


    // const arrayNewData =Object.entries(newData)
    // console.log(arrayNewData)
    // console.log(typeof arrayNewData)

    newData.forEach((item) => {
 // Assuming your data structure looks like this: [{ key: 'value' }, { key: 'value' }, ...]
//  newData.forEach((item, index) => {
    // Modify the key-value pair within the object based on your structure
    const activeId = activeNote.id;
    const currentId = item.id;
    console.log(activeId)
    console.log(currentId)
    if (activeId == currentId){
        {
            item.NotesContent= content;  
        }

        localStorage.setItem('notesListStored', JSON.stringify(newData)); 
        setData(newData);
        setContent('');
    }
    else{
        return null
    }
    // item.NotesContent= content; // Replace 'key' with the actual key you want to modify
    // console.log(item.NotesContent);
  });

  // Save the modified data back to local storage
//   localStorage.setItem('notesListStored', JSON.stringify(newData)); // Replace 'yourKey' with your actual key

//   // Update the state to reflect the changes
//   setData(newData);

//   // Clear the input field after adding the new value
//   setContent('');
    }
    // const notesListStored = JSON.parse(localStorage.getItem('notesList'))
    // console.log(notesListStored)
                    // console.log(typeof(notesListStored))
                    // console.log(activeNote.id)
                    // console.log(activeNote.NotesTitle)
                    // console.log(activeNote.NotesColor)
                    // console.log(activeNote.NotesContent)




    // for (const [key, value] of Object.entries(notesListStored)) {
    //     console.log(`${key}: ${JSON.stringify(value)}`);
    //   } 
    
        // if ( notesContent !=="") {

        //     const timestamp = new Date().toLocaleString();
        //     const formattedNote = `${notesContent} (Created on ${timestamp})`;
            
        //     // const newNote = { id: Date.now(), NotesTitle: notesName, NotesColor: notesColor, NotesContent: notesContent};

        //     updateNoteStore(newNote);
        //     setNotesList([...notesList, notesContent]);

        //     // Clear the input field
        //     setContent("")
        // }
    

    
    // localStorage.setItem('notesList', JSON.stringify([...content.notesList, newContent]));

  


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

        {/* {this.notesListStored.NotesContent} */}
        {/* console.log(activeNote.NotesContent) */}
        {/* {.NotesContent} */}
        {/* content:{' '}
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
          : null} */}
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
