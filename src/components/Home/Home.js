import React from 'react';
import { useNavigate } from 'react-router-dom';
import useFakeData from '../../hooks/useFakeData';
import ProductIntro from '../ProductIntro/ProductIntro';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Home.css';

const Home = () => {
    const [reviews, setReviews] = useFakeData();
    const newReviews = reviews.slice(0, 3);
    const navigate = useNavigate();

    return (
        <main className='home-area'>

            <ProductIntro></ProductIntro>

            <section className='reviews-section'>
                <h2>Customer Reviews:{reviews.length}</h2>
                <div className='reviews-area'>
                    {
                        newReviews.map(review => <ReviewItem key={review.id} review={review}></ReviewItem>)
                    }
                </div>
                {/* ------- using event handler ----- */}
                <button className='see-all-btn' onClick={() => navigate('/reviews')}>See All Reviews</button>
            </section>
        </main>
    );
};

export default Home;