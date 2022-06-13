import React from "react";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import "./App.css";
import Books from "./pages/Books/BooksPage";
import About from "./pages/About/AboutPage";
import Login from "./components/Login/Login";
import { useContext } from "react";
import AuthContext from "./store/auth-context";
import Navigation from "./components/Navigation/Navigation";
import ProfilePage from "./pages/Profile/ProfilePage";
import BookDetailsPage from "./pages/BookDetails/BookDetailsPage";

function App() {
  const ctx = useContext(AuthContext);
  if (ctx.isLoggedIn) {
    return (
      <div>
        <Navigation />
        <Switch>
          <Route path="/books" exact>
            <Books />
          </Route>
          <Route path="/books/:bookId">
            <BookDetailsPage />
          </Route>
          <Route path="/profile" exact>
            <ProfilePage />
          </Route>
        </Switch>
      </div>
    );
  }

  return <Login />;
}

export default App;
