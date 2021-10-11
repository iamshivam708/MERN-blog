import React, { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";
import axios from 'axios'

class Category extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.match.params.title,
      categories: [],
      blogs:[]
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

      const url2 = `http://localhost:5000/category/${this.state.title}`;
    axios
      .get(url2)
      .then((res) => {
        this.setState({
          blogs: res.data,
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
                Title of a longer featured {this.state.title} post
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
                  <h3>Latest {this.state.title} Posts</h3>
                </div>
              </div>

              {this.state.blogs.map((blog) =>(
              <div key={blog._id} className="row mt-4 g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                  <strong className="d-inline-block mb-2 text-success">
                    {blog.category}
                  </strong>
                  <h3 className="mb-0">{blog.title}</h3>
                  <div className="mb-1 text-muted">{blog.date}, {blog.time}</div>
                  <p className="mb-auto">
                    {blog.description}
                  </p>
                  <a href="." className="stretched-link">
                    Continue reading...
                  </a>
                </div>
                <div className="col-auto d-none d-lg-block" style={{height:'250px',width:'300px'}}>
                <img src={"/blog/"+ blog.image} height="100%" width="100%" alt="prop" />
                </div>
              </div>
              ))}
              

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
                <li className="mt-4" style={{ listStyle: "none" }}>
                  January 2021
                </li>
                <li className="mt-1" style={{ listStyle: "none" }}>
                  February 2021
                </li>
                <li className="mt-1" style={{ listStyle: "none" }}>
                  March 2021
                </li>
                <li className="mt-1" style={{ listStyle: "none" }}>
                  April 2021
                </li>
                <li className="mt-1" style={{ listStyle: "none" }}>
                  May 2021
                </li>
                <li className="mt-1" style={{ listStyle: "none" }}>
                  June 2021
                </li>
                <li className="mt-1" style={{ listStyle: "none" }}>
                  July 2021
                </li>
                <li className="mt-1" style={{ listStyle: "none" }}>
                  August 2021
                </li>
                <li className="mt-1" style={{ listStyle: "none" }}>
                  September 2021
                </li>
                <li className="mt-1" style={{ listStyle: "none" }}>
                  October 2021
                </li>
                <li className="mt-1" style={{ listStyle: "none" }}>
                  November 2021
                </li>
                <li className="mt-1" style={{ listStyle: "none" }}>
                  December 2021
                </li>
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

export default Category;
