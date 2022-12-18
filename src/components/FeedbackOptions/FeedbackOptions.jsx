import PropTypes from 'prop-types';
import css from '../FeedbackOptions/feedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul className={css.controls}>
      {options.map(feedback => (
        <li key={feedback}>
          <button
            className={css.controls_btn}
            type="button"
            onClick={() => onLeaveFeedback(feedback)}
          >
            {feedback}
          </button>
        </li>
      ))}
    </ul>
  );
}
 

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
