import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import HighlightedBook from "../../components/HighlightedBook/HighlightedBook";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import BookReviews from "../../components/Reviews/BookReviews/BookReviews";
import { getSingleBook } from "../../lib/api";
import useHttp from "../../hooks/use-http";
import LoadingSpinner from "../../components/UI/LoadingSpinner/LodingSpinner";
const BookDetailsPage = () => {
  const { bookId } = useParams();
  const {
    sendRequest,
    status,
    error,
    data: bookDetails,
  } = useHttp(getSingleBook, true);

  useEffect(() => {
    sendRequest(bookId);
  }, []);

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

  if (status === "completed" && (!bookDetails || bookDetails === null)) {
    return <p>No Book Found!</p>;
  }

  return (
    <React.Fragment>
      <HighlightedBook
        name={bookDetails.name}
        author={bookDetails.author}
        description={bookDetails.description}
      />
      <div className="centered">
        <Route path={`/books/${bookId}`} exact>
          <Link to={`/books/${bookId}/reviews`} className="btn">
            Show Reviews
          </Link>
        </Route>
        <Route path={`/books/${bookId}/reviews`} exact>
          <BookReviews id={bookId} />
        </Route>
      </div>
    </React.Fragment>
  );
};

export default BookDetailsPage;
