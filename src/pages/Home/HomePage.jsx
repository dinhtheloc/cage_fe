import React, { useEffect, useState } from 'react';
import CardPost from './child/CardPost';
import FormCreatePost from './child/FormCreatePost';
import postApi from '../../api/postApi';
import Pagination from '../../components/Pagination';

const listRank = new Map();
listRank.set('iron', 'Sắt');
listRank.set('bronze', 'Đồng');
listRank.set('silver', 'Bạc');
listRank.set('gold', 'Vàng');
listRank.set('platinum', 'Bạch kim');
listRank.set('diamond', 'Kim cương');
listRank.set('immortal', 'Immortal');
listRank.set('radiant', 'Radiant');

export default function HomePage() {

    const [posts, setPosts] = useState([]);
    const [count, setCount] = useState(0);
    const [pageIndex, setPageIndex] = useState(1);
    const [pageSize, setPageSize] = useState(9);
    const [totalPages, setTotalPages] = useState(0);
    const [rankFilter, setRankFilter] = useState(null);

    useEffect(() => {
        search();
    }, [pageSize, rankFilter]);


    const search = async () => {

        const req = {
            pageIndex,
            pageSize,
            rankFilter
        }

        try {
            const { count, pageIndex, posts, totalPages } = await postApi.getAll(req);
            setPosts(posts);
            setCount(count);
            setPageIndex(Number(pageIndex));
            setTotalPages(totalPages);
        } catch (error) {
            console.log('error', error);
        }
    }

    return (
        <>
            <div className="row">
                <div className="col-12">
                    <div className="page-title-box">
                        <div className="page-title-right">
                            <ol className="breadcrumb m-0">
                                <li className="breadcrumb-item"><a href="#">Tìm kiếm đồng đội</a></li>
                                <li className="breadcrumb-item active">Profile</li>
                            </ol>
                        </div>
                        <h4 className="page-title">Tìm kiếm đồng đội</h4>
                    </div>
                </div>
            </div>

            <div
                style={{ display: 'inline-block', verticalAlign: 'middle' }}
                className="dropdown mb-3 mr-2">
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

            <button type="button"
                data-toggle="modal" data-target="#staticBackdrop"
                className="btn btn-danger btn-rounded mb-3"><i className="uil-plus"></i> Tạo bài viết</button>

            <FormCreatePost></FormCreatePost>

            <div className="row">


                {
                    posts.map(i => {
                        return (
                            <div key={i['_id']} className="col-sm-12 col-md-4">
                                <CardPost data={i}></CardPost>
                            </div>)
                    })
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
