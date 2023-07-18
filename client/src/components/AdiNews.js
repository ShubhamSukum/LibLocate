import React, { useState } from "react";
import axios from "axios";

export const News = () => {
  const [data, setData] = useState([]);

  const callNews = async () => {
    try {
      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=eb792a3d607245ca95155695dead7508"
      );
      console.log(response.data);
      setData(response.data.articles);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchyCall = async() => {
    await fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=eb792a3d607245ca95155695dead7508")
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
        setData(responseData.articles);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div style={{backgroundColor:"white"}}>
    <h1>CLICK !!</h1>
      <div>
        <button onClick={callNews}>Get News by AXIOS</button>
      </div>

      <div>
        <button onClick={fetchyCall}>Get News by FETCH</button>
      </div>

      {data.map((item, index) => (
        <div key={index}>
          <h5>{item.author}</h5>
          <h6>{item.content}</h6>

          <img src={item.urlToImage} alt={item.title} style={{height:"350px",width:"350px"}}/>
          <h3>{item.title}</h3>

          {/* you can access other data element by item.dataName     example item.description */}
        </div>
      ))}
    </div>
  );
};
