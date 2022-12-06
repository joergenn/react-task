import React from "react";

const NewsItem = (props) => {
    return (
        <div className="news-item">
            <img src={props.news.photo} alt="News"/>
            <span>News ID: {props.news.id}</span>
            <h3>{props.news.title}</h3>
            <p>{props.news.body}</p>
        </div>   
    )
};

export default NewsItem;