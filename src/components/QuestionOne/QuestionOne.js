import React from 'react';
import './QuestionOne.css'

const QuestionOne = () => {
    return (
        <div className='first-question'>
            <h2>What is Context API?</h2>
            <p><strong>Ans: </strong>Context API is used instead of props drilling. It is a process where 'global' data could be shared in a tree of React Components. </p>
            <h2>How It Works?</h2>
            <p><strong>Ans: </strong>First We have to call React.createContext() that should have a default value. It returns a consumer and a provider. <strong>Provider</strong>provides the 'global'data to its children.
                It store the data or value and it becomes the parent of all components where the data is needed. <strong>Consumer</strong> uses the data</p>
        </div>
    );
};

export default QuestionOne;