import React, { useState } from 'react';
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
        padding: '0.5em',
        fontSize: '1.5em'
    },
    rowchecked: {
        backgroundColor: '#e6e4e4'
    }
});



export default function CourseListRow({isHeader, textFirstCell, textSecondCell}) {
    const [isChecked, setIsChecked] = useState(false);
    const handleCheck = () => {
        setIsChecked(!isChecked);
    };

    if (isHeader === true) {
        return (
            <tr className={css(isChecked ? styles.rowchecked : styles.headerStyle)}> 
                {textSecondCell === null ? (
                    <>
                        <th className={css(styles.th)} ><input type='checkbox' onChange={handleCheck} /></th>
                        <th>{textFirstCell}</th>
                    </>
                ) : (
                    <>
                        <th className={css(styles.th)} >{textFirstCell}</th>
                        <th className={css(styles.th)} >{textSecondCell}</th>
                    </>
                )}
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