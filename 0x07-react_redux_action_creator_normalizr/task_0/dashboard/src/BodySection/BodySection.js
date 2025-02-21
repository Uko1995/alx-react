import React, { children } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    bodySectionStyle: {
        fontFamily: 'Georgia, Times New Roman, Times, serif',
        fontSize: '1.7em'
    }
});

export default function BodySection({ title='', children }) {
    return (
        <div className={css(styles.bodySectionStyle)} >
            <h2>{title}</h2>
            {children}
        </div>
    )
}

BodySection.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node
}