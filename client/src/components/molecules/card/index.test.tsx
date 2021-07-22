import { render } from '@testing-library/react';

import { Card } from '.';

describe('<Card />', () => {

    test('it should mount', () => {

      const  { getByLabelText } = render( 

        <Card 
          key={1} 
          active 
          card="" 
          product={{ 
            title:"",
            description:"",
            id:1,
            price:1,
            image:"" 
          }}  

        /> 
      );
      
      const card = getByLabelText('card');
  
      expect( card ).toBeInTheDocument();

    });

  });