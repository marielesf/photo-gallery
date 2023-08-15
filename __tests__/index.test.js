import Home from '../pages';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

jest.mock('../services/photoService', () => ({
  getAll: () => [
    {
      id: 1,
      imgPath: jest.fn(),
      alternativeText: 'Abandoned House with garden',
    },
  ],
}));

describe('Todo App', () => {
  it('renders the todo app', async () => {
    const { getByText } = render(<Home />);
    expect(getByText('Photo Gallery')).toBeInTheDocument();
  });
});
