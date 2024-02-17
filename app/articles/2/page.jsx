'use client';
import { useState, useEffect } from 'react';
import dbData from '/languages.json'; 

const Article2 = () => {
  const [language, setLanguage] = useState('en');
  const textData = dbData[language] || [];

  useEffect(() => {}, [language]);

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <div>
      <div>
        <button onClick={() => changeLanguage('en')}>English</button>
        <button onClick={() => changeLanguage('ur')}>اردو</button>
      </div>
      <h1>{textData.map((item) => item.content).join('\n')}</h1>
      {/* Add any other components or UI elements here */}
    </div>
  );
};

export default Article2;
