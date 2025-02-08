import { useState, useEffect } from 'react';
const ZennFeed = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeed = async () => {
      try {
        const response = await fetch('/data/zenn-feed.json');
        if (!response.ok) {
          throw new Error('Failed to fetch Zenn feed data');
        }
        const data = await response.json();
        setArticles(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch Zenn feed');
        setLoading(false);
        console.error('Error fetching Zenn feed:', err);
      }
    };

    fetchFeed();
  }, []);

  if (loading) return <div className="p-4">Loading Zenn articles...</div>;
  if (error) return <div className="p-4 text-red-500">{error}</div>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Latest Zenn Articles</h2>
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
        href="https://zenn.dev/idev?tab=books"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-blue-500 hover:text-blue-600 transition-colors"
      >
        View more articles →
      </a>
    </div>
  );
};

export default ZennFeed;
