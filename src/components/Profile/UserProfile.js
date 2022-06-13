import AuthContext from "../../store/auth-context";
import styles from "./UserProfile.module.css";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import React from "react";
const UserProfile = () => {
  const context = useContext(AuthContext);
  const profile = context.profile;

  return (
    <React.Fragment>
      <div className={styles.profile}>
        <p>Name: {profile.name}</p>
        <p>Email: {profile.email}</p>
        <img src={profile.imageUrl}></img>
      </div>
    </React.Fragment>
  );
};

export default UserProfile;
