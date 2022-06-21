import React from "react";
import styles from "./BookReview.module.css";

const BookReview = (props) => {
  return (
    <React.Fragment>
      <div className={styles.item}>
        <figure>
          <blockquote>
            <p>{props.title}</p>
          </blockquote>
          <figcaption>{props.rating}/5</figcaption>
          <p>{props.description}</p>
        </figure>
      </div>
    </React.Fragment>
  );
};

export default BookReview;
