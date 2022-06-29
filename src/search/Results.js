import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import '../css/Results.css';
import { getRepositories } from '../api/index.js';

function Results() {
  const searchTerm = useSelector((state) => state.search.term);
  const page = useSelector((state) => state.search.page);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const getRepos = async () => {
      const repositories = await getRepositories(searchTerm, page);
      setRepos(repositories);
    };
    getRepos();
  }, [searchTerm, page]);

  return (
    <table className="results">
      <thead>
        <tr>
          <th className="results__cell">Название</th>
          <th className="results__cell">Количество звезд</th>
          <th className="results__cell">Дата обновления</th>
          <th className="results__cell">Ссылка</th>
        </tr>
      </thead>
      <tbody>
      {repos.map((repo) => {
        const path = `/repository/${repo.owner.login}&${repo.name}`;
        return (
          <tr key={repo.name}>
            <td className="results__cell">
              {repo.name} (<Link to={path} className="results__link">Подробнее</Link>)
            </td>
            <td className="results__cell results__cell--center">{repo.stargazers_count}</td>
            <td className="results__cell">{repo.updated_at.slice(0, 10)}</td>
            <td className="results__cell">
              <a href={repo.html_url} target="_blank" className="results__link">{repo.html_url}</a>
            </td>
          </tr>
        );
      })}
      </tbody>
    </table> 
  );
}

export default Results;
