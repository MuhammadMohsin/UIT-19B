import React from "react";
import MyComp from "./MyComp";

class Greetings extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello Everyone!</h1>
        <MyComp />
      </div>
    );
  }
}

export default Greetings;
