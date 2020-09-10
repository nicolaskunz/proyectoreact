import React, { useState, useEffect } from "react";
import "./style.css";
import {ItemML} from "./ITEM.jsx";


export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://api.mercadolibre.com/sites/MLA/search?category={MLA1648}&offset=5')
    .then(response => {
      return response.json();
    })
// Por que el profe define RES?
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
      <ul>

{/* Uso ITem de Props?  */}

{data.map((item) => {
    return (
      <div>
      
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
    })}
</ul>
</div>
);
}



/*

import React from 'react'

export function ItemML(props) {
    const {data} = props;
    return (
    <div>
     <h4>{data.title}</h4>
      <img
        src={data.secure_thumbnail} 
        style={{"width": "100px"}}
      />
      <p>$ {data.price}</p>
    </div>
    );
} 

*/