import React from 'react';
const ArticleTile = ({ article }) => {
    return (
        <>
        <div className="article-tile">
            <img src={article.imageUrl} alt={article.title} />
            <div className="article-details">
                <h2>{article.title}</h2>
                <p>{article.summary}</p>
                
            </div>
        </div>
        </>
    );
};

export default ArticleTile;
