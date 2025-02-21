import React from 'react';
import PropTypes from 'prop-types';
import BodySection from './BodySection';
import { StyleSheet, css } from 'aphrodite';

class BodySectionWithMarginBottom extends React.Component {
    render() {
        return (
            <div className={css(styles.bodySectionWithMargin)}>
                <BodySection {...this.props} />
            </div>
        );
    }
}
    
BodySectionWithMarginBottom.propTypes = {
    title: PropTypes.string.isRequired,
    props: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
}

const styles = StyleSheet.create({
    bodySectionWithMargin: {
        marginBottom: '40px'
    }
});

export default BodySectionWithMarginBottom;