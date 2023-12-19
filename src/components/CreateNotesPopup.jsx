import React, { useState } from 'react';
import styles from './CreateNotesPopup.module.css';

const CreateNotesPopup = ({ isOpen, onClose, children }) => {
  return (
    isOpen && (
      <div className={styles.popupOverlay}>
        <div className={styles.popup}>
        {children}
          <button className={styles.closeBtn} onClick={onClose}>
            Create
          </button>
          
        </div>
      </div>
    )
  );
};

export default CreateNotesPopup;
