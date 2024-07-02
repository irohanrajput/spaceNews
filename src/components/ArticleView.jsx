import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Loading from './Loading'

const ArticleView = () => {
  const {id} = useParams()
  const [article, setArticle] = useState(null)
  const [loading, setLoading] = useState(true)
  const [iso, setIso] = useState('');

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(`https://api.spaceflightnewsapi.net/v4/articles/${id}`);
        setArticle(response.data);
        setIso(new Date(response.data.published_at));
        console.log(iso)
      } catch (error) {
        console.error("Error fetching the article:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        article ? (
          <div className='article-container'>
            <h1>{article.title}</h1>
            <img className='article-image' src={article.image_url} alt={article.title} />
            <h4>
              Source: {article.news_site} <br />
              Published On: {iso.toLocaleDateString()} at {iso.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true,  })}  <br /> <br />
            </h4>
            <p>{article.summary}
            <br /> <br /> 
              <a href={article.url}>Read full story on Publisher's Site</a>
              <br /> <br />
            since we don't have enought text, we'll write Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente incidunt neque in, esse nobis excepturi qui ipsam, repudiandae eos voluptatem veniam minus molestias vel natus magnam et laudantium eaque, rem at inventore? Autem deserunt deleniti fugit amet doloribus adipisci cum reiciendis ut sapiente, itaque a, eos quas nostrum. Rerum iste laudantium molestiae exercitationem corporis itaque accusamus dicta repudiandae inventore, consequuntur tenetur corrupti natus cupiditate officia error obcaecati? Veritatis laborum sequi, odit aliquam unde asperiores velit consequatur animi quod obcaecati nulla ea, ipsum fugit esse. Quisquam iure optio perferendis eius hic. Id asperiores deserunt natus cumque voluptatem iure voluptate. Ab, aliquid. Tempora eveniet distinctio doloribus obcaecati vel illo maiores fugiat. Quaerat dolore vel ut inventore sint temporibus quibusdam, alias eaque asperiores, doloribus tenetur consequuntur quidem. Maiores, pariatur animi? Modi, officia asperiores? Saepe impedit alias nihil ipsum inventore in soluta, reiciendis ratione, natus illo totam explicabo fuga voluptatem. Similique soluta neque quod corporis perspiciatis eligendi, eaque molestias tempore recusandae blanditiis voluptatibus quibusdam reiciendis ipsam voluptatem alias obcaecati expedita eius animi velit dolorem consequuntur debitis dignissimos incidunt! Mollitia necessitatibus saepe, magnam reiciendis quam odit ipsam sapiente officia a modi inventore magni, aspernatur hic placeat laborum. Obcaecati quis similique placeat adipisci voluptas. Ab, dolorem?</p>
          </div>
        ) : (
          <div>
            <p>Couldn't fetch data</p>
          </div>
        )
      )}
    </>
  );
};

export default ArticleView;
