import React, { useEffect, useState } from "react";
import Explore from "./Explore";
import axios from "axios";

export default function Discover() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    async function getData() {
      try {
        const show = await axios.get("/data.json");
        console.log(show.data.places);
        setData(show.data.places);
      } catch (err) {
        console.error("error: ", err);
      }
    }
    getData();
  }, []);

  const filtered = data?.filter(
    (data) =>
      data.name.toLowerCase().includes(search.toLowerCase().trim()) ||
      data.country.toLowerCase().includes(search.toLowerCase().trim())
  );

  return (
    <>
      <input
        type="text"
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
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {filtered?.map((data) => (
          <Explore
            key={data.id}
            name={data.name}
            img={data.img}
            country={data.country}
          />
        ))}
      </div>
    </>
  );
}
