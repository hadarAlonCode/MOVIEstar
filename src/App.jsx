import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import Catalog from './components/Catalog/Catalog';
import MoviePage from './components/MoviePage/MoviePage';
import Favorites from './components/Favorites/Favorites';

function App() {

  return (
    <Router>
        <div className="main__container">
          <NavBar />
          <Route path="/" exact render={() => <Catalog  />} />
          <Route path="/favorites" exact render={() => <Favorites />} />
          <Route path="/movie/:id" exact render={({ match }) => <MoviePage match={match}/>} />
          
        </div>
      </Router>
  );
}

export default App;
