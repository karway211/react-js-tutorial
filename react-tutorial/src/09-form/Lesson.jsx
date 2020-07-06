import React, { Component, Fragment } from 'react';

/*
Работа с формами заключается в двух задачах:
  1 - получение данных
  2 - управление с помощью обработчиков
*/
/*
Мханизм работы с формами:
  Мы создаем значения для элементов в state и передаем их в аттрибуты элементов, а далее, на сами элементы, мы вешаем обработчики, в которых
  описываем логику поведения.
*/

const POSITIONS = [
  {
    id: 'fd',
    value: 'Front-end Developer',
    title: 'Front-end Developer',
  },
  {
    id: 'bd',
    value: 'Back-end Developer',
    title: 'Back-end Developer',
  }
]

class Form extends Component {
  state = {
    inputText: '',
    textareaText: '',
    selectText: '',
    showData: {
      name: '',
      text: '',
      position: '',
    }
  }
  handleInputChange = ({ target: { value } }) => {
    this.setState({
      inputText: value,
    })
  }
  handleTextareaChange = ({ target: { value } }) => {
    this.setState({
      textareaText: value,
    })
  }
  handleSelectChange = ({ target: { value } }) => {
    this.setState({
      selectText: value,
    })
  }
  handleShow = (e) => {
    e.preventDefault();
    const { inputText, textareaText, selectText } = this.state;
    this.setState({
      inputText: '',
      textareaText: '',
      selectText: '',
      showData: {
        name: inputText,
        text: textareaText,
        position: selectText,
      }
    })
  }
  render() {
    const { inputText, textareaText, selectText, showData } = this.state;
    const { name, text, position } = showData;
    return (
      <Fragment>
        <form>
          {/* Imput */}
            <label>
              Name:
              <input type="text" name='name' value={inputText} onChange={this.handleInputChange} />
            </label>

          {/* Textarea */} <br/>
            <label htmlFor="text">Text:</label>
            <textarea id="text" value={textareaText} onChange={this.handleTextareaChange} ></textarea>

          {/* Select */} <br/>
            <select value={selectText} onChange={this.handleSelectChange}>
              {POSITIONS.map(({ id, value, title }) => (
                <option key={id} value={value}>{title}</option>
              ))}
            </select>
          {/* Button */} <br/>
            <button onClick={this.handleShow}>Show</button>
        </form>
        <h2>{name}</h2>
        <h3>{text}</h3>
        <h3>{position}</h3>
      </Fragment>
    )
  }
}

export default Form;
