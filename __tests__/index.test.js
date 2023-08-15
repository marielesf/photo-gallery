import '@testing-library/jest-dom';
import Home from '../pages';
import home1 from '/assets/home1.jpg';

import { render } from '@testing-library/react';

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
    const { getByText, getByTestId } = render(<Home />);
    expect(getByText('Photo Gallery')).toBeInTheDocument();
    // expect(screen.getByTestId('add-todo')).toBeInTheDocument();
  });
});
