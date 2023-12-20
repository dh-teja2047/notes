import React, { useEffect, useState } from 'react';
import styles from './NotesPanel.module.css';
import CreateNotesPopup from './CreateNotesPopup';

const NotesPanel = () => {
    const [createNotesGroup, setCreateNotesGroup] = useState(false);
    const [notesList, setNotesList] = useState([]);
    const [notesName, setNotesName] = useState('');
    const [notesColor, setNotesColor] =  useState('');

    const createNotes = () => {
        setCreateNotesGroup(true);
    }

    const createFinally = () => {
        setCreateNotesGroup(false)
    }

    const handleColorSelect = (color) => {
        setNotesColor(color);
      };

    useEffect(() => {
        localStorage.setItem('notesColor', notesColor);
      }, [notesColor]);

    useEffect(() => {
        const storedNotesList = JSON.parse(localStorage.getItem('notesList'));
        console.log(storedNotesList)
        if (storedNotesList) {
            setNotesList(storedNotesList);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('notesList', JSON.stringify(notesList))
    }, [notesList]);

    const handleNotesSubmit = (event) => {
        event.preventDefault();
        if (notesName.trim() !== "" && notesColor !== "") {
            // Add new todo to the list
            setNotesList([...notesList, { id: Date.now(), NotesTitle: notesName, NotesColor:notesColor, completed: false }]);
            // Clear the input field
            setNotesName("")
        }
    };


    return (
        <div className={styles.main}>
            <h2 className={styles.title}>Pocket Notes</h2>
            <button className={styles.button} onClick={createNotes}>+ Create Notes Group</button>

            <CreateNotesPopup isOpen={createNotesGroup} onClose={createFinally}>
                <form className={styles.textBox} onSubmit={handleNotesSubmit}>
                    <h2>Create New Notes group</h2>
                    <div style={{ display: 'flex' }}>
                        <h2 className={styles.groupName}>Group Name</h2>

                        <input type="text" className={styles.textArea} placeholder='Enter your group here'
                            value={notesName}
                            onChange={(e) => setNotesName(e.target.value)} />
                        <button className={styles.closeBtn}>
                            Create
                        </button>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <h2 className={styles.chooseColor}>Choose colour</h2>
                        <button className={styles.violet} id="violet" onClick={() =>handleColorSelect('Violet') }></button>
                        <button className={styles.pink} id='pink' onClick={() =>handleColorSelect('Pink')}></button>
                        <button className={styles.cyan} id='cyan' onClick={() =>handleColorSelect('Cyan')}></button>
                        <button className={styles.orange} id='orange' onClick={() =>handleColorSelect('Orange')}></button>
                        <button className={styles.blue} id='blue' onClick={() =>handleColorSelect('Blue')}></button>
                        <button className={styles.lightblue} id='lightblue' onClick={() =>handleColorSelect('Light Blue')}></button>
                    </div>
                </form>

            </CreateNotesPopup>
        <ul className={styles.notesList}>
            {notesList.map((notes,id) =>(
                <div className={styles.indNotes} style={{height:'70px', display:'flex'}} >
                    <div  style={{ backgroundColor: notes.NotesColor, width:'50px', height:'50px',borderRadius: '50%', textAlign:'center',}}>
                        <p className={styles.tilteDisc}>{notes.NotesTitle.substring(0, 2).toUpperCase()}</p>
                    </div>
                    <div className={styles.notesTitle}style={{padding:'10px 0px 0px 10px'}}>
                    {notes.NotesTitle}
                    </div>
                    
                </div>
            ))}
        </ul>

        </div>
    )
}

export default NotesPanel