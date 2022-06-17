import { useState, useEffect } from "react";

const useFetchDataApi = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  return [data];
};

export default useFetchDataApi;

// import React, {useEffect} from "react";
// import { connect } from "react-redux";
// import { fetchUsers } from "../Redux/action";

// function useFetchDataApi({userData, fetchUsers}){
//   useEffect(()=>{
//     fetchUsers()
//   }, [])
//   return(
//     <>
//     {console.log(userData.users)}
//     </>
//   )
// }
// const mapStateToProps = state =>{
//   return{
//     userDate:state.user
//   }
// }
// const mapDispatchToProps = dispatch =>{
//   return{
//     fetchUsers : () => dispatch(fetchUsers())
//   }
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(useFetchDataApi)