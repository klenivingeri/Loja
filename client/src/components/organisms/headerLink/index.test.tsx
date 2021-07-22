import { render } from '@testing-library/react';

import { HeaderLink } from '.';

describe('<HeaderLink />', () => {

  test('it should mount', () => {

    const  { getByLabelText }= render( <HeaderLink  /> );
    
    const headerLink = getByLabelText('header-link');

    expect( headerLink ).toBeInTheDocument();
  });
  
});