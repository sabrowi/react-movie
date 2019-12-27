import React, { Component, Fragment } from "react";
import axios from "axios";
import Loader from "react-loaders";

class DetailFilm extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      is_loaded: false
    };
  }

  componentDidMount() {
    const id = this.props.match.params.imdbId;
    axios
      .get("http://www.omdbapi.com/?apikey=53b2fd1&i=" + id)
      .then(res => {
        console.log(res.data);
        this.setState({ data: res.data, is_loaded: true });
      })
      .catch(err => {
        console.log("Error Cuk : ", err);
      });
  }

  render() {
    const { Title, Year, Actors, Plot, Poster } = this.state.data;
    return (
      <div>
        {this.state.is_loaded ? (
          <Fragment>
            <h1 className="mb-5">{Title + " (" + Year + ")"}</h1>
            <div className="media">
              <img src={Poster} alt={Title} />
              <div className="media-body ml-3">
                <h5>Cast : {Actors}</h5>
                <p>{Plot}</p>
                <button
                  onClick={() => this.props.history.goBack()}
                  className="btn btn-danger"
                >
                  Kembali
                </button>
              </div>
            </div>
          </Fragment>
        ) : (
          <Loader type="line-scale-pulse-out" color="#0062cc" />
        )}
      </div>
    );
  }
}

export default DetailFilm;
