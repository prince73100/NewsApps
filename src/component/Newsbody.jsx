import React from 'react'

function Newsbody({title,description,image,url,publishedAt}) {
    return (
        <div className="card" style={{width:"300px",height:"500px"}}>    
            <img src={image} className="card-img-top" alt="" style={{width:"100%",height:"250px"}} />
            <div className="card-body">
                <h5 className="card-title">{title} ....</h5>
                <p className="card-text">{description}</p>
                <p className='fw-bolder'>{publishedAt}</p>
                <a href={url} className="btn btn-primary">View in details</a>
            </div>
        </div>
    )
}

export default Newsbody
