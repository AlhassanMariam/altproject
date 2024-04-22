import React, { useState, useEffect } from 'react';

function GitHubRepoInfo() {
  const [repoData, setRepoData] = useState(null);
  const username = 'AlhassanMariam';
  const repoName = 'recipe_page';
  
  useEffect(() => {
    fetch(`https://api.github.com/repos/${username}/${repoName}`)
      .then(response => response.json())
      .then(data => {
        setRepoData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  if (!repoData) return <div>Loading...</div>;

  return (
    <div>
      <h1>{repoData.name}</h1>
      <p>Description: {repoData.description}</p>
      <p>Stars: {repoData.stargazers_count}</p>
      <p>Forks: {repoData.forks_count}</p>
      <a href={repoData.html_url} target="_blank" rel="noopener noreferrer">View on GitHub</a>
    </div>
  );
}

export default GitHubRepoInfo;

GitHubRepo.js

// import React, { useState, useEffect } from 'react';

// function GitHubRepoList() {
//   const [repos, setRepos] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const perPage = 10;

//   useEffect(() => {
//     fetchRepos();
//   }, [currentPage]);

//   const fetchRepos = async () => {
//     const response = await fetch(`https://api.github.com/users/username/repos?page=${currentPage}&per_page=${perPage}`);
//     const data = await response.json();
//     setRepos(data);
    
//     // Assuming the API provides a 'total_pages' or similar field in the response
//     setTotalPages(Math.ceil(data.total_count / perPage));
//   };

//   const handleNextPage = () => {
//     setCurrentPage(prevPage => prevPage + 1);
//   };

//   const handlePrevPage = () => {
//     setCurrentPage(prevPage => prevPage - 1);
//   };

//   return (
//     <div>
//       {/* Display the list of repositories */}
//       <ul>
//         {repos.map(repo => (
//           <li key={repo.id}>{repo.name}</li>
//         ))}
//       </ul>

//       {/* Pagination controls */}
//       <div>
//         <button 
//           onClick={handlePrevPage}
//           disabled={currentPage === 1}
//         >
//           Previous
//         </button>

//         <span>{currentPage} / {totalPages}</span>

//         <button 
//           onClick={handleNextPage}
//           disabled={currentPage === totalPages}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }

// export default GitHubRepoList;

