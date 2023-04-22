import React, { useState, useEffect } from 'react';

function TypingEffect() {
  const [fullText, setFullText] = useState(`
    const 
    dev = {
        name: 'Ivette Posada',
        position: 'Front End Developer',
        level: 'Junior',
        email: 'ivette.posada@gmail.com',
        whatsapp: '6144959010'
    };
  ` );
  const [partialText, setPartialText] = useState('');
  const intervalTime = 50; // tiempo entre cada letra en milisegundos

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setPartialText(prevPartialText => prevPartialText + fullText[i]);
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, intervalTime);
    
    

    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className='home'>
      <p className='pink-text'> {partialText} </p>
    </div>
  );
}

export default TypingEffect;
