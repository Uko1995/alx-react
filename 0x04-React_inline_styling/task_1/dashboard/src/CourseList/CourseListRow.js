import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: '#deb5b545'
    },
    rowStyle: {
        backgroundColor: '#f5f5f5ab'
    },
    th: {
        border: '1px solid lightgray',
        padding: '1em'
    }
});



export default function CourseListRow({isHeader, textFirstCell, textSecondCell}) {
    if (isHeader === true) {
        return (
            <tr className={css(styles.headerStyle)}> 
                {textSecondCell === null ? (<th className={css(styles.th)} colSpan="2">{textFirstCell}</th>) : (
                <>
                    <th className={css(styles.th)} >{textFirstCell}</th>
                    <th className={css(styles.th)} >{textSecondCell}</th>
                </>)}
            </tr>
        );
     } else {
        return (
            <tr className={css(styles.rowStyle)}>
                <>
                    <td className={css(styles.th)}>{textFirstCell}</td>
                    <td className={css(styles.th)}>{textSecondCell}</td>
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