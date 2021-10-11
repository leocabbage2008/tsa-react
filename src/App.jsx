import './App.css';
import Layout from './components/Layout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Layout>
            <h1>This is the home page.</h1>
          </Layout>
        </Route>
        <Route exact path='/about'>
          <Layout>
            <h1>This is the about page.</h1>
          </Layout>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
