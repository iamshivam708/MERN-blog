import React, { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="home">
          <Header />
        <div className="container">
          <div class="nav-scroller py-1 mb-2">
            <nav class="nav d-flex justify-content-between">
              <a class="link-secondary" href=".">
                World
              </a>
              <a class="link-secondary" href=".">
                U.S.
              </a>
              <a class="link-secondary" href=".">
                Technology
              </a>
              <a class="link-secondary" href=".">
                Design
              </a>
              <a class="link-secondary" href=".">
                Culture
              </a>
              <a class="link-secondary" href=".">
                Business
              </a>
              <a class="link-secondary" href=".">
                Politics
              </a>
              <a class="link-secondary" href=".">
                Opinion
              </a>
              <a class="link-secondary" href=".">
                Science
              </a>
              <a class="link-secondary" href=".">
                Health
              </a>
              <a class="link-secondary" href=".">
                Style
              </a>
              <a class="link-secondary" href=".">
                Travel
              </a>
            </nav>
          </div>
        </div>

        <main className="container px-5 py-3 mt-4" style={{background:"#fafafa"}}>
          <div className="row p-4 p-md-5 mb-4 text-white rounded bg-dark">
            <div className="col-md-6 px-0">
              <h1 className="display-4 fst-italic">
                Title of a longer featured blog post
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

          <div className="row mb-2">
            <div className="col-md-6">
              <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                  <strong className="d-inline-block mb-2 text-primary">
                    World
                  </strong>
                  <h3 className="mb-0">Featured post</h3>
                  <div className="mb-1 text-muted">Nov 12</div>
                  <p className="card-text mb-auto">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </p>
                  <a href="." className="stretched-link">
                    Continue reading
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
            </div>
            <div className="col-md-6">
              <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
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
                    Continue reading
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
            </div>
          </div>


          <div className="row">
            <div className="col-9">
              <div className="row py-2 px-2" style={{background:"#eeeeee"}}>
                <div className="col-6">
                <h3>Latest Posts</h3>
                </div>
                <div className="col-6" align="end">
                <a href=".">See All</a>
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
                    Continue reading
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
                    Continue reading
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
                    Continue reading
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
                    Continue reading
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
            </div>
            <div className="col-2 offset-1" align="center" style={{borderLeft:"5px solid black"}}>
              <div className="row px-2 py-2 mx-auto" style={{background:"#eeeeee"}}>
                <h3>Archives</h3>
              </div>
              <ul>
                <li className="mt-4" style={{listStyle:'none'}}>January 2021</li>
                <li className="mt-1" style={{listStyle:'none'}}>February 2021</li>
                <li className="mt-1" style={{listStyle:'none'}}>March 2021</li>
                <li className="mt-1" style={{listStyle:'none'}}>April 2021</li>
                <li className="mt-1" style={{listStyle:'none'}}>May 2021</li>
                <li className="mt-1" style={{listStyle:'none'}}>June 2021</li>
                <li className="mt-1" style={{listStyle:'none'}}>July 2021</li>
                <li className="mt-1" style={{listStyle:'none'}}>August 2021</li>
                <li className="mt-1" style={{listStyle:'none'}}>September 2021</li>
                <li className="mt-1" style={{listStyle:'none'}}>October 2021</li>
                <li className="mt-1" style={{listStyle:'none'}}>November 2021</li>
                <li className="mt-1" style={{listStyle:'none'}}>December 2021</li>
              </ul>
            </div>
          </div>
          

          <div className="p-4 mt-4 p-md-5 text-white rounded bg-dark">
            <div className="col-md-12 px-0" align="center">
              <h1 className="display-4 fst-italic">
                Title of a longer featured blog post
              </h1>
              <p className="lead my-3">
                Multiple lines of text that form the lede, informing new readers
                quickly and efficiently about what’s most interesting in this
                post’s contents.
              </p>
            </div>
          </div>



          <div className="row mb-2 mt-4">
            <div className="col-md-4">
              <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="row d-none d-lg-block">
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
                <div className="row p-4 d-flex position-static">
                  <strong className="d-inline-block mb-2 text-primary">
                    World
                  </strong>
                  <h3 className="mb-0">Featured post</h3>
                  <div className="mb-1 text-muted">Nov 12</div>
                  <p className="card-text mb-auto">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </p>
                  <a href="." className="stretched-link">
                    Continue reading
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="row d-none d-lg-block">
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
                <div className="row p-4 d-flex position-static">
                  <strong className="d-inline-block mb-2 text-primary">
                    World
                  </strong>
                  <h3 className="mb-0">Featured post</h3>
                  <div className="mb-1 text-muted">Nov 12</div>
                  <p className="card-text mb-auto">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </p>
                  <a href="." className="stretched-link">
                    Continue reading
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="row d-none d-lg-block">
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
                <div className="row p-4 d-flex position-static">
                  <strong className="d-inline-block mb-2 text-primary">
                    World
                  </strong>
                  <h3 className="mb-0">Featured post</h3>
                  <div className="mb-1 text-muted">Nov 12</div>
                  <p className="card-text mb-auto">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </p>
                  <a href="." className="stretched-link">
                    Continue reading
                  </a>
                </div>
              </div>
            </div>
            
          </div>


        </main>

        <Footer/>
      </div>
    );
  }
}

export default Home;
