import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from '../components/Nav';
import routes from '../routes';
export default function Admin() {
    return (
        <Router>
            <div className="container-fluid">
                {/*  Begin page */}
                <div className="wrapper">
                    <Nav></Nav>
                    <div className="content-page">
                        <div className="content">
                            {/*  start page title */}
                            <div className="row">
                                <div className="col-12">
                                    <div className="page-title-box">
                                        <div className="page-title-right">
                                            <ol className="breadcrumb m-0">
                                                <li className="breadcrumb-item"><a href="javascript: void(0);">Hyper</a></li>
                                                <li className="breadcrumb-item"><a href="javascript: void(0);">Layouts</a></li>
                                                <li className="breadcrumb-item active">Detached</li>
                                            </ol>
                                        </div>
                                        <h4 className="page-title">Detached Sidenav</h4>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12">
                                    <Switch>
                                        {

                                            routes.map(({ component: Component, path, ...rest }) => {
                                                console.log(rest);
                                                return <Route component={Component} key={path} path={path} {...rest}></Route>
                                            })
                                        }
                                        {/* <Route path="*">
                                            <NoMatch />
                                        </Route> */}
                                    </Switch>
                                </div>
                            </div>
                            {/*  end page title */}
                        </div> {/*  End Content */}
                        {/*  Footer Start */}
                        <footer className="footer">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-6">
                                        <script>document.write(new Date().getFullYear())</script> © Hyper - Coderthemes.com
                              </div>
                                    <div className="col-md-6">
                                        <div className="text-md-right footer-links d-none d-md-block">
                                            <a href="javascript: void(0);">About</a>
                                            <a href="javascript: void(0);">Support</a>
                                            <a href="javascript: void(0);">Contact Us</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </footer>
                        {/*  end Footer */}
                    </div> {/*  content-page */}
                </div> {/*  end wrapper*/}
            </div>
        </Router>
    )
}
