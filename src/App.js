import { Route, Switch } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';

import Header from './components/header/header.component';
import HomePage from './pages/HomePage/HomePage.component';

function App() {
  return (
    <div className="app">
      <div className="overlay"></div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
