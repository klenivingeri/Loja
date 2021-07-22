import { render } from '@testing-library/react';
import { IoIosCall } from 'react-icons/io'
import { NavLink } from '.';


describe('<NavLink />', () => {

  test('it should mount', () => {

    const  { getByLabelText }= render( 

      <NavLink 
        Icon={IoIosCall} 
        href="" 
        children="" 
      />
      
    );
    
    const navLink = getByLabelText('nav-link');

    expect( navLink ).toBeInTheDocument();

  });

});