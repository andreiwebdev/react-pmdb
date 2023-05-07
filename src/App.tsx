function App() {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  return (
    <>
      <div className="my-5 max-w-6xl mx-auto">
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
        {/* movies list */}
        <div className="grid grid-cols-4 gap-5">
          {data.map((item, key) => (
            <a
              key={key}
              href="#"
              className="relative block overflow-hidden rounded-xl bg-[url(https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1592&q=80)] bg-cover bg-center bg-no-repeat ransform transition duration-500 hover:scale-105"
            >
              <div className="absolute inset-0 bg-black/25"></div>

              <div className="relative flex items-start justify-between p-4 sm:p-6 lg:p-8">
                <div className="sm:pt-18 pt-12 text-white lg:pt-24">
                  <h3 className="text-xl font-bold sm:text-2xl">Rome</h3>

                  <p className="text-sm">Italy</p>
                </div>

                <span className="inline-flex items-center gap-0.5 rounded-full bg-black px-2 py-1 text-xs font-semibold text-white">
                  4.5
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-yellow-300"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
