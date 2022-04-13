import React from 'react';
import './QuestionThree.css'

const QuestionThree = () => {
    return (
        <div className='third-question'>
            <h2>Differences between Block and Inline-Block elements?</h2>
            <ol>
                <li>Block level elements always starts with a new line. But Inline-Block element remains in the same line.</li>
                <li>Block level elements takes the full width of a line.But Inline-Block element takes the space it needs.</li>
            </ol>
        </div>
    );
};

export default QuestionThree;