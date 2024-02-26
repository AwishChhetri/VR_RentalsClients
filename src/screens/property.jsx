import React from 'react';
import { useLocation, Link } from 'react-router-dom';

function Property() {
    const location = useLocation();
    const data = location.state;

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>{data.property.location}</h1>
            <h2 style={styles.text}>{data.property.name}</h2>
            <p style={styles.text}>{data.property.type}</p>
            <p style={styles.text}>Price: ${data.property.price}</p>
            <img src={`https://vrserver.onrender.com/uploads/${data.property.image}`} alt="Property" style={styles.image} />
            <div style={styles.buttons}>
                <Link to='/vr-view' state={{ pano: data.property.image }} style={styles.button}>VIEW IN VR</Link>
                <Link to='/ar' state={{ pano: data.property.image }} style={styles.button}>VIEW AR</Link>
            </div>
            <button style={styles.button}>TRY ADDING FURNITURES</button>
            <h2 style={styles.subHeading}>DIFFERENT ROOMS IN ONE PROPERTY - {`>`} List here</h2>
        </div>
    );
}

const styles = {
    container: {
        textAlign: 'center',
        padding: '20px',
    },
    heading: {
        fontSize: '2rem',
        fontWeight: 'bold',
        marginBottom: '10px',
        color: '#333', 
    },
    subHeading: {
        fontSize: '1.5rem',
        marginTop: '30px',
        color: '#007bff', 
    },
    text: {
        fontSize: '1.2rem',
        marginBottom: '5px',
        color: '#555', 
    },
    image: {
        width: '100%',
        maxWidth: '400px',
        height: 'auto',
        marginBottom: '20px',
        borderRadius: '10px', // Rounded corners
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Shadow effect
    },
    buttons: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '20px',
    },
    button: {
        padding: '10px 20px',
        margin: '0 10px',
        backgroundColor: '#28a745', // Green color
        color: '#fff',
        textDecoration: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
        border: 'none', // Remove button border
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Shadow effect
    },
};

// Mobile responsiveness
const maxWidth = 600;
if (window.innerWidth <= maxWidth) {
    styles.heading.fontSize = '1.5rem';
    styles.subHeading.fontSize = '1.2rem';
    styles.text.fontSize = '1rem';
    styles.image.maxWidth = '300px';
    styles.button.fontSize = '0.9rem';
}

export default Property;
