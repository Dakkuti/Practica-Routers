import React from 'react';
import ReactDOM from 'react-dom';
import {Navbar} from './components/Navbar'
import { AppRouter } from './routers/AppRouter';

ReactDOM.render(

    <AppRouter />,
  document.getElementById('root')
);

