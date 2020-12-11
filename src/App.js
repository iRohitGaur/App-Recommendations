import React, { useState } from "react";
import "./styles.css";
import { recommendations } from "./recommendations";

let categories = Object.keys(recommendations);

export default function App() {
  const [category, setCategory] = useState("top");

  function categoryClickHandler(name) {
    console.log(name);
    setCategory(name);
  }

  function OneCategory(props) {
    return (
      <div
        className={props.name === category ? "cat-one selected" : "cat-one"}
        onClick={() => categoryClickHandler(props.name)}
      >
        {props.name}
      </div>
    );
  }

  function OneRec(props) {
    return (
      <div className="rec-one">
        <div className="rec-one-img-holder">
          <img
            className="rec-one-img"
            src={props.rec.poster}
            alt={props.rec.name}
          />
        </div>
        <div className="rec-one-details">
          <div className="name-rating">
            <div className="name">{props.rec.name}</div>
            <div className="rating">Rating: {props.rec.rating}</div>
          </div>
          <div className="description">{props.rec.description}</div>
          <div className="links">
            <a className="link" href={props.rec.web}>
              Web
            </a>
            <a className="link" href={props.rec.android}>
              Android
            </a>
            <a className="link" href={props.rec.ios}>
              iOS
            </a>
          </div>
        </div>
      </div>
    );
  }

  function AppRecommendation(props) {
    return (
      <div className="rec-all">
        {recommendations[props.cat].map((item) => (
          <OneRec key={item.name} rec={item} />
        ))}
      </div>
    );
  }

  return (
    <div className="App">
      <div className="header">
        <h2 className="header-title">App Recommendations</h2>
        <h3 className="header-subtitle">collection of best apps</h3>
        <div className="cat-all">
          {categories.map((item) => (
            <OneCategory key={item} name={item} />
          ))}
        </div>
      </div>
      <AppRecommendation key={category} cat={category} />

      <div className="footer">
        Made by <a href="https://rohit.xyz">Rohit Gaur</a> with{" "}
        <i className="fab fa-react"></i> and <i className="fa fa-heart"></i>
      </div>
    </div>
  );
}
