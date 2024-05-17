import React from "react";
import { Link } from "react-router-dom";

const ArticleTile = ({ articles }) => {
  return (
    <>
      {articles.map((article) => (
        <Link to={`/article/${article.id}`} key={article.id} className="tile_box">
          <img className="tile_img " src={article.imageUrl} alt={article.title}/>
          <div className="tile_text">
            <h2>{article.title}</h2>
            <p>{article.summary.slice(0, 300)}</p>
          </div>
        </Link>
      ))}
    </>
  );
};

export default ArticleTile;
