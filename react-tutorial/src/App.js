import React from 'react';
import logo from './logo.svg';
import './App.css';
import Lesson from './01-components/Lesson';
import CounterButton from './02-state/Lesson';
import CounterBtton1 from './03-props/Lesson';
import MyApp from './05-events/Lesson';
import Lesson6 from './06-conditional_rendering/Lesson';
import Lesson7 from './07-lists/Leson';
import Table from './08-fragment_&_css/Lesson';
import Form from './9-form/Lesson';
import FormLesson11 from './11-refs/Lesson';
import LessonHOC from './12-HOCs/Lesson';

function App() {
  return (
    <div className="App">
      {/* <Lesson /> */}
      {/* <CounterButton /> */}
      {/* <CounterBtton1 /> */}
      {/* <MyApp /> */}
      {/* <Lesson6 /> */}
      {/* <Lesson7 /> */}
      {/* <Table /> */}
      {/* <Form /> */}
      {/* <FormLesson11 /> */}
      <LessonHOC />
    </div>
  );
}

export default App;
