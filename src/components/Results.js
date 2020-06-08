import React, { Component } from "react";
import Image from "./Image";
import Pagination from "./Pagination";

class Results extends Component {
  showImages = () => {
    const images = this.props.images;

    if (images.length === 0) return null;

    return (
      <React.Fragment>
        <div className="col-12 p-5 row">
          {images.map((image) => (
            <Image key={image.id} image={image} />
          ))}
        </div>
        <Pagination
          previousPage={this.props.previousPage}
          nextPage={this.props.nextPage}
        />
      </React.Fragment>
    );
  };

  render() {
    return <React.Fragment>{this.showImages()}</React.Fragment>;
  }
}

export default Results;
