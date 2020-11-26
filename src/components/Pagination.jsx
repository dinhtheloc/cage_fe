import React from 'react'

export default function Pagination({ changePagination, pageIndex, totalPages }) {


    const array = [];

    if (totalPages > 0) {
        for (let index = 0; index < totalPages; index++) {
            array.push(index + 1);
        }
    }

    return (
        <nav className="d-inline-block">
            <ul className="pagination mb-0">
                <li className={`page-item ${pageIndex === 1 ? 'disabled' : ''}`}>
                    <button className="page-link" onClick={() => changePagination(pageIndex - 1)} aria-disabled="true">Previous</button>
                </li>
                {array.map(i => {
                    return (
                        <li key={i} className={`page-item ${pageIndex === i ? 'active' : ''}`}>
                            <button className="page-link" onClick={() => changePagination(i)} >{i} {pageIndex === i ? <span className="sr-only">(current)</span> : ''}</button>
                        </li>
                    );
                })}
                <li className={`page-item ${totalPages === pageIndex ? 'disabled' : ''}`}>
                    <a className="page-link" onClick={() => changePagination(pageIndex + 1)}>Next</a>
                </li>
            </ul>
        </nav>
    )
}
