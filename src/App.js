import React from 'react';
import Accordian from './components/Accordion';
import Search from "./components/Search";

const items = [
  {
    title: 'What is React?',
    content: 'React is a front-end Javascript Framework?',
  },
  {
    title: 'Why use React?',
    content: 'React is a favortive JS Library among engineers?',
  },
  {
    title: 'How do you use React?',
    content: 'You use Reat by creating components'
  }
];

const App = () => {
  return (
    <div className="ui container">
      {/* <Accordian items={items} /> */}
      <Search />
    </div>
  );
};

export default App;