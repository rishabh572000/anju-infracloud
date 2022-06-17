import React from "react";
import TableData from "./TableData";

const CommentAll = () =>{
return(
    <>
    <TableData url={"https://jsonplaceholder.typicode.com/comments"} id='id' nameman='name' body='body'/> 
    </>
)
}
export default CommentAll;