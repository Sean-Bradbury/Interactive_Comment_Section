import { cleanup, render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import LikeButton from './LikeButton';

afterEach(cleanup);

test('Should render component with score of 6', () => {
  render(<LikeButton score={6} className="desktop" />);
  const likeButtonEl = screen.getByTestId('like-button');
  expect(likeButtonEl).toBeInTheDocument();
  expect(likeButtonEl).toHaveTextContent('6');
});

test('Should render component with score of 10', () => {
  render(<LikeButton score={10} className="desktop" />);
  const likeButtonEl = screen.getByTestId('like-button');
  expect(likeButtonEl).toBeInTheDocument();
  expect(likeButtonEl).toHaveTextContent('10');
});

test('matches snapshot', () => {
  const tree = renderer
    .create(<LikeButton score={6} className="desktop" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
