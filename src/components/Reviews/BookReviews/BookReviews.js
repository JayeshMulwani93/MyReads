import React, { useState } from "react";
import { getAllReviews } from "../../../lib/api";
import useHttp from "../../../hooks/use-http";
import { useEffect } from "react";
import LoadingSpinner from "../../UI/LoadingSpinner/LodingSpinner";
import BookReview from "../BookReview/BookReview";
import styles from "./BookReviews.module.css";
import AddBookReview from "../AddBookReview/AddBookReview";
import { useCallback } from "react";
const BookReviews = (props) => {
  const bookId = props.id;
  const {
    sendRequest,
    status,
    data: bookReviews,
    error,
  } = useHttp(getAllReviews, true);

  useEffect(() => {
    sendRequest(bookId);
  }, [sendRequest, bookId]);

  const reviewAddedHandler = useCallback(() => {
    sendRequest(bookId);
  }, [sendRequest, bookId]);

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

  let jsxContent = undefined;
  if (status === "completed" && (!bookReviews || bookReviews.length === 0)) {
    jsxContent = <p>No Reviews Found!</p>;
  } else {
    jsxContent = (
      <ul className={styles.reviews}>
        {bookReviews.map((review) => (
          <li key={review.id}>
            <BookReview
              title={review.title}
              rating={review.rating}
              description={review.description}
            />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <section>
      <AddBookReview bookId={bookId} onAddReview={reviewAddedHandler} />
      {jsxContent}
    </section>
  );
};

export default BookReviews;
