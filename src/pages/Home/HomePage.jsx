import React, { useEffect, useState } from 'react';
import CardPost from './child/CardPost';
import FormCreatePost from './child/FormCreatePost';
import postApi from '../../api/postApi';
import Pagination from '../../components/Pagination';
import Breadcrumb from '../../components/Breadcrumb';

const listRank = new Map();
listRank.set('iron', 'Sắt');
listRank.set('bronze', 'Đồng');
listRank.set('silver', 'Bạc');
listRank.set('gold', 'Vàng');
listRank.set('platinum', 'Bạch kim');
listRank.set('diamond', 'Kim cương');
listRank.set('immortal', 'Immortal');
listRank.set('radiant', 'Radiant');

export default function HomePage({ userProfile }) {

    const [posts, setPosts] = useState([]);
    const [count, setCount] = useState(0);
    const [pageIndex, setPageIndex] = useState(1);
    const [pageSize, setPageSize] = useState(9);
    const [totalPages, setTotalPages] = useState(0);
    const [rankFilter, setRankFilter] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isFirstTime, setIsFirstTime] = useState(true);

    useEffect(() => {
        search();
    }, [pageSize, rankFilter]);


    const search = async () => {

        const req = {
            pageIndex,
            pageSize,
            rankFilter
        }

        if (!isFirstTime) {
            setIsLoading(true);
        }

        try {
            const { count, pageIndex, posts, totalPages } = await postApi.getAll(req);
            setPosts(posts);
            setCount(count);
            setPageIndex(Number(pageIndex));
            setTotalPages(totalPages);
            if (isFirstTime) {
                setIsFirstTime(false);
            } else {
                window.$.NotificationApp.send("Yeah", "Tải mới bản tin thành công", "top-right", "rgba(0,0,0,0.2)", "success");
                setTimeout(() => setIsLoading(false), 3000);
            }
        } catch (error) {
            console.log('error', error);
        }
    }

    return (
        <>
            <div className="row">
                <div className="col-12">
                    <Breadcrumb
                        title={'Tìm kiếm đồng đội'}
                    ></Breadcrumb>
                </div>
            </div>

            <div className="d-flex justify-content-between mb-3">
                <div>

                    <div
                        style={{ display: 'inline-block', verticalAlign: 'middle' }}
                        className="dropdown mr-2">
                        <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="uil-signal-alt"></i> Lọc theo rank {rankFilter ? <span className="badge badge-light">{listRank.get(rankFilter)}</span> : ''}
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            {/* <button className="dropdown-item" onClick={() => { setRankFilter(null); setPageIndex(1); search(); }}>Tất cả</button>
                    <button className="dropdown-item" onClick={() => { setRankFilter('iron'); setPageIndex(1); search(); }}>{listRank.get('iron')}</button>
                    <button className="dropdown-item" onClick={() => { setRankFilter('bronze'); setPageIndex(1); search(); }}>{listRank.get('bronze')}</button>
                    <button className="dropdown-item" onClick={() => { setRankFilter('silver'); setPageIndex(1); search(); }}>{listRank.get('silver')}</button>
                    <button className="dropdown-item" onClick={() => { setRankFilter('gold'); setPageIndex(1); search(); }}>{listRank.get('gold')}</button>
                    <button className="dropdown-item" onClick={() => { setRankFilter('platinum'); setPageIndex(1); search(); }}>{listRank.get('platinum')}</button>
                    <button className="dropdown-item" onClick={() => { setRankFilter('diamond'); setPageIndex(1); search(); }}>{listRank.get('diamond')}</button>
                    <button className="dropdown-item" onClick={() => { setRankFilter('immortal'); setPageIndex(1); search(); }}>{listRank.get('immortal')}</button>
                    <button className="dropdown-item" onClick={() => { setRankFilter('radiant'); setPageIndex(1); search(); }}>{listRank.get('radiant')}</button> */}

                            <button className="dropdown-item" onClick={() => { setRankFilter(null); }}>Tất cả</button>
                            <button className="dropdown-item" onClick={() => { setRankFilter('iron'); }}>{listRank.get('iron')}</button>
                            <button className="dropdown-item" onClick={() => { setRankFilter('bronze'); }}>{listRank.get('bronze')}</button>
                            <button className="dropdown-item" onClick={() => { setRankFilter('silver'); }}>{listRank.get('silver')}</button>
                            <button className="dropdown-item" onClick={() => { setRankFilter('gold'); }}>{listRank.get('gold')}</button>
                            <button className="dropdown-item" onClick={() => { setRankFilter('platinum'); }}>{listRank.get('platinum')}</button>
                            <button className="dropdown-item" onClick={() => { setRankFilter('diamond'); }}>{listRank.get('diamond')}</button>
                            <button className="dropdown-item" onClick={() => { setRankFilter('immortal'); }}>{listRank.get('immortal')}</button>
                            <button className="dropdown-item" onClick={() => { setRankFilter('radiant'); }}>{listRank.get('radiant')}</button>
                        </div>
                    </div>


                    {!isLoading ? <button
                        type="button"
                        onClick={() => { search(); }}
                        className="btn btn-primary"><i className="uil-sync"></i> Làm mới bản tin</button> : <button className="btn btn-primary" type="button" disabled>
                            <span className="spinner-border spinner-border-sm mr-1" role="status" aria-hidden="true"></span>
                        Loading...
                    </button>}


                    {/* <div className="ml-2" style={{ display: 'inline-block', verticalAlign: 'middle', lineHeight: 0 }} >
                        
                        <span>chi hien</span>
                        <input type="checkbox" id="switch6" checked data-switch="danger" />
                        <label className="m-0" for="switch6" data-on-label="On" data-off-label="Off"></label>
                    </div> */}
                </div>
                <div>
                    <button type="button"
                        data-toggle="modal" data-target="#staticBackdrop"
                        className="btn btn-danger btn-rounded"><i className="uil-plus"></i> Tạo bài viết</button>
                </div>
            </div>

            <FormCreatePost search={() => { search(); }}></FormCreatePost>

            <div className="row">
                {
                    posts && posts.length > 0 ? posts.map(i => {
                        return (
                            <div key={i['_id']} className="col-sm-12 col-md-6">
                                <CardPost
                                    facebookId={userProfile.facebook_id}
                                    data={i}></CardPost>
                            </div>)
                    }) :
                        <div className="col-12">
                            <div className="alert alert-info" role="alert">
                                <h4 className="alert-heading">Hmmmm!</h4>
                                <p>Hiện tại ngày hôm nay chưa có ai tạo bài viết. Bạn hãy là người đầu tiên tạo đi nào! <a href="#" data-toggle="modal" data-target="#staticBackdrop"> Click vào đây </a> để tạo nhé!</p>
                            </div>
                        </div>
                }
            </div>



            <div className={'text-right mt-4'}>
                <Pagination count={count}
                    pageIndex={pageIndex}
                    changePagination={(i) => {
                        setPageIndex(i);
                        search();
                    }
                    }
                    totalPages={totalPages} ></Pagination>
            </div>

        </>
    )
}
