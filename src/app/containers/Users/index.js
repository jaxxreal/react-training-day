module.exports = {
    path: 'users',
    getComponent(location, cb) {
        require.ensure([], require => {
            cb(null, require('./Users')); // why? Because we want to load route in async way
        });
    },
};
