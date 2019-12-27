import React, { Component } from "react";
import axios from "axios";
import DetailFilm from "./DetailFilm";
import { Route, Switch, Link } from "react-router-dom";

class Avengers extends Component {
  constructor() {
    super();
    this.state = {
      list: []
    };
  }

  componentDidMount() {
    console.log(this.props);
    axios
      .get("http://www.omdbapi.com/?apikey=53b2fd1&s=Avengers")
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
        <Switch>
          <Route exact path="/avengers">
            <h1>Film Avengers</h1>
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
                      <Link
                        className="nav-link"
                        to={"/avengers/" + value.imdbID}
                      >
                        Detail
                      </Link>
                    </div>
                  </li>
                );
              })}
            </ul>
          </Route>
          <Route path="/avengers/:imdbId" component={DetailFilm} />
        </Switch>
      </div>
    );
  }
}

export default Avengers;
