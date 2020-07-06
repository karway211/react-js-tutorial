import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import LoadingHOC from './HOC/loadingHOC';

/*
HOC - компонента высшего порядка. Мы берем одну компоненту, оборачиваем ее внутрь HOC и возвращаем другую компоненту с обновленной функциональностью.
      Данная ыункциональность, которая была добавлена в компоненту, как раз и описывается внутри компонент высшего порядка.
      HOC - это продвинутая логика переиспользования компоненты. Это не часть API, а всего лишь паттерн.
*/

// const AppLink = (props) => ({
//   render: () => (
//     <Link {...props} activeClassName="active" />
//   )
// })

// class LessonHOC extends Component {
//   render() {
//     return(
//       <Router>
//         <nav>
//           <AppLink to="/">Home</AppLink>
//           <AppLink to="/portfolio">Portfolio</AppLink>
//           <AppLink to="/contacts">Contacts</AppLink>
//         </nav>
//       </Router>
//     )
//   }
// }

class AppComponentUI extends Component {
  render() {
    return (
      <div>{this.props.data.title}</div>
    );
  }
}

const AppComponent = LoadingHOC('data')(AppComponentUI);

class LessonHOC extends Component {
  state = {
    data: {},
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data => this.updateState(data))
  }

  updateState = (data) => {
    window.setTimeout(() => {
      this.setState({ data })
    }, 3000);
  }

  render() {
    return (
      <AppComponent data={this.state.data} />
    );
  }
}

export default LessonHOC;
