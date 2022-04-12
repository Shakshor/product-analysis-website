import React from 'react';
import useFakeData from '../../hooks/useFakeData';
import ReviewItem from '../ReviewItem/ReviewItem';

const Reviews = () => {
    const [reviews, setReviews] = useFakeData();
    return (
        <div className='reviews-area'>
            {
                reviews.map(review => <ReviewItem key={review.id} review={review}></ReviewItem>)
            }
        </div>
    );
};

export default Reviews;