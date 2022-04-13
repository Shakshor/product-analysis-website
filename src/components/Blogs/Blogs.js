import React from 'react';
import QuestionOne from '../QuestionOne/QuestionOne';
import QuestionThree from '../QuestionThree/QuestionThree';
import QuestionTwo from '../QuestionTwo/QuestionTwo';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='questions-container'>
            <h1 className='title'>Questions</h1>
            <QuestionOne></QuestionOne>
            <QuestionTwo></QuestionTwo>
            <QuestionThree></QuestionThree>
        </div>
    );
};

export default Blogs;