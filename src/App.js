import { GlobalStyle } from './globalStyle';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home, About, Work, Contact, Navbar } from './components/index';

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/work" exact component={Work} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
