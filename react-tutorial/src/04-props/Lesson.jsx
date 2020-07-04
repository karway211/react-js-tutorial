// Пропсы и их валидация 

import React, {Component} from 'react';
import PropTypes from 'prop-types';
// PropTypes

// Node:
/* Node - данный тип подходит в принципы для любых типов данных, т.е. для чего-то, что в react можно отрендерить (чмсла, строки, элементы и т.д.)
        он довольно универсальный и малоописательный, поэтому использовать его нужно для передачи одной компоненты в другую компоненту.
*/
// Component.propTypes = {
//   node: PropTypes.node,
// }

// Element:
/*
Element - данный тип предназначен для тех случаев, когда в компоненту в виде пропса мы передаем другой элемент
*/
// Component.propTypes = {
//   elem: PropTypes.element,
// }

// Instance Of:
/*
Instance Of - данный тип говорит о том, что переданный props является экземпляром класса. Внутрь instanceOf передается имя конструктора.
    Это используется тогда, когда мы создаем переменную используя конструктор дат(new Data), в таком случае мы можем указать, что тип
    пропса это instanceOf Data
*/
// Component.propTypes = {
//   instance: PropTypes.instanceOf(Constructor),
// }

// One Of:
/*
One Of - в этом случае мы ограничиваем свойства списком значений, которое принимает метод oneOf
*/
// Component.propTypes = {
//   elem: PropTypes.oneOf([val1, val2]),
// }

// One of type:
/*
One of type - похож на предыдущий, однако вместо просто значений мы передаем список валидаторов, т.е. например одно из свойств у нас
    может быть либо строкой либо числом, написать одно из двух значений мы не можем, т.к. ели мы напишем строку, а пропс будет числом,
    то получим ошибку.
*/
// Component.propTypes = {
//   elem: PropTypes.oneOf([
//     PropTypes.string,
//     PropTypes.number,
//   ]),
// }

// Array of / Object of:
/*
Array of / Object of - используются когда свойства представляют из себя или массив, или объект с определенными значениями.
    В нашем случае это массив строк и объект чисел. И если Array of применяется довольно часто, то Object of нет, т.к. объект, в своем большинстве,
    это солянка из разных типов данных.
*/
// Component.propTypes = {
//   array: PropTypes.arrayOf(PropTypes.string),
//   object: PropTypes.objectOf(PropTypes.number),
// }

// Shape:
/*
Shape - если в компоненту мы пробрасываем объект
*/
// Component.propTypes = {
//   obj: PropTypes.shape({
//     color: PropTypes.string,
//     fontSize: PropTypes.number,
//     lineHeight: PropTypes.number,
//   }),
// }

// ===================================================

export const Counter = ({ counter = 0 }) => {
  return <h1>{`Counter component. Counter value is: ${counter}`}</h1>
}

export const Button = () => (
  <button>Simple button</button>
)

export class Lesson extends Component {
  static propTypes = {
    children: PropTypes.element,
  }

  static defultProps = {
    children: null,
  }

  state = {
    counter: 0,
  }

  handleClick = () => {
    this.setState(({ counter }) => ({
      counter: ++counter,
    }))
  }

  render() {
    const { counter } = this.state;
    const { children, child } = this.props;

    return (
      <div>
        {child}
        <div>{counter}</div>
        {React.cloneElement(children, {counter: this.state.counter})} {/*клонируем обернутую компоненту вместе с передаваемыми пропсами */}
        <button onClick={this.handleClick}>+1</button>
      </div>
    );
  }
} // но это специфический кейс, если вдруг такая необходимость появилась, то нужно задуматься о переделке архитектуры или использовании HOC

