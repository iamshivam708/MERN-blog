import React, { Component } from "react";
import Header from "./Header";

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="login" >
        <Header />
        <div
          className="container mt-5 px-5 py-5"
          style={{
            backgroundColor: "#FFDEE9",
            backgroundImage:
              "linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%)"
          }}
        >
          <div className="row">
            <div className="col-6 px-3" align="center">
              <form className="mt-3">
                <img src="/logo.png" alt="" width="72" height="57" />
                <h1 class="h3 mb-3 fw-normal">Sign Up</h1>
                <div class="form-floating">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingName"
                  />
                  <label for="floatingName">Name</label>
                </div>
                <div class="form-floating">
                  <input
                    type="email"
                    class="form-control"
                    id="floatingInput"
                  />
                  <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating">
                  <input
                    type="password"
                    class="form-control"
                    id="floatingPassword"
                  />
                  <label for="floatingPassword">Password</label>
                </div>
                <button class="w-100 btn btn-lg btn-primary mt-3" type="submit">
                  Sign Up
                </button>
              </form>
            </div>
            <div className="col-6">
              <img
                src="/sign.gif"
                width="100%"
                height="100%"
                alt="prop"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
