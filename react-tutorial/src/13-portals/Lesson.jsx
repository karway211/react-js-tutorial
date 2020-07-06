import React, { Component } from 'react';
import ReactDOM from 'react-dom';

/*
React рендерит всю разметку внутри одного div, который является корневым.
Portals - позволяют добавлять DOM-элементы за пределами корневого элемента.
*/

class MyPortal extends Component {

  el = document.createElement('div'); // создаем новый элемент

  componentDidMount() {
    document.body.appendChild(this.el); // определяем куда будет монтироваться портал ( в document.body)
  }

  componentWillUnmount() {
    document.body.removeChild(this.el); // на всякий случай, т.к. никакой логики пока не добавлено, почистим хвосты компоненты(будущие таймеры и операции)
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el); // создаем портал ,children - разметка, кот. будет принимать компонента портала,
  }                                                             // el - созданный DOM-элемент
}

class LessonPortal extends Component {
  state = {
    click: 0,
  }

  handleClick = () => {
    this.setState(({ click }) => ({
      click: click + 1,
    }))
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        <p>Clicks: {this.state.click}</p>
        <span>Text</span>
        <MyPortal>
          <div>TEST PORTAL</div>
          <button>Click</button>
        </MyPortal>
      </div>
    );
  }
}

/*
Несмотря на то, что в разметке DOM-дерева портал находится вне границ, внутри компонент в React это по прежнему дочерний элемент.
*/

export default LessonPortal;