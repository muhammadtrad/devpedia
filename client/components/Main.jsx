// main
import React from "react";
import Resources from "./Resources";
import NavigateBar from './NavigateBar';
import SearchBox from './SearchBox';
import GithubInfo from './GithubInfo';

const Main = () => {


  return (
    <div className="main">
      <NavigateBar />
      <SearchBox />
      <GithubInfo />
      <Resources />
    </div>
  );
};

export default Main;
