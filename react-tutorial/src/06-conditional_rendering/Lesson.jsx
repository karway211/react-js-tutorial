import React, { Fragment, Component } from 'react';

/*
Conditional Rendering (условный рендеринг) - это такой механизм, который позволяет рендерить определенную разметку в зависимости
                                            от какого-то условия. И все это можно описать внутри компоненты.
*/

const ValidationMsg = ({ val }) => {
  if (val >= 10) { // внутри jsx мы не можем использовать конструкцию if..else, т.к. получим ошибку
    return <h2>Grate than 10</h2>
  } else {
    return <h3>Less than <em>10</em></h3>
  }
  // внутри jsx можно исп-ть тернарное выражение(?:) или логическое и (&&)
  // (?:):
  /*return <div>
    {val >= 10 ? <h2>Grate than 10</h2> : <h3>Less than <em>10</em></h3>}
  </div>*/
  // && :
  /*val && <span>We have val</span> */
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

class Lesson6 extends Component {

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
        <button data-name={1} onClick={this.handleTab} >Tab1</button>
        <button data-name={2} onClick={this.handleTab} >Tab2</button>
        <button data-name={3} onClick={this.handleTab} >Tab3</button>
        {/* {activeTab === 1 && <Tab1 />}
        {activeTab === 2 && <Tab2 />}
        {activeTab === 3 && <Tab3 />} */}
        {activeTab === 1 ? <Tab1 /> : activeTab === 2 ? <Tab2 /> : <Tab3 />}
        <div>
          {`Active tab is: ${activeTab === 1 ? 'first' : activeTab === 2 ? 'second' : 'third'}`}
        </div>
      </Fragment>
    )
  }
}

export default Lesson6;
