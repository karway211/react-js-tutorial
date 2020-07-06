import React, { Fragment } from 'react';

import Header from './components/header/header';
import Footer from './components/footer/footer';
/*
2 типа router:
  BrowserRouter - для отработки на сервере динамических запросов
  HachRouter - используется в статическом web-site.

  Каждый router создает объект history, который хранит путь к текущему location и перерисовывает интерфейс сайта когда происходят какие-то изменения
  в пути. Остальные функции. предоставляемые в react-router полагаются на доступность объекта history через context, поэтому они должны рендериться
  внутри компоненты Router. Компонента Router ожидает только один элемент в качестве дочернего. Чтобы работать с этим условием удобно создавать
  компоненту App, кот будет рендерить весь layout приложения.
*/

const AppRouter = ({ children }) => (
  <Fragment>
    <Header />
    {children} {/* добавляем, чтобы наши компоненты (Home, Contacts, Posts) отображались внутри AppRouter*/}
    <Footer />
  </Fragment>
);

export default AppRouter;
