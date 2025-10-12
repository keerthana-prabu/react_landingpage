import React, {useState} from 'react'
import Explore from './explore';
export default function Discover() {
   
    const [search, setSearch] = useState("");
    const places = [
    {id:1, name: "Rome", country: "Italy", img:"https://images.pexels.com/photos/1701595/pexels-photo-1701595.jpeg"},
    {id:2, name: "Paris", country: "France", img:"https://images.pexels.com/photos/460740/pexels-photo-460740.jpeg"},
    {id:3, name: "London", country: "United Kingdom", img:"https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg"},
    {id:4, name: "Tokyo", country: "Japan", img:"https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg"},
    {id:5, name: "Bali", country: "Indonesia", img:"https://images.pexels.com/photos/1643130/pexels-photo-1643130.jpeg"},
    {id:6, name: "Goa", country: "India", img:"https://images.pexels.com/photos/34178873/pexels-photo-34178873.jpeg"},
    {id:7, name: "Bangkok", country: "Thailand", img:"https://images.pexels.com/photos/1929611/pexels-photo-1929611.jpeg"},
    {id:8, name: "Dubai", country: "UAE", img:"https://images.pexels.com/photos/1707310/pexels-photo-1707310.jpeg"},
    ];

    const filtered = places.filter(
      (data) => 
        data.name.toLowerCase().includes(search.toLowerCase().trim()) ||
        data.country.toLowerCase().includes(search.toLowerCase().trim())
    );

  return (
   <>
   <input type = "text"
   placeholder="Search by Place or Country"
    style={{
    width: 400,
    height: 15,
    borderRadius: 8,
    margin: 50,
    padding: 10,
  }}
  value={search}
  onChange={(a) => setSearch(a.target.value)}
/>
   <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
    {filtered.map((data) => (
      <Explore
        key={data.id}
        name={data.name}
        img={data.img}
        country={data.country}
      />
    ))}
  </div>
  </>
  )
} 
