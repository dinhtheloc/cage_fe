import React from 'react'

export default function Login() {
    return (

        <div className="auth-fluid">
            {/* Auth fluid left content  */}
            <div className="auth-fluid-form-box">
                <div className="align-items-center d-flex h-100">
                    <div className="card-body">
                        {/*  Logo  */}
                        <div className="mb-4">
                            <a href="index.html" className="logo-light">
                                <span><img src="assets/images/logo.png" alt="" height="200" /></span>
                            </a>
                        </div>

                        {/*  title */}
                        <h4 className="mt-0">Đăng nhập</h4>
                        <p className="text-muted mb-4">Chỉ với tài khoản facebook là bạn đã có thể đăng nhập vào hệ thống rồi.</p>

                        <div className="form-group mb-0 text-center">
                            <a className="btn btn-primary btn-block" href={`${process.env.REACT_APP_SOCKET}auth/facebook`}><i className="mdi mdi-login"></i> Đăng nhập bằng facebook </a>
                        </div>


                    </div> {/*  end .card-body  */}
                </div> {/*  end .align-items-center.d-flex.h-100 */}
            </div>
            {/*  end auth-fluid-form-box */}

            {/*  Auth fluid right content  */}
            <div className="auth-fluid-right text-center">
                <div className="auth-user-testimonial">
                    <h2 className="mb-3">I love Valorant!</h2>
                    <p className="lead"><i className="mdi mdi-format-quote-open"></i> Khoảnh khắc vui nhất là được đắm mình vào thế giới Valorant. <i className="mdi mdi-format-quote-close"></i>
                    </p>
                    <p>
                        - Cage Gaming Admin
                    </p>
                </div> {/*  end auth-user-testimonial */}
            </div>
        </div>
    )
}
