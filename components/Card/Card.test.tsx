import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Card } from './Card';

describe('Card Component', () => {
  const imageSrc = 'https://images2.imgbox.com/94/f2/NN6Ph45r_o.png';
  const status = 'Success';
  const name = 'Falcon 9 Launch';
  const date = '2023-07-27';
  const core = 'B1058';
  const payloadType = 'Satellite';
  const payloadId = 'ABCD1234';
  const failureReason = '';
  const props = { imageSrc, status, name, date, core, payloadType, payloadId, failureReason };

  it('snapshot testing', () => {
    const { container } = render(<Card {...props} />);
    expect(container).toMatchSnapshot();
  });

  it('renders the Card component with all details and success status', () => {
    const { getByAltText, getByTestId } = render(<Card {...props} />);
    const heading = getByTestId('heading');
    const imageElement = getByAltText('SpaceX Image');
    const badgeElement = getByTestId('badge');

    expect(heading).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
    expect(badgeElement).toBeInTheDocument();
    expect(heading).toHaveTextContent('🚀');
  });

  it('renders the Card component with failure status and failure reason', () => {
    const failureReason = 'Engine anomaly detected';
    const status = 'Failure';
    const { getByText, getByAltText, getByTestId } = render(
      <Card
        imageSrc={imageSrc}
        status={status}
        name={name}
        date={date}
        core={core}
        payloadType={payloadType}
        payloadId={payloadId}
        failureReason={failureReason}
      />
    );

    const heading = getByTestId('heading');
    const imageElement = getByAltText('SpaceX Image');
    const badgeElement = getByTestId('badge');

    expect(heading).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
    expect(badgeElement).toBeInTheDocument();

    const failureReasonElement = getByText(failureReason);
    expect(failureReasonElement).toBeInTheDocument();
    expect(heading).toHaveTextContent('💥');
  });
});
