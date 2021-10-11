import React, { Component } from 'react'
import axios from 'axios';
import Header from './Header'

class SingleBlog extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             id: this.props.match.params.id,
             blogs:[]
        }
    }

    componentDidMount = () =>{
        var url = `http://localhost:5000/blog/${this.state.id}`
        axios.get(url).then((res) =>{
            this.setState({
                blogs:res.data
            })
        }).catch((err) =>{
            console.log(err);
        })
    }
    
    render() {
        const {blogs} = this.state
        return (
            <div className="single">
                <Header/>  
                <main className="container px-5 py-3 mt-4" style={{background:"#fafafa"}}>
                    <div className="row px-5 text-white rounded" style={{height:'350px'}}>
                        <img src={"/blog/"+ blogs.image} width="100%" height="100%" alt="prop" />
                    </div>
                    <div className="row px-0">
                        <h1 className="display-4 fst-italic">
                            {blogs.title}
                        </h1>
                        <p className="lead my-3">
                            {blogs.description}
                        </p>
                    </div>
                    </main>
            </div>

        )
    }
}

export default SingleBlog
