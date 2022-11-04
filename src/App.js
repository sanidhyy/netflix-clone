import React from "react";
import Row from "./components/Row";
import requests from "./requests";

import "./App.css";
import Banner from "./components/Banner";
import Nav from "./components/Nav";

const App = () => {
  return (
    <div className="app">
      {/* Head */}
      <Nav />
      <Banner />

      {/* Sections */}
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Commedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumantaries} />
    </div>
  );
};

export default App;
