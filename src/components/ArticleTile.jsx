import React from 'react';
const ArticleTile = ({ articles }) => {
    return (
        <>
            {articles.map((article) => (
                <a href = {article.url} className='tile_box'>
                    <img className="tile_img " src = {article.imageUrl} alt = {article.title} />
                    <div className="tile_text">
                    <h2>{article.title}</h2>
                    
                    <p>{article.summary.slice(1,300)}</p>
                    </div>
                </a>
            ))}
        </>
    );
};

export default ArticleTile;
