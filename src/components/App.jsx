import Home from "pages/Home";
import MovieDetails from "pages/MovieDetails";
import Movies from "pages/Movies";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer, /* toast */ } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Wrapper } from "./App.styled";
import Cast from "./Cast";
import Reviews from "./Reviews";
import SharedLayout from "./SharedLayout";

const App = () => {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<SharedLayout/>} >
          <Route index element={<Home/>}/>
          <Route path="movies" element={<Movies/>} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={ <Cast /> } />
            <Route path="reviews" element={ <Reviews /> } />
          </Route>
        </Route>
      </Routes>
      <ToastContainer autoClose={3000}/>
    </Wrapper>

  );
};

export default App
