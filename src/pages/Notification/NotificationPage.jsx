import React from 'react'

export default function NotificationPage() {
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <div className="page-title-box">
                        <div className="page-title-right">
                            <ol className="breadcrumb m-0">
                                <li className="breadcrumb-item"><a href="#">Tìm kiếm đồng đội</a></li>
                                <li className="breadcrumb-item active">Thông báo</li>
                            </ol>
                        </div>
                        <h4 className="page-title">Thông báo</h4>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div class="card">
                        <div class="card-body p-0">
                            <div class="tab-content">
                                <div class="tab-pane show active p-3" id="newpost">

                                    {/*  start search box */}
                                    <div class="app-search">
                                        <form>
                                            <div class="form-group position-relative">
                                                <input type="text" class="form-control"
                                                    placeholder="People, groups & messages..." />
                                                <span class="mdi mdi-magnify search-icon"></span>
                                            </div>
                                        </form>
                                    </div>
                                    {/*  end search box */}

                                    {/*  users */}
                                    <div class="row">
                                        <div class="col">
                                            <div style={{ maxHeight: "550px", overflow: 'hidden scroll' }}>
                                                <a href="javascript:void(0);" class="text-body">
                                                    <div class="media mt-1 p-2">
                                                        <img src="//coderthemes.com/hyper/saas/assets/images/users/avatar-2.jpg" class="mr-2 rounded-circle" height="48" alt="Brandon Smith" />
                                                        <div class="media-body">
                                                            <h5 class="mt-0 mb-0 font-14">
                                                                <span class="float-right text-muted font-12">4:30am</span>
                                                                            Brandon Smith
                                                                        </h5>
                                                            <p class="mt-1 mb-0 text-muted font-14">
                                                                <span class="w-25 float-right text-right"><span class="badge badge-danger-lighten">3</span></span>
                                                                <span class="w-75">How are you today?</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </a>

                                                <a href="javascript:void(0);" class="text-body">
                                                    <div class="media bg-light p-2">
                                                        <img src="//coderthemes.com/hyper/saas/assets/images/users/avatar-5.jpg" class="mr-2 rounded-circle" height="48" alt="Shreyu N" />
                                                        <div class="media-body">
                                                            <h5 class="mt-0 mb-0 font-14">
                                                                <span class="float-right text-muted font-12">5:30am</span>
                                                                            Shreyu N
                                                                        </h5>
                                                            <p class="mt-1 mb-0 text-muted font-14">
                                                                <span class="w-75">Hey! a reminder for tomorrow's meeting...</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </a>

                                                <a href="javascript:void(0);" class="text-body">
                                                    <div class="media mt-1 p-2">
                                                        <img src="//coderthemes.com/hyper/saas/assets/images/users/avatar-7.jpg" class="mr-2 rounded-circle" height="48" alt="Maria C" />
                                                        <div class="media-body">
                                                            <h5 class="mt-0 mb-0 font-14">
                                                                <span class="float-right text-muted font-12">Thu</span>
                                                                            Maria C
                                                                        </h5>
                                                            <p class="mt-1 mb-0 text-muted font-14">
                                                                <span class="w-25 float-right text-right"><span class="badge badge-danger-lighten">2</span></span>
                                                                <span class="w-75">Are we going to have this week's planning meeting today?</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </a>

                                                <a href="javascript:void(0);" class="text-body">
                                                    <div class="media mt-1 p-2">
                                                        <img src="//coderthemes.com/hyper/saas/assets/images/users/avatar-10.jpg"
                                                            class="mr-2 rounded-circle" height="48" alt="Rhonda D" />
                                                        <div class="media-body">
                                                            <h5 class="mt-0 mb-0 font-14">
                                                                <span class="float-right text-muted font-12">Wed</span>
                                                                            Rhonda D
                                                                        </h5>
                                                            <p class="mt-1 mb-0 text-muted font-14">
                                                                <span class="w-75">Please check these design assets...</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </a>

                                                <a href="javascript:void(0);" class="text-body">
                                                    <div class="media mt-1 p-2">
                                                        <img src="//coderthemes.com/hyper/saas/assets/images/users/avatar-3.jpg"
                                                            class="mr-2 rounded-circle" height="48" alt="Michael H" />
                                                        <div class="media-body">
                                                            <h5 class="mt-0 mb-0 font-14">
                                                                <span class="float-right text-muted font-12">Tue</span>
                                                                            Michael H
                                                                        </h5>
                                                            <p class="mt-1 mb-0 text-muted font-14">
                                                                <span class="w-25 float-right text-right"><span class="badge badge-danger-lighten">6</span></span>
                                                                <span class="w-75">Are you free for 15 min? I would like to discuss something...</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </a>

                                                <a href="javascript:void(0);" class="text-body">
                                                    <div class="media mt-1 p-2">
                                                        <img src="//coderthemes.com/hyper/saas/assets/images/users/avatar-6.jpg"
                                                            class="mr-2 rounded-circle" height="48" alt="Thomas R" />
                                                        <div class="media-body">
                                                            <h5 class="mt-0 mb-0 font-14">
                                                                <span class="float-right text-muted font-12">Tue</span>
                                                                            Thomas R
                                                                        </h5>
                                                            <p class="mt-1 mb-0 text-muted font-14">
                                                                <span class="w-75">Let's have meeting today between me, you and Tony...</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </a>

                                                <a href="javascript:void(0);" class="text-body">
                                                    <div class="media mt-1 p-2">
                                                        <img src="//coderthemes.com/hyper/saas/assets/images/users/avatar-8.jpg"
                                                            class="mr-2 rounded-circle" height="48" alt="Thomas J" />
                                                        <div class="media-body">
                                                            <h5 class="mt-0 mb-0 font-14">
                                                                <span class="float-right text-muted font-12">Tue</span>
                                                                            Thomas J
                                                                        </h5>
                                                            <p class="mt-1 mb-0 text-muted font-14">
                                                                <span class="w-75">Howdy?</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </a>

                                                <a href="javascript:void(0);" class="text-body">
                                                    <div class="media mt-1 p-2">
                                                        <img src="//coderthemes.com/hyper/saas/assets/images/users/avatar-1.jpg"
                                                            class="mr-2 rounded-circle" height="48" alt="Ricky J" />
                                                        <div class="media-body">
                                                            <h5 class="mt-0 mb-0 font-14">
                                                                <span
                                                                    class="float-right text-muted font-12">Mon</span>
                                                                                Ricky J
                                                                        </h5>
                                                            <p class="mt-1 mb-0 text-muted font-14">
                                                                <span class="w-25 float-right text-right"><span class="badge badge-danger-lighten">28</span></span>
                                                                <span class="w-75">Are you interested in learning?</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </a>

                                            </div> {/*  end slimscroll*/}
                                        </div> {/*  End col */}
                                    </div>
                                    {/*  end users */}
                                </div> {/*  end Tab Pane*/}
                            </div> {/*  end tab content*/}
                        </div> {/*  end card-body*/}
                    </div> {/*  end card*/}

                </div>
            </div>

        </>


    )
}
