import React, { PropTypes, Component } from 'react';

import { usersList } from '../resources/users';

// rendered once, when app started, never will be unmount
class AppWrapper extends Component {

    componentWillMount() {
        console.log('AppWrapper mounted!');
        usersList().then(response => console.log(response.data));
    }

    render() {
        const { children } = this.props;

        return (
            <div>
                <header>
                    site header
                </header>
                <main>
                    { children }
                </main>
                <footer>
                    site footer
                </footer>
            </div>
        );
    }
}

AppWrapper.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
};

module.exports = AppWrapper;
