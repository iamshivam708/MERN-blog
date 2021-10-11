import React, { Component } from "react";
import Header from "./Header";
import axios from 'axios';

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name:"",
      email:"",
      password:""
    };
  }

handleSubmit = (e) =>{
  e.preventDefault();
  var user = {
    name: this.state.name,
    email: this.state.email,
    password: this.state.password
  }
  const url = "http://localhost:5000/user"
  axios.post(url,user).then(() =>{
    this.props.history.push('/login');
  }).catch(err =>{
    console.log(err);
  })

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
              <form className="mt-3" onSubmit={this.handleSubmit}>
                <img src="/logo.png" alt="" width="72" height="57" />
                <h1 className="h3 mb-3 fw-normal">Sign Up</h1>
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingName"
                    onChange={e => this.setState({name:e.target.value})}
                  />
                  <label htmlFor="floatingName">Name</label>
                </div>
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    onChange={e => this.setState({email:e.target.value})}
                  />
                  <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    onChange={e => this.setState({password:e.target.value})}
                  />
                  <label htmlFor="floatingPassword">Password</label>
                </div>
                <button className="w-100 btn btn-lg btn-primary mt-3" type="submit">
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
