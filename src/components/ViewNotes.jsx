import React, { useState, useEffect } from "react"
import styles from './ViewNotes.module.css';
function ViewNotes() {

    // useEffect(() => {

    //     const keys = Object.keys(localStorage);


    //     // Iterate through keys and retrieve values
    //     keys.forEach((key) => {
    //         const value = localStorage.getItem(key);
    //         console.log(`Key: ${key}, Value: ${value}`);
    //     });
    // }, []);

    const [inputText, setInputText] = useState("");
  const [submittedText, setSubmittedText] = useState("");

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmission = () => {
    // Handle the submission logic here (e.g., send inputText to an API, etc.)
    setSubmittedText(inputText);
    console.log("Submitted:", inputText);
  };

  const handleKeyPress = (e) => {
    // If the Enter key is pressed, submit the input
    if (e.key === "Enter") {
      handleSubmission();
    }
  };

    return (
        <div className={styles.backgroundBox}>
            {submittedText}
            <div className={styles.textBox}>
                <div className={styles.inputBox}>
                        <input type="text" placeholder="Enter your text here..........."

                            value={inputText}
                            onChange={handleInputChange}
                            onKeyPress={handleKeyPress}

                        />
                        <span
                            role="button"
                            onClick={handleSubmission}
                            style={{ cursor: 'pointer', marginLeft: '5px' }}
                        >
                            🚀
                        </span>
                    
                </div>
                

            </div>


        </div>

    )
}

export default ViewNotes
