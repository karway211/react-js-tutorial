import React, { Component } from 'react';

import Title from '../../components/title/title';
import NewsPost from '../../components/news/news';
import Input from '../../components/input/input';

// 1 - создаем 3 базовые константы
const BASE_PATH = 'https://hn.algolia.com/api/v1';
const SEARCH_PATH = '/search';
const SEARCH_PARAM = 'query=';

class News extends Component {
  // 2 - в state заводим 2 значения
  state = {
    searchQuery: '',
    result: {}, // в result будем записывать данные, которые будем получать от сервиса
  }

  componentDidMount() {
    const { searchQuery } = this.state;
    this.fetchData(searchQuery); // 3 - делаем запрос к серверу
  }

  fetchData = (searchQuery) => {
    fetch(`${BASE_PATH}${SEARCH_PATH}?${SEARCH_PARAM}${searchQuery}`)
      .then(res => res.json())
      .then(result => this.setNews(result))
      .catch(error => error);
  }

  handleInputChange = ({ target: { value } }) => { // изменяем наш поисковой запрос (вытягиваем значение, вбитое в input и записываем его в state)
    this.setState({
      searchQuery: value
    })
  }

  getSearch = ({ key }) => { // осуществляем поисковой запрос
    if(key === 'Enter') {
      const { searchQuery } = this.state;
      this.fetchData(searchQuery);
    }
  }

  setNews = result => { // 4 - создадим метод, в котором полученный от сервера ответ мы устанавливаем в state
    this.setState({ result });
  }

  render() {
    const { searchQuery, result } = this.state;
    const { hits = [] } = result;

    return (
      <div className="wrapper">
        <Title title="Hacker News" />
        <Input onKeyPress={this.getSearch} onChange={this.handleInputChange} value={searchQuery} />
        <ul className="newsList">
          {hits.map(({ author, created_at, num_comments, objectID, title, points, url }) =>
            <NewsPost
              key={objectID}
              author={author}
              created_at={created_at}
              num_comments={num_comments}
              title={title}
              points={points}
              url={url}
            />
          )}
        </ul>
      </div>
    );
  }
}

export default News;
