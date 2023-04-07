import React, { Component } from "react";

export class NewsItem extends Component {
  
  
    render() {
    let {title,description,url,newsUrl,auther,date,source} = this.props;
    
    return (
      <>
       <div className="my-2">
       <div   className="card">
       <span className="position-absolute  badge rounded-pill bg-danger" style={{zIndex:'1', right:'0',justifyContent:'flex-end',display:'flex'}}>
                 {source}
            </span>
          <img src={url}   className="card-img-top" alt="imageUrl"/>
          <div   className="card-body">
            <h5   className="card-title">{title}
            </h5>
            <p   className="card-text">
              {description}
            </p>
            <p className="card-text"><small className="text-body-secondary">By {auther} on {new Date(date).toUTCString()}</small></p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">
              Read more
            </a>
          </div>
        </div>
       </div>
      </>
    );
  }
}

export default NewsItem;
