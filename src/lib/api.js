const FIREBASE_DOMAIN = "https://awesome-books-2298e-default-rtdb.asia-southeast1.firebasedatabase.app";

export async function getAllBooks() {
  const response = await fetch(`${FIREBASE_DOMAIN}/books.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch Books.");
  }

  const transformedBooks = [];

  for (const key in data) {
    const BookObj = {
      id: key,
      ...data[key],
    };

    transformedBooks.push(BookObj);
  }

  return transformedBooks;
}

export async function getSingleBook(bookId) {
  const response = await fetch(`${FIREBASE_DOMAIN}/books/${bookId}.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch Book.");
  }

  const loadedBook = {
    id: bookId,
    ...data,
  };

  return loadedBook;
}

export async function addReview(requestData) {
  const response = await fetch(
    `${FIREBASE_DOMAIN}/reviews/${requestData.bookId}.json`,
    {
      method: "POST",
      body: JSON.stringify(requestData.reviewData),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not add review.");
  }

  return { reviewId: data.name };
}

export async function getAllReviews(BookId) {
  const response = await fetch(`${FIREBASE_DOMAIN}/reviews/${BookId}.json`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not get reviews.");
  }

  const transformedreviews = [];

  for (const key in data) {
    const reviewObj = {
      id: key,
      ...data[key],
    };

    transformedreviews.push(reviewObj);
  }

  return transformedreviews;
}
