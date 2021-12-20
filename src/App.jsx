import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import RecipesPage from './pages/RecipesPage';
import AboutFestivalPage from './pages/AboutFestivalPage';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route exact path='/about'>
          <AboutUsPage />
        </Route>
        <Route exact path='/festival'>
          <Redirect to="/festival/about" />
        </Route>
        <Route exact path='/festival/about'>
          <AboutFestivalPage />
        </Route>
        <Route exact path='/festival/recipes'>
          <RecipesPage />
        </Route>
        <Route exact path='/home'>
          <Redirect to="/" />
        </Route>
        <Route path='/'>
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
