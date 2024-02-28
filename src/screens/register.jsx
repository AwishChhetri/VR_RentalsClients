import React, { useState } from 'react';
import axios from "axios";

export const Register = () => {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [images, setImages] = useState([]);
    const [number, setnumber] = useState(""); 

    const onSubmit = async () => {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('number', number);
       
        images.forEach((image, index) => {
            formData.append(`image`, image); 
        });

        await axios.post('/user/register', formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
        .then(response => {
            if (response.status === 200) {
                console.log("Uploaded");
            } else {
                console.log("Upload failed");
            }
        })
        .catch(error => {
            console.error("Error:", error);
        });
    };

    const handleFileChange = (e) => {
        setImages([...images, e.target.files[0]]);
    };

    return (
        <div>
            <label>User Register</label>
            <label>Name</label>
            <input value={name} number="text" onChange={(e) => setname(e.target.value)} />
            <label>Email</label>
            <input value={email} number="email" onChange={(e) => setemail(e.target.value)} />
            <label>Phone Number</label>
            <input value={number} number="number" onChange={(e) => setnumber(e.target.value)} />
            <label>Password</label>
            <input value={password} number="text" onChange={(e) => setpassword(e.target.value)} />
            
            <label>User Gov. id:</label>
            <br/>
            <input type="file" name="image" onChange={handleFileChange} />
            <label>User's property Gov. id:</label>
            <br/>
            <input type="file" name="image" onChange={handleFileChange} multiple/>
           
            <button onClick={onSubmit}>Submit</button>
        </div>
    );
};
