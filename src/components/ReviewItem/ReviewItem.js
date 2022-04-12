import React from 'react';
import './ReviewItem.css'

const ReviewItem = (props) => {
    // console.log(props);
    const { img, name, text, ratings } = props.review;
    return (
        <div className='reviewItem-area'>
            <img src={img} alt="" />
            <div>
                <h4>Name: {name}</h4>
                <p>text: {text}</p>
                <p>Ratings: {ratings}</p>
            </div>
        </div>
    );
};

export default ReviewItem;