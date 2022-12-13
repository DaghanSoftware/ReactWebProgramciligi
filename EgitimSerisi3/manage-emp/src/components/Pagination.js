import React, { useEffect, useState } from "react";

const Pagination = ({pages,setCurrentPage,currentEmployees,employees}) => {

    const numOfPages = [];
    for (let i=1; i<=pages;i++){
        numOfPages.push(i);

    }
    const [currentButon,setCurrentButton]=useState(1);
    useEffect(()=>{
        setCurrentPage(currentButon)
    },[currentButon,setCurrentButton])
  return (
    <div className="clearfix">
      <div className="hint-text">
        Showing <b>{currentEmployees}</b> out of <b>{employees}</b> entries
      </div>
      <ul className="pagination">

        <li className={`${currentButon===1?'page-item disabled':'page-item'}`}>
          <a href="#!" className="page-link" onClick={()=> setCurrentButton((prev)=>prev===1 ? prev: prev-1)}>Previous</a>
        </li>

        {
            numOfPages.map((page,index)=>{
                return(
                <li key={index} className={`${currentButon ===page?'page-item active':'page-item'}`}><a href="#!" className="page-link"
                onClick={()=>setCurrentButton(page)}
                > {page}</a></li>
                )
            })
        }

        <li className={`${currentButon===numOfPages.length?'page-item disabled':'page-item'}`}>
          <a href="#!" className="page-link" onClick={()=> setCurrentButton((prev)=>prev===numOfPages.length ? prev: prev+1)}>Next</a>
        </li>
      </ul>
    </div>
  );
};
export default Pagination;