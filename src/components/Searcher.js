import React, { Component } from "react";

class Searcher extends Component {
  searchRef = React.createRef();

  obtainData = (e) => {
    e.preventDefault();

    // input value
    const term = this.searchRef.current.value;

    // send value to app.js
    this.props.searchData(term);
  };

  render() {
    return (
      <form onSubmit={this.obtainData}>
        <div className="row">
          <div className="form-group col-md-8">
            <input
              ref={this.searchRef}
              type="text"
              className="form-control form-control-lg"
              placeholder="Search for an Image, ex:soccer"
            ></input>
          </div>
          <div className="form-group col-md-4">
            <input
              type="submit"
              className="btn btn-lg btn-danger btn-block"
              value="Search"
            />
          </div>
        </div>
      </form>
    );
  }
}

export default Searcher;
