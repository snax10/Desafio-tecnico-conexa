import styled from 'styled-components';

export const ConsultationsContainer = styled.main`
  width: 100%;
  max-width: 1366px;
  margin: 2rem auto 4.5rem;
  padding: 0 1rem;

  h1 {
    font-weight: bold;
    color: var(--blue-dark);
    margin: 0 0 2.5rem 1rem;
    font-size: 3rem;

    @media (max-width: 768px) {
      font-size: 1.75rem;
      margin-left: 0;
    }
  }
`;
