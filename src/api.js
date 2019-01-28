import axios from "axios";

export function getNews(query) {
    const url = `https://newsapi.org/v2/${query ? `everything?q=${query}` : 'top-headlines?country=ru'}&apiKey=${process.env.REACT_APP_API_KEY}`;
    return axios.get(url);
}