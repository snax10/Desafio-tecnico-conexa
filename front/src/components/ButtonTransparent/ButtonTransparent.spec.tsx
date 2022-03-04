import React from 'react';
import { render } from '@testing-library/react';
import { ButtonTransparent } from '.';

describe('Teste do component Button Transparent', () => {
  test('renderização sem quebrar', () => {
    const { getByTestId } = render(
      <ButtonTransparent data-testid="button_transparent">
        teste
      </ButtonTransparent>,
    );
    expect(getByTestId('button_transparent')).toBeInTheDocument();
  });
});
