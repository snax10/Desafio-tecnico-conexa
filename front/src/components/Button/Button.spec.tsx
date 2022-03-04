import React from 'react';
import { render } from '@testing-library/react';
import { Button } from '.';

describe('Teste do component Button', () => {
  test('renderização sem quebrar', () => {
    const { getByTestId } = render(
      <Button data-testid="pure_button">Teste</Button>,
    );
    expect(getByTestId('pure_button')).toBeInTheDocument();
  });
});
