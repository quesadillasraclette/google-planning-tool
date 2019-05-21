import React, { Component } from "react";
import { Button, Input, Divider, message } from "antd";
import "../../index.css";
import { SignupComponent } from "../auth/SignupComponent";

export class HomePage extends Component {
  render() {
    return (
      <div className="display_box">
        <div className="left-color">
          <h1 className="left_title">
            From Planning to <br /> Execution in fews click!
          </h1>
          <p class="left-subtext">
            Collaborate between the planning and media team to execute your
            media campaigns.
          </p>
        </div>

        <div className="right-form">
          <SignupComponent {...this.props} />
        </div>
      </div>
    );
  }
}

export default HomePage;
