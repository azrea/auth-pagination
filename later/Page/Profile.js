import React from "react";
import { Profilebox } from "./StyledPage";

const Profile = ({ avatar_url, html_url, login }) => {
  return (
    <Profilebox>
      <img src={avatar_url} alt={login} />

      <h2>{login}</h2>

      <a href={html_url}>VIEW PROFILE</a>
    </Profilebox>
  );
};

export default Profile;
