import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Wrapper } from './Wrapper';

describe('Wrapper Component', () => {
  it('renders the Wrapper component with children', () => {
    const children = <div>Test Children</div>;

    const { container } = render(<Wrapper>{children}</Wrapper>);

    expect(container).toMatchSnapshot();
    expect(screen.getByTestId(`card-wrapper`)).toBeInTheDocument();
  });
});
