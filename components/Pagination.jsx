'use client'

import { useState } from "react";

const Pagination = ()=>{
     const [page, setPage] = useState()

    return(
   <>
         <button onClick={()=>setPage(1)}>1</button>
         <button onClick={()=>setPage(2)}>2</button>
         <button onClick={()=>setPage(3)}>3</button>
         {page}
   </>
    )
}
export default Pagination;