import React, { createContext, useState } from "react";

import { getDuration } from "services/duration";
import { getFullYear, dateMonthFormat } from "services/date";
export const MovieContext = createContext();
const API_Key = process.env.REACT_APP_MDB_API_KEy;

const API_Base_url = `${process.env.REACT_APP_API_URL}`;
const API_URL = `${process.env.REACT_APP_API_URL}trending/all/day?api_key=${API_Key}`;
const API_Search = `${process.env.REACT_APP_API_URL}search/multi?api_key=${API_Key}`;
const poster_url = process.env.REACT_APP_MOVIE_POSTER_URL;
const backdrop_path = process.env.REACT_APP_MOVIE_BACKDROP_PATH;

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([]);
  const [moviesFilteredData, setmoviesFilteredData] = useState([]);
  const [mediaType, setMediaType] = useState("");
  const [movieObj, setMovieObj] = useState({});
  const handleMovieObj = (movie) => {
    return {
      backdrop: `${backdrop_path}${movie.backdrop_path}`,
      poster: `${poster_url}${movie.poster_path}`,
      title: movie.media_type === "movie" ? movie.title : movie.name,
      overview: movie.overview,
      duration: getDuration(movie.runtime),
      genres: movie.genres?.reduce(
        (accumulator, currentValue, currentIndex) =>
          accumulator +
          currentValue.name +
          (currentIndex < movie.genres.length - 1 ? ", " : ""),
        "",
      ),
      releasedYear: movie.release_date
        ? dateMonthFormat(movie.release_date)
        : "",
      releasedDate: movie.release_date ? getFullYear(movie.release_date) : "",
      vote: movie.vote_average?.toFixed(1),
      status: movie.status,
    };
  };
  const data = {
    movieObj,
    moviesFilteredData,
    mediaType,
    setMediaType,
    getMovies: async () => {
      fetch(`${API_URL}`)
        .then((data) => data.json())
        .then((data) => {
          setMovies(data.results);
          setmoviesFilteredData(data.results);
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
    searchMovies: async (query) => {
      debugger;
      if (query) {
        fetch(`${API_Search}&query=${query}`)
          .then((data) => data.json())
          .then((data) => setmoviesFilteredData(data.results))
          .catch((err) => {
            console.log(err.message);
          });
      } else {
        setmoviesFilteredData(movies);
      }
    },

    filterMovies: async (type) => {
      const movieData = type
        ? movies.filter((movie) => movie.media_type === type)
        : movies;
      setmoviesFilteredData(movieData);
    },
    getMovieDetails: async (id, type) => {
      debugger;
      fetch(`${API_Base_url}${type}/${id}?api_key=${API_Key}`)
        .then((data) => data.json())
        .then((data) => {
          debugger;
          const obj = handleMovieObj(data);
          setMovieObj(obj);
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
  };
  return (
    <MovieContext.Provider value={{ ...data }}>
      {props.children}
    </MovieContext.Provider>
  );
};
