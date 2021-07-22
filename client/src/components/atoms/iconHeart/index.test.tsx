import { render } from '@testing-library/react';

import { IconHeart } from '.';


describe('<IconHeart />', () => {

  test('it should mount', () => {

    const  { getByLabelText }= render( <IconHeart color="white" /> );
    
    const iconHeart = getByLabelText('icon-heart');

    expect( iconHeart ).toBeInTheDocument();
    
  });
});