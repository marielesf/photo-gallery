import '@testing-library/jest-dom';
import PhotoBox from '../pages/photoBox';

import { render } from '@testing-library/react';

describe('Todo App', () => {
  it('renders the Photo Box', async () => {
    const { getByTestId } = render(<PhotoBox />);
    expect(getByTestId('image-box-1')).toBeInTheDocument();
  });
});
