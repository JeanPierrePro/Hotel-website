import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>Hotel XYZ</div>
      <nav>
        <ul style={styles.navList}>
          <li><Link style={styles.navItem} to="/">Home</Link></li>
          <li><Link style={styles.navItem} to="/rooms">Rooms</Link></li>
          <li><Link style={styles.navItem} to="/about">About</Link></li>
          <li><Link style={styles.navItem} to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
    backgroundColor: '#2a2a2a',
    color: 'white',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    gap: '20px',
  },
  navItem: {
    color: 'white',
    textDecoration: 'none',
  }
};

export default Header;
