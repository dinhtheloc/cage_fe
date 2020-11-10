
function App() {
  return (
    <>

      {/*  Start Content*/}
      <div class="container-fluid">

        {/*  Begin page */}
        <div class="wrapper">

          {/*  ========== Left Sidebar Start ========== */}
          <div class="left-side-menu left-side-menu-detached">

            <div class="leftbar-user">
              <a href="javascript: void(0);">
                <img src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.0-9/123140332_3445096828919085_1399768299663606821_n.jpg?_nc_cat=111&ccb=2&_nc_sid=09cbfe&_nc_ohc=DHLFMyF0Sw8AX95_dCB&_nc_ht=scontent.fsgn2-6.fna&oh=231f8a4bfea0491d3f2363c79e8ea1c5&oe=5FD1B452" alt="user-image" height="42" class="rounded-circle shadow-sm" />
                <span class="leftbar-user-name">Dominic Keller</span>
              </a>
            </div>

            {/* - Sidemenu */}
            <ul class="metismenu side-nav">

              <li class="side-nav-title side-nav-item">Navigation</li>

              <li class="side-nav-item">
                <a href="javascript: void(0);" class="side-nav-link">
                  <i class="uil-home-alt"></i>
                  <span class="badge badge-success float-right">4</span>
                  <span> Dashboards </span>
                </a>
                <ul class="side-nav-second-level" aria-expanded="false">
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

              <li class="side-nav-title side-nav-item">Apps</li>

              <li class="side-nav-item">
                <a href="apps-calendar.html" class="side-nav-link">
                  <i class="uil-calender"></i>
                  <span> Calendar </span>
                </a>
              </li>


            </ul>

            {/*  Help Box */}
            <div class="help-box help-box-light text-center">
              <a href="javascript: void(0);" class="float-right close-btn text-body">
                <i class="mdi mdi-close"></i>
              </a>
              <img src="assets/images/help-icon.svg" height="90" alt="Helper Icon Image" />
              <h5 class="mt-3">Unlimited Access</h5>
              <p class="mb-3">Upgrade to plan to get access to unlimited reports</p>
              <a href="javascript: void(0);" class="btn btn-outline-primary btn-sm">Upgrade</a>
            </div>
            {/*  end Help Box */}
            {/*  End Sidebar */}

            <div class="clearfix"></div>
            {/*  Sidebar -left */}

          </div>
          {/*  Left Sidebar End */}

          <div class="content-page">
            <div class="content">

              {/*  start page title */}
              <div class="row">
                <div class="col-12">
                  <div class="page-title-box">
                    <div class="page-title-right">
                      <ol class="breadcrumb m-0">
                        <li class="breadcrumb-item"><a href="javascript: void(0);">Hyper</a></li>
                        <li class="breadcrumb-item"><a href="javascript: void(0);">Layouts</a></li>
                        <li class="breadcrumb-item active">Detached</li>
                      </ol>
                    </div>
                    <h4 class="page-title">Detached Sidenav</h4>
                  </div>
                </div>
              </div>
              {/*  end page title */}


            </div> {/*  End Content */}

            {/*  Footer Start */}
            <footer class="footer">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-md-6">
                    <script>document.write(new Date().getFullYear())</script> © Hyper - Coderthemes.com
                                </div>
                  <div class="col-md-6">
                    <div class="text-md-right footer-links d-none d-md-block">
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
      {/*  END Container */}


      {/*  Right Sidebar */}
      <div class="right-bar">

        <div class="rightbar-title">
          <a href="javascript:void(0);" class="right-bar-toggle float-right">
            <i class="dripicons-cross noti-icon"></i>
          </a>
          <h5 class="m-0">Settings</h5>
        </div>

        <div class="rightbar-content h-100" data-simplebar>

          <div class="p-3">
            <div class="alert alert-warning" role="alert">
              <strong>Customize </strong> the overall color scheme, sidebar menu, etc.
                    </div>

            {/*  Settings */}
            <h5 class="mt-3">Color Scheme</h5>
            <hr class="mt-1" />

            <div class="custom-control custom-switch mb-1">
              <input type="radio" class="custom-control-input" name="color-scheme-mode" value="light"
                id="light-mode-check" checked />
              <label class="custom-control-label" for="light-mode-check">Light Mode</label>
            </div>

            <div class="custom-control custom-switch mb-1">
              <input type="radio" class="custom-control-input" name="color-scheme-mode" value="dark"
                id="dark-mode-check" />
              <label class="custom-control-label" for="dark-mode-check">Dark Mode</label>
            </div>

            {/*  Width */}
            <h5 class="mt-4">Width</h5>
            <hr class="mt-1" />
            <div class="custom-control custom-switch mb-1">
              <input type="radio" class="custom-control-input" name="width" value="fluid" id="fluid-check" checked />
              <label class="custom-control-label" for="fluid-check">Fluid</label>
            </div>
            <div class="custom-control custom-switch mb-1">
              <input type="radio" class="custom-control-input" name="width" value="boxed" id="boxed-check" />
              <label class="custom-control-label" for="boxed-check">Boxed</label>
            </div>

            {/*  Left Sidebar*/}
            <h5 class="mt-4">Left Sidebar</h5>
            <hr class="mt-1" />
            <div class="custom-control custom-switch mb-1">
              <input type="radio" class="custom-control-input" name="theme" value="default" id="default-check"
                checked />
              <label class="custom-control-label" for="default-check">Default</label>
            </div>

            <div class="custom-control custom-switch mb-1">
              <input type="radio" class="custom-control-input" name="theme" value="light" id="light-check" />
              <label class="custom-control-label" for="light-check">Light</label>
            </div>

            <div class="custom-control custom-switch mb-3">
              <input type="radio" class="custom-control-input" name="theme" value="dark" id="dark-check" />
              <label class="custom-control-label" for="dark-check">Dark</label>
            </div>

            <div class="custom-control custom-switch mb-1">
              <input type="radio" class="custom-control-input" name="compact" value="fixed" id="fixed-check"
                checked />
              <label class="custom-control-label" for="fixed-check">Fixed</label>
            </div>

            <div class="custom-control custom-switch mb-1">
              <input type="radio" class="custom-control-input" name="compact" value="condensed"
                id="condensed-check" />
              <label class="custom-control-label" for="condensed-check">Condensed</label>
            </div>

            <div class="custom-control custom-switch mb-1">
              <input type="radio" class="custom-control-input" name="compact" value="scrollable"
                id="scrollable-check" />
              <label class="custom-control-label" for="scrollable-check">Scrollable</label>
            </div>

            <button class="btn btn-primary btn-block mt-4" id="resetBtn">Reset to Default</button>

            <a href="https://themes.getbootstrap.com/product/hyper-responsive-admin-dashboard-template/"
              class="btn btn-danger btn-block mt-3" target="_blank"><i class="mdi mdi-basket mr-1"></i> Purchase Now</a>
          </div> {/*  end padding*/}

        </div>
      </div>

      <div class="rightbar-overlay"></div>
    </>

  );
}

export default App;
