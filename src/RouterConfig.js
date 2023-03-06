import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/layout/Header";
import { Movies } from "./pages/Movies";
import { MovieDetails } from "./pages/MovieDetails";

const RouterConfig = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route
            path="/details/:media_type/:movie_id"
            element={<MovieDetails />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RouterConfig;
