// События
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/*
Реакт оборачивает каждое событие в свою обертку SyntheticEvent - это своего рода кросбраузерная обертка для нативных событий браузера.
На поведение она никак не влияет, а просто добавляет кросбраузерность для событий.
*/

const MyLink = ({text, onClick}) => (
  <a href="/test" onClick={onClick}>{text}</a>
);

MyLink.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
}

MyLink.defaultProps = {
  text: 'link',
  onClick: () => {},
}

class MyApp extends Component {

  handleClick = (e) => {
    e.preventDefault(); // отменяем дефолтное поведение при клике по ссылке(т.е. по ссылке мы не переходим)
    console.log('Clicked on link!');
    // this.test(); // один обработчик пожно помещать внутрь другого
  }

  render() {
    return (
      <MyLink onClick={this.handleClick} />
    );
  }
}

export default MyApp;
