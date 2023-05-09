import { createContext, ReactNode, useState } from "react";

interface Movie {
  imdbID: string;
  Title: string;
  Year: number;
  Poster: string;
  imdbRating: number;
  Images: string[];
}

interface MoviesContextState {
  movies: Movie[];
  searchQuery: string;
}

interface MoviesContextProps {
  children: ReactNode;
}

const MoviesContext = createContext<
  [MoviesContextState, React.Dispatch<React.SetStateAction<MoviesContextState>>]
>([null as any, null as any]);

const MoviesProvider = ({ children }: MoviesContextProps) => {
  const [state, setState] = useState<MoviesContextState>({
    movies: [],
    searchQuery: "",
  });

  return (
    <MoviesContext.Provider value={[state, setState]}>
      {children}
    </MoviesContext.Provider>
  );
};

export { MoviesContext, MoviesProvider };
