import React, { useEffect, useState } from 'react';
import styles from './NotesPanel.module.css';
import CreateNotesPopup from './CreateNotesPopup';

const NotesPanel = () => {
    const [createNotesGroup, setCreateNotesGroup] = useState(false);
    const [notesList, setNotesList] = useState();
    const [notesName, setNotesName] = useState('');
    const [notesColor, setNotesColor] =useState('');

    const createNotes = () => {
        setCreateNotesGroup(true);
    }

    const createFinally = () => {
        setCreateNotesGroup(false)
    }

    // useEffect(() => {
    //     const storedNotesList = JSON.parse(localStorage.getItem('notesList')) || [];
    //     setNotesList(storedNotesList);
    //   }, []);


      useEffect(() => {
        const storedNotesList = localStorage.getItem('notesList');
        if (storedNotesList) {
          const storedNotes = JSON.parse(storedNotesList);
          setNotesList(storedNotes);
        }
      }, []);
      

    useEffect( () =>{
        localStorage.setItem('notesList', JSON.stringify(notesList))
    }, [notesList]);

    const createNotesFinally = (event) => {
        event.preventDefault();
        if (notesName.trim() !== "") {
          // Add new todo to the list
          setNotesList([...notesList, { id: Date.now(), text: notesName, completed: false }]);
          // Clear the input field
          setNotesName("")
        }
      };


    return (
        <div className={styles.main}>
            <h2 className={styles.title}>Pocket Notes</h2>
            <button className={styles.button} onClick={createNotes}>+ Create Notes Group</button>

            <CreateNotesPopup isOpen={createNotesGroup} onClose={createFinally}>
                <h2>Create New Notes group</h2>
                <div style={{ display: 'flex' }}>
                    <h2 className={styles.groupName}>Group Name</h2>
                    <form className={styles.textBox}>
                        <input type="text" className={styles.textArea} placeholder='Enter your group here'
                        value={notesName}
                        onChange={(e) => setNotesName(e.target.value)}/>
                    </form>
                    <button className={styles.closeBtn} onClick={createNotesFinally} >
                         Create
                    </button>
                </div>
                <div style={{ display: 'flex'}}>
                    <h2 className={styles.chooseColor}>Choose colour</h2>
                    <button className={styles.violet}></button>
                    <button className={styles.pink}></button>
                    <button className={styles.cyan}></button>
                    <button className={styles.orange}></button>
                    <button className={styles.blue}></button>
                    <button className={styles.lightblue}></button>
                </div>
            </CreateNotesPopup>

        </div>
    )
}

export default NotesPanel