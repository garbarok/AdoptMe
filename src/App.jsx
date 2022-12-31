import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import AdoptedPetContext from "./AdoptedPetContext";
// Imports the `Details` and `SearchParams` components from the local `./Details` and `./SearchParams` modules, respectively
import Details from "./Details";
import SearchParams from "./SearchParams";

// Creates a new `QueryClient` instance with default options that set the stale time and cache time of queries to infinity
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

// Defines the `App` component, which renders a `BrowserRouter` component with a `QueryClientProvider` component that wraps a header and a set of routes
const App = () => {
  const adoptedPets = useState(null);
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AdoptedPetContext.Provider value={adoptedPets}>
          <header>
            {/* Renders a `Link` component that links to the root path of the application */}
            <Link to="/">Adopt Me!</Link>
          </header>
          {/* Renders a `Routes` component with two `Route` components: one for the `/details/:id` path and one for the root path */}
          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </AdoptedPetContext.Provider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

// Gets a reference to the DOM element with the ID "root"
const container = document.getElementById("root");

// Creates a root for the `App` component with the `createRoot` function
const root = createRoot(container);

// Renders the `App` component inside the root
root.render(<App />);
