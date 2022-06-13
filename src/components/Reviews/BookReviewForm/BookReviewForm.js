import React, {  useRef } from "react";
import Card from "../../UI/Card";
import styles from "./BookReviewForm.module.css";

const BookReviewForm = (props) => {
  const titleRef = useRef();
  const ratingRef = useRef();
  const descriptionRef = useRef();

  const addReviewHandler = (event) => {
    event.preventDefault();
    props.onAdd({
      title: titleRef.current.value,
      rating: ratingRef.current.value,
      description: descriptionRef.current.value,
    });
  };

  return (
    <React.Fragment>
      <Card>
        <form className="form" onSubmit={addReviewHandler}>
          <div className={styles.control}>
            <div>
              <label>Title</label>
              <input type="text" ref={titleRef}></input>
            </div>
            <div>
              <label>Rating</label>
              <input type="number" min="1" max="5" ref={ratingRef}></input>
            </div>
            <div>
              <label>Description</label>
              <input type="text" ref={descriptionRef}></input>
            </div>
          </div>
          <button className="btn">Submit Review</button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default BookReviewForm;
