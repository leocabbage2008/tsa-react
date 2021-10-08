import './App.css';
import Layout from './components/Layout';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Layout />
        </Route>
        <Route exact path='/home'>
          <Layout>
            <h1>this is the home boi</h1>
          </Layout>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
