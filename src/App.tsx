import MoviesList from "./Components/Movies/MoviesList";

const App = () => {
  return (
    <>
      <div className="my-5 px-4 xs:px-0 xs:max-w-lg lg:max-w-6xl mx-auto">
        {/* search input */}
        <label
          htmlFor="UserEmail"
          className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-yellow-400 mb-10"
        >
          <input
            type="email"
            id="UserEmail"
            placeholder="Email"
            className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 dark:text-white sm:text-sm"
          />

          <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-white transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs dark:text-gray-200">
            Search a movie:
          </span>
        </label>
        <MoviesList />
      </div>
    </>
  );
};

export default App;
