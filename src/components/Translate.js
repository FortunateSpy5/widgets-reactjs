import React, { useState } from 'react';
import Convert from './Convert';
import Dropdown from "./Dropdown";

const options = [
  {
    label: 'Afrikaans',
    value: 'af'
  },
  {
    label: 'Arabic',
    value: 'ar'
  },
  {
    label: 'Hindi',
    value: 'hi'
  }
]

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('');

  return (
    <div className="ui segment">
      <h3 className="ui header">Translate</h3>
      <div className="ui form">
        <div className="ui field">
          <label>Enter Text</label>
          <input
            className="input"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </div>
      <br />
      <Dropdown
        label={"Select Language"}
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
      />
      <h3 className="ui header">Output</h3>
      <Convert language={language} text={text} />
    </div>
  );
}

export default Translate;