import React from "react";
import GoogleLogin from "react-google-login";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";
import { useHistory } from "react-router-dom";
import styles from "./Login.module.css";

const Login = () => {
  const context = useContext(AuthContext);
  const history = useHistory();
  const responseGoogle = (response) => {
    context.onLogin(response.profileObj);
    history.push("/books");
  };

  return (
    <React.Fragment>
      <div className="centered">
        <div className={styles.login}>
          <h1>Please Login to access My library</h1>
          <GoogleLogin
            clientId="181690030512-r2lu1t2gbesfae1ah3qkn4lgj34psu0r.apps.googleusercontent.com"
            buttonText="Login with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
