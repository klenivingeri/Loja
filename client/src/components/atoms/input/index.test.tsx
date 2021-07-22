import { render } from '@testing-library/react';

import { Input } from '.';


describe('<Img />', () => {

  test('it should mount', () => {

    const  { getByLabelText } = render( <Input /> );
  
    const input = getByLabelText('input-search');

    expect( input ).toBeInTheDocument();
  });

});