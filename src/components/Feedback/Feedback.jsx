import React from 'react';
import css from '../Feedback/feedback.module.css';

class Feedback extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    onGoodBtn = () => {
        this.setState(prevState => {
            return {
                good: prevState.good + 1,
         }
        })
    }

     onNeutralBtn = () => {
        this.setState(prevState => {
            return {
                neutral: prevState.neutral + 1,
         }
        })
    }
     onBadBtn = () => {
        this.setState(prevState => {
            return {
                bad: prevState.bad + 1,
         }
        })
    }


  render() {
    return (
      <div className={css.feedback}>
        <h1 className={css.title}>Please, leave feedback</h1>
        <div className={css.controls}>
          <button className={css.controls_btn} type="button" onClick={this.onGoodBtn}>Good</button>
          <button className={css.controls_btn} type="button"onClick={this.onNeutralBtn}>Neutral</button>
          <button className={css.controls_btn} type="button"onClick={this.onBadBtn}>Bad</button>
            </div>
            <h2 className={css.title}>Statistics:</h2>
        <div className={css.feedback_resault}>
                <p>Good:{this.state.good}</p>
          <p>Neutral:{this.state.neutral}</p>
                <p>Bad:{this.state.bad}</p>
        </div>

        
      </div>
    );
  }
}

export default Feedback;
