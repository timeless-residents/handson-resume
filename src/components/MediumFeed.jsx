import { useState, useEffect } from 'react';
import axios from 'axios';

const MediumFeed = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeed = async () => {
      try {
        const corsProxy = 'https://api.allorigins.win/raw?url=';
        const feedUrl = encodeURIComponent('https://medium.com/feed/@business_37716');
        const response = await axios.get(`${corsProxy}${feedUrl}`);
        
        // Parse XML
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(response.data, 'text/xml');
        const items = xmlDoc.getElementsByTagName('item');
        
        const parsedArticles = Array.from(items).map(item => {
          const content = item.getElementsByTagName('description')[0]?.textContent || '';
          
          // Extract first image from content
          const tempDiv = document.createElement('div');
          tempDiv.innerHTML = content;
          const firstImage = tempDiv.querySelector('img');
          const thumbnail = firstImage ? firstImage.src : '';
          
          // Remove the first image from content if it exists
          if (firstImage) {
            firstImage.remove();
          }
          
          const article = {
            id: item.getElementsByTagName('guid')[0]?.textContent,
            title: item.getElementsByTagName('title')[0]?.textContent || '',
            url: item.getElementsByTagName('link')[0]?.textContent || '',
            published: item.getElementsByTagName('pubDate')[0]?.textContent || '',
            content: tempDiv.innerHTML,
            thumbnail: thumbnail
          };
          
          return article;
        });

        setArticles(parsedArticles);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch Medium feed');
        setLoading(false);
        console.error('Error fetching Medium feed:', err);
      }
    };

    fetchFeed();
  }, []);

  if (loading) return <div className="p-4">Loading Medium articles...</div>;
  if (error) return <div className="p-4 text-red-500">{error}</div>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Latest Medium Articles</h2>
      <div className="space-y-4 mb-4">
        {articles.slice(0, 3).map((article) => (
          <div key={article.id} className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
            <div className="flex gap-4">
              {article.thumbnail && (
                <div className="flex-shrink-0">
                  <img 
                    src={article.thumbnail} 
                    alt={article.title}
                    className="w-32 h-20 object-cover rounded-lg"
                  />
                </div>
              )}
              <div className="flex-grow">
                <a 
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500"
                >
                  <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
                </a>
                <p className="text-sm dark:text-gray-300 mb-2">
                  {new Date(article.published).toLocaleDateString()}
                </p>
                <div 
                  className="text-sm dark:text-gray-400 line-clamp-3"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <a
        href="https://medium.com/@business_37716"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-blue-500 hover:text-blue-600 transition-colors"
      >
        View more articles →
      </a>
    </div>
  );
};

export default MediumFeed;
