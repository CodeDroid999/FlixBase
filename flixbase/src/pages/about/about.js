import React, { useEffect, useState } from "react";
import "./about.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import MovieList from "../../components/movieList/movieList";

const About = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=c4418d6aefd19fe739aeb5a0bc400aa1&language=en-US"
    )
      .then((res) => res.json())
      .then((data) => setPopularMovies(data.results));
  }, []);

  return (
    <>
      <div className="poster">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
        >
          {popularMovies.map((movie) => (
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={`/movie/${movie.id}`}
            >
              <div className="posterImage">
                <img
                  alt=""
                  src={`https://image.tmdb.org/t/p/original${
                    movie && movie.backdrop_path
                  }`}
                />
              </div>
              <div className="posterImage__overlay">
              <div className="posterImage__title">
                  Flixbase
                </div>
                <div className="posterImage__title">
                  Lights, Popcorn, Action!
                </div>
                                <div className="posterImage__description">
                  Dive into the world of movies with Flixbase, the go-to
                  platform for all your cinematic needs. Whether you're a film
                  aficionado, a casual viewer, or a budding filmmaker, Flixbase
                  is here to bring you an unparalleled movie experience.
                </div>
              </div>
            </Link>
          ))}
        </Carousel>
        <MovieList />
      </div>
    </>
  );
};

export default About;
