/**
 *
 * HomePage
 *
 */

import React, { Component } from "react";

class HomePage extends Component {
  // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>

        <div style={{ color: "#ff1f1f", fontSize: "23px" }}>
          <div
            style={{
              height: "100px",
              backgroundColor: "#fcecd7",
              borderRadius: "4px",
              textAlign: "center",
              paddingTop: "40px",
              paddingBottom: "40px"
            }}
          >
            <span
              style={{
                lineHeight: "20px",
                backgroundColor: "#ffffff",
                color: "#406da2"
              }}
            >
              Hello Colorful World sss 🖍
            </span>
          </div>
        </div>

      </div>
    ); // eslint-disable-line
  }
}

export default HomePage;
