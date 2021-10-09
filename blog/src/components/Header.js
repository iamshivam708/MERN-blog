import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             search:''
        }
    }

    componentDidMount = () =>{
        
    }
    
    render() {
        return (
            <div className="Header">
                <div className="container">
                <header class="blog-header py-2">
                    <div class="row flex-nowrap justify-content-between align-items-center">
                    <div class="col-4 pt-1">
                        <Link class="link-secondary" to="/login">Login</Link>
                    </div>
                    <div class="col-4 text-center">
                        <a class="text-dark" href="." style={{fontSize:'2rem',textDecoration:'none'}}>Blogger</a>
                    </div>
                    <div class="col-4 d-flex justify-content-end align-items-center">
                        <input style={{maxWidth:'12em'}} type="text" className="form-control" placeholder={this.state.place} />
                        <a style={{marginRight:"1em"}} class="btn btn-outline-secondary" href="." aria-label="Search">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="mx-3" role="img" viewBox="0 0 24 24"><title>Search</title><circle cx="10.5" cy="10.5" r="7.5"/><path d="M21 21l-5.2-5.2"/></svg>
                        </a>
                        <Link class="btn btn-sm btn-outline-secondary" to="/signup">Sign up</Link>
                    </div>
                    </div>
                </header>
                <hr/>
                </div>
            </div>
        )
    }
}

export default Header;
