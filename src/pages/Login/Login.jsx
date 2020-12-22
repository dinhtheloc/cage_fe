import React from 'react'

export default function Login() {
    return (

        <div class="auth-fluid">
            {/* Auth fluid left content  */}
            <div class="auth-fluid-form-box">
                <div class="align-items-center d-flex h-100">
                    <div class="card-body">

                        {/*  Logo  */}
                        <div class="auth-brand text-center text-lg-left">
                            <a href="index.html" class="logo-dark">
                                <span><img src="assets/images/logo.png" alt="" height="200" /></span>
                            </a>
                            <a href="index.html" class="logo-light">
                                <span><img src="assets/images/logo.png" alt="" height="200" /></span>
                            </a>
                        </div>

                        {/*  title */}
                        <h4 class="mt-0">Đăng nhập</h4>
                        <p class="text-muted mb-4">Chỉ với tài khoản facebook là bạn đã có thể đăng nhập vào hệ thống rồi.</p>

                        <div class="form-group mb-0 text-center">
                            <a class="btn btn-primary btn-block" href={`${process.env.REACT_APP_BASE_HREF}auth/facebook`}><i class="mdi mdi-login"></i> Đăng nhập bằng facebook </a>
                        </div>


                    </div> {/*  end .card-body  */}
                </div> {/*  end .align-items-center.d-flex.h-100 */}
            </div>
            {/*  end auth-fluid-form-box */}

            {/*  Auth fluid right content  */}
            <div class="auth-fluid-right text-center">
                <div class="auth-user-testimonial">
                    <h2 class="mb-3">I love Valorant!</h2>
                    <p class="lead"><i class="mdi mdi-format-quote-open"></i> Khoảnh khắc vui nhất là được đắm mình vào thế giới Valorant. <i class="mdi mdi-format-quote-close"></i>
                    </p>
                    <p>
                        - Cage Gaming Admin
                    </p>
                </div> {/*  end auth-user-testimonial */}
            </div>
        </div>
    )
}
