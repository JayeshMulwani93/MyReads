import Books from "../../components/Books/Books";
import useHttp from "../../hooks/use-http";
import { getAllBooks } from "../../lib/api";
import { useEffect } from "react";
import LoadingSpinner from "../../components/UI/LoadingSpinner/LodingSpinner";

const BooksPage = () => {
  const {
    sendRequest,
    status,
    data: loadedBooks,
    error,
  } = useHttp(getAllBooks, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

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

  if (status === "completed" && (!loadedBooks || loadedBooks.length === 0)) {
    return <p>No books Found!</p>;
  }

  return <Books books={loadedBooks}/>;
};

export default BooksPage;
