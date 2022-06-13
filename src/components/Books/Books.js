import { NavLink } from "react-router-dom";
import styles from "./Books.module.css";
import React from "react";

const Books = (props) => {
  return (
    <div className="centered">
      <ul className={styles.list}>
        {props.books.map((book) => {
          return (
            <li className={styles.item} key={book.id}>
              <figure>
                <blockquote>
                  <p>{book.name}</p>
                </blockquote>
                <figcaption>{book.author}</figcaption>
              </figure>
              <NavLink className='btn' to={`/books/${book.id}`}>View Details</NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Books;