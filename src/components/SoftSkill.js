import React from 'react';

function SoftSkills() {
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
            <div className='soft-skills'>
                <p className='pink-text'>
                    const  
                    <span className='white-text'> softSkills {'={'}</span>                 
                </p>
                <div className='content-obj'>
                    <p className='green-text-skills'>'Trabajo en equipo'<span className='white-text'>,</span></p>
                    <p className='green-text-skills'>'Comunicación'<span className='white-text'>,</span></p>                
                    <p className='green-text-skills'>'Liderazgo'<span className='white-text'>,</span></p>                
                    <p className='green-text-skills'>'Adaptabiliad'<span className='white-text'>,</span></p>                
                    <p className='green-text-skills'>'Pensamiento crítico'<span className='white-text'>,</span></p>
                    <p className='green-text-skills'>'Resolución de problemas'<span className='white-text'>,</span></p>                
                    <p className='green-text-skills'>'Autonomía'</p>                
                </div>
                <p className='white-text'> 
                    {'};'}
                </p>
            </div>            
        </div>
       
        </div>   
        );
    }
    
export default SoftSkills;
    