import React from "react";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";
import UserProfile from "../../components/Profile/UserProfile";
import Card from "../../components/UI/Card";

const ProfilePage = () => {

  return (
    <div className="centered">
      <UserProfile />
    </div>
  );
};

export default ProfilePage;
