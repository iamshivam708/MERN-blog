import React, { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";
import axios from 'axios'
import {Link} from 'react-router-dom'

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

              <div className="row mt-4 g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                  <strong className="d-inline-block mb-2 text-success">
                    Design
                  </strong>
                  <h3 className="mb-0">Post title</h3>
                  <div className="mb-1 text-muted">Nov 11</div>
                  <p className="mb-auto">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </p>
                  <a href="." className="stretched-link">
                    Continue reading...
                  </a>
                </div>
                <div className="col-auto d-none d-lg-block">
                  <svg
                    className="bd-placeholder-img"
                    width="200"
                    height="250"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c" />
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                      Thumbnail
                    </text>
                  </svg>
                </div>
              </div>

              <div className="row mt-4 g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                  <strong className="d-inline-block mb-2 text-success">
                    Design
                  </strong>
                  <h3 className="mb-0">Post title</h3>
                  <div className="mb-1 text-muted">Nov 11</div>
                  <p className="mb-auto">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </p>
                  <a href="." className="stretched-link">
                    Continue reading...
                  </a>
                </div>
                <div className="col-auto d-none d-lg-block">
                  <svg
                    className="bd-placeholder-img"
                    width="200"
                    height="250"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c" />
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                      Thumbnail
                    </text>
                  </svg>
                </div>
              </div>

              <div className="row mt-4 g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                  <strong className="d-inline-block mb-2 text-success">
                    Design
                  </strong>
                  <h3 className="mb-0">Post title</h3>
                  <div className="mb-1 text-muted">Nov 11</div>
                  <p className="mb-auto">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </p>
                  <a href="." className="stretched-link">
                    Continue reading...
                  </a>
                </div>
                <div className="col-auto d-none d-lg-block">
                  <svg
                    className="bd-placeholder-img"
                    width="200"
                    height="250"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c" />
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                      Thumbnail
                    </text>
                  </svg>
                </div>
              </div>

              <div className="row mt-4 g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                  <strong className="d-inline-block mb-2 text-success">
                    Design
                  </strong>
                  <h3 className="mb-0">Post title</h3>
                  <div className="mb-1 text-muted">Nov 11</div>
                  <p className="mb-auto">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </p>
                  <a href="." className="stretched-link">
                    Continue reading...
                  </a>
                </div>
                <div className="col-auto d-none d-lg-block">
                  <svg
                    className="bd-placeholder-img"
                    width="200"
                    height="250"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c" />
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                      Thumbnail
                    </text>
                  </svg>
                </div>
              </div>
              <div className="row">
              <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    <li className="page-item disabled">
                    <a className="page-link" href=".">Previous</a>
                    </li>
                    <li className="page-item"><a className="page-link" href=".">1</a></li>
                    <li className="page-item"><a className="page-link" href=".">2</a></li>
                    <li className="page-item"><a className="page-link" href=".">3</a></li>
                    <li className="page-item">
                    <a className="page-link" href=".">Next</a>
                    </li>
                </ul>
                </nav>
              </div>
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
