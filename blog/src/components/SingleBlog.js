import React, { Component } from 'react'
import axios from 'axios';
import Header from './Header'

class SingleBlog extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             id: this.props.match.params.id,
             blog:[],
             comment:'',
             comments:[]
        }
    }

    componentDidMount = () =>{
        const url = `http://localhost:5000/blog/${this.state.id}`
        axios.get(url).then((res) =>{
            this.setState({
                blog:res.data
            })
        }).catch((err) =>{
            console.log(err);
        })

        const url2 = `http://localhost:5000/comment/${this.state.id}`
        axios.get(url2).then((res) =>{
            this.setState({
                comments:res.data
            })
        }).catch((err) =>{
            console.log(err);
        }) 

    }

    handleComment = (e) =>{
        e.preventDefault();
        const comments = {
            blogId:this.state.id,
            comment:this.state.comment,
            email:sessionStorage.getItem('user')
        }
        const url = "http://localhost:5000/comment";
        axios.post(url,comments).then((res) =>{
            console.log(res);
        }).catch((err) =>{
            console.log(err);
        })
    }
    
    render() {
        const {blog} = this.state
        return (
            <div className="single">
                <Header/>  
                <main className="container mt-4" style={{background:"#fafafa"}}>
                    <div className="row text-white rounded" style={{height:'350px',padding:'20px 200px'}}>
                        <img src={"/blog/"+ blog.image} width="100%" height="100%" alt="prop" />
                    </div>
                    <div className="row px-5" align="center">
                        <div className="col-6">
                        <h1 className="display-4 fst-italic">
                            {blog.title}
                        </h1>
                        <p className="lead my-3">
                            {blog.description}
                        </p>
                        </div>
                        <div className="col-6">
                        <p className="lead my-3">
                            {blog.date}, {blog.time}
                        </p>
                        </div>
                    </div>
                </main>
                <div className="container mt-4 mb-4" align="center">
                <h2 className="p-2" style={{background:"#eeeeee"}}>Comments</h2>
                    <form onSubmit={this.handleComment} className="row mt-3 px-5 justify-content-center">
                        <div className="col-6" align="end">
                            <input onChange={e => this.setState({comment: e.target.value})} type="text" className="form-control"/>
                        </div>   
                        <div className="col-6" align="start">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                    
                        {this.state.comments.map((cmt) =>(
                            <div style={{background:"#fafafa"}} key={cmt._id} className="row mt-3 px-5 py-3" align="start">
                                <div className="col-12">
                                    <h3>{cmt.email}</h3>
                                    <p>{cmt.comment}</p>
                                </div>
                            </div>
                        ))}
                </div>
            </div>

        )
    }
}

export default SingleBlog
