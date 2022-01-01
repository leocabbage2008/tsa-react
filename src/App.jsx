import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import RecipesPage from './pages/RecipesPage';
import AboutFestivalPage from './pages/AboutFestivalPage';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/about' element={<AboutUsPage />} />
        <Route
          exact
          path='/festival'
          element={<Navigate to='/festival/about' />}
        />
        <Route exact path='/festival/about' element={<AboutFestivalPage />} />
        <Route exact path='/festival/recipes' element={<RecipesPage />} />
        <Route exact path='/home' element={<Navigate to='/' />} />
        <Route path='/' element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
