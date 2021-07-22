import { render } from '@testing-library/react';

import { Container } from '.';

describe('<Container />', () => {

    test('it should mount', () => {

       const  { getByText } = render(
       
        <Container 
          children={<div> Container </div>} 
          background="white" 
          padding={1} 
        />
      
       );
      
      const container = getByText('Container');
  
      expect(container).toBeInTheDocument();

    });
    
  });