import React, {Component} from 'react';
/*
В react существует 2 типа данных, необходимых для работы компонент: state и props
*/

/*
state - это внутреннее состояние компонент, оно устанавливается тогда, когда происходит инициализация компоненты
    и в случае, если одно из свойств state-а изменено, то происходит перерендеринг компоненты.
Все компоненты react можно разделить на Stateful и Stateless, т..е. те, у кого state есть и те, у кого его нет.
Данные state можно передавать внутрь компонент в виде props, либо изменять. Причем их изменения вызывают перерендеринг
самой компоненты.
state доступен в Stateful компонентах, т.е. в компонентах, являющихся экземплярами класса.
Задается он либо внутри конструктора с помощью state(и это единственное место, где его можно задать таким образом),
во всех остальных местах с помощью setState, либо как обычное свойство. Т.е. state - это фактически объект с заданными свойствами,
которым могут быть присвоены любые значения.
*/

// Old
// class CounterButton extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       counter: 0,
//     }

//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick () {
    
//   }
// }

// Modern
class CounterButton extends Component {
  state = {
    counter: 0,
  }
  handleClick = () => {
    // this.setState(prevState => ({  prevState - предыдущее значение state
    //   counter: ++prevState.counter,
    // }))
    this.setState(({ counter }) => ({ // то же самое с помощью деструктуризации
      counter: ++counter,
    }))
  }
  // создадим метод рендер где отобразим значение величины нашего счетчика
  render() {
    const {counter} = this.state;

    return (
      <div>
        <div>{counter}</div>
        <button onClick={this.handleClick}>+1</button>
      </div>
    )
  }
}

export default CounterButton;
