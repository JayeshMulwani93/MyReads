import React from "react";
import classes from "./HighlightedBook.module.css";

const HighlightedBook = (props) => {
  return (
    <React.Fragment>
      <figure className={classes.book}>
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        <figcaption>{props.author}</figcaption>
      </figure>
    </React.Fragment>
  );
};

export default HighlightedBook;
