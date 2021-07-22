import { render } from '@testing-library/react';

import { Img } from '.';

describe('<Img />', () => {

  test('it should mount', () => {

    const  { getByLabelText }= render( <Img img="imagem"  /> );
    
    const img = getByLabelText('image-product');

    expect( img ).toBeInTheDocument();
  });
  
});