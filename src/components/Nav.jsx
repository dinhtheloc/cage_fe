import React from 'react'

export default function Nav() {
    return (

        <div className="left-side-menu left-side-menu-detached" >

            <div className="leftbar-user">
                <a href="javascript: void(0);">
                    <img src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.0-9/123140332_3445096828919085_1399768299663606821_n.jpg?_nc_cat=111&ccb=2&_nc_sid=09cbfe&_nc_ohc=DHLFMyF0Sw8AX95_dCB&_nc_ht=scontent.fsgn2-6.fna&oh=231f8a4bfea0491d3f2363c79e8ea1c5&oe=5FD1B452" alt="user-image" height="42" className="rounded-circle shadow-sm" />
                    <span className="leftbar-user-name">Dominic Keller</span>
                </a>
            </div>

            {/* - Sidemenu */}
            <ul className="metismenu side-nav">

                <li className="side-nav-title side-nav-item">Navigation</li>

                <li className="side-nav-item">
                    <a href="javascript: void(0);" className="side-nav-link">
                        <i className="uil-home-alt"></i>
                        <span className="badge badge-success float-right">4</span>
                        <span> Dashboards </span>
                    </a>
                    <ul className="side-nav-second-level" aria-expanded="false">
                        <li>
                            <a href="dashboard-analytics.html">Analytics</a>
                        </li>
                        <li>
                            <a href="dashboard-crm.html">CRM</a>
                        </li>
                        <li>
                            <a href="/saas/">Ecommerce</a>
                        </li>
                        <li>
                            <a href="dashboard-projects.html">Projects</a>
                        </li>
                    </ul>
                </li>

                <li className="side-nav-title side-nav-item">Apps</li>

                <li className="side-nav-item">
                    <a href="apps-calendar.html" className="side-nav-link">
                        <i className="uil-calender"></i>
                        <span> Calendar </span>
                    </a>
                </li>


            </ul>

            {/*  Help Box */}
            <div className="help-box help-box-light text-center">
                <a href="javascript: void(0);" className="float-right close-btn text-body">
                    <i className="mdi mdi-close"></i>
                </a>
                <img src="assets/images/help-icon.svg" height="90" alt="Helper Icon Image" />
                <h5 className="mt-3">Unlimited Access</h5>
                <p className="mb-3">Upgrade to plan to get access to unlimited reports</p>
                <a href="javascript: void(0);" className="btn btn-outline-primary btn-sm">Upgrade</a>
            </div>
            {/*  end Help Box */}
            {/*  End Sidebar */}

            <div className="clearfix"></div>
            {/*  Sidebar -left */}

        </div >


    )
}
