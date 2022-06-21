import React from "react";
import GoogleLogin from "react-google-login";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";
import { useHistory } from "react-router-dom";
import styles from "./Login.module.css";
import * as configClass from "../../config/GitHubConfig";

const Login = () => {
  const context = useContext(AuthContext);
  const history = useHistory();

  const successResponse = (response) => {
    context.onLogin(response.profileObj);
    history.push("/books");
  };

  const failureResponse = (response) => {
    console.log("Error while logging in with Google!");
  };

  return (
    <React.Fragment>
      <div className="centered">
        <div className={styles.login}>
          <h1>Please Login to access My library</h1>
          <GoogleLogin
            clientId={configClass.GOOGLE_CLIENT_ID}
            buttonText="Login with Google"
            onSuccess={successResponse}
            onFailure={failureResponse}
            cookiePolicy={"single_host_origin"}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
