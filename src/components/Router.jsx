import React from 'react'; 
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import News from "../pages/News";
import Posts from "../pages/Posts";
import Profile from "../pages/Profile";

const Router = () => {
    // const {isAuth, isLoading} = useContext(AuthContext);
    // console.log(isAuth);
    // if(isLoading) {
    //     return(
    //         <Loader/>
    //     )
    // }


    if(localStorage.getItem('auth') === 'true'){
        return(
            <Routes>
                <Route path="/news" element={<News/>}/>
                <Route path="/posts" element={<Posts/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="*" element={<Navigate to="/posts" replace/>}/>
            </Routes>
        )
    }
    else{
        return(
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/news" element={<News/>}/>
                <Route path="*" element={<Navigate to="/login" replace/>}/>
            </Routes>
        )
    }
};

export default Router;