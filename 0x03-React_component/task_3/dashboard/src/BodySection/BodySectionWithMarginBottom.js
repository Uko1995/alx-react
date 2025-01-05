import React from 'react';
import PropTypes from 'prop-types';
import '.BodySectionWithMarginBottom.css';
import BodySection from './BodySection';
import BodySection from './BodySection';

export default function BodySectionWithMarginBottom({Children}) {
    return (
        <div className='bodySectionWithMargin'>
            <BodySection {...props} />
        </div>
    )
}

BodySectionWithMarginBottom.propTypes = {
    Children: PropTypes.node
}