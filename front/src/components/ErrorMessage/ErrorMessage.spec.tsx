import React from 'react';
import { render } from '@testing-library/react';
import { ErrorMessage } from '.';

describe('Testando componente ErrorMessage', () => {
  test('Deve renderizar o componente', () => {
    const { getByText } = render(<ErrorMessage>Error</ErrorMessage>);

    expect(getByText('Error')).toBeInTheDocument();
  });
});
