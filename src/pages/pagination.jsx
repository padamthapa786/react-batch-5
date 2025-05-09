import React, { useState } from "react";
import ReactPaginate from "react-paginate";

//statically kasari paginate ///

const items = Array.from(
  {
    length: 100,
  },
  (_, i) => `item ${i + 1}`
);
console.log(items);
const itemPerPage = 10;

const Paginate = () => {
  //javascript
  const [currentPage, setCurrentPage] = useState(0);

  //logic to calcalute current item
  //currentitems
  //pagecount

  const offset = currentPage * itemPerPage;
  const currentItems = items.slice(offset, offset + itemPerPage);
  const pageCount = Math.ceil(items.length / itemPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <>
      <div>
        <ul>
          {currentItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <ReactPaginate
          pageCount={pageCount}
          onPageChange={handlePageClick}
          previousLabel={"Previous"}
          nextLabel="Next"
          containerClassName="pagination"
          activeClassName="active"
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
        />
      </div>
    </>
  );
};

export default Paginate;
