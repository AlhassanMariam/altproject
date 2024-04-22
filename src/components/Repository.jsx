import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Repository = () => {
  const { repoName } = useParams();
  const [repo, setRepo] = useState(null);

  useEffect(() => {
    const fetchRepo = async () => {
      try {
        const response = await axios.get(`https://api.github.com/repos/AlhassanMariam/${repoName}`);
        setRepo(response.data);
      } catch (error) {
        console.error('Error fetching repository:', error);
      }
    };

    fetchRepo();
  }, [repoName]);

  if (!repo) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{repo.name}</h1>
      <p>{repo.description}</p>
      {'a recipe page'}
    </div>
      );
};

export default Repository;

