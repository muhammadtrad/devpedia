// main
import React from "react";
import Resources from "./Resources";
import SearchBox from './SearchBox';
import GithubInfo from './GithubInfo';

const Main = () => {


  return (
    <div className="main">
      <SearchBox />
      <GithubInfo />
      <Resources />
    </div>
  );
};

export default Main;
