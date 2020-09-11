import React from "react";

const Videos = (props) => {
const { videos } = props;
  
const displayOverview = () => {
  if (videos){
    let overview = [];
    videos.Videos.Overviews.forEach((el) => overview.push(<li><a>{el}</a></li>));
    return overview;
  }
}

const displayTutorials = () => {
  if (videos){
    let tutorials = [];
    videos.Videos.Tutorials.forEach((el) => tutorials.push(<li><a>{el}</a></li>));
    return tutorials;
  }
}
  return (
    <div className="more_resources_child">
    <div>
    <h2>Videos:</h2>
      <br />
    </div>
    <div>
      <h3>Tutorials</h3>
      {displayTutorials()}
    </div>
    <div>
      <h3>Overview</h3>
      {displayOverview()}
    </div>
    </div>
  );
};

export default Videos;