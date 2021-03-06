import React, {Component} from 'react';

//механизм передачи данных (типы передаваемых данных) мы можем контролировать с помощью PropTypes
import PropTypes from 'prop-types';

/*
props - это данные, которые передаются от компоненты родителя к дочерней компоненте. Там они могут быть либо
    использованы либо переданы дальше по цепочке.
*/
/*
defaultProps - если в компоненту не будет передано какое-нибудь свойство, которое не является обязательным, то
              это свойство возьмется из дефолтных значений.
*/


//создадим презентационный компонент
const Counter = ({counter, func, number, string}) => {
  console.log({counter, func, number, string});
  return <h1>{`Counter component. Counter value is: ${counter}`}</h1>
}
Counter.propTypes = {
  counter: PropTypes.number.isRequired, // isRequired - свойство обязательно
  funk: PropTypes.func,
  number: PropTypes.number,
  string: PropTypes.string,
}
Counter.defaultProps = {
  func: () => {},
  number: 0,
  string: '',
}

class CounterBtton1 extends Component {
  state = {
    counter: 0,
  }

  handleClick = () => {
    this.setState(({ counter }) => ({
      counter: ++counter,
    }))
  }

  render() {
    const {counter} = this.state;

    return (
      <div>
        <div>
          { counter }
        </div>
        <Counter
          counter={counter}
          // func={() => {}}
          // number={1}
          // string={'str'}
           />
        <button onClick={this.handleClick}>+1</button>
      </div>
    )
  }
}

export default CounterBtton1;
