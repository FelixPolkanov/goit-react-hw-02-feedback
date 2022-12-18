import React from 'react';
import css from '../Feedback/feedback.module.css';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';


class Feedback extends React.Component {


  onGoodBtn = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  onNeutralBtn = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };
  onBadBtn = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  countTotalFeedback = (goodFeedback, neutralFeedback, badFeedback) =>
    goodFeedback + neutralFeedback + badFeedback;

  countPositiveFeedbackPercentage = (goodFeedback, totalFeedback) => {
    if (totalFeedback === 0 || goodFeedback === 0) {
      return 0;
    } else {
      return Math.round((goodFeedback * 100) / totalFeedback);
    }
  };

  render() {
    const total = this.countTotalFeedback(
      this.state.good,
      this.state.neutral,
      this.state.bad,
    );
    const positiveFeedback = this.countPositiveFeedbackPercentage(
      this.state.good,
      total
    );

    return (
      <div className={css.feedback}>
        <h1 className={css.title}>Please, leave feedback</h1>
        <FeedbackOptions />
        <Statistics good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.state.total}
        positiveFeedback={this.state.positiveFeedback}/>
        
      </div>
    );
  }
}

export default Feedback;
