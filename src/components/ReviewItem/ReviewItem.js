import React from 'react';
import './ReviewItem.css'

const ReviewItem = (props) => {
    const { img, name, review, ratings } = props.review;
    return (
        <div className='reviewItem-area'>
            <img src={img} alt="" />
            <div>
                <h4>{name}</h4>
                <p><span style={{ color: 'green' }}>{review}</span></p>
                <p className='ratings'>Ratings: <span style={{ color: '#4D96FF' }}>{ratings}</span></p>
            </div>
        </div>
    );
};

export default ReviewItem;