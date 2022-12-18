import React from 'react';
import Feedback from './FeedbackOptions/FeedbackOptions';
// import Statistics from './Statistics/Statistics';
// import FeedbackOptions from './FeedbackOptions/FeedbackOptions';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };


 onLeaveFeedback = key => {
    this.setState(prevState => ({ [key]: prevState[key] + 1 }));
  };

render (){
  return(
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Feedback/>
      </div>
)}
};
