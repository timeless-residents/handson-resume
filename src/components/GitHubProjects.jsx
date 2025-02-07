import { useState, useEffect } from 'react';
import axios from 'axios';

const GitHubProjects = () => {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://api.github.com/users/timeless-residents/repos', {
          params: {
            sort: 'updated',
            per_page: 10
          }
        });
        
        // Filter out forked repositories and map to required data
        const filteredRepos = response.data
          .filter(repo => !repo.fork)
          .map(repo => ({
            name: repo.name,
            description: repo.description,
            url: repo.html_url,
            stars: repo.stargazers_count,
            language: repo.language,
            updatedAt: new Date(repo.updated_at).toLocaleDateString(),
            homepage: repo.homepage
          }));

        setRepositories(filteredRepos);
        setError(null);
      } catch (err) {
        setError('Failed to fetch repositories');
        console.error('Error fetching repositories:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchRepositories();
    
    // Set up polling every 5 minutes for real-time updates
    const interval = setInterval(fetchRepositories, 5 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 dark:border-white"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 p-4 text-center">
        {error}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      {repositories.map((repo) => (
        <div
          key={repo.name}
          className="border dark:border-gray-700 rounded-lg p-4 hover:shadow-lg transition-shadow duration-200 bg-white dark:bg-gray-800"
        >
          <h3 className="text-lg font-semibold mb-2">
            <a
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              {repo.name}
            </a>
          </h3>
          {repo.description && (
            <p className="text-gray-600 dark:text-gray-300 mb-3">{repo.description}</p>
          )}
          <div className="flex flex-wrap gap-3 text-sm">
            {repo.language && (
              <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                {repo.language}
              </span>
            )}
            {repo.homepage && (
              <a
                href={repo.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Demo
              </a>
            )}
            <span className="text-gray-600 dark:text-gray-400">
              Updated: {repo.updatedAt}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GitHubProjects;
