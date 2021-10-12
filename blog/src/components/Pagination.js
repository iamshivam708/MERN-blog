import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

function Pagination() {
    const [pageNumber, setPageNumber] = useState(0)
    const [numberOfPages, setNumberOfPages] = useState(0)
    const [posts, setPosts] = useState([])

    const pages = new Array(numberOfPages).fill(null).map((v,i) => i);

    useEffect(() => {
        axios.get(`http://localhost:5000/blog/pagination/${pageNumber}`)
        .then((res) =>{
            setPosts(res.data.posts)
            setNumberOfPages(res.data.totalPages)
        }).catch((err) =>{
            console.log(err);
        })
    }, [pageNumber])


    return (
        <div className="container mt-4">
            {posts.map((post) =>(
                <div key={post._id} className="row mt-4 g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                  <strong className="d-inline-block mb-2 text-success">
                    {post.category}
                  </strong>
                  <h3 className="mb-0">{post.title}</h3>
                  <div className="mb-1 text-muted">{post.date}, {post.time}</div>
                  <p className="mb-auto">
                    {post.description}
                  </p>
                  <Link to={"/blog/"+ post._id} className="stretched-link">
                    Continue reading...
                  </Link>
                </div>
                <div className="col-auto d-none d-lg-block" style={{height:'250px',width:'300px'}}>
                <img src={"/blog/"+ post.image} height="100%" width="100%" alt="prop" />
                </div>
              </div>
            ))}

            {pages.map((pageIndex) =>(
                <button key={pageIndex} onClick={()=> setPageNumber(pageIndex)} className="btn btn-primary mx-1">{pageIndex + 1}</button>
            ))}
        </div>
    )
}

export default Pagination
