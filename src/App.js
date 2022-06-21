import React from "react";
import { Redirect, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import "./App.css";
import Books from "./pages/Books/BooksPage";
import Login from "./components/Login/Login";
import { useContext } from "react";
import AuthContext from "./store/auth-context";
import Navigation from "./components/Navigation/Navigation";
import ProfilePage from "./pages/Profile/ProfilePage";
import BookDetailsPage from "./pages/BookDetails/BookDetailsPage";
import * as configClass from "./config/GitHubConfig";
import HomePage from "./pages/Home/HomePage";

function App() {
  const ctx = useContext(AuthContext);
  if (!configClass.IS_GOOGLE_LOGIN_ENABLED || ctx.isLoggedIn) {
    return (
      <div>
        <Navigation />
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/books" exact>
            <Books />
          </Route>
          <Route path="/books/:bookId">
            <BookDetailsPage />
          </Route>
          {configClass.IS_GOOGLE_LOGIN_ENABLED && (
            <Route path="/profile" exact>
              <ProfilePage />
            </Route>
          )}

          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </div>
    );
  }

  return <Login />;
}

export default App;
