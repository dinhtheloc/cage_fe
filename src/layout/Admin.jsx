import React from 'react';
import { Switch } from 'react-router-dom';
import Nav from '../components/Nav';
import PrivateRoute from '../components/PrivateRoute';
import HomePage from '../pages/Home/HomePage';
import ProfilePage from '../pages/Profile/ProfilePage';

export default function Admin() {
    // let { path, url } = useRouteMatch();
    return (

        <div className="container-fluid">
            {/*  Begin page */}
            <div className="wrapper">
                <Nav></Nav>
                <div className="content-page">
                    <div className="content">
                        <div className="row">
                            <div className="col-12">
                                <Switch>
                                    <PrivateRoute path='/' exact>
                                        <HomePage />
                                    </PrivateRoute>
                                    <PrivateRoute path='/profile'>
                                        <ProfilePage></ProfilePage>
                                    </PrivateRoute>
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

    )
}
