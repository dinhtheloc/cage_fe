import React from 'react'

export default function ProfilePage() {
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <div className="page-title-box">
                        <div className="page-title-right">
                            <ol className="breadcrumb m-0">
                                <li className="breadcrumb-item"><a href="javascript: void(0);">Tìm kiếm đồng đội</a></li>
                                <li className="breadcrumb-item active">Profile</li>
                            </ol>
                        </div>
                        <h4 className="page-title">Profile</h4>
                    </div>
                </div>
            </div>


            <div class="row">
                <div class="col-sm-12">
                    {/* Profile  */}
                    <div class="card bg-primary">
                        <div class="card-body profile-user-box">

                            <div class="row">
                                <div class="col-sm-8">
                                    <div class="media">
                                        <span class="float-left m-2 mr-4">
                                            <img src="https://coderthemes.com/hyper/saas/assets/images/users/avatar-2.jpg" style={{ height: '100px' }} class="rounded-circle img-thumbnail" /></span>
                                        <div class="media-body">

                                            <h4 class="mt-1 mb-1 text-white">Michael Franklin</h4>
                                            <p class="font-13 text-white-50"> Authorised Brand Seller</p>

                                            <ul class="mb-0 list-inline text-light">
                                                <li class="list-inline-item mr-3">
                                                    <h5 class="mb-1">$ 25,184</h5>
                                                    <p class="mb-0 font-13 text-white-50">Total Revenue</p>
                                                </li>
                                                <li class="list-inline-item">
                                                    <h5 class="mb-1">5482</h5>
                                                    <p class="mb-0 font-13 text-white-50">Number of Orders</p>
                                                </li>
                                            </ul>
                                        </div> {/* end media-body */}
                                    </div>
                                </div> {/* end col */}

                            </div> {/* end row  */}

                        </div> {/* end card-body/ profile-user-box */}
                    </div>
                </div> {/* end col */}

            </div>
        </>
    )
}
