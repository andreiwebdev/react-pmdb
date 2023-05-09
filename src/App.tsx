import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import { MoviesProvider } from "./store/MoviesContext";

import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <MoviesProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:imdbID" element={<MoviePage />} />
      </Routes>
    </MoviesProvider>
  );
};

export default App;
