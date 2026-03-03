import { Navigate } from "react-router";
import { useAuth } from "../hooks/useAuth";
import React, { useEffect } from 'react'

const Protected = ({children}) => {
    const {user, loading} = useAuth();
    if(loading){
        return (<main><h1>Loading...</h1></main>)
    }

    if(!user){
       return <Navigate to={"/login"}/>;
    }


    // useEffect(() => {
    //     if(!user){
    //         navigate("/login")
    //     }

    // }, [])
    
  return children
}

export default Protected