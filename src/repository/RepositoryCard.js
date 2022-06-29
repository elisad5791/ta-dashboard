import '../css/RepositoryCard.css';
import {useParams} from "react-router-dom";
import { useEffect, useState } from 'react';
import { getRepository, getRepositoryData } from '../api/index.js';

function RepositopyCard() {
  const urlParams = useParams();
  const [repo, setRepo] = useState({});
  const [lang, setLang] = useState('');
  const [contrib, setContrib] = useState('');

  useEffect(() => {
    const getData = async () => {
      const { complexId } = urlParams;
      const [owner, title] = complexId.split('&');

      const data = await getRepository(owner, title);
      setRepo(data);

      const languages = await getRepositoryData(data.languages_url);
      setLang(Object.keys(languages).join(', '));
      
      const contributors = await getRepositoryData(data.contributors_url);
      setContrib(contributors.slice(0, 10).map((user) => user.login).join(', '));
    };
    getData();
  }, []);

  return (
    <table className="repository">
      <tr>
        <th className="repository__item">Название репозитория</th>
        <td className="repository__item">{repo.name}</td>
      </tr>
      <tr>
        <th className="repository__item">Количество звезд на Github</th>
        <td className="repository__item">{repo.stargazers_count}</td>
      </tr>
      <tr>
        <th className="repository__item">Дата обновления</th>
        <td className="repository__item">{repo.updated_at}</td>
      </tr>
      <tr>
        <th className="repository__item">Фото владельца</th>
        <td className="repository__item">
          <img src={repo.owner?.avatar_url} width="100" height="100" alt="Аватар владельца" />
        </td>
      </tr>
      <tr>
        <th className="repository__item">Nickname владельца</th>
        <td className="repository__item">{repo.owner?.login}</td>
      </tr>
      <tr>
        <th className="repository__item">Список используемых языков</th>
        <td className="repository__item">{lang}</td>
      </tr>
      <tr>
        <th className="repository__item">Краткое описание</th>
        <td className="repository__item">{repo.description}</td>
      </tr>
      <tr>
        <th className="repository__item">10 наиболее активных контрибьютеров</th>
        <td className="repository__item">{contrib}</td>
      </tr>
    </table> 
  );
}

export default RepositopyCard;
