import React from "react";

const Text = (props) => {
const { text } = props;

const displayOverview = () => {
  if (text){
    let overview = [];
    text.Sites.Overviews.forEach((el) => overview.push(<li><a>{el}</a></li>));
    return overview;
  }
}

const displayTutorials = () => {
  if (text){
    let tutorials = [];
    text.Sites.Tutorials.forEach((el) => tutorials.push(<li><a>{el}</a></li>));
    return tutorials;
  }
}
  return (
    <div className="more_resources_child">
    <div>
    <h2>Text-based:</h2>
      <br />
    </div>
    <div>
      <h3>Tutorials</h3>
      {displayTutorials()}
    </div>
    <div>
      <h3>Overviews</h3>
      {displayOverview()}
    </div>
    </div>
  );
};

export default Text;