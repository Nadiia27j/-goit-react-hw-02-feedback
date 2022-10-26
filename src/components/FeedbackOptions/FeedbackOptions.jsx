import { PropTypes } from 'prop-types';


export function FeedbackOptions({ options, onLeaveFeedback}) {
    return (
        <div>
            {options.map((option, index) => (
                <div key={index}>
                   <button onClick={onLeaveFeedback(option)}>{option}</button>
                </div>
            ))}
        </div>
    )
}



FeedbackOptions.PropTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}