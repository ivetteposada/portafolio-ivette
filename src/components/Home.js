import React from 'react';

function Home() {
    const numbers = Array.from({length: 10}, (_, i) => i + 1);
    const elementP = numbers.map(number => (
        <p key={number}>{number}</p>
    ));

    return (
        <div className='page'>
            <div className='lines'>
                <p>{elementP}</p>
            </div>
            <div className='home'>            
                <p className='pink-text'>
                    const  
                    <span className='white-text'> dev {'={'}</span>                 
                </p>
                <div className='content-obj'>
                    <p className='white-text'>
                        name 
                        <span className='white-text'>: </span>
                        <span className='green-text'>'Ivette Posada'</span>
                        ,
                    </p>
                    <p className='white-text'>
                        position 
                        <span>: </span>
                        <span className='green-text'>'Front End Developer'</span>
                        ,
                    </p>
                    <p className='white-text'>
                        level 
                        <span>: </span>
                        <span className='green-text'>'Junior'</span>
                        ,
                    </p>
                    <p className='white-text'>
                        email 
                        <span>: </span>
                        <a className="link" href={`mailto:ivette.posada@gmail.com`}>
                            <span className='green-text'>'ivette.posada@gmail.com'</span>
                            <span className='white-text'>,</span>
                            <span className='git-text'>send me an email</span>
                        </a>                        
                    </p>
                    <p className='white-text'>
                        whatsapp 
                        <span>: </span>
                        <a className="link" href={`https://api.whatsapp.com/send?phone=6144959010&text="Me interesa tu perfil"`} target='blank'>
                            <span className='pink-text'>6144959010</span>                        
                            <span className='white-text'>,</span>
                            <span className='git-text'>send me whatsapp</span>
                        </a>
                    </p>
                    <p className='white-text'>
                        github
                        <span>: </span>
                        <a className="link" href={`https://github.com/ivetteposada`} target='blank'>
                            <span className='green-text'>'ivetteposada'</span>
                            <span className='white-text'>,</span>
                            <span className='git-text'>click to open Github</span>
                        </a>
                    </p>
                    <p className='white-text'>
                        linkedin
                        <span>: </span>
                        <a className="link" href={`https://www.linkedin.com/in/ivette-posada-61b476123/`} target='blank'>
                            <span className='green-text'>'ivette-posada'</span>
                            <span className='white-text'>,</span>
                            <span className='git-text'>click to open LinkedIn</span>
                        </a>                        
                    </p>
                </div>
                <p className='white-text'> 
                    {'};'}
                </p>
                
                
                
            </div>
        </div>
        // <div className="Profile">
        //     <div className="content">
        //         <div className="whoIAm">
        //             <h2 className="who-title">Perfil</h2>
        //             <p>Ivette Posada</p>
        //             <p>Front End Developer Jr</p>
        //         </div>
        //         <div className="skills">
        //             <h2 className="skills-title">Contacto</h2>
        //             <a href={`mailto:ivette.posada@gmail.com`}><p>ivette.posada@gmail.com</p></a>
        //             <a href={`https://api.whatsapp.com/send?phone=6144959010&text=Meinteresatuperfil`} target='blank'>
        //                 <p>614495-9010</p>
        //             </a>
        //             <p>Linkeid</p>
        //             <p>Github</p>
        //         </div>
        //         <div className="knowledge">
        //             <h2 className="knowledge-title">Formación</h2>
        //             <p>Lic. en Sistemas, Universidad Autónoma de Chihuahua</p>
        //             <p>Master en Finanzas, Universidad Autónoma de Chihuahua</p>
        //             <p>Desarrollador web full stack, Utel Universidad</p>
        //         </div>                
                
        //     </div>
        // </div>
        );
    }
    
    export default Home;
    