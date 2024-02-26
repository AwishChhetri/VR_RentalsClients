import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

function Home() {
  const location = useLocation();
  const { property } = location.state;
  console.log("type  = ", property);

  const [search, setSearch] = useState(property);
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios.get('/property/show')
      .then(response => {
        setProperties(response.data); 
      })
      .catch(error => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '10px' }}>
      <input
        type='text'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search by location..."
        style={{ padding: '10px', margin: '10px 0', width: '100%', maxWidth: '300px' }}
      />
      <button style={{ padding: '10px 20px', margin: '10px', background: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>SEARCH</button>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '20px' }}>
        {properties.filter((val) => {
          if (search.toLowerCase() === '') {
            return val;
          } else if (val.location.toLowerCase().includes(search.toLowerCase())) {
            return val;
          } else if (val.type.toLowerCase() === property) {
            return val;
          }
        }).map((item) => (
          <div key={item.id} style={{ border: '2px solid black', padding: '20px', marginBottom: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', backgroundColor: '#f9f9f9', width: '100%', maxWidth: '300px', margin: '10px auto' }}>
            <Link to='/property' state={{ property: item }} style={{ textDecoration: 'none', color: '#000' }}>
              <div style={{ marginBottom: '10px' }}>
                <h1 style={{ margin: '0', marginBottom: '5px' }}>IMAGE -</h1>
                <img src={`https://vrserver.onrender.com/uploads/${item.image}`} alt='property image' height={100} width={200} style={{ borderRadius: '5px', maxWidth: '100%' }} />
              </div>
              <div>
                <h2 style={{ margin: '0', marginBottom: '5px' }}>LOCATION: {item.location}</h2>
                <h2 style={{ margin: '0', marginBottom: '5px' }}>PRICE: {item.price}</h2>
                <h2 style={{ margin: '0', marginBottom: '5px' }}>NAME: {item.name}</h2>
                <h2 style={{ margin: '0', marginBottom: '5px' }}>TYPE: {item.type}</h2>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
