import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

function Footer() {
  return (
    <MDBFooter className='text-center text-white footer' style={{ backgroundColor: '#0a4275' }}>
    <MDBContainer className='p-4 pb-0'>
      <section className='mb-4'>
        <MDBBtn
          floating
          className='m-1'
          style={{ backgroundColor: '#0082ca' }}
          href={`https://www.linkedin.com/in/ivette-posada-61b476123/`} 
          target='blank'
          role='button'
        >
          <MDBIcon fab icon='linkedin-in' />
        </MDBBtn>

        <MDBBtn
          floating
          className='m-1'
          style={{ backgroundColor: '#333333' }}          
          role='button'
          href={`https://github.com/ivetteposada`} 
          target='blank'
        >
          <MDBIcon fab icon='github' />
        </MDBBtn>
      </section>
    </MDBContainer>

    <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright. Desarrollada y creada por Ivette Posada. Versión 1.0.0      
    </div>
  </MDBFooter>
  );
}

export {Footer}