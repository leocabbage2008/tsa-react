import React from 'react';
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
import EventsPage from './pages/EventsPage';
import SourcesPage from './pages/SourcesPage';
import ReferencePage from './pages/ReferencePage';
import ErrorPage from './pages/ErrorPage';
import 'lazysizes';
import './tailwind.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/about' element={<AboutUsPage />} />
        <Route exact path='/festival/recipes' element={<RecipesPage />} />
        <Route exact path='/festival/about' element={<AboutFestivalPage />} />
        <Route exact path='/events' element={<EventsPage />} />
        <Route exact path='/sources' element={<SourcesPage />} />
        <Route exact path='/ref' element={<ReferencePage />} />
        {/* redirects */}
        <Route
          exact
          path='/festival'
          element={<Navigate to='/festival/about' />}
        />
        <Route exact path='/home' element={<Navigate to='/' />} />
        {/* -------------- */}
        {/* Error page */}
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
