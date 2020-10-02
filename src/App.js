import React from 'react';
import Accordian from './components/Accordion';
import Search from "./components/Search";
import Translate from './components/Translate';
import Route from "./components/Route";
import Header from "./components/Header";

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
    <div className="ui container" style={{ paddingTop: "10px" }}>
      <Header />
      <Route path="/">
        <Accordian items={items} />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};

export default App;