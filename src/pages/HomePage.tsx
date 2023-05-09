import Container from "../Components/Common/Container";
import MoviesList from "../Components/Movies/MoviesList";
import Search from "../Components/Search/Search";

const HomePage = () => {
  return (
    <Container extraClasses="">
      <Search />
      <MoviesList />
    </Container>
  );
};

export default HomePage;
