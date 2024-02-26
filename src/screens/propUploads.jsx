import React, { useState } from 'react';
import axios from "axios";

export const PropUpload = () => {
    const [propName, setPropName] = useState("");
    const [location, setLocation] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState(null); 
    const [Type, setType] = useState(""); 

    const onSubmit = async () => {
        const formData = new FormData();
        formData.append('propName', propName)
        formData.append('location', location)
        formData.append('price', price)
        formData.append('image', image)
        formData.append('Type', Type)
        try {
            const response = await axios.post('/property/register', formData, {
                headers: {"Content-Type": "multipart/form-data"}
            });
            if (response.status === 200) {
                console.log("Uploaded");
            } else {
                console.log("Upload failed");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const handleFileChange = (e) => {
        setImage(e.target.files[0]); 
        console.log("Selected file:", e.target.files[0])
    };

    return (
        <div style={{ textAlign: 'center', maxWidth: '500px', margin: '0 auto' }}>
            <h2>Property Upload </h2>
            <div style={{ marginBottom: '10px' }}>
                <label htmlFor="propName" style={{ marginRight: '10px' }}>Property Name:</label>
                <input id="propName" value={propName} type="text" onChange={(e) => setPropName(e.target.value)} />
            </div>
            <div style={{ marginBottom: '10px' }}>
                <label htmlFor="location" style={{ marginRight: '10px' }}>Location:</label>
                <input id="location" value={location} type="text" onChange={(e) => setLocation(e.target.value)} />
            </div>
            <div style={{ marginBottom: '10px' }}>
                <label htmlFor="price" style={{ marginRight: '10px' }}>Price:</label>
                <input id="price" value={price} type="number" onChange={(e) => setPrice(e.target.value)} />
            </div>
            <div style={{ marginBottom: '10px' }}>
                <label htmlFor="type" style={{ marginRight: '10px' }}>Type:</label>
                <select id="type" value={Type} onChange={(e) => setType(e.target.value)}>
                    <option value="">Select Type</option>
                    <option value="Rent">Rents</option>
                    <option value="Property">Property</option>
                    <option value="Land">Land</option>
                </select>
            </div>
            <div style={{ marginBottom: '10px' }}>
                <label htmlFor="image" style={{ marginRight: '10px' }}>Image:</label>
                <input id="image" type="file" onChange={handleFileChange} />
            </div>
            <button style={{ padding: '10px 20px', background: 'blue', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }} onClick={onSubmit}>Submit</button>
        </div>
    );
};
