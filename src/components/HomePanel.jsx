import React from 'react';
import HomePanelImage from '../assets/HomePanel.png';
import Vector from '../assets/Vector.png';
import styles from './HomePanel.module.css';

function HomePanel() {
  return (
    <div className={styles.main}>
        <img src={HomePanelImage} className={styles.pic} alt='panelpic'/>
        <div>
            <h2 className={styles.heading}>Pocket Notes</h2>
            <p className={styles.title}>Send and receive messages without keeping your phone online.Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
        </div>
        <div className={styles.footer}>
            <img src={Vector} alt='vector' />
            <p className={styles.footerPara} >end-to-end encrypted</p>
            
        </div>
    </div>
  )
}

export default HomePanel;