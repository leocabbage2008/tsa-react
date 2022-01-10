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
import TraditionsPage from './pages/TraditionsPage';
import EventsPage from './pages/EventsPage';
import ErrorPage from './pages/ErrorPage';
import Layout from './components/Layout';

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
        <Route
          exact
          path='/test'
          element={
            <Layout>
              <div style={{ height: '1000000px' }} />
            </Layout>
          }
        />
        <Route exact path='/festival/about' element={<AboutFestivalPage />} />
        <Route exact path='/festival/recipes' element={<RecipesPage />} />
        <Route exact path='/festival/traditions' element={<TraditionsPage />} />
        <Route exact path='/events' element={<EventsPage />} />
        <Route exact path='/home' element={<Navigate to='/' />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
