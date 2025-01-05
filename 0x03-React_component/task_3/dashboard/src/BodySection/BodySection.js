import React, { Children } from 'react';
import PropTypes from 'prop-types';


export default function BodySection({ title='', Children }) {
    return (
        <div className='bodySection'>
            <h2>{title}</h2>
            {Children}
        </div>
    )
}

BodySection.propTypes = {
    title: PropTypes.string.isRequired,
    Children: PropTypes.node
}