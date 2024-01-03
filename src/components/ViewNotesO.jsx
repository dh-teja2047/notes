import React, { useEffect, useState } from "react"
import { NoteStore } from "../store/NotesDetails";
import styles from './ViewNotes.module.css';
function ViewNotes() {

    const activeNote = NoteStore.useState((s) => s.notes);
    const [content, setContent] = useState("");

    const [data, setData] = useState([]) //for storing content with key 'data'

    useEffect(() => {
        const storedDataJSON = localStorage.getItem('data')
        if (storedDataJSON) {
            const storedData = JSON.parse(storedDataJSON)
            setData(storedData);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(data))
    }, [data]);

    const updatedData = (e) => {
        e.preventDefault();
        if (data.trim() !== '') {

            setData([...data, { id: Date.now(), NotesData: data }]);
            // Clear the input field
            setData('');
        }
        setData(data);

    }

    const handleKeyPress = (e) => {
        // If the Enter key is pressed, submit the input
        if (e.key === "Enter") {
            updatedData();
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
                        setData(e.target.value);
                    }}
                    placeholder="Enter your text here..........."
                    onKeyPress={handleKeyPress}
                />
                <span
                    role="button"
                    onClick={updatedData}
                    style={{ cursor: 'pointer', marginLeft: '5px' }}
                >
                    🚀
                </span>
            </div>
        </div>

    )
}
export default ViewNotes
