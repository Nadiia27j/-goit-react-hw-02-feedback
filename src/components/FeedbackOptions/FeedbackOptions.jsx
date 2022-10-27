import { PropTypes } from 'prop-types';


export default function FeedbackOptions({ options, onLeaveFeedback}) {
    return (
        <div>
            {options.map((option, index) => (
                <div key={`option ${index}`}>
                   <button name='good' onClick={() => onLeaveFeedback(option)}>{option}</button>
                </div>
            ))}
        </div>
    )
}



FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}