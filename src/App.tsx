import Container from "./Components/Common/Container";
import MoviesList from "./Components/Movies/MoviesList";
import Search from "./Components/Search/Search";
import { MoviesProvider } from "./store/MoviesContext";

const App = () => {
  return (
    <MoviesProvider>
      <Container>
        <Search />
        <MoviesList />
      </Container>
    </MoviesProvider>
  );
};

export default App;
