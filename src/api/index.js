import axios from "axios";

const getRepositories = async (term, page) => {
  const searchTerm = term ? term : 'stars%3A%3E%3D10000'; 
  const url = `https://api.github.com/search/repositories?q=${searchTerm}&sort=stars&per_page=10&page=${page}`;
  const { data } = await axios.get(url);
  return data.items;
};

const getRepository = async (owner, title) => {
  const url = `https://api.github.com/repos/${owner}/${title}`;
  const { data } = await axios.get(url);
  return data;
};

const getRepositoryData = async (url) => {
  const { data } = await axios.get(url);
  return data;
};

export { getRepositories, getRepository, getRepositoryData };