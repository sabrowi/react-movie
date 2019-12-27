import React, { Component } from "react";
import axios from "axios";

class StarWars extends Component {
  constructor() {
    super();
    this.state = {
      list: []
    };
  }

  componentDidMount() {
    axios
      .get("http://www.omdbapi.com/?apikey=53b2fd1&s=star-wars")
      .then(res => {
        console.log(res.data.Search);
        this.setState({ list: res.data.Search });
      })
      .catch(err => {
        console.log("Error cuk : ", err);
      });
  }

  render() {
    return (
      <div>
        <h1>Film Star Wars</h1>
        <ul className="list-unstyled">
          {this.state.list.map((value, index) => {
            return (
              <li key={index} className="media">
                <img
                  src={value.Poster}
                  className="img-fluid img-thumbnail mb-3 mr-2"
                  alt={value.Title}
                  style={{ width: "100px" }}
                />
                <div className="media-body">
                  <h5 className="mb-1">{value.Title}</h5>
                  <strong>Tahun : {value.Year}</strong>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default StarWars;
