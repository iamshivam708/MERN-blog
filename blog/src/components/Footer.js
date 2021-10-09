import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="container mt-4">
                    <div className="row px-2 py-2" align="center" style={{background:"#eeeeee"}}>
                        <h3><i class="fas fa-arrow-up"></i>&nbsp;Top</h3>
                    </div>
                    <div className="row px-5 py-5" style={{background:"#fafafa"}}>
                        <div className="col-3">
                            <ul style={{listStyle:"none"}}>
                                <li>Home</li>
                                <li>About Us</li>
                                <li>Contact Us</li>
                                <li>Services</li>
                            </ul>
                        </div>
                        <div className="col-4">
                        <ul style={{listStyle:"none"}}>
                                <li>Privacy Policy</li>
                                <li>Terms & Conditions</li>
                                <li>FAQs</li>
                                <li>Sitemap</li>
                            </ul>
                        </div>
                        <div className="col-4 offset-1">
                        <h4 className="mb-3">Follow us</h4>
                           <div className="row" align="center">
                               
                               <div className="col-3" style={{height:'40px',width:'70px'}}>
                                    <img src="/facebook.png" height="100%" width="100%" alt="prop" />
                               </div>
                               <div className="col-3" style={{height:'40px',width:'70px'}}>
                                    <img src="/instagram.png" height="100%" width="100%" alt="prop" />
                               </div>
                               <div className="col-3" style={{height:'40px',width:'70px'}}>
                                    <img src="/twitter.png" height="100%" width="100%" alt="prop" />
                               </div>
                               <div className="col-3" style={{height:'40px',width:'70px'}}>
                                    <img src="/reddit.png" height="100%" width="100%" alt="prop" />
                               </div>
                            </div> 
                        </div>
                    </div>
                    <div className="row pt-3" align="center" style={{background:"#eeeeee"}}>
                        <p>&copy;&nbsp;Blogger.com, 2021</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default Footer
