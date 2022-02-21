import { FC } from 'react';
import { Switch, Route } from 'react-router-dom';

import { SignIn } from '../pages/SignIn';
import { Consultations } from '../pages/Consultations';

const Routes: FC = () => {
  return (
    <Switch>
      <Route path="/" component={SignIn} exact />
      <Route path="/consultations" component={Consultations} />
    </Switch>
  );
};

export default Routes;
