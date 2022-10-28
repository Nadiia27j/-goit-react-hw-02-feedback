import { PropTypes } from 'prop-types';
import  { BoxButton } from './FeedbackOptions.styled';



export default function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
        <>
            {options.map((option, index) => (
                <BoxButton key={`option ${index}`}>
                   <button name='good' onClick={() => onLeaveFeedback(option)}>{option}</button>
                </BoxButton>
            ))}
        </>
    )
}



FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}