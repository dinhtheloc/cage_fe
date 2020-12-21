import React from 'react';
import {
    Link
} from "react-router-dom";

export default function Breadcrumb({ title }) {
    return (
        <div className="page-title-box">
            <div className="page-title-right">
                <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item">
                        <Link to={`/`}>Tìm kiếm đồng đội</Link></li>
                    <li className="breadcrumb-item active">{title}</li>
                </ol>
            </div>
            <h4 className="page-title">{title}</h4>
        </div>
    )
}
