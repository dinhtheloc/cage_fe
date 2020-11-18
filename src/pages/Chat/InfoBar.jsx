import React from 'react'

export default function InfoBar() {
    return (
        <div className="col-3">
            <div className="card">
                <div className="card-body">
                    <div className="dropdown float-right">
                        <i className="uil uil-exchange-alt"></i>
                    </div>

                    <div className="mt-3 text-center">
                        <img src="https://coderthemes.com/hyper/saas/assets/images/users/avatar-5.jpg"
                            alt="shreyu" className="img-thumbnail avatar-lg rounded-circle" />
                        <h4>Shreyu N</h4>
                    </div>

                    <div className="mt-3">
                        <hr />

                        <p className="mt-4 mb-1"><strong> Tên trong game:</strong></p>
                        <p>caygheysamvuong</p>

                        <p className="mt-4 mb-1"><strong> Riot Id:</strong></p>
                        <p>#1234</p>

                        <p className="mt-4 mb-1"><strong> Giới tính:</strong></p>
                        <p>Nam</p>

                        <p className="mt-4 mb-1"><strong> Rank:</strong></p>
                        <p>Bạch kim</p>

                    </div>
                </div> {/*  end card-body  */}
            </div> {/*  end card */}
        </div>
    )
}
