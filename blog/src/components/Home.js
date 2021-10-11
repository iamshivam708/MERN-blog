import React, { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";
import axios from 'axios';
import {Link} from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories:[],
      featured:[],
      mainFeatured:[],
      latest:[]
    };
  }

  componentDidMount = () =>{
    const url = "http://localhost:5000/category";
    axios.get(url).then((res) =>{
        this.setState({
          categories: res.data
        })
    }).catch((err) =>{
      console.log(err);
    })

    const url2 = 'http://localhost:5000/blog/featured/single/yes'
    axios.get(url2).then((res) =>{
      this.setState({
        featured: res.data[0]
      })
  }).catch((err) =>{
    console.log(err);
  })

  const url3 = 'http://localhost:5000/blog/featured/yes'
    axios.get(url3).then((res) =>{
      this.setState({
        mainFeatured: res.data
      })
  }).catch((err) =>{
    console.log(err);
  })

  const url4 = 'http://localhost:5000/blog/limited'
    axios.get(url4).then((res) =>{
      this.setState({
        latest: res.data
      })
  }).catch((err) =>{
    console.log(err);
  })
  }

  render() {
    const{featured} = this.state
    return (
      <div className="home">
          <Header />
        <div className="container">
          <div className="nav-scroller py-1 mb-2">
            <nav className="nav d-flex justify-content-between">

              {this.state.categories.map((cat) =>(
                <Link key={cat._id} className="link-secondary" to={"/category/" + cat.title}>
                  {cat.title}
                </Link>
              ))}
              
            </nav>
          </div>
        </div>

        <main className="container px-5 py-3 mt-4" style={{background:"#fafafa"}}>
          <div className="row p-4 p-md-5 mb-4 text-white rounded bg-dark">
            <div className="col-md-6 px-0">
              <h1 className="display-4 fst-italic">
                {featured.title}
              </h1>
              <p className="lead my-3">
                {featured.description}
              </p>
              <p className="lead mb-0">
              <Link to={"/blog/"+ featured._id} className="text-white fw-bold">
                    Continue reading...
              </Link>
              </p>
            </div>
            <div className="col-md-6" style={{height:'250px'}}>
              <img src={"/blog/"+ featured.image} width="100%" height="100%" alt="prop" />
            </div>
          </div>

          <div className="row mb-2">
            {this.state.mainFeatured.map((featuredBlogs) =>(
            <div className="col-md-6" key={featuredBlogs._id}>
              <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                  <strong className="d-inline-block mb-2 text-danger">
                    {featuredBlogs.category}
                  </strong>
                  <h3 className="mb-0">{featuredBlogs.title}</h3>
                  <div className="mb-1 text-muted">{featuredBlogs.date}, {featuredBlogs.time}</div>
                  <p className="card-text mb-auto">
                    {featuredBlogs.description}
                  </p>
                  <Link to={"/blog/"+ featuredBlogs._id} className="stretched-link">
                    Continue reading...
                  </Link>
                </div>
                <div className="col-auto d-none d-lg-block" style={{height:'250px',width:'200px'}}>
                  <img src={"/blog/"+ featuredBlogs.image} height="100%" width="100%" alt="prop" />
                </div>
              </div>
            </div>
            ))}
          </div>


          <div className="row">
            <div className="col-9">
              <div className="row py-2 px-2" style={{background:"#eeeeee"}}>
                <div className="col-6">
                <h3>Latest Posts</h3>
                </div>
                <div className="col-6 mt-2" align="end">
                <Link to="/latest">See All</Link>
                </div>
              </div>
            
              {this.state.latest.map((blog) =>(
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
                  <Link to={"/blog/"+ blog._id} className="stretched-link">
                    Continue reading...
                  </Link>
                </div>
                <div className="col-auto d-none d-lg-block" style={{height:'250px',width:'300px'}}>
                <img src={"/blog/"+ blog.image} height="100%" width="100%" alt="prop" />
                </div>
              </div>
              ))}

            </div>
            <div className="col-2 offset-1" align="center" style={{borderLeft:"5px solid black"}}>
              <div className="row px-2 py-2 mx-auto" style={{background:"#eeeeee"}}>
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
            </div>
          </div>
          

          <div className="p-4 mt-4 p-md-5 text-white rounded" style={{background:'url("/hero.jpg")'}}>
            <div className="col-md-12 px-0" align="center" style={{background:'rgba(0,0,0,0.2)'}}>
              <h1 className="display-8 fst-italic text-dark">
                Title of a longer featured blog post
              </h1>
              <h4 className="display-10 my-3 text-dark">
                Multiple lines of text that form the lede, informing new readers
                quickly and efficiently about what’s most interesting in this
                post’s contents.
              </h4>
            </div>
          </div>



          <div className="row mb-2 mt-4">
            <div className="col-md-6">
              <div style={{background:"url('/try.jpg')"}} className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div style={{background:"rgba(0,0,0,0.1)"}} className="col p-4 d-flex flex-column position-static">
                  <strong className="d-inline-block mb-2 text-primary">
                    World
                  </strong>
                  <h3 className="mb-0">Featured post</h3>
                  <div className="mb-1 text-muted">Nov 12</div>
                  <p className="card-text mb-auto">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div style={{background:"url('/signup.jpg')"}} className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div style={{background:"rgba(0,0,0,0.1)"}} className="col p-4 d-flex flex-column position-static">
                  <strong className="d-inline-block mb-2 text-success">
                    Design
                  </strong>
                  <h3 className="mb-0">Post title</h3>
                  <div className="mb-1 text-muted">Nov 11</div>
                  <p className="mb-auto">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </p>
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
