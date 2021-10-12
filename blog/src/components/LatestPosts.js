import React, { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";
import axios from 'axios'
import {Link} from 'react-router-dom'
import Pagination from "./Pagination";

class LatestPosts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
    };
  }

  componentDidMount = () => {
    const url = "http://localhost:5000/category";
    axios
      .get(url)
      .then((res) => {
        this.setState({
          categories: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleClick = (name) =>{
      return event =>{
        event.preventDefault();
        console.log(name);
        this.props.history.push('/category/' + name);
        window.location.reload();
      }
  }

  render() {
    return (
      <div className="category">
        <Header />
        <main
          className="container px-5 py-3 mt-4"
          style={{ background: "#fafafa" }}
        >
          <div className="row p-4 p-md-5 mb-4 text-white rounded bg-dark">
            <div className="col-md-6 px-0">
              <h1 className="display-4 fst-italic">
                Title of a longer featured post
              </h1>
              <p className="lead my-3">
                Multiple lines of text that form the lede, informing new readers
                quickly and efficiently about what’s most interesting in this
                post’s contents.
              </p>
              <p className="lead mb-0">
                <a href="." className="text-white fw-bold">
                  Continue reading...
                </a>
              </p>
            </div>
            <div className="col-md-6">
              <img src="/try.jpg" width="100%" height="100%" alt="prop" />
            </div>
          </div>

          <div className="row">
            <div className="col-9">
              <div className="row py-2 px-2" style={{ background: "#eeeeee" }}>
                <div className="col-6">
                  <h3>All Latest Posts</h3>
                </div>
              </div>

              <Pagination/>
            
            </div>
            <div
              className="col-2 offset-1"
              align="center"
              style={{ borderLeft: "5px solid black" }}
            >
              <div className="row px-2 py-2" style={{ background: "#eeeeee" }}>
                <h3>Archives</h3>
              </div>
              <ul>
                <li className="mt-4" style={{listStyle:'none'}}><Link style={{textDecoration:"none", color:'black'}} to={"/archive/jan"}>January</Link></li>
                <li className="mt-1" style={{listStyle:'none'}}><Link style={{textDecoration:"none", color:'black'}} to={"/archive/feb"}>February</Link></li>
                <li className="mt-1" style={{listStyle:'none'}}><Link style={{textDecoration:"none", color:'black'}} to={"/archive/mar"}>March</Link></li>
                <li className="mt-1" style={{listStyle:'none'}}><Link style={{textDecoration:"none", color:'black'}} to={"/archive/apr"}>April</Link></li>
                <li className="mt-1" style={{listStyle:'none'}}><Link style={{textDecoration:"none", color:'black'}} to={"/archive/may"}>May</Link></li>
                <li className="mt-1" style={{listStyle:'none'}}><Link style={{textDecoration:"none", color:'black'}} to={"/archive/june"}>June</Link></li>
                <li className="mt-1" style={{listStyle:'none'}}><Link style={{textDecoration:"none", color:'black'}} to={"/archive/july"}>July</Link></li>
                <li className="mt-1" style={{listStyle:'none'}}><Link style={{textDecoration:"none", color:'black'}} to={"/archive/aug"}>August</Link></li>
                <li className="mt-1" style={{listStyle:'none'}}><Link style={{textDecoration:"none", color:'black'}} to={"/archive/sep"}>September</Link></li>
                <li className="mt-1" style={{listStyle:'none'}}><Link style={{textDecoration:"none", color:'black'}} to={"/archive/oct"}>October</Link></li>
                <li className="mt-1" style={{listStyle:'none'}}><Link style={{textDecoration:"none", color:'black'}} to={"/archive/nov"}>November</Link></li>
                <li className="mt-1" style={{listStyle:'none'}}><Link style={{textDecoration:"none", color:'black'}} to={"/archive/dec"}>December</Link></li>
              </ul>
              <div className="row mt-4">
                <div className="px-2 py-2" style={{ background: "#eeeeee" }}>
                  <h3>Categories</h3>
                </div>
                <ul className="mt-2" style={{listStyle:'none',lineBreak:"20px"}}>
                  {this.state.categories.map((cat) => (
                    <li key={cat._id} className="mt-2"><button
                      key={cat._id}
                      className="link-secondary"
                      style={{border:'none', background:"none"}}
                      onClick={this.handleClick(cat.title)}
                    >
                      {cat.title}
                    </button></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default LatestPosts;
