import React, { Fragment } from 'react';
import './styles.css';

// Два решения для того, чтобы вернуть из метода render несколько элементов
/*
1. обернуть элементы в массив:
  const Colums = () => ([
    <td key='1'>Hello</td>,
    <td key='2'>world</td>
  ])
*/
/*
2. Fragment - это компонента, которая позволяет вернуть из метода render 2 и более элемента без какой-либо дополнительной обертке
              их в DOM-дереве.
*/

const styles = {color: 'red', textTransform:'uppercase'}

const Colums = () => (
  <Fragment>
    <td style={styles}>Inline</td>
    <td className='title'>Simple class</td>
  </Fragment>
)

const Table = () => (
  <table>
    <tbody>
      <tr>
        <Colums />
      </tr>
    </tbody>
  </table>
)

export default Table;
