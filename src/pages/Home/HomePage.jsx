import React from 'react'

export default function HomePage() {
    return (
        <div className="row">
            <div className="col-sm-12 col-md-4">
                <div class="card mb-0 mt-2 ribbon-box">
                    <div class="card-body">

                        {/* <div class="ribbon float-right color-rank-diamond"> Rank kim cương</div> */}
                        <div class="ribbon-two color-rank-diamond"><span>Kim Cương</span></div>
                        <div class="media mb-3 mt-1">
                            <img class="d-flex mr-2 rounded-circle" src="https://coderthemes.com/hyper/saas/assets/images/users/avatar-2.jpg" alt="placeholder image" height="32" />
                            <div class="media-body">
                                <small class="float-right">3 phút trước</small>
                                <h6 class="m-0 font-14">Steven Smith</h6>
                                <small class="text-muted">caygheysamvuong #9921</small>
                            </div>
                        </div>

                        <p class="mb-2 text-muted">
                            <span class="font-italic"><b>"</b>Disrupt pork belly poutine, asymmetrical tousled succulents selfies.
                                    You probably haven't heard of them tattooed master cleanse live-edge keffiyeh.</span>
                        </p>

                        
                        <button type="button" class="btn btn-block btn-primary"><i class="uil uil-comments-alt"></i> Chat ngay</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
