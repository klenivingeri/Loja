import { render } from '@testing-library/react';

import { IconCLose } from '.';


describe('<IconCLose />', () => {

  test('it should mount', () => {

    const  { getByLabelText }= render( <IconCLose productId={1} /> );
    
    const iconCLose = getByLabelText('icon-close');

    expect( iconCLose ).toBeInTheDocument();
  });
});