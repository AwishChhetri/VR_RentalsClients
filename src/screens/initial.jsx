import React from 'react';
import { Link } from 'react-router-dom';

function Initial() {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1 style={{ marginBottom: '30px', fontSize: '2rem', fontWeight: 'bold' }}>Welcome to VR Rental</h1>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Link to='/home' state={{ property: 'land' }} style={styles.link}>LAND</Link>
        <Link to='/home' state={{ property: 'property' }} style={styles.link}>PROPERTY</Link>
        <Link to='/home' state={{ property: 'rent' }} style={styles.link}>RENTS</Link>
      </div>
    </div>
  );
}

const styles = {
  link: {
    display: 'block',
    padding: '10px 20px',
    margin: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '5px',
    transition: 'all 0.3s ease',
  },
};

// Media query for responsive font size
const maxWidth = 600;
if (window.innerWidth <= maxWidth) {
  styles.link.fontSize = '0.9rem';
}

export default Initial;
