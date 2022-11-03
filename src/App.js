import React from "react";
import Row from "./components/Row";

import requests from "./requests";

const App = () => {
  return (
    <div>
      <h1>App</h1>
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Trending" fetchUrl={requests.fetchTrending} />
    </div>
  );
};

export default App;
