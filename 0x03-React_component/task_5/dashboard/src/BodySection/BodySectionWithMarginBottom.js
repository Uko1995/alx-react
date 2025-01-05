import React from 'react';
import PropTypes from 'prop-types';
import './BodySectionWithMarginBottom.css';
import BodySection from './BodySection';

export default function BodySectionWithMarginBottom({...props}) {
    return (
        <div className='bodySectionWithMargin'>
            <BodySection {...props} />
        </div>
    )
}

BodySectionWithMarginBottom.propTypes = {
    props: PropTypes.node
}