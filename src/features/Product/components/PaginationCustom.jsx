import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.scss'

PaginationCustom.propTypes = {
    page: PropTypes.number,
    limit: PropTypes.number,
    total: PropTypes.number
};


function PaginationCustom({ paginations, setPages }) {
    console.log(paginations);
    const currentPage = paginations.page;
    const numberPages = Math.ceil(paginations.total/paginations.limit);

    // Lưu thông tin số page vào 1 array
    let pageNumbers = [];
    for (var i = 1; i <= numberPages; i++) {
        pageNumbers.push(i);
    }
    return (
        <ul className="pagination">
            <li><a onClick={() => setPages(1)}>First</a></li>
            <li><a onClick={() => setPages(currentPage - 1)}>{"<"}</a></li>

            {/* For để tạo số page number */}
            { 
              pageNumbers.map((number) => (
                <li key={number} className={number == currentPage ? 'active' : ''}><a onClick={() => setPages(number)}>{number}</a></li>
             ))
            }
            <li><a onClick={() => setPages(currentPage + 1)}>{">"}</a></li>
            <li><a onClick={() => setPages(numberPages)}>Last</a></li>
        </ul>
    );
}

export default PaginationCustom;