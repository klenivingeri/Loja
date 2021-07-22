import { render } from '@testing-library/react';

import { H1 } from '.';

describe('<H1 />', () => {

  test('it should mount', () => {

    const  { getByText }=render( <H1 text="Home" /> );
    
    const h1 = getByText('Home');

    expect( h1 ).toBeInTheDocument();

  });
});