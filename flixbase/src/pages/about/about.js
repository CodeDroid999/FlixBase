/* eslint-disable react/style-prop-object */
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
                <div className="posterImage__title">Introducing Flixbase</div>
                <div className="posterImage__title">
                  Lights, Popcorn, Action!
                </div>
                <div className="posterImage__description">
                  <p>
                    Dive into the world of movies with Flixbase, the go-to
                    platform for all your cinematic needs. Whether you're a film
                    aficionado, a casual viewer, or a budding filmmaker,
                    Flixbase is here to bring you an unparalleled movie
                    experience.
                  </p>
                </div>
                <div
                  class="posterImage__description"
                  style={{ "margin-top": "1rem" }}
                >
                  <span className="movie__homeButton movie__Button">
                    <Link to="/home" style={{ "text-decoration": "none" }}>
                      Explore
                    </Link>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </Carousel>
        <div className="about__card">
          <div className="posterImage__title">Timeline_____</div>
          Flixbase is a Portfolio Project for ALX school, a place where we
          have honed our skills as aspiring software engineers. This project has
          been an integral part of our learning journey, allowing us to apply
          the knowledge and techniques we've gained throughout our coursework.
          We are grateful to ALX for providing us with the
          opportunity to work on meaningful projects like Flixbase, empowering
          us to explore our creativity and showcase our abilities.
        </div>
        <div className="about__card">
          <div className="posterImage__title">Inspiration_____</div>
          Flixbase is more than just a project for us—it's a passion project
          born out of our deep love for movies and the desire to create a
          platform that truly celebrates the magic of cinema. Our journey began
          as a group of avid movie enthusiasts, driven by the idea of building a
          comprehensive movie database service that would bring together film
          lovers from all walks of life. We wanted to create a place where
          people could immerse themselves in the captivating world of movies,
          discover new favorites, and connect with like-minded individuals who
          share the same passion.
        </div>
        <div className="about__card">
          <div className="posterImage__title">The Team_____</div>
          <p>John Mwega -<Link to="https://github.com/CodeDroid999" style={{'text-decoration':'none'}}> GitHub </Link> </p>
          <p>Lola Ola - GitHub </p>
          <p>Jelil Dumbah- GitHub </p>
        </div>
        <div className="about__card">
          <div className="posterImage__title">Source_____</div>
          To explore the code and contribute to the development of Flixbase,
          please visit our{" "}
          <Link to="https://github.com/CodeDroid999/FlixBase">
            {" "}
            GitHub repository{" "}
          </Link>
          . We encourage collaboration and welcome any feedback, suggestions, or
          contributions from the community. Thank you for joining us on this
          cinematic journey. Let's dive into the world of movies together with
          Flixbase!
        </div>

        <MovieList />
      </div>
    </>
  );
};

export default About;
