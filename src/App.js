import React, { Component } from "react";
import Searcher from "./components/Searcher";
import Results from "./components/Results";

/* const apiKey1 = "15604406-ef22fe9d807bace224d43b79f";
const apiKey2 = "15603947-038295202b5d36e5d1213a2d1"; */

class App extends Component {
  state = {
    term: "",
    images: [],
    page: "",
  };

  scroll = () => {
    const element = document.querySelector(".jumbotron");
    element.scrollIntoView("smooth", "end");
  };

  previousPage = () => {
    // read state
    let page = this.state.page;

    // if page is 1, do not go back

    if (page === 1) return null;

    // add 1 to the actual page
    page -= 1;

    // add state change
    this.setState(
      {
        page,
      },
      () => {
        this.consultAPI();
        this.scroll();
      }
    );
  };

  nextPage = () => {
    // read state
    let page = this.state.page;

    // add 1 to the actual page
    page += 1;

    // add state change
    this.setState(
      {
        page,
      },
      () => {
        this.consultAPI();
        this.scroll();
      }
    );
  };

  consultAPI = () => {
    const term = this.state.term;
    const page = this.state.page;
    const url = `https://pixabay.com/api/?key=15603947-038295202b5d36e5d1213a2d1&q=${term}&per_page=30&page=${page}`;

    fetch(url)
      .then((response) => response.json())
      .then((result) => this.setState({ images: result.hits }));
  };

  searchData = (term) => {
    this.setState(
      {
        term: term,
        page: 1,
      },
      () => {
        this.consultAPI();
      }
    );
  };

  render() {
    return (
      <div className="app container">
        <div className="jumbotron">
          <p className="lead text-center">Search Images</p>
          <Searcher searchData={this.searchData} />
        </div>
        <div className="row justify-content-center">
          <Results
            images={this.state.images}
            previousPage={this.previousPage}
            nextPage={this.nextPage}
          />
        </div>
      </div>
    );
  }
}

export default App;
