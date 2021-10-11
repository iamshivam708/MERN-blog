import React, { Component } from 'react'
import { Link,withRouter } from 'react-router-dom'

class Header extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             search:'',
             loggedIn: sessionStorage.getItem('loggedIn')
        }
    }

    componentDidMount = () =>{
        if(this.state.loggedIn === 'true'){
            document.getElementById('login').style.display = 'none';
            document.getElementById('signup').style.display = 'none';
        }else{
            document.getElementById('logout').style.display = 'none';
            document.getElementById('user').style.display = 'none';
        }
    }

    handleLogout = () =>{
        sessionStorage.removeItem('loggedIn');
        sessionStorage.removeItem('user');
        window.location.reload();
    }

    handleSearch = () =>{
        this.props.history.push('/search/' + this.state.search)
        window.location.reload();
    }
    
    render() {
        return (
            <div className="Header">
                <div className="container">
                <header className="blog-header py-2">
                    <div className="row flex-nowrap justify-content-between align-items-center">
                    <div className="col-4 pt-1" id="login">
                        <Link className="link-secondary" to="/login">Login</Link>
                    </div>
                    <div className="col-4 pt-1" id="logout">
                        <button onClick={this.handleLogout} style={{border:'none',background:'none',borderBottom:'1px solid black'}} className="link-secondary">Logout</button>
                    </div>
                    <div className="col-4 text-center">
                        <Link className="text-dark" to="/" style={{fontSize:'2rem',textDecoration:'none'}}>News Blogger</Link>
                    </div>
                    <div className="col-4 d-flex justify-content-end align-items-center">
                        <input onChange={e => this.setState({search:e.target.value})} style={{maxWidth:'12em'}} type="text" className="form-control" placeholder="Search..." />
                        <button onClick={this.handleSearch} style={{marginRight:"1em"}} className="btn btn-outline-secondary" aria-label="Search">
                            <i className="fas fa-search"></i>
                        </button>
                        <Link id="signup" className="btn btn-sm btn-outline-secondary" to="/signup">Sign up</Link>
                        <Link id="user" className="btn btn-sm btn-outline-secondary" to="/user">User</Link>
                    </div>
                    </div>
                </header>
                <hr/>
                </div>
            </div>
        )
    }
}

export default withRouter(Header);
