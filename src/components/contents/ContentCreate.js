import React, { Component } from "react";
import ContentDetail from "./ContentDetail";

export class ContentCreate extends Component {
  render() {
    return <ContentDetail {...this.props} />;
  }
}

export default ContentCreate;
