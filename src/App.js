import logo from "./logo.svg";
import "./App.css";
import { useEffect, useRef, useState } from "react";
import api from "./api/axiosConfig";
import Layout from "./Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./component/home/Home.component";
import Trailer from "./component/trailer/Trailer.component";
import Review from "./component/review/Review.component";
import Reviews from "./component/reviews/Reviews.component";

function App() {
   const [movies, setMovies] = useState([]);
   const [reviews, setReviews] = useState([]);
   const isCancelled = useRef(false);
   const [movie, setMovie] = useState();
   const getMovieData = async (movieId) => {
     
      try 
      {
          const response = await api.get(`/api/v1/movies/imdb/${movieId}`);
  
          const singleMovie = response.data;
  
          setMovie(singleMovie);
  
          setReviews(singleMovie.reviewIds);
          
  
      } 
      catch (error) 
      {
        console.error(error);
      }
  
    }
   const getMovies = async () => {
      try {
         const response = await api.get("/api/v1/movies");
         setMovies(response.data);
         console.log(response.data);
      } catch (error) {
         console.log(error);
      }
   };
   useEffect(() => {
      if (!isCancelled.current) {
         getMovies();
      }
      return () => {
         isCancelled.current = true;
      };
   }, []);
   return (
      <div className="App">
         <Routes>
            <Route path="/" element={<Layout />}>
               <Route index element={<Home movies={movies} />}></Route>
               <Route path="/trailer/:ytTrailerId" element={<Trailer />} />
               <Route
                  path="/reviews/:movieId"
                  element={<Reviews getMovieData={getMovieData} movie={movie} reviews={reviews} setReviews={setReviews}/>}
               />
            </Route>
         </Routes>
      </div>
   );
}

export default App;
