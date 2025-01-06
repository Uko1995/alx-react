import React from 'react';
import PropTypes from 'prop-types';

const rowStyle = {
    backgroundColor: '#f5f5f5ab'
};
const headerStyle = {
    backgroundColor: '#deb5b545'
};

export default function CourseListRow({isHeader, textFirstCell, textSecondCell}) {
    if (isHeader === true) {
        return (
            <tr style={headerStyle}> 
                {textSecondCell === null ? (<th colSpan="2">{textFirstCell}</th>) : (
                <>
                    <th>{textFirstCell}</th>
                    <th>{textSecondCell}</th>
                </>)}
            </tr>
        );
     } else {
        return (
            <tr className={rowStyle}>
                <>
                    <td>{textFirstCell}</td>
                    <td>{textSecondCell}</td>
                </>
            </tr>
        );
     }
};

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};