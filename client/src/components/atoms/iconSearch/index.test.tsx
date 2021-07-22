import { render } from '@testing-library/react';

import { IconSearch } from '.';

describe('<IconSearch />', () => {

  test('it should mount', () => {

    const  { getByLabelText }= render( <IconSearch  /> );
    
    const iconSearch = getByLabelText('icon-search');

    expect( iconSearch ).toBeInTheDocument();
    
  });

});