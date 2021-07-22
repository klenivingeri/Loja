import { render } from '@testing-library/react';

import { Vlap } from '.';

describe('<Vlap />', () => {

    test('it should mount', () => {

      const  { getByLabelText }=render( 

        <Vlap 
          product={{ 
            title:"",
            description:"",
            id:1,
            price:1,
            image:"" 
          }} 
        /> 
        
      );
      
      const vlap = getByLabelText('arrow');
  
      expect( vlap ).toBeInTheDocument();

    });
    
  });