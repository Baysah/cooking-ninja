import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
  return (
    <footer className={styles.footer}>
      <p>&copy; Copyright 2022 - {currentYear} Cooking Ninja</p>
    </footer>
  );
}

export default Footer