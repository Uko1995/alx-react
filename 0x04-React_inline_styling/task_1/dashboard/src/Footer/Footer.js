import React from 'react';
import { getFooterCopy, getFullYear } from '../utils/utils';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    footer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderTop: '2px solid #e01d3f',
        width: '100%',
        justifyContent: 'center',
        position: 'absolute',
    },
    p: {
        fontSize: '2.5em',
        fontStyle: 'italic'
    }
});


export default function Footer() {
    return (
        <>
            <div className={css(styles.footer)}>
                <p className={css(styles.p)}>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
            </div>
        </>
    )
}