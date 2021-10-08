import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './components/Layout';

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
