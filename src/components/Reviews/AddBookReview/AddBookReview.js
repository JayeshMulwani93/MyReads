import React from "react";
import { useState } from "react";
import { Prompt } from "react-router-dom";
import styles from "./AddBookReview.module.css";
import BookReviewForm from "../BookReviewForm/BookReviewForm";
import { addReview } from "../../../lib/api";
import { useEffect } from "react";
import LoadingSpinner from "../../UI/LoadingSpinner/LodingSpinner";
import useHttp from "../../../hooks/use-http";

const AddBookReview = (props) => {
  const { sendRequest, status, error } = useHttp(addReview);
  const [isAddReviewClicked, setIsAddReviewClicked] = useState(false);

  const onAddReviewClickHandler = () => {
    setIsAddReviewClicked(true);
  };

  const onAddReview = (review) => {
    sendRequest({
      bookId: props.bookId,
      reviewData: review,
    });
  };

  useEffect(() => {
    if (status === "completed") {
      setIsAddReviewClicked(false);
      props.onAddReview();
    }
  }, [status]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (isAddReviewClicked) {
    return (
      <section className={styles.reviews}>
        <Prompt
          when={isAddReviewClicked}
          message="Are you sure? All Data entered will be lost!"
        />
        <div className={styles["add-review"]}>
          <BookReviewForm onAdd={onAddReview}></BookReviewForm>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.reviews}>
      <button onClick={onAddReviewClickHandler} className="btn">
        Add Review
      </button>
    </section>
  );
};

export default AddBookReview;
