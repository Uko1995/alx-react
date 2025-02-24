import React from 'react';
import PropTypes from 'prop-types';

export default function WithLogging(WrappedComponent) {
    class WithLoggingComponent extends React.Component {

        componentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
        componentDidMount() {
            console.log(`Component ${this.componentName} is mounted`);
        }

        componentWillUnmount() {
            console.log(`Component ${this.componentName} is going to unmounted`);
        }

        render() {
            return <WrappedComponent {...this.props} />;
        }
        
    }

    const WrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
    WithLoggingComponent.displayName = `WithLogging(${WrappedComponentName})`;

    return WithLoggingComponent;
}