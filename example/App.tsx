import React, {FC} from 'react';
import {BrowserRouter} from 'react-router-dom';
import Routes from '../dist';
import routesConfig from './routesConfig';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes routes={routesConfig}/>
    </BrowserRouter>
  );
};

export default App;
