import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Thumbnail } from 'react-bootstrap';

import { getUsers } from '../../actions';

class UsersPage extends Component {

    componentWillMount() {
        this.props.getUsers();
        console.log('UserPage was mounted');
    }

    render() {
        const { users } = this.props;

        return (
            <div>
                <h1>Users route!</h1>
                { users.length ? (
                    <span>users is exists!</span>
                ) : (
                    <span>users is empty!</span>
                ) }
                <Row>
                    {users.map(user => (
                        <Col xs={6} md={4} key={user.id}>
                            <Thumbnail src={user.avatar} alt="100x100">
                                <h3>{`${user.first_name} ${user.last_name}`}</h3>
                                <p>Description</p>
                                <p>
                                    {user.email}
                                </p>
                            </Thumbnail>
                        </Col>
                    ))}
                </Row>
            </div>
        );
    }
}

UsersPage.propTypes = {
    users: PropTypes.array.isRequired,
    getUsers: PropTypes.func.isRequired,
};

module.exports = connect(
    state => ({
        users: state.users.users,
    }),
    dispatch => ({
        getUsers: () => dispatch(getUsers()),
    })
)(UsersPage);
