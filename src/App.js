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
      {/* <Accordian items={items} /> */}
      {/* <Search /> */}
      {/* <Dropdown
        label={'Select a Color'}
        selected={selected}
        onSelectedChange={setSelected}
        options={options}
      /> */}
      <Translate />
    </div>
  );
};

export default App;