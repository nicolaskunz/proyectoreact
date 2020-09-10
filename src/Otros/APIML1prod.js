import React, { useState, useEffect } from "react";
import "./style.css";


// Para Stackblitz.com
// https://stackblitz.com/edit/react-awnsj3?file=src/App.js

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://api.mercadolibre.com/items/MLA841413632')
    .then(response => {
      return response.json();
    })
    .then(res => {
      setData(res);
      setLoading(false);
    })
  }, [])

  useEffect(() => {
    console.log(data);
  }, [data])

  if(loading) {
    return <div>Loading...</div>
  }
  return (
    <div style={{
      "display": "flex",
      "flexDirection": "column", 
      "flexWrap": "wrap", 
      "justifyContent": "center", 
      "alignItems": "center"
    }}>
      <h4>{data.title}</h4>
      <img
        src={data.secure_thumbnail} 
        style={{"width": "100px"}}
      />
      <p>$ {data.price}</p>
      <p>product_id: {data.id}</p>
      <a href={data.permalink}>BUY NOW</a>
    </div>
  );
}