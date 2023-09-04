import { render } from '@testing-library/react';
import { Home } from '../Home';

describe('test suites for Home', () => {

  it('test', () => {
    expect(true).toBeTruthy();
  });
  
  it('should render the component correctly', () => {
    // const { container } = render(<Home />);
    // expect(container).toMatchSnapshot();

    const { asFragment } = render(<Home />);
    expect(asFragment()).toMatchSnapshot();
  });
});
