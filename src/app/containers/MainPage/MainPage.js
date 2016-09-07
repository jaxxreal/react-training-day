import React from 'react';
import Link from 'react-router/lib/Link';
import Button from 'react-bootstrap/lib/Button';

module.exports = function MainPage() {
    return (
        <div>
            <h1>Crappin beautiful main page!</h1>
            <Link to="/counter">
                <Button bsStyle="link">
                    See counter
                </Button>
            </Link>
            <div className="header">
                {/* just for show webpack ability to load images */}
                <div className="header__img"/>
            </div>
        </div>
    );
};
