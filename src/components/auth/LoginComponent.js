import React, { Component } from "react";
import { Button, Input, Divider, message } from "antd";
import "./auth.css";
import { login, loginWithGoogle } from "../../services/firebase";
import { Link } from "react-router-dom";

export class LoginComponent extends Component {
  state = {
    newUser: {}
  };

  handleChange = event => {
    const { newUser } = this.state;
    newUser[event.target.name] = event.target.value;
    this.setState({ newUser });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { newUser } = this.state;
    const { email, password } = newUser;
    login(email, password)
      .then(r => {
        message.success("Welcome");
        console.log(r);
      })
      .catch(e => {
        message.error(e.message);
      });
  };

  loginWithGoogle = () => {
    loginWithGoogle()
      .then(res => {
        message.success(`Welcome ${res.user.email}`);
        this.props.history.push("/content");
      })
      .catch(e => {
        message.error(e.message);
      });
  };

  render() {
    return (
      <div className="signup__section">
        <div className="all_color">
          <form onSubmit={this.handleSubmit}>
            <h1 className="right_signup">Log in </h1>
            <p>
              <Link to="/home">or sign-up your account</Link>
            </p>
            <Input type="email" onChange={this.handleChange} name="email" />
            <Input
              type="password"
              onChange={this.handleChange}
              name="password"
            />
            <Button htmlType="submit" block>
              Login
            </Button>
          </form>
          <Divider />
          <Button type="danger" block onClick={this.loginWithGoogle}>
            {" "}
            Login with Google
          </Button>
        </div>
      </div>
    );
  }
}

export default LoginComponent;
