// Списки и ключи

import React, { Fragment, Component } from 'react';

/*
key - это специальный аттрибут строки, который необходимо добавлять при создании списков (массивов или других итерируемых сущностей).
    Значение key должно быть уникальным. Сам key никак не влияет на работу нашего списка, он нужен для взаимодействия с библиотекой,
    т.е. ключи служат подсказкой для реакта. Ключи нужны в списках реакт, чтобы знать какие элементы были изменены, добавлены или удалены.
    Реакт манипулирует не обычным DOM-деревом(т.к. манипуляции с ним очень затратны), а виртуальным DOM-деревом. Фактически это обычный
    объект. При изменении какого-нибудь компонента(например при вызове setState) происходит сравнение старой версии объекта с новой,
    ищутся несовпадения и в результате компоненты, которые были изменены, перерендериваются. Чтобы ускорить процесс поиска несоответствий
    внутри списков элементам добавляются ключи с уникальными значениями, это оптимизирует процесс.
*/

const ValidationMsg = ({ val }) => {
  if (val >= 10) {
    return <h2>Grate than 10</h2>
  } else {
    return <h3>Less than <em>10</em></h3>
  }
}

const Tab1 = () => (
  <h1>Text of tab1</h1>
)
const Tab2 = () => (
  <h1>Text of tab2</h1>
)
const Tab3 = () => (
  <h1>Text of tab3</h1>
)

const people = ['Jack', 'Max', 'Leo', 'Alex'];

const TABS_BTH = [
  {
    dataName: 1,
    title: 'TAB1',
  },
  {
    dataName: 2,
    title: 'TAB2',
  },
  {
    dataName: 3,
    title: 'TAB3',
  },
]

class Lesson7 extends Component {

  state = {
    activeTab: 1,
  }

  handleTab = (e) => {
    this.setState({
      activeTab: +e.target.getAttribute('data-name')
    })
  }

  render() {
    const { activeTab } = this.state
    return (
      <Fragment>
        {TABS_BTH.map(({dataName, title}) => (
          <button
            key={`${dataName}-${title}`}
            data-name={dataName}
            onClick={this.handleTab}
          >{title}</button>
        ))}
        {activeTab === 1 ? <Tab1 /> : activeTab === 2 ? <Tab2 /> : <Tab3 />}
        <div>
          {`Active tab is: ${activeTab === 1 ? 'first' : activeTab === 2 ? 'second' : 'third'}`}
        </div>
        <ul>
          {people.map((person, index) => (
            <li key={index}>{person}</li>
          ))}
        </ul>
      </Fragment>
    )
  }
}

export default Lesson7;