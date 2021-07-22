import { render } from '@testing-library/react';
import App from './App';

describe('<App />', () => {

  test('it should mount', () => {

    const  { getByLabelText }=render( <App  /> );
    
    const app = getByLabelText('App');

    expect( app ).toBeInTheDocument();
  });
});


