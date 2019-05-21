import React, { Component } from "react";
import { Row, Col, Card } from "antd";

export class FetchApi extends Component {
  state = {
    content: []
  };

  async componentDidMount() {
    const url =
      "https://newsapi.org/v2/top-headlines?" +
      "country=us&" +
      "apiKey=17085768a8554998a1db42f66e763f28";
    const response = await fetch(url);
    const data = await response.json();
    const articles = data.articles;
    const c = [];
    console.log(articles);

    articles.forEach(doc => {
      c.push(doc.articles);
      console.log(c);
    });
    //this.setState({ content: c });

    this.setState({ content: articles });
    // this.setState({ content: data.articles[0] });
  }

  render() {
    const { content } = this.state;
    return (
      <div>
        <div> {this.state.content.title}</div>
        <div> {this.state.content.description}</div>
        <div> {this.state.content.url}</div>
      </div>
    );
  }
}

export default FetchApi;
