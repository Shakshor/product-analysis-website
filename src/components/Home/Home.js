import React from 'react';
import useFakeData from '../../hooks/useFakeData';
import img from '../../images/DellLaptop.jpg';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Home.css';

const Home = () => {
    const [reviews, setReviews] = useFakeData();

    return (
        <main className='home-area'>
            <section className='product-area'>
                <div className="product-details">
                    <h1>CHOOSE YOUR LAPTOP</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis voluptate magni nulla nobis odit? Placeat optio voluptatibus cupiditate amet, eveniet aut, dolores vel autem eius, repudiandae et doloremque saepe perspiciatis?</p>
                </div>
                <div className="product-pic">
                    <img src={img} alt="" />
                </div>
            </section>
            <section>
                <h2>Customer Reviews:{reviews.length}</h2>
                <div className='reviews-area'>
                    {
                        reviews.map(review => <ReviewItem key={review.id} review={review}></ReviewItem>)
                    }
                </div>
            </section>
        </main>
    );
};

export default Home;