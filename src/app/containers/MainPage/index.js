module.exports = {
    // onEnter: checkAuth, // we can do such stuff in that callback
    getComponent(location, cb) {
        require.ensure([], require => {
            cb(null, require('./MainPage')); // why? Because we want to load route in async way
        });
    },
};
