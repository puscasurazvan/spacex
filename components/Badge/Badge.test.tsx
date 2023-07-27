import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For additional DOM matchers
import { Badge } from './Badge'; // Replace './Badge' with the correct path to your Badge component

describe('Badge Component', () => {
  it('renders the badge with the correct color and text', () => {
    const launchStatus = 'Success';

    const { getByTestId, getByText } = render(<Badge launchStatus={launchStatus} />);
    const badge = getByTestId('badge');
    const textElement = getByText(launchStatus);

    expect(badge).toBeInTheDocument();
    expect(textElement).toBeInTheDocument();

    expect(badge).toMatchSnapshot();
  });

  it('renders the badge with red color for non-Success status', () => {
    const launchStatus = 'Failure';

    const { getByTestId } = render(<Badge launchStatus={launchStatus} />);
    const badge = getByTestId('badge');

    expect(badge).toBeInTheDocument();
  });
});
