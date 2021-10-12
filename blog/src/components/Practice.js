import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link, useParams, useHistory} from 'react-router-dom'
import Header from './Header';
import Footer from './Footer';

function Practice() {

    let {text} = useParams();
    let history = useHistory();
    const [pageNumber, setPageNumber] = useState(0)
    const [numberOfPages, setNumberOfPages] = useState(0)
    const [posts, setPosts] = useState([])
    const [categories,setCategories] = useState([])

    const pages = new Array(numberOfPages).fill(null).map((v,i) => i);

    useEffect(() => {
        axios.get(`http://localhost:5000/category/${text}/${pageNumber}`)
        .then((res) =>{
            setPosts(res.data.posts)
            setNumberOfPages(res.data.totalPages)
            console.log(res.data.totalPages)
        }).catch((err) =>{
            console.log(err);
        })
    }, [pageNumber])

    useEffect(() => {
        const url2 = "http://localhost:5000/category";
    axios
      .get(url2)
      .then((res) => {
        setCategories(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
    })

    const handleClick = (name) =>{
        return event =>{
          event.preventDefault();
          history.push('/category/' + name);
          window.location.reload();
        }
    }


    return (
        <div className="Archive">
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
                  Multiple lines of text that form the lede, informing new
                  readers quickly and efficiently about what’s most interesting
                  in this post’s contents.
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
                <div
                  className="row py-2 px-2"
                  style={{ background: "#eeeeee" }}
                >
                  <div className="col-6">
                    <h3>All {text} Posts</h3>
                  </div>
                </div>

                {posts.map((blog) =>(
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


            {pages.map((pageIndex) =>(
                <button key={pageIndex} onClick={() => setPageNumber(pageIndex)} className="btn btn-primary mx-1">{pageIndex + 1}</button>
            ))}

              </div>
              <div
                className="col-2 offset-1"
                align="center"
                style={{ borderLeft: "5px solid black" }}
              >
                <div
                  className="row px-2 py-2"
                  style={{ background: "#eeeeee" }}
                >
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
                  <ul
                    className="mt-2"
                    style={{ listStyle: "none", lineBreak: "20px" }}
                  >
                    {categories.map((cat) => (
                      <li key={cat._id} className="mt-2">
                        <button
                          key={cat._id}
                          className="link-secondary"
                          style={{ border: "none", background: "none" }}
                          onClick={handleClick(cat.title)}
                        >
                          {cat.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </main>
          <Footer />
        </div>
    )
}

export default Practice
