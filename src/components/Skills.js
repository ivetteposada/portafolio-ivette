import React from 'react';

function Skills() {
    const numbers = Array.from({length: 12}, (_, i) => i + 1);
    const elementP = numbers.map(number => (
      <p key={number}>{number}</p>
    ));
    return (         
        <div className='page'>
            <div className='lines'>
                <p>{elementP}</p>
            </div>
            <div className='skills'>
            <div className='hard-skills'>
                <p className='pink-text'>
                    const  
                    <span className='white-text'> hardSkills {'={'}</span>                 
                </p>
                <div className='content-obj'>
                    <p className='green-text-skills'>'HTML'<span className='white-text'>,</span></p>
                    <p className='green-text-skills'>'CSS'<span className='white-text'>,</span></p>                
                    <p className='green-text-skills'>'JavaScrpit'<span className='white-text'>,</span></p>                
                    <p className='green-text-skills'>'React'<span className='white-text'>,</span></p>                
                    <p className='green-text-skills'>'NodeJS'<span className='white-text'>,</span></p>
                    <p className='green-text-skills'>'PHP'<span className='white-text'>,</span></p>                
                    <p className='green-text-skills'>'MySQL'<span className='white-text'>,</span></p>
                    <p className='green-text-skills'>'MongoDB'<span className='white-text'>,</span></p>
                    <p className='green-text-skills'>'Firebase'</p>
                </div>
                <p className='white-text'> 
                    {'};'}
                </p>
            </div>               
        </div>
       
        </div>   
        );
    }
    
export default Skills;
    