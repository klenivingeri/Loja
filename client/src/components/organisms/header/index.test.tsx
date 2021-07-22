import { render } from '@testing-library/react';

import { Header } from '.';

describe('<Header />', () => {

    test('it should mount', () => {

      const  { getByLabelText } = render( <Header  /> );
      
      const header = getByLabelText('header');
  
      expect( header ).toBeInTheDocument();

    });

});