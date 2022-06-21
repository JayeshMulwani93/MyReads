import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import * as configClass from "../../config/GitHubConfig";

const Navigation = () => {
  const context = useContext(AuthContext);
  const history = useHistory();
  const logoutHandler = () => {
    context.onLogout();
    history.push("/");
  };

  return (
    <header className={styles.header}>
      <h2 className={styles.logo}>My Reads</h2>
      <div className={styles.nav}>
        <ul>
          <li>
            <NavLink to={"/books"}>Books</NavLink>
          </li>
          {configClass.IS_GOOGLE_LOGIN_ENABLED && (
            <React.Fragment>
              <li>
                <NavLink to={"/profile"}>Profile</NavLink>
              </li>
              <li>
                <NavLink to="/" onClick={logoutHandler} className="btn">
                  Logout
                </NavLink>
              </li>
            </React.Fragment>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Navigation;
