import { render } from '@testing-library/react';

import { Attention } from '.';

describe('<Attention />', () => {

    test('it should mount', () => {

       const  { getByLabelText } = render( <Attention notification="" /> );
      
      const attention = getByLabelText('notification');
  
      expect( attention ).toBeInTheDocument();

    });
    
  });