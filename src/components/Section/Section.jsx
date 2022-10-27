import { PropTypes } from 'prop-types';


export default function Section({ title, children }) {
    return (
        <>
         <div>{title}</div>
         <div>{children}</div>
        </>
    )
};

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.any,
}

