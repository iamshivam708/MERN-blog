import React, { Component } from "react";
import Header from "./Header";
import axios from "axios";

class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: sessionStorage.getItem("user"),
      user: [],
      categories: [],
      title: "",
      description: "",
      category: "none",
      image: "",
      featured: "no",
      blogs: [],
    };
  }

  componentDidMount = () => {
    const url = `http://localhost:5000/user/${this.state.email}`;
    axios
      .get(url)
      .then((res) => {
        this.setState({
          user: res.data[0],
        });
      })
      .catch((err) => {
        console.log(err);
      });

    const url2 = "http://localhost:5000/category";
    axios
      .get(url2)
      .then((res) => {
        this.setState({
          categories: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    const url3 = `http://localhost:5000/blog/get/${this.state.email}`;
    axios
      .get(url3)
      .then((res) => {
        this.setState({
          blogs: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    var form = document.getElementById("form");
    var formData = new FormData(form);
    var url = "http://localhost:5000/blog";
    axios
      .post(url, formData)
      .then((res) => {
        this.props.history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="user">
        <Header />
        <div className="container-fluid px-5">
          <div className="row">
            <div className="col-6">
                <div className="row">
                <h3>User Details</h3>
                <p>Name: {this.state.user.name}</p>
                <p>Email: {this.state.user.email}</p>
                </div>
                <div className="row mt-3">
                    <h3>Your Blogs</h3>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Date & Time</th>
                                <th>Featured</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.blogs.map((blog) =>(
                                <tr>
                                    <td><img src={"/blog/"+ blog.image}  height="100px" width="100px" alt="prop" /></td>
                                    <td>{blog.title}</td>
                                    <td>{blog.description}</td>
                                    <td>{blog.date}, {blog.time}</td>
                                    <td>{blog.featured}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="col-1"></div>
            <div className="col-5 px-5 py-4" style={{ background: "#fafafa" }}>
              <h3>Create Blog</h3>
              <form
                id="form"
                onSubmit={this.handleSubmit}
                encType="multipart/form-data"
              >
                <input
                  style={{ display: "none" }}
                  type="text"
                  name="email"
                  defaultValue={this.state.email}
                />
                <div className="form-floating mb-3 mt-4">
                  <input
                    name="title"
                    onChange={(e) => this.setState({ title: e.target.value })}
                    type="text"
                    className="form-control"
                    id="floatingTitle"
                    placeholder="Title"
                  />
                  <label htmlFor="floatingTitle">Title</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    name="description"
                    onChange={(e) =>
                      this.setState({ description: e.target.value })
                    }
                    type="text"
                    className="form-control"
                    id="floatingDescription"
                    placeholder="Description"
                  />
                  <label htmlFor="floatingDescription">Description</label>
                </div>
                <div className="form-floating">
                  <select
                    name="category"
                    onChange={(e) =>
                      this.setState({ category: e.target.value })
                    }
                    className="form-select"
                    id="floatingSelect"
                    aria-label="Floating label select example"
                  >
                    <option value="none">None</option>
                    {this.state.categories.map((category) => (
                      <option key={category._id} value={category.title}>
                        {category.title}
                      </option>
                    ))}
                  </select>
                  <label htmlFor="floatingSelect">Category</label>
                </div>
                <div className="mb-3 mt-2">
                  <label htmlFor="formFile" className="form-label">
                    Image
                  </label>
                  <input
                    name="image"
                    onChange={(e) => this.setState({ image: e.target.value })}
                    className="form-control"
                    type="file"
                    id="formFile"
                  />
                </div>
                <div className="form-floating mt-2">
                  <select
                    name="featured"
                    onChange={(e) =>
                      this.setState({ featured: e.target.value })
                    }
                    className="form-select"
                    id="floatingSelect"
                    aria-label="Floating label select example"
                  >
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                  </select>
                  <label htmlFor="floatingSelect">Is Featured</label>
                </div>
                <button type="submit" className="btn btn-primary mt-2">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default User;
