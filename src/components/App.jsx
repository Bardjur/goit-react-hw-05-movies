import React, {lazy, Suspense} from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MagnifyingGlass } from 'react-loader-spinner';
import { Wrapper } from "./App.styled";

const Home = lazy(() => import("pages/Home"));
const MovieDetails = lazy(() => import("pages/MovieDetails"));
const Movies = lazy(() => import("pages/Movies"));
const Cast = lazy(() => import("./Cast"));
const Reviews = lazy(() => import("./Reviews"));
const SharedLayout = lazy(() => import("./SharedLayout"));

const App = () => {
  return (
    <Wrapper>
      <Suspense fallback={<MagnifyingGlass glassColor='#c0efff' color='#3C401D'/>}>
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
      </Suspense>
      <ToastContainer autoClose={3000}/>
    </Wrapper>

  );
};

export default App
