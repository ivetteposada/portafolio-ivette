import React from 'react';

function Projects() {
    const numbers = Array.from({length: 10}, (_, i) => i + 1);
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
                    <span className='white-text'> projects {'={'}</span>                 
                </p>
                <div className='content-obj'>
                    <a className="link" href="https://las-urbanas-6f17ed.netlify.app/" target='blank'>
                        <p className='green-text-skills'>'Landing de venta'<span className='white-text'>,</span><span className='git-text'>Click to open the link</span></p>
                    </a>
                    <a className="link" href="https://ivetteposada.github.io/crud/cost.html" target='blank'>
                        <p className='green-text-skills'>'Aplicación CRUD'<span className='white-text'>,</span><span className='git-text'>Click to open the link</span></p>
                    </a>
                    <a className="link" href="https://aesthetic-praline-afacab.netlify.app/?classId=da9b6370-4d70-4172-a2cb-6f1ce68afa90&assignmentId=83940c9e-2751-42d8-a550-78054ff41901&submissionId=a42e83b3-61e2-477f-dc62-04d391adf046" target='blank'>
                        <p className='green-text-skills'>'Restaurante App'<span className='white-text'>,</span><span className='git-text'>Click to open the link</span></p>
                    </a>
                    <a className="link" href="https://lasurbanasfrontend.onrender.com/" target='blank'>
                        <p className='green-text-skills'>'Ecommerce'<span className='white-text'>,</span><span className='git-text'>Click to open the link</span></p>
                    </a> 
                </div>
                <p className='white-text'> 
                    {'};'}
                </p>
            </div>            
        </div>
       
        </div>   
        );
}
    
export default Projects;