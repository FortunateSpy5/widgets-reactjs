import React, {useState} from 'react';
import Accordian from './components/Accordion';
import Dropdown from './components/Dropdown';
import Search from "./components/Search";
import Translate from './components/Translate';

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

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "A Shade of Blue",
    value: "blue",
  }
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="ui container" style={{paddingTop: '10px'}}>
      {showAccordion()}
      {showSearch()}
      {showTranslate()}
    </div>
  );
};

const showAccordion = () => {
  if (window.location.pathname === '/') {
    return <Accordian items={items} />;
  }
}

const showSearch = () => {
  if (window.location.pathname === "/search") {
    return <Search />;
  }
};

const showTranslate = () => {
  if (window.location.pathname === "/translate") {
    return <Translate />;
  }
};

export default App;