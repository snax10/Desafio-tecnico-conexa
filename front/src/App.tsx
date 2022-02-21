import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from './styles/global';
import Routes from './Routes';
import { AuthProvider } from './contexts/authContext';

const App: FC = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Routes />
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
