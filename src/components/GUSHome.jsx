import React, { useState, useEffect } from "react";
import GUSHeader from "./page/GUSHeader";
import GUSFooter from "./page/GUSFooter";
import GUSACard from "./page/card/GUSACard";
import GUSNACard from "./page/card/GUSNACard";
import "./GUSStyle.css";

const GUSHome = function () {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [location, setLocation] = useState("");
  const [bio, setBio] = useState("");
  const [userInput, setUserInput] = useState("");
  const [repos, setRepos] = useState("");
  const [blog, setBlog] = useState("");
  const [followers, setFollowers] = useState("");
  const [html_url, setUrl] = useState("");
  const [notFound, setNotFound] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/github")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  const setData = ({
    name,
    login,
    avatar_url,
    location,
    bio,
    public_repos,
    blog,
    html_url,
    followers,
  }) => {
    setName(name);
    setUserName(login);
    setAvatar(avatar_url);
    setLocation(location);
    setBio(bio);
    setRepos(public_repos);
    setBlog(blog);
    setUrl(html_url);
    setFollowers(followers);
  };

  const handleSearchUser = (e) => {
    setUserInput([e.target.value]);
  };
  const handleSubmitUser = () => {
    fetch(`https://api.github.com/users/${userInput}`)
      .then((resp) => resp.json())
      .then((userData) => {
        if (userData.message) {
          setNotFound(userData.message);
        } else {
          setData(userData);
          setNotFound(null);
        }
      });
  };
  return (
    <div className="main-content">
      <GUSHeader
        handleSubmitUser={handleSubmitUser}
        handleSearchUser={handleSearchUser}
      />
      {notFound ? (
        <GUSNACard />
      ) : (
        <GUSACard
          avatar={avatar}
          name={name}
          location={location}
          userName={userName}
          bio={bio}
          repos={repos}
          blog={blog}
          url={html_url}
          followers={followers}
        />
      )}
      <GUSFooter />
    </div>
  );
};
export default GUSHome;
