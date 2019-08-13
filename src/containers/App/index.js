import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Article from '../../components/Article';
import TaskBoard from '../TaskBoard';
import NotFound from '../NotFound';
import Header from '../../components/Header';
import theme from '../../components/Styles';
import { ThemeProvider } from '@material-ui/styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Article>
        <Header />
        <Switch>
          <Route exact path='/' component={TaskBoard} />
          <Route path='' component={NotFound} />
        </Switch>
      </Article>
    </ThemeProvider>
  );
}

export default App;
