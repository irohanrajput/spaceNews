// src/components/Dashboard.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
const Dashboard = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://api.spaceflightnewsapi.net/v3/articles/")
      .then((response) => {
        setArticles(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
      });
  }, []);

  return (
    <>
    {loading ? (
        <div><h1>Loading...</h1></div>
    ):(
        <div>
      <h1>Spaceflight News Dashboard</h1>
      <div className="article-container">
        {articles.map((article) => (
            <div className="article-tile" key={article.id}>
            <img src={article.imageUrl} alt={article.title} />
            <div className="article-details">
              <h2>{article.title}</h2>
              <p>{article.summary}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
    )}
    </>
  )}

export default Dashboard;
