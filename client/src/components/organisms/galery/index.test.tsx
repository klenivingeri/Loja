import { render } from '@testing-library/react';

import { Galery } from '.';

describe('<Galery />', () => {

    test('it should mount', () => {

      const  { getByLabelText }=render( <Galery children={<div></div>} /> );
      
      const galery = getByLabelText('galery');
  
      expect( galery ).toBeInTheDocument();
    });
  });