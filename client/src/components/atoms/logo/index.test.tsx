import { render } from '@testing-library/react';
import { Logo } from '.';


describe('<Logo />', () => {

  test('it should mount', () => {

    const  { getByText } = render( <Logo /> );
  
    const logo = getByText( "MagaNets" );

    expect( logo ).toBeInTheDocument();
    
  });

});