/* AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM */
import React, {useState, useEffect} from 'react';

const Convert = ({language, text}) => {
  useEffect(() => {
    console.log('New Language or text');
    return () => {
    }
  }, [language, text])

  return (
    <div>
      Hello
    </div>
  );
}

export default Convert;