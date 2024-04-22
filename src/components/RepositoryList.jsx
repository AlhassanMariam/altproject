import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RepositoryList = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/AlhassanMariam/repos');
        setRepos(response.data);
      } catch (error) {
        console.error('Error fetching repositories:', error);
      }
    };

    fetchRepos();
  }, []);

  return (
    <div>
      <h1>My GitHub Repositories</h1>
      <ul>
        {repos.map(repo => (
          <li key={repo.id}>
            <a href={`/repositories/${repo.name}`}>{repo.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RepositoryList;
