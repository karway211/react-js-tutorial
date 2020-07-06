import React, { Component, Fragment } from 'react';

/*
Context - это механизм, который помогает передавать данные от одной компоненты другой, минуя промежуточную компоненту.
*/
/*
const LevelThree = ({ title }) => <h1>{title}</h1>
const LevelTwo = ({ title }) => <LevelThree title={title} />
const LevelOne = ({ title }) => <LevelTwo title={title} />
class Lesson extends Component {
  render() {
    return (
      <LevelOne title="simple title" />
    );
  }
}*/

const TitleContext = React.createContext(); // 1 - создаем контекст

const LevelThree = () => (
  <TitleContext.Consumer> {/* 4 - получаем доступ к значениям заголовка */}
    { ({ title, subTitle, click }) => (
      <Fragment>
        <h1 onClick={click}>{title}</h1>
        <h2>{subTitle}</h2>
      </Fragment>
    ) }
  </TitleContext.Consumer>
)

const LevelTwo = () => <LevelThree />

const LevelOne = () => <LevelTwo />

class LessonContext extends Component {
  render() {
    return (
      <TitleContext.Provider value={{ title: "Simple title", subTitle: "Sub Title", click: () => {console.log('Hello!')} }}> 
        {/* 3 - используя value задаем значения нашим заголовкам, в саму компоненту в виде пропсов мы ничего не передаем */}
        <LevelOne />
      </TitleContext.Provider> // 2 - Используя Provider мы оборачиваем нашу компоненту первого уровня
    );
  }
}

export default LessonContext;