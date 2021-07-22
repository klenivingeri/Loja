import { render } from '@testing-library/react';

import { Search } from '.';

describe('<Search />', () => {

  test('it should mount', () => {

    const  { getByLabelText }=render( <Search /> );
    
    const search = getByLabelText('box-search');

    expect( search ).toBeInTheDocument();

  });
  
});