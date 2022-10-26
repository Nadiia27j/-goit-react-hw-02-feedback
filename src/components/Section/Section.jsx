import { PropTypes } from 'prop-types';


export function Section({ title, children }) {
    return (
        <>
         <div>{title}</div>
         <div>{children}</div>
        </>
    )
};

Section.PropTypes = {
    title: PropTypes.string,
    children: PropTypes.any,
}

